# Discovery — Arslan Tanıtım Reklam ve Tabela Hizmetleri

> Source audit for the rebuild. **[S]** = scraped/verified, **[A]** = assumed/inferred, **[G]** = gap to confirm.

## 1. Business identity
- **Name:** Arslan Tanıtım Reklam ve Tabela Hizmetleri **[S]**
- **Brand mark:** Lion head + lowercase wordmark `arslan tanıtım` **[S]** (assets provided)
- **Slogan:** *"Reklam Her Şeye Değer"* (Advertising is worth everything) **[S]**
- **Category:** Signage & advertising production (tabela / kutu harf / dijital baskı) **[S]**
- **IG SEO title:** "İstanbul Kutu Harf Arslan Tanıtım (@arslantanitimreklam)" **[S]** — primary keyword = *İstanbul Kutu Harf*
- **Founded:** Conflicting on site — Kurumsal page says **2000**, homepage text says 2020, stat block claims "15+ years". Using **"2000'den bu yana / 15+ yıl tecrübe"** framing. **[G]**

## 2. Contact (verified)
- **Phone 1:** 0532 578 06 87 → WhatsApp **905325780687** **[S]**
- **Phone 2:** 0534 565 87 30 **[S]**
- **Email:** info@arslantanitim.com **[S]**
- **Address:** Esentepe Mah., Gaziosmanpaşa Cad., Huzur Apt. No:65 İç Kapı No:01, 34065 Eyüpsultan / İstanbul **[S]**
- **Hours:** Pzt–Cum 10:00–18:00 · Cmt–Paz 10:00–14:00 **[S]**
- **Social:** IG `instagram.com/arslantanitimreklam` · FB `facebook.com/arslantanitimreklamtabela` **[S]**

## 3. Service area (districts) [S]
Alibeyköy · Gaziosmanpaşa · Kağıthane · Eyüpsultan · Mecidiyeköy · Şişli (Avrupa Yakası / European side, Istanbul). Production base: Eyüpsultan (Alibeyköy).

## 4. Services & products [S]
**Işıklı tabela / kutu harf:** Pleksi Kutu Harf · Paslanmaz Harf · Led Box (ışıklı kutu) · Ters Tava Kutu Harf (halo) · Kompozit Oyma (dekupe) · Dikey Form / Pylon · Neon Led Tabela · Kayan Yazı.
**Işıksız tabela:** vinil, kompozit, sac (ekonomik, sıfır enerji).
**Açık hava:** Totem · Çatı tabelası · Yönlendirme panoları.
**Diğer:** Araç Giydirme · Cam Giydirme · Dijital Baskı · Matbaa.
Map to the 9 requested core services: Neon LED, Ledbox, Kutu Harf, Tabela, Matbaa, Baskı, Cam Giydirme, Araç Giydirme, Custom.

## 5. Process [S]
1. Keşif & Ölçü → 2. Tasarım & Onay (3D görsel) → 3. Üretim (%100 yerli üretim) → 4. Montaj & Teslim.
Claims: 1000+ memnun müşteri · %100 yerli üretim · 7/24 teknik destek · 15+ yıl. (Treat stats as owner-supplied marketing claims.)

## 6. Real portfolio / references (verified from their own site) [S]
Named clients (logos + install photos exist):
- **Dry Car Care** — Vialand AVM
- **Detay Deri Direksiyon**
- **Hello Helen**
- **Öz Ay Rent A Car**
- **Yaylacık Çiftliği** (ışıklı kutu harf cephe)
- **Bal Pet Shop** (Çırçır)
- **Bijuce's / Ece's Bijuteri** (AVM cephe)
- **Medusa Peruk** (neon)
- **Eyüp Sultan İlçe Jandarma** (kurumsal/prestij iş)
- Kebab neon art piece.
Location project photos: Alibeyköy, Çırçır, Eyüpsultan, Yeşilpınar. 23 real images downloaded to `src/assets/portfolio/`.

## 7. Brand assets on hand
- `src/assets/brand/logo-arslan.png` — **NEW orange** lion + wordmark on black (provided) ✅ use
- `src/assets/brand/storefront-hero.png` — branded storefront mockup, black/orange (provided) ✅ hero
- `src/assets/brand/arslan-logo-white.png` — OLD **red** logo from live site (do not use; off new palette)
- `src/assets/brand/homepage-slide.png` — CGI building/van render with orange accent
- 23 real project photos + client logos in `src/assets/portfolio/`
- **Brand orange sampled = `#FE5D02`**

## 8. Existing site — strengths & weaknesses
**Strengths:** Real local SEO footprint (district landing pages, kutu-harf focus), genuine portfolio, active social, clear service list, WhatsApp already primary CTA.
**Weaknesses:** Generic WordPress theme, weak visual hierarchy, no trust/stat proof above fold, no real testimonials, no structured quote funnel, thin individual service content, no schema/OG polish, slow, dated look — not "premium." No English. No persistent sticky CTA on mobile.

## 9. Competitors (Istanbul tabela/kutu harf) [S]
bgsreklam.com · tekinreklam.com.tr · zeyreklam.com · neon.gen.tr · celiktabela.com · kulereklam.com · istanbulkutuharf.com.tr (Canan Arslan — name-adjacent, watch). Most are dated WordPress; opening = premium black/orange editorial brand + real photos + fast load + WhatsApp funnel.

## 10. Target customer & journey
**Who:** SMB owners on Istanbul's European side opening/renovating a shop, café, clinic, showroom, AVM unit; needs a storefront sign fast, wants to see real work, price-sensitive but trust-driven. **Decision = visual proof + speed + easy contact.**
**Journey:** Google/IG search ("kutu harf fiyat", "neon tabela", district) → lands on service/portfolio → sees real installs + process + stats → taps WhatsApp/quote → sends photo of storefront → gets quote. Optimize every step toward **WhatsApp**.

## 11. Decisions locked (autonomous)
- **Language: Turkish-first** (local SEO + conversion). EN optional later.
- **Palette: black `#0A0A0A` / orange `#FE5D02` / paper `#FAFAF8`** per brief.
- **Multi-page** per user (overrides skill's one-page rule).
- **No fabricated reviews** — real named clients + Google-review CTA instead.
- **Quote form composes a prefilled WhatsApp message** (form → wa.me) to maximize WhatsApp leads.
