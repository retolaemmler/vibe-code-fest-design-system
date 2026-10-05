---
description: "Brand assets shipped by the Vibe Code Fest Design System design system (logos, icons, illustrations, photography, fonts, videos) with exact import paths. Read before adding any logo, icon, illustration, image, video, or font to the app: use these real assets instead of placeholders, stock photos, or generated images."
---

# Vibe Code Fest Design System — Assets

These files are copied into `src/design-system/{slug}/assets/` in this project — never generate, placeholder, or substitute an asset that exists here.

Raw files import directly, e.g. `import logo from "@/design-system/{slug}/assets/logos/logo.svg"`.
R2 pointer files (`.asset.json`) are imported as JSON — use the `url` property, e.g. `import hero from "@/design-system/{slug}/assets/hero.png.asset.json"` then `<img src={hero.url} />`.
The full machine-readable catalog lives in this library's `design-system.json` (`assets` array).

## Logos

- `@/design-system/{slug}/assets/logos/atoll-logo.png` (png)
- `@/design-system/{slug}/assets/logos/vibe-code-fest-logo.png` (png)

## Photography

- `@/design-system/{slug}/assets/photography/katy-wirz.png` (png)
- `@/design-system/{slug}/assets/photography/silvan-muehlemann.jpeg` (jpeg)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-1.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-2.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-3.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-4.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-5.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/photography/vcf2026-gallery-6.jpg.asset.json` (jpg, R2 pointer)

