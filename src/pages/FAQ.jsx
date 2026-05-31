import { MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import Container from '../components/ui/Container'
import FAQAccordion from '../components/ui/FAQAccordion'
import Button from '../components/ui/Button'
import QuoteCTA from '../components/sections/QuoteCTA'
import { faqs } from '../data/faq'
import { waLink, waMessages } from '../lib/whatsapp'
import { breadcrumbSchema, faqSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function FAQ() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  return (
    <>
      <SEO
        title={isTr ? 'Sıkça Sorulan Sorular | Tabela & Kutu Harf | Arslan Tanıtım' : 'FAQ | Signs & Box Letters | Arslan Tanıtım'}
        description={isTr
          ? 'Tabela ve kutu harf fiyatları, üretim ve montaj süresi, garanti, hizmet bölgeleri ve ödeme hakkında en çok sorulan soruların yanıtları.'
          : 'Answers to the most common questions about sign and box-letter prices, production and install time, warranty, service areas and payment.'}
        path="/sss"
        schema={[breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.faq'), path: '/sss' }]), faqSchema(faqs, lang)]}
      />
      <PageHeader eyebrow={t('pages.faq.eyebrow')} title={t('pages.faq.title')} intro={t('pages.faq.intro')} crumbs={[{ name: t('nav.faq') }]} />
      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
            <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
              <div>
                <h2 className="font-display text-lg font-bold tracking-tight text-ink">{t('faq.moreTitle')}</h2>
                <p className="mt-1 text-sm text-muted">{t('faq.moreDesc')}</p>
              </div>
              <Button href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={MessageCircle} arrow={false}>{t('common.waAsk')}</Button>
            </div>
          </div>
        </Container>
      </section>
      <QuoteCTA />
    </>
  )
}
