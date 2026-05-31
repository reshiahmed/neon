# Arslan Tanıtım — Website

Premium, multi-page, Turkish-first marketing site for **Arslan Tanıtım Reklam ve Tabela Hizmetleri** (İstanbul). Conversion-optimized for WhatsApp quote requests; built for local SEO.

- **Stack:** React 19 + Vite + Tailwind v3 + react-router-dom + react-helmet-async + lucide-react
- **Brand:** ink `#0A0A0A` · orange `#FE5D02` · paper `#FAFAF8`; display = Archivo, body = Inter

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Routes
`/` · `/hizmetler` · `/hizmetler/:slug` (8 service SEO pages) · `/referanslar` · `/kurumsal` · `/sss` · `/iletisim` · `/teklif`

## Content
All copy/data lives in `src/data/` (`site.js`, `services.js`, `projects.js`, `faq.js`). Real photos in `src/assets/`. SEO/JSON-LD in `src/lib/schema.js` + `src/components/SEO.jsx`.

## Before launch
See **TODO.md** (prerender for SEO, 301s from old WordPress URLs, real reviews, replace 3 placeholder images — listed in **ASSETS.md**). Strategy in **discovery.md** + **PRD.md**.
