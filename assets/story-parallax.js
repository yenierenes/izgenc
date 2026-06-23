/* İzgenç Yapı — Anasayfa "İzgenç'in Yolculuğu" bölümü
   Parallax scroll: sol görsel ile sağ metin farklı hızda/yönde kayar.
   GSAP/ScrollTrigger yoksa ya da reduced-motion'da hiçbir şey yapmaz (statik kalır). */
(function () {
  var section = document.querySelector(".story");
  if (!section) return;

  var img = section.querySelector(".story-media img");
  var text = section.querySelector(".story-text");
  if (!img || !text) return;

  if (typeof window.gsap === "undefined" || !window.ScrollTrigger) return;

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  var mm = gsap.matchMedia();

  /* Masaüstü/tablet: sağ taraf sabit kalır, sadece sol görsel kayar (parallax illüzyonu).
     Sayfa aşağı kaydıkça sol görsel çerçevesi içinde aşağı doğru süzülür;
     sağ metin hiç hareket etmediği için kullanıcı "sağ sabit, sol kayıyor" hissi alır. */
  mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", function () {
    var tween = gsap.fromTo(
      img,
      { yPercent: -12 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      }
    );

    return function () {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      gsap.set(img, { clearProps: "transform" });
    };
  });
})();
