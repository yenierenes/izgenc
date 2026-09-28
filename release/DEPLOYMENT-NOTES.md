# İZGENÇ YAPI — Yayın (Deploy) Notları

> Son build: **2026-06-16** — mobil bakım + tam ekran mobil menü + şeffaf logo dahil.
> Yeniden üretmek için (proje kökünden): `node release/build.mjs` → sonra `release/build.mjs` çıktısını ileri-bölü ZIP olarak paketle. Üretilen dosya: `release/izgenc-deploy.zip`.

Bu paket **statik bir web sitesidir** (HTML + CSS + JS). Sunucu tarafı kod, veritabanı veya build adımı gerektirmez.

---

## Paket içeriği

| Öğe | Yol |
|---|---|
| Yayın klasörü | `release/izgenc-deploy/` |
| Yüklenecek ZIP | `release/izgenc-deploy.zip` |
| Ana giriş dosyası | `index.html` (kaynaktaki `pages/anasayfa.html`'in dönüştürülmüş hâli) |
| Hosting türü | Linux / cPanel (Apache veya LiteSpeed) |

ZIP açıldığında **en üst seviyede** doğrudan şunlar bulunur (fazladan iç içe klasör yok):

```
index.html
hakkimizda.html
hizmetler.html
hizmetler-kat-karsiligi.html
hizmetler-kentsel-donusum.html
hizmetler-mimari.html
projeler.html
grand-corner.html
haberler.html
kariyer.html
iletisim.html
hukuki.html
tesekkurler.html
404.html
robots.txt
.htaccess
assets/        (css, js, fonts, img, logo)
```

---

## cPanel'e yükleme adımları

1. cPanel'e gir.
2. Subdomain'in **document root** klasörünü File Manager'da aç.
3. Mevcut dosyaların **yedeğini al** (varsa hepsini bir `_backup` klasörüne taşı).
4. `izgenc-deploy.zip` dosyasını document root'a **yükle**.
5. ZIP'e sağ tıkla → **Extract** (document root içine çıkar).
6. `index.html` dosyasının **doğrudan root'ta** olduğunu doğrula (içeride `izgenc-deploy/` adında ekstra klasör OLMAMALI).
7. Çıkarma bittikten sonra **`izgenc-deploy.zip` dosyasını sunucudan sil**.
8. File Manager ayarlarında **"Show Hidden Files (dotfiles)"** açık olsun → `.htaccess` dosyasının root'ta göründüğünü doğrula.

> `.htaccess` görünmüyorsa: File Manager > Settings > "Show Hidden Files (dotfiles)" işaretle.

---

## SSL / HTTPS

- cPanel > **SSL/TLS Status** (AutoSSL) ile subdomain için sertifikanın **Active** olduğunu kontrol et.
- `.htaccess` içinde HTTP→HTTPS yönlendirmesi vardır; sertifika aktif olmadan zorlama yönlendirme sorun çıkarabilir, **önce SSL'i doğrula**.

---

## Erişim koruması (staging / müşteri önizlemesi)

Bu sürüm arama motorlarına kapalıdır:
- Her sayfada `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`
- `robots.txt` → `Disallow: /`

**ÖNEMLİ:** Bunlar gerçek erişim koruması DEĞİLDİR; sadece indekslemeyi engeller. Linki bilen herkes açabilir.

Gerçek parola koruması için **cPanel > Directory Privacy**:
1. cPanel > **Directory Privacy** aç.
2. Subdomain document root klasörünü seç.
3. "Password protect this directory" işaretle, bir isim ver, **Save**.
4. "Create User" ile kullanıcı adı + parola oluştur, **Save**.
5. Artık klasöre girişte tarayıcı kullanıcı adı/parola soracak.

> ZIP içine **kasıtlı olarak** `.htpasswd` veya kullanıcı/parola KONULMAMIŞTIR; bu koruma cPanel panelinden açılır.

---

## Canlıya (production) geçerken YAPILACAKLAR

1. Tüm `.html` dosyalarından `noindex` meta etiketini kaldır
   (veya `noindex, nofollow...` yerine `index, follow` yap).
2. `robots.txt` içeriğini gerçek kurallarla değiştir (örn. `Allow: /` + sitemap satırı).
3. Directory Privacy korumasını kaldır.
4. Hero görselleri: `hizmetler.html` ve `haberler.html` hero alanları şu an
   geçici Unsplash görseli kullanıyor (kaynakta yerel dosya yoktu). Gerçek görseller
   hazır olunca `assets/img/` içine koyup ilgili `<img src>`'leri güncelle.

---

## Test edilmesi gereken URL'ler (gizli pencerede)

```
https://<subdomain>/                         (index)
https://<subdomain>/hakkimizda.html
https://<subdomain>/hizmetler.html
https://<subdomain>/projeler.html
https://<subdomain>/haberler.html
https://<subdomain>/kariyer.html
https://<subdomain>/iletisim.html
https://<subdomain>/grand-corner.html
https://<subdomain>/olmayan-sayfa          (→ özel 404.html dönmeli)
```

Kontrol: menü/mobil menü, logo→ana sayfa, footer linkleri, telefon (`tel:`),
WhatsApp (`wa.me`), GSAP animasyonları, hakkımızda zaman çizelgesi (scroll), sliderlar.

---

## İçerik Güvenlik Politikası (CSP) — öneri

Site şu dış kaynakları kullanır:
- **Fonts:** `fonts.googleapis.com`, `fonts.gstatic.com` (JetBrains Mono)
- **Script:** `cdnjs.cloudflare.com` (GSAP + ScrollTrigger)
- **Görsel:** `images.unsplash.com`, `izgenc.com`

İstenirse `.htaccess`'e şu eklenebilir (önce test et, sıkı CSP siteyi bozabilir):

```
Header set Content-Security-Policy "default-src 'self'; img-src 'self' data: https://images.unsplash.com https://izgenc.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;"
```

> Inline `<style>`/`<script>` blokları olduğu için `'unsafe-inline'` gerekir. Tam sıkılaştırma için inline kodların dışarı taşınması gerekir — şimdilik öneri olarak bırakıldı.

---

## Sorun olursa geri alma (rollback)

1. cPanel File Manager'da yeni dosyaları sil.
2. 3. adımda aldığın `_backup` klasöründeki eski dosyaları document root'a geri taşı.
3. Tarayıcı önbelleğini temizleyip kontrol et.

---

## Notlar

- Asset dosyaları (css/js) hash'li isimlendirilmemiştir; `.htaccess` bu yüzden css/js'e **kısa cache (1 gün)**, font/görsele **uzun cache (1 yıl)** verir. Güncelleme yayınlarsan ziyaretçiye yansıması için 1 gün bekleyebilir ya da dosya adına sürüm ekleyebilirsin.
- CSS/JS **minify** edilmiştir (esbuild); JS'te `console.*` çağrıları kaldırılmış, yerel değişkenler küçültülmüştür (orta düzey obfuscation). Agresif anti-debug / sağ-tık engelleme **eklenmemiştir** (UX'i bozmaması için).
- Kaynak proje klasörüne **dokunulmamıştır**; tüm çıktı `release/` altındadır.
