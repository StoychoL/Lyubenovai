# Contact form workflow

`contact-form.workflow.json` is the automation behind the website contact form.

```
Browser → /api/contact (Vercel) → n8n webhook → Google Sheet → Gmail
```

The Vercel function sits in front so the webhook URL and its shared secret stay
server-side, and so the browser request is same-origin (no CORS).

## Setup

1. **Create the Google Sheet.** First row, exactly these headers:
   `timestamp | name | email | company | interest | message | userAgent | referer`
   Give the `LyubenovAi` Google account edit access. Copy the sheet ID from its URL.

2. **Import.** In n8n: *Workflows → Import from File* → this JSON.

3. **Fill in the three blanks:**
   - *Log lead to sheet* — pick the `LyubenovAi` credential, paste the sheet ID
     in place of `PASTE_GOOGLE_SHEET_ID_HERE`, pick the tab.
   - *Email me the lead* — pick the `LyubenovAi` credential.
   - *Contact form webhook* — create a **Header Auth** credential named
     `Contact form secret`, with header name `X-Contact-Secret` and a long random
     value. Generate one with `openssl rand -hex 32`.

4. **Activate the workflow.** An inactive workflow's production webhook returns
   404, which is the most common reason this appears broken.

5. **Set one Vercel env var** (Production *and* Preview):
   - `N8N_WEBHOOK_SECRET` = the same random value as step 3

   Then **redeploy**. Vercel bakes env vars into a build, so saving the variable
   does nothing to the deployment already serving traffic.

   The webhook URL is defaulted in `api/contact.js` and needs no variable. Set
   `N8N_CONTACT_WEBHOOK_URL` only if you want to override it.

## Production vs test URL

| | |
|---|---|
| `/webhook/contact-form` | **Production.** Live whenever the workflow is Active. This is the one the site uses. |
| `/webhook-test/contact-form` | Test only. Answers only while the editor is open with *Listen for test event* armed, and for a single execution. Never point the site at this. |

A `403` from the production URL means active and protected. A `404` means the
workflow is not active.

## Smoke test

```sh
curl -i -X POST https://n8n.srv925030.hstgr.cloud/webhook/contact-form \
  -H 'Content-Type: application/json' \
  -H 'X-Contact-Secret: <the secret>' \
  -d '{"name":"Smoke Test","email":"you@example.com","company":"-","interest":"Workflow Automation","message":"testing","submittedAt":"2026-10-05T12:00:00Z","userAgent":"curl","referer":"-"}'
```

Expect `200`, a new sheet row, and the email. Without the header, expect `403` —
that proves the webhook is not open to anyone who finds the URL.

## Notes

- Sheets runs **before** Gmail on purpose: if the Gmail credential ever expires,
  the lead is still recorded rather than lost.
- The webhook responds immediately, so the visitor isn't kept waiting on Sheets
  and Gmail.
- Spam is filtered in the Vercel function (honeypot + minimum fill time) before
  it ever reaches n8n. Cloudflare Turnstile is the upgrade if volume warrants it.
- To add steps later (auto-reply, CRM, Claude lead triage), extend this workflow
  — the site code does not change.
