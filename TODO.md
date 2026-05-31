# TODO — finalize before launch

## Done in this round ✅
- **Multilingual TR + EN** with a language switcher (auto-detects browser language, persists to localStorage, updates `<html lang>`).
- **Real Google reviews** scraped from the Maps listing (4.9★ · 18 reviews) — 6 shown in a Testimonials section, in TR + EN, each paired with a real work photo + Google rating badge.
- **Color pass:** removed the bright WhatsApp green; palette is now strictly black / orange / white. WhatsApp CTAs use brand orange; the floating button is ink-black.

## Content to confirm with owner
- [ ] **Founding year** — site is inconsistent (Kurumsal=2000, homepage text=2020, stat "15+ yıl"). Copy says "yılların tecrübesi" + "15+ yıl". Confirm exact year.
- [ ] **Stats** (15+ yıl, 1000+ proje, %100 yerli, 7/24) are owner marketing claims — confirm before launch.
- [ ] Testimonial cards pair each review with an illustrative real-work photo (not necessarily that exact reviewer's install). Swap any photo if you prefer a 1:1 match.

## Assets (see ASSETS.md)
- [ ] Replace 3 placeholder SVGs (cam-giydirme, arac-giydirme, dijital-baski) with real photos.
- [ ] Optional: transparent orange logo for light backgrounds.

## SEO / launch
- [ ] **Prerender/SSG** — this is a Vite SPA. For best Google indexing, prerender routes. Meta/JSON-LD are correct per route via Helmet but render client-side. (Consider `/en/` path-based locales + hreflang for full multilingual SEO; current toggle is client-side, single URL set.)
- [ ] Point `https://www.arslantanitim.com` to this build; verify `sitemap.xml` + `robots.txt` resolve at root.
- [ ] Submit sitemap in Google Search Console; keep the Google Business Profile linked.
- [ ] 301 the old WordPress URLs (`/kurumsal/`, `/hizmetlerimiz/`, `/referanslar/`, `/galeri/`, `/iletisim/`, `/neon-led-tabela-cesitleri/`) to the new routes.
- [ ] Replace OG image with a branded 1200×630 (logo + slogan) if desired.

## Conversion / analytics
- [ ] Add GA4 + Meta Pixel; all CTAs already carry `data-cta="..."` attributes for event tracking.
- [ ] Optional: connect quote form to a backend/CRM (currently composes a WhatsApp message + mailto fallback — no backend).

## Out of scope (v1)
Blog migration, e-commerce, CMS, live reviews API, path-based locale SEO.
