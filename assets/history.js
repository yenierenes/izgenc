/* İzgenç Yapı — "Kurumsal Hafıza" tarih deneyimi (Hakkımızda)
   GSAP + ScrollTrigger ile scroll-kontrollü. Yoksa / reduced-motion'da statik okunur. */
(function () {
  var section = document.querySelector(".history-experience");
  if (!section) return;

  var milestones = Array.prototype.slice.call(section.querySelectorAll(".history-experience__milestone"));
  var layers = Array.prototype.slice.call(section.querySelectorAll(".history-experience__layer"));
  var N = milestones.length || 1;

  var railFill = section.querySelector("[data-rail-fill]");
  var progFill = section.querySelector("[data-progress-fill]");
  var progStep = section.querySelector("[data-progress-step]");
  var yearEl = section.querySelector("[data-active-year]");
  var panel = section.querySelector(".history-experience__panel");
  var tagEl = section.querySelector("[data-active-tag]");
  var titleEl = section.querySelector("[data-active-title]");
  var textEl = section.querySelector("[data-active-text]");
  var metricEl = section.querySelector("[data-metric]");
  var bg = section.querySelector(".history-experience__bg");

  var data = milestones.map(function (m) {
    return {
      year: m.getAttribute("data-year") || "",
      theme: m.getAttribute("data-theme") || "",
      tag: m.getAttribute("data-tag") || "",
      title: (m.querySelector(".history-experience__mile-title") || {}).textContent || "",
      text: (m.querySelector(".history-experience__mile-text") || {}).textContent || "",
    };
  });

  var last = -1;

  function setActive(idx) {
    idx = Math.max(0, Math.min(N - 1, idx));
    if (idx === last) return;
    last = idx;
    var d = data[idx];
    section.setAttribute("data-active-index", String(idx));
    milestones.forEach(function (m, i) {
      m.classList.toggle("is-active", i === idx);
      m.classList.toggle("is-done", i < idx);
    });
    layers.forEach(function (l, i) { l.classList.toggle("is-active", i === idx); });

    if (yearEl) yearEl.textContent = d.year;
    if (tagEl) tagEl.textContent = d.year + " — " + d.tag;
    if (titleEl) titleEl.textContent = d.title.trim();
    if (textEl) textEl.textContent = d.text.trim();
    if (metricEl) metricEl.hidden = d.theme !== "today";
    if (progStep) progStep.textContent = String(idx + 1);
    if (railFill) railFill.style.height = ((idx / (N - 1)) * 100).toFixed(2) + "%";
    if (progFill) progFill.style.width = ((idx / (N - 1)) * 100).toFixed(2) + "%";

    // değişim animasyonunu yeniden tetikle
    if (panel) { panel.classList.remove("is-anim"); void panel.offsetWidth; panel.classList.add("is-anim"); }
    if (yearEl) { var y = section.querySelector(".history-experience__year"); if (y) { y.classList.remove("is-anim"); void y.offsetWidth; y.classList.add("is-anim"); } }
  }

  function makeStatic() {
    section.classList.add("is-static");
    var today = layers.filter(function (l) { return l.getAttribute("data-theme") === "today"; })[0];
    if (today) today.classList.add("is-active");
    // tüm milestone içerikleri zaten DOM'da görünür (base layout)
    setActive(0);
  }

  if (typeof window.gsap === "undefined") { makeStatic(); return; }

  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  var mm = gsap.matchMedia();

  /* ---------- DESKTOP: tam ekran kilit + adım adım (touchpad-proof) ----------
     Bölüm tam tepeye gelince sayfa overflow:hidden ile dondurulur (momentum'un
     kayacak yeri kalmaz → atlama/takılma yok). Adımlar scroll'u oynatmadan,
     sadece state ile yönetilir. Uçta taze hareketle bölümden çıkılır. */
  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", function () {
    if (!window.ScrollTrigger) { makeStatic(); return; }
    last = -1;
    section.classList.remove("is-static");
    section.classList.add("is-enhanced");

    var html = document.documentElement;
    var idx = 0;
    var engaged = false;
    var scrollings = [];    // son wheel |delta| değerleri (hızlanma tespiti)
    var prevTime = 0;       // son wheel zamanı
    var canScroll = true;   // dinamik kilit (flick hızlanırken kapalı)
    var decelCount = 0;     // ardışık yavaşlama sayacı
    var lastStep = -1000;   // son adım zamanı (taban hız sınırı)
    var keyArmed = false;   // klavye: kilitten önce basılı tutulan tuşun tekrarını yutma
    var dedupe = 0;         // touch/klavye çift tetik önleme
    /* Jest kapısı: kilitte ve HER adımdan sonra kurulur. Aktif jestin kuyruğunu
       yutar; kuyruk tepe şiddetinin yarısına SÖNDÜKTEN sonra, tabanın 2.5 katına
       sıçrayan delta "taze itiş" sayılır ve beklemeden adım atar. */
    var entryGate = false;
    var emaMag = 0;         // |delta| yumuşatılmış ortalaması (şiddet takibi)
    var gateFloor = 0;      // kapı açıkken görülen en düşük şiddet (taban)
    var gatePeak = 0;       // kapı açıkken görülen en yüksek şiddet (tepe)
    var tailDecayed = false;// kuyruk tepe/2 altına söndü mü (aynı jestin devamına kilit)
    function armGate() {
      entryGate = true; gateFloor = emaMag; gatePeak = emaMag; tailDecayed = false;
    }
    var cooldown = false;   // çıkıştan hemen sonra tekrar kilitlenmeyi önle
    var sbw = 0;

    function show(i) {
      i = Math.max(0, Math.min(N - 1, i));
      idx = i;
      setActive(i);
      if (bg) bg.style.transform = "translateX(" + ((0.5 - i / (N - 1)) * 44).toFixed(1) + "px)";
    }
    show(0);

    function now() { return (window.performance && performance.now) ? performance.now() : Date.now(); }

    function lockPage() {
      if (engaged) return;
      var y = section.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
      window.scrollTo(0, Math.round(y));                 // bölümü tam tepeye hizala
      sbw = window.innerWidth - html.clientWidth;
      html.style.overflow = "hidden";                    // sayfayı dondur
      if (sbw > 0) html.style.paddingRight = sbw + "px"; // scrollbar boşluğu telafi
      engaged = true;
      /* Giriş: akmakta olan jestin kuyruğu kapıyla yutulur; sessizlik BEKLENMEZ. */
      keyArmed = false; canScroll = false; decelCount = 0; lastStep = now() - 1000;
      armGate();
    }
    function unlockPage() {
      html.style.overflow = "";
      html.style.paddingRight = "";
      engaged = false;
      cooldown = true;
      setTimeout(function () { cooldown = false; }, 480);
    }

    // tripwire (pin yok): AŞAĞI inerken bölüm tepeye gelince kilitle
    var tw = window.ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      invalidateOnRefresh: true,
      onEnter: function () { if (!cooldown && !engaged) { lockPage(); show(0); } },
    });
    /* YUKARI çıkarken: bölümün alt ucu görünür görünmez değil, bölüm ekranı
       tamamen kapladığında (alt kenar viewport altına oturduğunda) kilitle.
       Böylece alttaki bölümler (Misyon/Vizyon) atlanmadan görülebilir. */
    var twUp = window.ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",
      end: "+=1",
      invalidateOnRefresh: true,
      onEnterBack: function () { if (!cooldown && !engaged) { lockPage(); show(N - 1); } },
    });

    function leave(dir) {
      unlockPage();
      window.scrollTo(0, (window.scrollY || window.pageYOffset || 0) + (dir > 0 ? 6 : -6));
    }
    function doStep(dir) {
      var atEdge = (idx === 0 && dir < 0) || (idx === N - 1 && dir > 0);
      if (atEdge) { leave(dir); return; }
      show(idx + dir);
    }

    function getAverage(arr, n) {
      var sum = 0, last = arr.slice(Math.max(arr.length - n, 1));
      for (var i = 0; i < last.length; i++) sum += last[i];
      return Math.ceil(sum / n);
    }
    /* fullPage.js touchpad yöntemi: son darbelerin ortalaması (averageEnd) daha geniş
       pencereden (averageMiddle) büyükse "hızlanıyor" = yeni itiş → bir adım. Yavaşlayan
       momentum (averageEnd < averageMiddle) yok sayılır. Kısa kilit ile tek itişin
       hızlanma fazı çift adım atmaz; momentum filtrelendiği için beklemeye gerek kalmaz. */
    function onWheel(e) {
      var t = now();
      var value = -e.deltaY;                                  // wheelDelta benzeri (yukarı +)
      var av = Math.abs(value);
      var emaPrev = emaMag;

      /* Şiddet takibi HER ZAMAN çalışır (kilit dışında da) → kilit anında
         giriş jestinin kuyruk şiddeti bilinir. */
      if (scrollings.length > 149) scrollings.shift();
      scrollings.push(av);
      emaMag = emaPrev ? (emaPrev * 0.75 + av * 0.25) : av;
      if (prevTime && (t - prevTime) > 200) {                // boşluk → yeni hareket (ayrı flick)
        scrollings = []; decelCount = 0; canScroll = true;
        entryGate = false; emaMag = av;                      // sessizlik: kapı kapanır, normal akış
      }
      prevTime = t;
      if (!engaged) return;                                  // kilit yokken yalnızca kayıt
      e.preventDefault();

      /* Jest kapısı: aktif jestin kuyruğunu yut. Önce kuyruk tepe/2 altına sönmeli
         (aynı jestin yükselen/erken sönen fazı adım atamaz); söndükten sonra
         tabanın 2.5 katına sıçrayan delta = taze itiş → anında adım + kapı yeniden. */
      if (entryGate) {
        if (emaPrev > gatePeak) gatePeak = emaPrev;
        gateFloor = gateFloor ? Math.min(gateFloor, emaPrev || gateFloor) : (emaPrev || av);
        if (!tailDecayed && emaPrev <= gatePeak * 0.5) tailDecayed = true;
        if (tailDecayed && value !== 0 && av >= Math.max(30, gateFloor * 2.5)) {
          canScroll = false; decelCount = 0; lastStep = t;
          doStep(value < 0 ? 1 : -1);
          armGate();                                       // sıradaki jest için kapı yeniden
        }
        return;
      }

      var averageEnd = getAverage(scrollings, 10);
      var averageMiddle = getAverage(scrollings, 70);
      if (averageEnd >= averageMiddle) {                     // HIZLANIYOR = aktif itiş
        decelCount = 0;
        if (canScroll && value !== 0) {                      // kilit açıksa: bir adım, sonra kilitle
          canScroll = false; lastStep = t;
          doStep(value < 0 ? 1 : -1);                        // value<0 (deltaY>0) = aşağı
          armGate();                                         // bu jestin kuyruğu da kapıda yutulsun
        }
      } else {                                               // YAVAŞLIYOR = momentum/bitiş
        decelCount++;
        if (decelCount >= 2 && (t - lastStep) > 250) canScroll = true;  // itiş bitti → sonraki hazır
      }
    }

    var ts = 0, tArmed = false;
    function onTouchStart(e) { if (engaged) { ts = e.touches[0].clientY; tArmed = true; } }
    function onTouchMove(e) {
      if (!engaged) return;
      e.preventDefault();
      if (!tArmed) return;
      var dy = ts - e.touches[0].clientY;
      if (Math.abs(dy) < 30) return;
      tArmed = false;                                      // bir dokunuş hareketi = bir adım
      doStep(dy > 0 ? 1 : -1);
    }
    function onKey(e) {
      if (!engaged) return;
      var dir = (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") ? 1
              : (e.key === "ArrowUp" || e.key === "PageUp") ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      if (e.repeat && !keyArmed) return;                   // kilitten önce basılı tutulan tuş: tekrarını yut
      keyArmed = true;                                     // taze basış = bilinçli adım
      var t = now();
      if (t >= dedupe) { dedupe = t + 60; doStep(dir); }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);

    return function () {
      tw.kill();
      twUp.kill();
      html.style.overflow = ""; html.style.paddingRight = "";
      engaged = false;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      section.classList.remove("is-enhanced");
      last = -1;
    };
  });

  /* ---------- MOBILE / TABLET: reveal, pin yok ---------- */
  mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", function () {
    last = -1;
    section.classList.remove("is-enhanced", "is-static");
    setActive(0);

    if (!window.ScrollTrigger) return;
    milestones.forEach(function (m, i) {
      window.ScrollTrigger.create({
        trigger: m,
        start: "top 72%",
        onEnter: function () { setActive(i); },
        onEnterBack: function () { setActive(i); },
      });
      gsap.from(m, {
        opacity: 0, y: 22, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: m, start: "top 86%" },
      });
    });

    return function () { last = -1; };
  });

  /* ---------- reduced motion ---------- */
  mm.add("(prefers-reduced-motion: reduce)", function () {
    makeStatic();
    return function () { section.classList.remove("is-static"); last = -1; };
  });

  window.addEventListener("load", function () {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
})();
