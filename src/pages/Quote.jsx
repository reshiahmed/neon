import { useSearchParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import Container from '../components/ui/Container'
import QuoteForm from '../components/QuoteForm'
import { breadcrumbSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function Quote() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  const [params] = useSearchParams()
  const defaultService = params.get('hizmet') || ''
  const promises = t('pages.quote.promises')
  return (
    <>
      <SEO
        title={isTr ? 'Ücretsiz Teklif Al | Kutu Harf & Tabela Fiyatı | Arslan Tanıtım' : 'Get a Free Quote | Box Letter & Sign Pricing | Arslan Tanıtım'}
        description={isTr
          ? "İstanbul tabela ve kutu harf teklifinizi dakikalar içinde alın. Formu doldurun, WhatsApp'tan size dönelim. Ücretsiz keşif ve net fiyat."
          : "Get your Istanbul sign and box-letter quote in minutes. Fill in the form and we'll reply on WhatsApp. Free survey and a clear price."}
        path="/teklif"
        schema={breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.quote'), path: '/teklif' }])}
      />
      <PageHeader eyebrow={t('pages.quote.eyebrow')} title={t('pages.quote.title')} intro={t('pages.quote.intro')} crumbs={[{ name: t('nav.quote') }]} />
      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">{t('pages.quote.whyTitle')}</h2>
              <ul className="mt-6 space-y-4">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-accent text-white"><Check className="h-4 w-4" strokeWidth={3} /></span>
                    <span className="text-muted">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-accent bg-surface p-5">
                <p className="text-sm leading-relaxed text-muted">{t('pages.quote.tip')}</p>
              </div>
            </div>
            <div className="border border-line bg-card p-6 md:p-8">
              <QuoteForm defaultService={defaultService} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
