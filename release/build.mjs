// İzgenç Yapı — release build
// Kaynak: pages/ + assets/ + "görsel vs/"  →  release/izgenc-deploy/ (+ .zip)
// Çalıştırma (proje kökünden): node release/build.mjs
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = process.cwd();
const SRC_PAGES = path.join(ROOT, "pages");
const SRC_ASSETS = path.join(ROOT, "assets");
const SRC_FONTS = path.join(SRC_ASSETS, "fonts");
const SRC_IMG = path.join(ROOT, "görsel vs");
const OUT = path.join(ROOT, "release", "izgenc-deploy");
const OUT_ASSETS = path.join(OUT, "assets");
const OUT_IMG = path.join(OUT_ASSETS, "img");
const OUT_FONTS = path.join(OUT_ASSETS, "fonts");
const TMP_JS = path.join(ROOT, "release", ".jsbuild");

const log = (m) => console.log("• " + m);

// --- yardımcılar ---
const normImg = (name) => decodeURIComponent(name).replace(/[ _]/g, "-");

function rewritePaths(s) {
  // "../görsel vs/dosya"  ya da  "../görsel%20vs/dosya"  →  assets/img/normalize(dosya)
  s = s.replace(/\.\.\/görsel(?:%20| )vs\/([^"'()\s>]+)/g, (_m, f) => "assets/img/" + normImg(f));
  // ../assets/  →  assets/
  s = s.replace(/\.\.\/assets\//g, "assets/");
  // ana sayfa dosya adı
  s = s.replace(/anasayfa\.html/g, "index.html");
  return s;
}

function clearDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir)) fs.rmSync(path.join(dir, e), { recursive: true, force: true });
}

function mkdirp(d) { fs.mkdirSync(d, { recursive: true }); }

// --- 0) temizle & klasörler ---
clearDir(OUT);
clearDir(TMP_JS);
mkdirp(OUT); mkdirp(OUT_ASSETS); mkdirp(OUT_IMG); mkdirp(OUT_FONTS); mkdirp(TMP_JS);

// --- 1) HTML: path rewrite + noindex/favicon enjeksiyonu, anasayfa→index ---
const INJECT =
  `\n  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">` +
  `\n  <link rel="icon" href="assets/logo.png">`;

const htmlFiles = fs.readdirSync(SRC_PAGES).filter((f) => f.endsWith(".html"));
for (const f of htmlFiles) {
  let html = fs.readFileSync(path.join(SRC_PAGES, f), "utf8");
  html = rewritePaths(html);
  if (!/name="robots"/.test(html)) {
    html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1${INJECT}`);
  }
  const outName = f === "anasayfa.html" ? "index.html" : f;
  fs.writeFileSync(path.join(OUT, outName), html);
}
log(`${htmlFiles.length} HTML işlendi (anasayfa.html → index.html)`);

// --- 2) CSS: esbuild minify ---
const cssFiles = ["tokens.css", "styles.css", "history.css", "process-build.css"];
const cssArgs = cssFiles.map((c) => `"${path.join(SRC_ASSETS, c)}"`).join(" ");
execSync(`npx esbuild ${cssArgs} --minify --outdir="${OUT_ASSETS}"`, { stdio: "inherit" });
log(`${cssFiles.length} CSS minify edildi`);

// --- 3) JS: path rewrite → esbuild minify (--drop:console) ---
const jsFiles = ["page.js", "history.js", "process-build.js", "story-parallax.js"];
for (const j of jsFiles) {
  let js = fs.readFileSync(path.join(SRC_ASSETS, j), "utf8");
  js = rewritePaths(js);
  fs.writeFileSync(path.join(TMP_JS, j), js);
}
const jsArgs = jsFiles.map((j) => `"${path.join(TMP_JS, j)}"`).join(" ");
execSync(`npx esbuild ${jsArgs} --minify --drop:console --outdir="${OUT_ASSETS}"`, { stdio: "inherit" });
clearDir(TMP_JS); fs.rmSync(TMP_JS, { recursive: true, force: true });
log(`${jsFiles.length} JS minify edildi (console düşürüldü, ../assets→assets, anasayfa→index)`);

// --- 4) İkili kopyalar: logolar + fontlar ---
for (const p of ["logo.png", "logo-light.png", "logo-transparent.png"]) {
  fs.copyFileSync(path.join(SRC_ASSETS, p), path.join(OUT_ASSETS, p));
}
for (const fnt of fs.readdirSync(SRC_FONTS)) {
  fs.copyFileSync(path.join(SRC_FONTS, fnt), path.join(OUT_FONTS, fnt));
}
log("Logolar + fontlar kopyalandı");

// --- 5) Görseller: "görsel vs/* → assets/img/" (isim normalize) ---
let imgCount = 0;
for (const im of fs.readdirSync(SRC_IMG)) {
  if (im === "izgenc transparan logo.png") continue; // zaten assets/logo-transparent.png
  fs.copyFileSync(path.join(SRC_IMG, im), path.join(OUT_IMG, normImg(im)));
  imgCount++;
}
log(`${imgCount} görsel assets/img'e kopyalandı (isim normalize)`);

// --- 6) robots.txt + .htaccess ---
fs.writeFileSync(path.join(OUT, "robots.txt"), "User-agent: *\nDisallow: /\n");
const HTACCESS = `# ===== İzgenç Yapı — production .htaccess (Apache / LiteSpeed) =====
DirectoryIndex index.html
Options -Indexes
ErrorDocument 404 /404.html

# LiteSpeed tam-sayfa cache'i kapat (staging'de güncellemeler anında görünsün;
# canlıya geçince hız için bu blok kaldırılabilir)
<IfModule LiteSpeed>
  CacheDisable public /
</IfModule>

# Geliştirme & gizli dosyalara erişimi engelle
<FilesMatch "(^\\.|\\.(map|log|bak|old|tmp|scss|sass|less|ts|tsx|jsx|md|lock|yml|yaml|env|htpasswd)$)">
  Require all denied
</FilesMatch>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml application/x-font-ttf font/ttf font/otf text/plain
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault                        "access plus 1 month"
  ExpiresByType text/html               "access plus 0 seconds"
  ExpiresByType text/css                "access plus 1 day"
  ExpiresByType application/javascript  "access plus 1 day"
  ExpiresByType font/ttf                "access plus 1 year"
  ExpiresByType font/otf                "access plus 1 year"
  ExpiresByType image/png               "access plus 1 year"
  ExpiresByType image/jpeg              "access plus 1 year"
  ExpiresByType image/webp              "access plus 1 year"
  ExpiresByType image/svg+xml           "access plus 1 year"
</IfModule>

# HTTPS yönlendirme (proxy/forwarded uyumlu)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
`;
fs.writeFileSync(path.join(OUT, ".htaccess"), HTACCESS);
log("robots.txt + .htaccess yazıldı");

console.log("\n✓ Build tamam: " + OUT);
