# İzgenç Yapı — Kurumsal Web Sitesi

İzgenç Yapı resmi kurumsal web platformu. 1993'ten bu yana İzmir ve Ege bölgesinde modern mimari, kat karşılığı inşaat, kentsel dönüşüm ve taahhüt projeleri üreten İzgenç Yapı için hazırlanmış yüksek performanslı, editoryal tasarım diline sahip statik web platformu.

---

## 🏛️ Tasarım ve Mimari Prensipleri

- **Tipografi Sistemi:**
  - **Başlıklar & Gövde:** `Inter` (100–900 variable font, yerel barındırma)
  - **İtalik Vurgular & Editoryal Serif:** `Albra Display Semi-Italic`
  - **Teknik Detaylar & Pafta Numaraları:** `JetBrains Mono`
- **Kurumsal Renk Paleti:**
  - **Lacivert (Marka Ana Rengi):** `#1C4C98` / Hover: `#16386F`
  - **Koyu Mürekkep:** `#1F2426` / `#2F3437`
  - **Altın / Pirinç (Vurgu):** `#917F5A` / Soft: `#B2A488`
  - **Zemin & Kartlar:** Krem `#F3EFE7` / Kart `#FFFDF8` / Çizgiler `#DED4C5`
- **Tasarım Dili:**
  - Mimari pafta estetiği, teknik çizgi ve tik işaretleri (sheet/kicker)
  - Özel line-art vektörel illüstrasyonlar ve vinyetler
  - Gürültüsüz, sofistike ve editoryal kompozisyon

---

## 📱 Öne Çıkan Özellikler

1. **Tam Ekran Editoryal Mobil Menü:**
   - 390×844 ve altı cihazlarda tam ekran pafta menüsü.
   - 01–07 numaralı animasyonlu menü maddeleri, scroll kilidi ve şeffaf filigran logosu.
2. **İnteraktif Süreç ve Katman İnşası:**
   - Anasayfada 4 adımlı arsa analizi ve katman katman yükselen mimari model görselleştirmesi.
3. **Mobil Değerlerimiz Slider'ı:**
   - Mobil görünümde otomatik kayan ve parmakla akıcı swipe yapılabilen manyetik (snap) kartlar.
4. **Harita Entegrasyonları:**
   - İletişim sayfası ve Grand Corner proje detayında canlı Google Haritalar entegrasyonu.
5. **390px Mobil Uyumluluk:**
   - 14 sayfanın tamamında sıfır yatay kayma (zero horizontal scroll), optimize edilmiş buton ve form yerleşimleri.
6. **Yasal Mevzuat ve KVKK Uyumluluğu:**
   - KVKK aydınlatma metni, çerez politikası, gizlilik sözleşmesi ve İYS uyumlu ticari ileti onayı (v1.0).

---

## 📂 Sayfa Yapısı

```
├── index.html                       # Anasayfa (Hero, süreç animasyonu, projeler, istatistikler)
├── pages/
│   ├── anasayfa.html                # Anasayfa kaynak şablonu
│   ├── hakkimizda.html              # Kuruluş hikayesi, değerler slider'ı, zaman çizelgesi
│   ├── hizmetler.html               # Hizmet mimarisi ve karar sihirbazı
│   ├── hizmetler-kat-karsiligi.html # Kat karşılığı arsa değerlendirme
│   ├── hizmetler-kentsel-donusum.html # Kentsel dönüşüm rehberi ve fizibilite
│   ├── hizmetler-mimari.html        # Mimari planlama ve projelendirme
│   ├── projeler.html                # Portföy galerisi ve kategori filtreleri
│   ├── grand-corner.html            # Grand Corner Karşıyaka proje detay sayfası
│   ├── haberler.html                # Şantiye günlüğü, basın ve gelişmeler
│   ├── kariyer.html                 # İK politikası ve iş başvuru formu
│   ├── iletisim.html                # Merkez ofis, çalışma saatleri ve iletişim formu
│   ├── hukuki.html                  # KVKK, Çerez Politikası ve Gizlilik Sözleşmesi
│   ├── tesekkurler.html             # Form gönderim onay sayfası
│   └── 404.html                     # Özel hata sayfası
├── assets/
│   ├── tokens.css                   # Kurumsal CSS değişkenleri ve tasarım token'ları
│   ├── styles.css                   # Sayfa stilleri ve responsive medya sorguları
│   ├── page.js                      # Mobil menü, scroll kilitleri ve etkileşimler
│   ├── process-build.js / .css      # Katmanlı bina inşası animasyonu
│   ├── history.js / .css            # Zaman çizelgesi ve tarihçe akışı
│   └── fonts/                       # Yerel font aileleri
└── release/
    ├── build.mjs                    # esbuild tabanlı otomatik minifikasyon derleyicisi
    └── izgenc-deploy/               # Canlı sunucuya (Apache/Nginx) yüklemeye hazır paket
```

---

## 🚀 Derleme ve Canlı Dağıtım (Production Build)

Statik varlıkları minifiye etmek ve canlı dağıtım paketini oluşturmak için:

```bash
# Bağımlılıkları derle ve izgenc-deploy klasörünü oluştur
node release/build.mjs
```

Derleme işlemi:
- Tüm HTML sayfalarındaki yolları normalize eder.
- CSS ve JavaScript dosyalarını `esbuild` ile küçültür (minification).
- WebP görselleri, fontları ve logoları optimize eder.
- `.htaccess` ve `robots.txt` yapılandırmasını otomatik olarak hazırlar.

---

## 👤 Geliştirici & Telif

- **Geliştirici:** Enes Yenier ([@yenierenes](https://github.com/yenierenes))
- **Müşteri / Marka:** İzgenç Yapı A.Ş.
- **Telif Hakkı:** © 2026 İzgenç Yapı. Tüm hakları saklıdır.
