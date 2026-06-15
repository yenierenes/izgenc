/* İzgenç Yapı — "Planlı Süreç, Katman Katman Değer"
   Scroll kontrollü mimari inşa deneyimi (GSAP + ScrollTrigger).
   Section yoksa / GSAP yoksa / reduced-motion'da güvenli fallback. */
(function () {
  const section = document.querySelector(".process-build");
  if (!section) return;

  const steps = Array.from(section.querySelectorAll(".process-build__step"));
  const progressFill = section.querySelector("[data-progress-fill]");
  const cta = section.querySelector(".process-build__cta");
  const panel = section.querySelector(".process-build__panel");
  const numEl = section.querySelector("[data-active-num]");
  const titleEl = section.querySelector("[data-active-title]");
  const textEl = section.querySelector("[data-active-text]");
  const N = steps.length || 1;

  // Aktif step içerikleri (rail'den okunur — fallback'te de DOM'da mevcut)
  const data = steps.map((s) => ({
    title: (s.querySelector(".process-build__step-title") || {}).textContent || "",
    text: (s.querySelector(".process-build__step-copy") || {}).textContent || "",
  }));

  let lastIdx = -1;
  const pad = (n) => String(n).padStart(2, "0");

  function setActive(idx) {
    idx = Math.max(0, Math.min(N - 1, idx));
    if (idx === lastIdx) return;
    lastIdx = idx;
    steps.forEach((s, i) => {
      s.classList.toggle("is-active", i === idx);
      s.classList.toggle("is-done", i < idx);
    });
    if (numEl) numEl.textContent = pad(idx + 1);
    if (titleEl) titleEl.textContent = data[idx].title.trim();
    if (textEl) textEl.textContent = data[idx].text.trim();
  }

  function makeStatic() {
    section.classList.add("is-static");
    setActive(N - 1);
    section.style.setProperty("--pb-progress", "1");
    if (cta) cta.classList.add("is-revealed");
  }

  // GSAP yoksa: statik final görünüm, içerik tam okunur
  if (typeof window.gsap === "undefined") {
    makeStatic();
    return;
  }

  const gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  // SVG katmanları
  const L = {
    ground: section.querySelector(".process-build__layer--ground"),
    grid: Array.from(section.querySelectorAll(".pb-grid")),
    draw: Array.from(section.querySelectorAll(".process-build__layer--blueprint .pb-draw:not(.pb-dim)")),
    dim: Array.from(section.querySelectorAll(".pb-dim")),
    foundation: Array.from(section.querySelectorAll(".process-build__layer--foundation polygon")),
    faces: Array.from(section.querySelectorAll(".pb-face")),
    cols: Array.from(section.querySelectorAll(".pb-col")),
    floors: Array.from(section.querySelectorAll(".pb-floor")),
    wins: Array.from(section.querySelectorAll(".pb-win")),
    hls: Array.from(section.querySelectorAll(".pb-hl")),
  };

  function prepDraw(els) {
    els.forEach((el) => {
      let len = 0;
      try { len = el.getTotalLength(); } catch (e) { len = 0; }
      if (!len) return;
      gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
    });
  }

  const mm = gsap.matchMedia();

  /* ---------- DESKTOP: pinned + scrub timeline ---------- */
  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
    if (!window.ScrollTrigger) { makeStatic(); return; }
    lastIdx = -1;
    section.classList.remove("is-static");
    section.classList.add("is-enhanced");
    setActive(0);

    // başlangıç (gizli) durumları
    gsap.set(L.ground, { opacity: 0, y: 26 });
    gsap.set(L.grid, { opacity: 0 });
    gsap.set(L.dim, { opacity: 0 });
    gsap.set(L.foundation, { opacity: 0, y: 18 });
    gsap.set(L.faces, { opacity: 0, y: 36 });
    gsap.set(L.wins, { opacity: 0, scale: 0.55 });
    prepDraw(L.draw); prepDraw(L.cols); prepDraw(L.floors); prepDraw(L.hls);

    const inner = section.querySelector(".process-build__inner");
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + Math.round(window.innerHeight * 2.2),
        pin: inner,
        pinSpacing: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          section.style.setProperty("--pb-progress", p.toFixed(3));
          let idx = 0;
          if (p >= 0.82) idx = 4;
          else if (p >= 0.62) idx = 3;
          else if (p >= 0.42) idx = 2;
          else if (p >= 0.20) idx = 1;
          setActive(idx);
          const atEnd = p > 0.86;
          if (cta) cta.classList.toggle("is-revealed", atEnd);
          if (panel) panel.classList.toggle("is-hidden", atEnd);
        },
      },
    });

    tl.to(L.ground, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.0)
      .to(L.grid, { opacity: 1, duration: 0.6, stagger: 0.03 }, 0.25)
      .to(L.draw, { strokeDashoffset: 0, duration: 1.1, stagger: 0.06 }, 0.4)
      .to(L.dim, { opacity: 1, duration: 0.6 }, 0.7)
      .to(L.foundation, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: "power2.out" }, 1.35)
      .to(L.cols, { strokeDashoffset: 0, duration: 0.85, stagger: 0.05 }, 1.7)
      .to(L.floors, { strokeDashoffset: 0, duration: 0.85, stagger: 0.04 }, 2.25)
      .to(L.faces, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: "power2.out" }, 2.5)
      .to(L.wins, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.012, ease: "power2.out" }, 3.15)
      .to(L.hls, { strokeDashoffset: 0, duration: 0.7, stagger: 0.08 }, 3.6);

    return () => {
      section.classList.remove("is-enhanced");
      lastIdx = -1;
    };
  });

  /* ---------- MOBİL / TABLET: hafif reveal ---------- */
  mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
    lastIdx = -1;
    section.classList.remove("is-enhanced", "is-static");
    setActive(N - 1);
    section.style.setProperty("--pb-progress", "1");
    if (cta) cta.classList.add("is-revealed");

    if (!window.ScrollTrigger) return;
    const stage = section.querySelector(".process-build__stage");
    const tweens = [];
    tweens.push(gsap.from(stage, {
      opacity: 0, y: 26, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: stage, start: "top 85%" },
    }));
    steps.forEach((s) => {
      tweens.push(gsap.from(s, {
        opacity: 0, y: 18, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: s, start: "top 90%" },
      }));
    });
    return () => {
      tweens.forEach((t) => { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
      gsap.set([stage].concat(steps), { clearProps: "opacity,transform" });
    };
  });

  /* ---------- Reduced motion: tamamen statik ---------- */
  mm.add("(prefers-reduced-motion: reduce)", () => {
    makeStatic();
    return () => { section.classList.remove("is-static"); lastIdx = -1; };
  });

  // Geç yüklenen görsel/font sonrası ölçümleri tazele
  window.addEventListener("load", () => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
})();
