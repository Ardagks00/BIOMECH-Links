#!/usr/bin/env python3
"""media/ klasöründeki orijinal görsellerden sitenin kullandığı optimize görselleri üretir.

Kullanım (proje kökünden):  python3 tools/build_assets.py
Gereksinim: Pillow (pip install pillow)

Üretilenler public/ altına yazılır. Arka plan veya logo değişirse bu betiği tekrar çalıştırman yeterli.
"""
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / "media"
PUBLIC = ROOT / "public"
IMG = PUBLIC / "assets" / "img"

BACKGROUND = MEDIA / "gle.png"
LOGO = MEDIA / "Adsız tasarım(1).png"
# Link küçük resimleri (Google Form önizlemeleri). Dosya yoksa atlanır.
THUMBS = {
    "destek": MEDIA / "thumbs" / "destek.png",
    "organizasyon": MEDIA / "thumbs" / "organizasyon.png",
    "deneyimli": MEDIA / "thumbs" / "deneyimli.png",
}


def cover(im: Image.Image, w: int, h: int) -> Image.Image:
    """CSS `object-fit: cover` + ortalanmış kırpma."""
    return ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(0.5, 0.5))


def save_webp(im: Image.Image, path: Path, quality: int = 82) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "WEBP", quality=quality, method=6)
    print(f"  {path.relative_to(ROOT)}  {im.width}x{im.height}  {path.stat().st_size / 1024:.1f} KB")


def main() -> None:
    print("Görseller üretiliyor:")
    bg = Image.open(BACKGROUND).convert("RGB")

    # Kart arka planı: Linktree'nin "BLUR" efektiyle aynı (600x1200 cover kırpma + 3.5px gaussian blur).
    save_webp(cover(bg, 600, 1200).filter(ImageFilter.GaussianBlur(3.5)), IMG / "bg.webp", 80)

    # Masaüstündeki kartın dışında kalan alan: ortadan kare kırpılmış, çok bulanık küçük sürüm.
    square = cover(cover(bg, 960, 1920), 960, 960).resize((480, 480), Image.LANCZOS)
    save_webp(square.filter(ImageFilter.GaussianBlur(52)), IMG / "backdrop.webp", 80)

    logo = Image.open(LOGO).convert("RGB")
    # Profil fotoğrafı: 96px gösteriliyor, retina ekranlar için 3x.
    save_webp(logo.resize((288, 288), Image.LANCZOS), IMG / "avatar.webp", 90)

    # Favicon ve ana ekran ikonu: logoyu biraz daha sıkı kırp (logo yatay ve ince).
    # favicon.png, Bootstrap Studio'da Settings > Favicons için kullanılır.
    icon = logo.crop((61, 38, 1941, 1918))
    icon.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    icon.resize((192, 192), Image.LANCZOS).save(IMG / "icon-192.png", optimize=True)
    icon.resize((512, 512), Image.LANCZOS).save(IMG / "favicon.png", optimize=True)
    icon.resize((48, 48), Image.LANCZOS).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("  public/apple-touch-icon.png, public/favicon.ico, public/assets/img/icon-192.png, public/assets/img/favicon.png")

    # Link küçük resimleri: 1200x630 önizlemenin ortasından kare kırpma (Linktree'deki gibi).
    for name, src in THUMBS.items():
        if not src.exists():
            print(f"  (atlandı: {src.relative_to(ROOT)} yok)")
            continue
        thumb = cover(Image.open(src).convert("RGB"), 240, 240)
        save_webp(thumb, IMG / f"thumb-{name}.webp", 85)


if __name__ == "__main__":
    main()
