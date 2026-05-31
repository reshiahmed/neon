import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSteps from '../components/sections/ProcessSteps'
import QuoteCTA from '../components/sections/QuoteCTA'
import { breadcrumbSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function Services() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  return (
    <>
      <SEO
        title={isTr ? 'Hizmetlerimiz | Kutu Harf, Neon, Tabela & Baskı | Arslan Tanıtım' : 'Services | Box Letters, Neon, Signage & Print | Arslan Tanıtım'}
        description={isTr
          ? "İstanbul'da kutu harf, neon led tabela, led box, ışıklı/ışıksız tabela, totem, araç ve cam giydirme, dijital baskı ve matbaa. Tek elden tüm reklam çözümleri."
          : 'Box letters, neon LED, light boxes, illuminated/non-lit signs, totems, vehicle & glass wraps, digital print and press in Istanbul. All advertising solutions from one team.'}
        path="/hizmetler"
        schema={breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.services'), path: '/hizmetler' }])}
      />
      <PageHeader
        eyebrow={t('pages.services.eyebrow')}
        title={t('pages.services.title')}
        intro={t('pages.services.intro')}
        crumbs={[{ name: t('nav.services') }]}
      />
      <ServicesSection eyebrow={t('common.allServices')} title={t('pages.services.allTitle')} intro="" />
      <ProcessSteps />
      <QuoteCTA />
    </>
  )
}
