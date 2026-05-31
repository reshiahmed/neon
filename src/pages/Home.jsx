import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import Hero from '../components/sections/Hero'
import ServicesSection from '../components/sections/ServicesSection'
import WhyUs from '../components/sections/WhyUs'
import ProcessSteps from '../components/sections/ProcessSteps'
import FeaturedWork from '../components/sections/FeaturedWork'
import Testimonials from '../components/sections/Testimonials'
import ServiceAreas from '../components/sections/ServiceAreas'
import References from '../components/sections/References'
import QuoteCTA from '../components/sections/QuoteCTA'
import { faqs } from '../data/faq'
import { localBusinessSchema, faqSchema } from '../lib/schema'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  return (
    <>
      <SEO
        title={isTr ? 'Arslan Tanıtım | İstanbul Kutu Harf, Neon Led & Tabela' : 'Arslan Tanıtım | Box Letters, Neon LED & Signage in Istanbul'}
        description={isTr
          ? "İstanbul'da kutu harf, neon led tabela, ışıklı tabela, dijital baskı, araç ve cam giydirme. Keşiften montaja %100 yerli üretim. WhatsApp'tan ücretsiz teklif alın."
          : 'Box letters, neon LED signs, illuminated signage, digital print, vehicle & glass wraps in Istanbul. In-house production from survey to install. Free quote on WhatsApp.'}
        path="/"
        schema={[localBusinessSchema, faqSchema(faqs.slice(0, 5), lang)]}
      />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <ProcessSteps />
      <FeaturedWork />
      <Testimonials />
      <ServiceAreas />
      <References />

      <section className="bg-surface py-12 md:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} intro={t('faq.intro')} />
            <Link to="/sss" className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-accent">
              {t('common.allQuestions')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
            </Link>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} className="mt-10" />
        </Container>
      </section>

      <QuoteCTA />
    </>
  )
}
