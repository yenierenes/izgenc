# Mobil Bakım Log — İzgenç

Test viewport: **390×844** (ayrıca 360 kontrol). Her sayfa düzeltildikçe buraya not düşülür.

Durum: ✅ TAMAMLANDI — 14 sayfa gezildi, 390px regresyon taraması ALL_CLEAN

## Sayfa kontrol listesi
- [ ] index (anasayfa)
- [ ] hakkimizda
- [ ] hizmetler
- [ ] hizmetler-kat-karsiligi
- [ ] hizmetler-kentsel-donusum
- [ ] hizmetler-mimari
- [ ] projeler
- [ ] grand-corner
- [ ] haberler
- [ ] kariyer
- [ ] iletisim
- [ ] hukuki
- [ ] tesekkurler
- [ ] 404

---

## Genel bulgu
- Ölçüm denetimi (412px iframe): **hiçbir sayfada yatay scroll / taşma yok**. Yapı sağlam.
- Önizleme screenshot'ı HERO bölümlerinde yanlış ölçek veriyor (slider absolute) ama içerik bölümlerinde doğru — denetim hem ölçüm hem içerik-screenshot ile yapılıyor.

## Düzeltme notları

### ✅ hakkimizda
- **BUG (gerçek):** Değerler kartlarında (`.values-compact`) mobilde sağ-alttaki line-art ikon, son metin satırının ÜSTÜNE biniyordu (kalkan/elmas/yaprak/tik metinle çakışıyordu).
- **Fix:** `@media (max-width:600px)` → `.val__icon { position: static; margin-top:16px; 50px }` — ikon artık metnin altına akıyor, örtüşme yok. (styles.css)
- Kalan: kuruluş hikayesi, zaman çizelgesi (mobil reveal), misyon/vizyon, ofis → ölçümde temiz.

### ✅ index (anasayfa)
- Ölçüm temiz (hero/ticker/featured/stats/hizmet kartları 0..412, taşma yok).

### ✅ iletisim
- **BUG:** İletişim kartlarında (`.contact-cards`) 2-col mobilde telefon "+90 535 976 20 22" dar karta sığmayıp 4 satıra bölünüyordu.
- **Fix:** `@media (max-width:560px)` → kartlar tek kolon, `.ccard-v` 20px → telefon tek satır. Form/harita zaten temizdi. (iletisim.html)

### ✅ hizmetler
- **BUG:** "Cam Sanayi Avantajı" bölümündeki `.hq-stamp` (220px, z-index:2 "High Quality" damgası) mobilde başlığın üstüne biniyordu.
- **Fix:** `@media (max-width:768px){ .hq-stamp{display:none} }` (styles.css). Karar/lead alanı (koyu) + atlas satırları mobilde temizdi.

### ✅ index (anasayfa) — quick-action kartlar
- `.path__mark` çizimleri (sheets/elmas/telefon) mobilde sağ-altta, CTA solda → görsel örtüşme yok. Temiz.

### Küçük punto nitleri (toplu)
- grand-corner `.stage .st-state` 10px, hukuki `.toc .ts` 9px → büyütülecek.

### ✅ grand-corner
- Şantiye durumu rayı (.stage-track) 1-col, özet/galeri/feature 1-col, meta-band 1-col — temiz.
- **Nit fix:** `.stage .st-state` 10px → 11px.

### ✅ hukuki
- İçindekiler (TOC) + belgeler 1-col, aktif madde işaretli — temiz.
- **Nit fix:** `.toc .ts` (TASLAK etiketi) 9px → 10.5px.

### ✅ projeler / haberler / kariyer / iletisim(form) / hizmet-detay(3) / tesekkurler / 404
- Tüm grid'ler mobilde doğru tek/iki kolona düşüyor; geo harita & hero-vinyet mobilde gizli; formlar tek kolon; damga/buton/çizimler örtüşmüyor — temiz.

### ✅ MOBİL MENÜ (kritik bug → tam ekran yeniden tasarım)
- **BUG:** Hamburger butonu (`.menu-toggle`) vardı ama **tıklama JS'i ve açık-durum CSS'i yoktu** → ≤768px'te `.nav{display:none}` kalıyor, menü hiç açılmıyordu.
- **İlk çözüm:** header altında açılır dropdown panel (geçici).
- **NİHAİ TASARIM (kullanıcı isteği):** "tam sayfa bizim tasarım dilinde bir mobil menü… en altına eski logoyu koy transparan" → **tam ekran pafta/editorial menü**:
  - `.mm-top`: köşe-tik "MENÜ · İZGENÇ YAPI" mono kicker + yuvarlak kapat butonu.
  - `.mm-nav`: numaralı 01–07 editorial liste (gold mono index, büyük lacivert/ink etiket 28px, gold ok); aktif madde Albra italik lacivert. Maddeler kademeli (stagger) animasyonla girer.
  - `.mm-foot`: "Teklif Al" butonu + mono telefon; altta ortalanmış **şeffaf İZGENÇ logosu** (`assets/logo-transparent.png`, opacity .45).
  - Köşe pafta tikleri (sol-üst lacivert, sağ-alt gold).
- **Kritik fix (containing-block bug):** `.site-header`'da `backdrop-filter` var → içine konan `position:fixed` menüyü header'a hapsediyordu (390×76'da kalıyordu). Çözüm: menü markup'ı **header DIŞINA** (body child) taşındı; `nav-open` sınıfı `document.body`'ye toggle ediliyor; CSS `body.nav-open .mobile-menu`.
- **page.js:** menü `</header>` dışında render; `.menu-toggle` click → `body.nav-open` + `aria-expanded` + `documentElement.overflow=hidden` (scroll kilidi); kapat butonu / link tık / Escape ile kapanır.
- Test (390×844): aç → 390×844 tam ekran (body child, fixed) ✓, 7 madde ✓, logo altta yüklü ✓, scroll kilidi ✓; kapat → display:none + kilit açık + aria-hidden ✓; masaüstünde gizli (sadece ≤768) ✓; tüm sayfalarda çalışır (paylaşımlı page.js).

---
## SONUÇ
- 390px iframe regresyon taraması: **ALL_CLEAN** (hiçbir sayfada yatay scroll / taşma yok).
- Düzeltilen gerçek mobil bug'lar: (1) değerler ikon örtüşmesi, (2) iletişim telefon satır kırılması, (3) hizmetler hq-stamp örtüşmesi, (4-5) iki küçük punto.
- ✅ `release/` paketi **yeniden build edildi** (2026-06-16): mobil bakım + tam ekran mobil menü + şeffaf logo dahil. Tekrar üretilebilir script: `release/build.mjs` (`node release/build.mjs`), ardından ileri-bölü ZIP. `izgenc-deploy.zip` güncel.
