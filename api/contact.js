/* Contact form endpoint.

   The browser posts here (same origin, so no CORS) and this forwards to the
   n8n webhook, which does the email and the sheet row. The webhook URL and its
   shared secret live in Vercel env vars and never reach the client. */

const DEFAULT_WEBHOOK = "https://n8n.srv925030.hstgr.cloud/webhook/contact-form";
const LIMITS = { name: 200, email: 200, company: 200, interest: 200, message: 5000 };
const MIN_FILL_MS = 3000;
const FORWARD_TIMEOUT_MS = 8000;

function str(value) {
  return typeof value === "string" ? value.trim() : "";
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  if (!body || typeof body !== "object") body = {};

  /* Bots: a filled honeypot, or a form completed faster than a human could.
     Answer 200 so they log a success and move on rather than retrying with a
     different payload shape. */
  const elapsed = Number(body.elapsed);
  if (str(body.website) || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  const fields = {
    name: str(body.name),
    email: str(body.email),
    company: str(body.company),
    interest: str(body.interest),
    message: str(body.message),
  };

  const overLimit = Object.keys(LIMITS).some((key) => fields[key].length > LIMITS[key]);
  const complete = fields.name && fields.message && /.+@.+\..+/.test(fields.email);
  if (!complete || overLimit) {
    return res.status(400).json({ error: "invalid_submission" });
  }

  /* The production webhook path, not /webhook-test/ — the test URL only answers
     while the n8n editor is listening, and then for a single execution. The URL
     is not sensitive (the Header Auth secret is what protects the endpoint), so
     it is defaulted here and the secret is the only variable that must be set. */
  const webhook = process.env.N8N_CONTACT_WEBHOOK_URL || DEFAULT_WEBHOOK;
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (!secret) {
    console.error("contact: N8N_WEBHOOK_SECRET is unset — set it in Vercel and redeploy");
    return res.status(502).json({ error: "not_configured" });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Contact-Secret": secret },
      body: JSON.stringify({
        ...fields,
        submittedAt: new Date().toISOString(),
        userAgent: req.headers["user-agent"] || "",
        referer: req.headers.referer || "",
      }),
      signal: controller.signal,
    });
    if (!upstream.ok) throw new Error(`n8n responded ${upstream.status}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    /* Logged server-side only. The client gets a generic failure and shows the
       "email me directly" fallback, so the lead is never silently dropped. */
    console.error("contact: forward to n8n failed —", err.message);
    return res.status(502).json({ error: "delivery_failed" });
  } finally {
    clearTimeout(timer);
  }
};
