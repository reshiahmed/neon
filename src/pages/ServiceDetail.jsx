import { useParams, Navigate, Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import ProcessSteps from '../components/sections/ProcessSteps'
import QuoteCTA from '../components/sections/QuoteCTA'
import { getService } from '../data/services'
import { serviceIcon } from '../lib/icons'
import { waLink, waMessages } from '../lib/whatsapp'
import { serviceSchema, breadcrumbSchema } from '../lib/schema'
import { useLang, pick } from '../i18n/LanguageContext'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const svc = getService(slug)
  if (!svc) return <Navigate to="/hizmetler" replace />

  const Icon = serviceIcon(svc.icon)
  const title = pick(svc.title, lang)
  const name = pick(svc.name, lang)
  const waMsg = waLink(waMessages.service(title))
  const related = svc.related.map(getService).filter(Boolean)
  const forWho = pick(svc.forWho, lang)

  return (
    <>
      <SEO
        title={pick(svc.metaTitle, lang)}
        description={pick(svc.metaDescription, lang)}
        path={`/hizmetler/${svc.slug}`}
        schema={[
          serviceSchema(svc, lang),
          breadcrumbSchema([
            { name: t('nav.home'), path: '/' },
            { name: t('nav.services'), path: '/hizmetler' },
            { name: title, path: `/hizmetler/${svc.slug}` },
          ]),
        ]}
      />
      <PageHeader eyebrow={pick(svc.eyebrow, lang)} title={pick(svc.h1, lang)} intro={pick(svc.short, lang)} crumbs={[{ name: t('nav.services'), path: '/hizmetler' }, { name }]} />

      {/* Overview */}
      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <Reveal className="relative md:order-2" delay={120}>
              <div className="overflow-hidden border border-line bg-ink"><img src={svc.image} alt={pick(svc.h1, lang)} className="aspect-[4/3] w-full object-cover" /></div>
              <div className="absolute -bottom-3 -right-3 hidden h-16 w-16 border-b-4 border-r-4 border-accent md:block" />
            </Reveal>
            <Reveal className="md:order-1">
              <span className="inline-grid h-12 w-12 place-items-center bg-accent text-white"><Icon className="h-6 w-6" strokeWidth={2} /></span>
              <p className="mt-6 text-lg leading-relaxed text-muted">{pick(svc.intro, lang)}</p>
              <div className="mt-7">
                <p className="eyebrow text-muted">{t('sd.forWho')}</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {forWho.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-muted"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />{w}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={waMsg} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={MessageCircle} arrow={false} data-cta="service-whatsapp" className="justify-center">{t('common.serviceQuote')}</Button>
                <Button to="/referanslar" variant="light" className="justify-center">{t('common.relatedWork')}</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Variants */}
      <section className="bg-surface py-12 md:py-16">
        <Container>
          <SectionHeading eyebrow={t('sd.variants')} title={`${name} ${t('sd.variantsTitle')}`} intro={t('sd.variantsIntro')} />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {svc.variants.map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 80} className="bg-card p-6 md:p-8">
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">{pick(v.name, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pick(v.desc, lang)}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <SectionHeading eyebrow={t('sd.benefits')} title={t('sd.benefitsTitle')} />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {svc.benefits.map((b, i) => (
              <Reveal key={i} delay={i * 80}>
                <span className="font-display text-3xl font-black text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">{pick(b.t, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pick(b.d, lang)}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {svc.gallery?.length > 0 && (
        <section className="bg-ink py-12 md:py-16">
          <Container>
            <SectionHeading eyebrow={t('sd.examples')} title={`${name} ${t('sd.examplesTitle')}`} light />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {svc.gallery.map((img, i) => (
                <Reveal key={i} delay={(i % 3) * 80} className="overflow-hidden border border-linedark bg-coal">
                  <img src={img} alt={`${title} ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ProcessSteps light />

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <Container>
            <SectionHeading eyebrow={t('sd.related')} title={t('sd.relatedTitle')} />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/hizmetler/${r.slug}`} className="group flex items-center justify-between border border-line bg-card p-5 transition-colors hover:border-ink">
                  <span className="font-display font-bold tracking-tight text-ink">{pick(r.title, lang)}</span>
                  <ArrowUpRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <QuoteCTA serviceName={title} title={`${title} ${t('sd.ctaTitle')}`} />
    </>
  )
}
