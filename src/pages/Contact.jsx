import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '../components/ui/SocialIcons'
import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import Container from '../components/ui/Container'
import QuoteForm from '../components/QuoteForm'
import { site } from '../data/site'
import { waLink, waMessages, telLink } from '../lib/whatsapp'
import { breadcrumbSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`

  const rows = [
    { icon: MessageCircle, label: t('pages.contact.whatsapp'), value: site.phonePrimaryDisplay, href: waLink(waMessages.general) },
    { icon: Phone, label: t('pages.contact.phone'), value: site.phonePrimaryDisplay, href: telLink(site.phonePrimary) },
    { icon: Phone, label: t('pages.contact.phone2'), value: site.phoneSecondaryDisplay, href: telLink(site.phoneSecondary) },
    { icon: Mail, label: t('pages.contact.email'), value: site.email, href: `mailto:${site.email}` },
  ]

  return (
    <>
      <SEO
        title={isTr ? 'İletişim | Arslan Tanıtım Reklam & Tabela | Eyüpsultan İstanbul' : 'Contact | Arslan Tanıtım Advertising & Signage | Eyüpsultan Istanbul'}
        description={isTr
          ? 'Arslan Tanıtım iletişim: Eyüpsultan / Alibeyköy İstanbul. Telefon, WhatsApp, e-posta ve harita. Ücretsiz teklif için yazın.'
          : 'Contact Arslan Tanıtım: Eyüpsultan / Alibeyköy, Istanbul. Phone, WhatsApp, email and map. Message us for a free quote.'}
        path="/iletisim"
        schema={breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.contact'), path: '/iletisim' }])}
      />
      <PageHeader eyebrow={t('pages.contact.eyebrow')} title={t('pages.contact.title')} intro={t('pages.contact.intro')} crumbs={[{ name: t('nav.contact') }]} />

      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <div className="divide-y divide-line border-y border-line">
                {rows.map((r, i) => (
                  <a key={i} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 py-4 transition-colors hover:text-accent">
                    <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-paper"><r.icon className="h-5 w-5" strokeWidth={2} /></span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-ink/45">{r.label}</span>
                      <span className="font-display font-bold tracking-tight text-ink">{r.value}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-paper"><MapPin className="h-5 w-5" /></span>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ink/45">{t('pages.contact.address')}</span>
                  <p className="text-sm leading-relaxed text-muted">{site.address.full}</p>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-accent hover:underline">{t('common.openMaps')} →</a>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-paper"><Clock className="h-5 w-5" /></span>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ink/45">{t('pages.contact.hours')}</span>
                  <ul className="mt-1 text-sm text-muted">
                    {site.hours.map((h) => (
                      <li key={h.d} className="flex justify-between gap-6"><span>{h.d}</span><span className="font-semibold text-ink">{h.h}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"><InstagramIcon className="h-5 w-5" /></a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"><FacebookIcon className="h-5 w-5" /></a>
              </div>

              <div className="mt-8 overflow-hidden border border-line">
                <iframe title="Arslan Tanıtım" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-56 w-full" />
              </div>
            </div>

            <div className="border border-line bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">{t('pages.contact.formTitle')}</h2>
              <p className="mt-2 text-sm text-muted">{t('pages.contact.formDesc')}</p>
              <div className="mt-6"><QuoteForm /></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
