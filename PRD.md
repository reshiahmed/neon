# PRD — Arslan Tanıtım digital rebuild

Premium, multi-page, Turkish-first signage & branding site for Istanbul. Conversion goal: **WhatsApp quote requests**. SEO goal: rank for *İstanbul kutu harf / neon led tabela / tabela + district* terms.

## 1. Summary
Arslan Tanıtım is an Eyüpsultan-based signage producer (kutu harf, neon led, tabela, dijital baskı, araç/cam giydirme) serving Istanbul's European side. The rebuild positions them as the **premium, trustworthy signage brand in Istanbul** via real portfolio, a clear 4-step process, hard trust signals, and a frictionless WhatsApp funnel — across a focused multi-page architecture with SEO landing pages per service.

## 2. Target audience
Istanbul (Avrupa Yakası) SMB owners launching/renovating a storefront — café, restaurant, clinic, showroom, retail, AVM unit, kurumsal. Trust- and speed-driven; convinced by visible real work.

## 3. CTAs
- **Primary:** WhatsApp ("Ücretsiz Teklif Al" → wa.me prefilled). Persistent float + mobile sticky bar.
- **Secondary:** Ara (tel:), Teklif formu (form → composes WhatsApp), Referansları gör.
- Every service page has a service-specific WhatsApp message ("… için teklif istiyorum").

## 4. Site architecture (multi-page)
```
/                         Home (hero, trust, services, why-us, process, featured work, areas, references, FAQ teaser, quote CTA)
/hizmetler                Services overview (grid → detail pages)
/hizmetler/neon-led-tabela        SEO landing
/hizmetler/led-box-tabela         SEO landing
/hizmetler/kutu-harf-tabela       SEO landing (pleksi + paslanmaz)
/hizmetler/isikli-tabela          SEO landing (ters tava, kompozit oyma, dikey form)
/hizmetler/totem-cati-yonlendirme SEO landing (açık hava)
/hizmetler/dijital-baski-matbaa   SEO landing
/hizmetler/cam-giydirme           SEO landing
/hizmetler/arac-giydirme          SEO landing
/referanslar              Portfolio: named clients + filterable gallery
/kurumsal                 About: story, process, stats, values, areas
/sss                      FAQ (objections: price, süre, montaj, garanti, bölge)
/iletisim                 Contact: map, hours, phones, WhatsApp, quick form
/teklif                   Quote request (multi-field → WhatsApp message)
```
Service detail pages are **data-driven from one template** (DRY) so all 9 core services get a real SEO page.

## 5. Page content strategy (per page)
- **Home** — H1 = outcome ("İşletmenizi öne çıkaran tabela ve kutu harf"); sub = who+differentiator; primary WhatsApp + secondary Referanslar; trust strip (15+ yıl · 1000+ müşteri · %100 yerli · 7/24) under hero; services grid (8); why-us 3 USP; 4-step process; featured real projects; service-area district list (SEO); references logo wall + Google-review CTA; FAQ teaser; final quote CTA band.
- **Service detail** — H1 keyword+İstanbul; intro; "kimler için"; tipler/varyasyonlar; malzeme & avantaj; süreç; ilgili projeler; SSS (2–3); service-specific WhatsApp CTA; internal links to siblings. JSON-LD Service.
- **Referanslar** — named client cards (real) + category-filter gallery (Kutu Harf / Neon / Tabela / Cephe). No fake quotes.
- **Kurumsal** — story (2000'den bu yana), mission/vision (from site), stats, values, areas, team-agnostic.
- **SSS** — 8–10 buying-objection Q&As (fiyat, süre, montaj, garanti, bölge, ölçü, tasarım, ödeme).
- **İletişim** — map iframe, address, 2 phones, WhatsApp, hours table, mini form.
- **Teklif** — fields (ad, telefon, hizmet, bölge, mesaj) → builds wa.me message + email fallback.

## 6. Brand direction
- **Colors (max 4):** ink `#0A0A0A` · paper `#FAFAF8` · accent orange `#FE5D02` · surface `#F2EFEA`. Dark sections `#0A0A0A`.
- **Type:** Display = **Archivo** (bold, tight, signage-grotesque) · Body = **Inter** · Eyebrow = Inter uppercase `tracking-[0.18em]`. Two families max.
- **Mood:** premium, industrial-clean, confident, B2B, "kurumsal ama sıcak".
- **Button language (bespoke signature):** **Plate** — sharp-cornered (`rounded-none`) solid orange/ink rectangles with a leading/trailing `→`, like cut acrylic signage plates. Hover = one-shade darker. No pills, no shadows, no glow.
- **Bespoke signature element:** numbered "kerf" sections (`01 / 02 / 03` in Archivo) + a thin orange rule mark used as section divider — echoes routed/cut lettering. Neon glow appears ONLY inside real photos, never in UI chrome (keeps it timeless & flat).

## 7. Asset inventory
| Slot | Status |
|---|---|
| Logo (orange, dark bg) | ✅ provided `logo-arslan.png` |
| Hero storefront | ✅ provided `storefront-hero.png` |
| Real project photos (23) | ✅ downloaded |
| Named client logos | ✅ downloaded |
| Logo orange-on-transparent (for light) | ⛏ generate (TODO) — currently invert/contain on dark chips |
| OG/social image 1200×630 | ⛏ generate (use storefront crop placeholder) |
| Per-service hero images | ◑ reuse real photos; gaps = labeled SVG placeholders + ASSETS.md prompts |

## 8. Tech stack
React 19 + Vite + **JSX** (match existing scaffold) + Tailwind v3 + react-router-dom + react-helmet-async + lucide-react. CSS IntersectionObserver fade-up (no heavy motion lib). No backend: quote/contact → WhatsApp deep-link + mailto fallback.

## 9. Conversion funnel
Search/IG → land (service or home) → proof (real installs + stats + process) → low-friction CTA everywhere (float WA + sticky mobile bar + inline bands) → **Teklif form composes WhatsApp message** → owner replies on WhatsApp. Secondary: call, references. Tracking-ready (data-cta attrs) for later GA4.

## 10. SEO structure
- Turkish `<html lang="tr">`, unique title+meta+canonical+OG per route (helmet).
- JSON-LD: `LocalBusiness` (geo, hours, areaServed districts, sameAs) site-wide; `Service` per service page; `BreadcrumbList`.
- `public/sitemap.xml` + `public/robots.txt`.
- Keyword-mapped URLs/H1s; district mentions; internal linking hub-spoke (home ↔ services ↔ details ↔ referanslar).
- Note: SPA — recommend prerender/SSG before launch (logged in TODO).

## 11. Out of scope (v1)
Backend/CRM, blog migration, e-commerce, English locale, real CMS, live Google-reviews API, prerendering. Logged in TODO.md.
