import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import GalleryInteractive from '../components/sections/GalleryInteractive'
import Testimonials from '../components/sections/Testimonials'
import References from '../components/sections/References'
import QuoteCTA from '../components/sections/QuoteCTA'
import { breadcrumbSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function Portfolio() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  return (
    <>
      <SEO
        title={isTr ? 'Referanslar & Projeler | Kutu Harf & Tabela İşlerimiz | Arslan Tanıtım' : 'Portfolio & Projects | Our Box-Letter & Sign Work | Arslan Tanıtım'}
        description={isTr
          ? "İstanbul'da ürettiğimiz kutu harf, neon led ve tabela projelerinden bir seçki. Gerçek cepheler, gerçek işler — galeriye göz atın."
          : 'A selection of box-letter, neon LED and sign projects we produced in Istanbul. Real storefronts, real work — browse the gallery.'}
        path="/referanslar"
        schema={breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.portfolio'), path: '/referanslar' }])}
      />
      <PageHeader eyebrow={t('pages.portfolio.eyebrow')} title={t('pages.portfolio.title')} intro={t('pages.portfolio.intro')} crumbs={[{ name: t('nav.portfolio') }]} />

      <GalleryInteractive />

      <Testimonials surface />
      <References />
      <QuoteCTA />
    </>
  )
}
