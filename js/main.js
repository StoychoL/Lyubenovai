(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof gsap !== "undefined";

  /* ---------- Mobile menu ---------- */
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  const toggle = document.getElementById("menuToggle");

  function setMenu(open) {
    sidebar.classList.toggle("is-open", open);
    scrim.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggle.addEventListener("click", () => setMenu(!sidebar.classList.contains("is-open")));
  scrim.addEventListener("click", () => setMenu(false));
  sidebar.querySelectorAll("a[href^='#']").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const FALLBACK_EMAIL = "hello@stoycholyubenov.com";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form__status";

    if (!form.checkValidity()) {
      status.textContent = window.i18n.t("contact.status.invalid");
      status.classList.add("is-error");
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const usingPlaceholder = form.action.endsWith("/FORM_ID");

    if (usingPlaceholder) {
      const subject = encodeURIComponent(`${window.i18n.t("contact.subject")} — ${data.get("interest")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "-"}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      status.textContent = window.i18n.t("contact.status.mailto");
      return;
    }

    status.textContent = window.i18n.t("contact.status.sending");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      status.textContent = window.i18n.t("contact.status.ok");
      status.classList.add("is-ok");
    } catch {
      status.textContent = window.i18n.t("contact.status.error", { email: FALLBACK_EMAIL });
      status.classList.add("is-error");
    }
  });

  /* ---------- Motion ---------- */
  if (reduced || !hasGsap) {
    document.documentElement.classList.add("no-motion");
    document.querySelectorAll(".stat__num[data-count]").forEach((el) => (el.textContent = el.dataset.count));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Smooth inertia scrolling, driven by the GSAP ticker so ScrollTrigger stays in sync */
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    document.documentElement.style.scrollBehavior = "auto";
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll("a[href^='#']").forEach((a) => {
      const href = a.getAttribute("href");
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        lenis.scrollTo(target);
      });
    });
  }

  /* Split an element's text into line-wrapped masks; returns the inner spans to animate */
  function splitLines(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((w, i) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = w;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });

    const groups = [];
    let current = null;
    el.querySelectorAll(".word").forEach((w) => {
      if (!current || w.offsetTop !== current.top) {
        current = { top: w.offsetTop, words: [] };
        groups.push(current);
      }
      current.words.push(w.textContent);
    });

    el.textContent = "";
    return groups.map((g) => {
      const line = document.createElement("span");
      line.className = "line";
      const inner = document.createElement("span");
      inner.className = "line__inner";
      inner.textContent = g.words.join(" ");
      line.appendChild(inner);
      el.appendChild(line);
      return inner;
    });
  }

  /* Hero: still photo fades in, then the turn-to-camera clip takes over if it can play */
  const media = document.getElementById("heroMedia");
  const video = document.getElementById("heroVideo");

  function showFallback() {
    if (!media.classList.contains("is-playing")) media.classList.add("is-fallback");
  }
  function playHero() {
    video.currentTime = 0;
    const p = video.play();
    if (p) p.then(() => { media.classList.remove("is-fallback"); media.classList.add("is-playing"); }).catch(showFallback);
  }
  if (video.readyState >= 2) playHero();
  else video.addEventListener("loadeddata", playHero, { once: true });
  video.addEventListener("error", showFallback, true);
  setTimeout(showFallback, 2500);
  media.addEventListener("click", () => { if (media.classList.contains("is-playing")) playHero(); });

  /* Line splitting measures wrap points, so it has to wait for the display font */
  document.fonts.ready.then(() => {
    /* Hero name wipes up behind a mask; the rest of the hero staggers in under it */
    const heroLines = [];
    document.querySelectorAll(".hero__line").forEach((el) => heroLines.push(...splitLines(el)));
    gsap.set(".hero__line", { opacity: 1, y: 0 });
    gsap.set(heroLines, { yPercent: 115 });

    gsap
      .timeline({ delay: 0.1 })
      .to(heroLines, { yPercent: 0, duration: 1.15, stagger: 0.1, ease: "power4.out" }, 0)
      .to("[data-hero]:not(.hero__line)", { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" }, 0.15);

    /* Section headings wipe up line by line as they enter */
    document.querySelectorAll(".section__title, .why__cta h2").forEach((title) => {
      const lines = splitLines(title);
      gsap.set(lines, { yPercent: 115 });
      ScrollTrigger.create({
        trigger: title,
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(lines, { yPercent: 0, duration: 1.1, stagger: 0.08, ease: "power4.out" }),
      });
    });

    ScrollTrigger.refresh();
  });

  /* A language switch replaces the text of every split heading, so the masks
     have to be rebuilt. Headings already on screen simply appear; the ones
     further down keep their wipe-in for when they're scrolled to. */
  document.addEventListener("i18n:applied", (e) => {
    /* Google serves Oswald as per-subset faces, so the Cyrillic sample matters —
       without it the split would measure wrap points against a fallback face. */
    const font =
      e.detail.lang === "bg"
        ? document.fonts.load('400 1em "Oswald"', "Стойчо").catch(() => {})
        : Promise.resolve();

    font.then(() => document.fonts.ready).then(() => {
      const heroLines = [];
      document.querySelectorAll(".hero__line").forEach((el) => heroLines.push(...splitLines(el)));
      gsap.set(".hero__line", { opacity: 1, y: 0 });
      gsap.set(heroLines, { yPercent: 0 });

      document.querySelectorAll(".section__title, .why__cta h2").forEach((title) => {
        const lines = splitLines(title);
        if (title.getBoundingClientRect().top < window.innerHeight * 0.88) {
          gsap.set(lines, { yPercent: 0 });
          return;
        }
        gsap.set(lines, { yPercent: 115 });
        ScrollTrigger.create({
          trigger: title,
          start: "top 88%",
          once: true,
          onEnter: () => gsap.to(lines, { yPercent: 0, duration: 1.1, stagger: 0.08, ease: "power4.out" }),
        });
      });

      ScrollTrigger.refresh();
    });
  });

  /* Section labels slide in from the left */
  gsap.utils.toArray(".section__label").forEach((label) => {
    gsap.from(label, {
      opacity: 0,
      x: -12,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: label, start: "top 90%", once: true },
    });
  });

  /* Dividers draw themselves left to right */
  document.querySelectorAll(".section, .timeline__item").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => el.classList.add("is-drawn"),
    });
  });

  /* Section reveals */
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: { each: 0.08, from: "start" },
        ease: "power4.out",
      }),
  });

  /* Toolkit accordion — one group open at a time, animated height */
  const groups = gsap.utils.toArray(".group");

  function closeGroup(group) {
    const body = group.querySelector(".group__body");
    gsap.to(body, {
      height: 0,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        group.open = false;
        gsap.set(body, { clearProps: "height" });
        ScrollTrigger.refresh();
      },
    });
  }

  function openGroup(group) {
    groups.forEach((g) => { if (g !== group && g.open) closeGroup(g); });
    const body = group.querySelector(".group__body");
    group.open = true;
    gsap.fromTo(
      body,
      { height: 0 },
      {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => { gsap.set(body, { clearProps: "height" }); ScrollTrigger.refresh(); },
      }
    );
    gsap.fromTo(
      body.querySelectorAll("li"),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.025, ease: "power3.out", delay: 0.1 }
    );
  }

  groups.forEach((group) => {
    group.querySelector("summary").addEventListener("click", (e) => {
      e.preventDefault();
      group.open ? closeGroup(group) : openGroup(group);
    });
  });

  /* Counters */
  document.querySelectorAll(".stat__num[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(obj.v)),
        }),
    });
  });

  /* Active nav link */
  const links = document.querySelectorAll("[data-nav]");
  document.querySelectorAll("main section[id]").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 45%",
      end: "bottom 45%",
      onToggle: (self) => {
        if (!self.isActive) return;
        links.forEach((l) => l.classList.toggle("is-active", l.dataset.nav === section.id));
      },
    });
  });
})();
