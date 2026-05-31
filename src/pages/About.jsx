import { Target, Eye } from 'lucide-react'
import SEO from '../components/SEO'
import PageHeader from '../components/ui/PageHeader'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import TrustStats from '../components/sections/TrustStats'
import WhyUs from '../components/sections/WhyUs'
import ServiceAreas from '../components/sections/ServiceAreas'
import ProcessSteps from '../components/sections/ProcessSteps'
import QuoteCTA from '../components/sections/QuoteCTA'
import { site } from '../data/site'
import { breadcrumbSchema } from '../lib/schema'
import { useLang, pick } from '../i18n/LanguageContext'
import aboutImg from '../assets/brand/homepage-slide.png'

export default function About() {
  const { t, lang } = useLang()
  const isTr = lang === 'tr'
  const story = t('pages.about.story')
  return (
    <>
      <SEO
        title={isTr ? 'Kurumsal | Hakkımızda | Arslan Tanıtım Reklam & Tabela' : 'About | Arslan Tanıtım Advertising & Signage'}
        description={isTr
          ? "Arslan Tanıtım; İstanbul'da yılların tecrübesiyle kutu harf, neon led ve tabela üreten reklam firması. %100 yerli üretim, Eyüpsultan merkezli. Misyon ve vizyonumuz."
          : 'Arslan Tanıtım is an Istanbul advertising firm producing box letters, neon LED and signage with years of experience. 100% in-house, based in Eyüpsultan. Our mission and vision.'}
        path="/kurumsal"
        schema={breadcrumbSchema([{ name: t('nav.home'), path: '/' }, { name: t('nav.about'), path: '/kurumsal' }])}
      />
      <PageHeader eyebrow={t('pages.about.eyebrow')} title={t('pages.about.title')} intro={t('pages.about.intro')} crumbs={[{ name: t('nav.about') }]} />

      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow text-muted">{t('pages.about.storyEyebrow')}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">{t('pages.about.storyTitle')}</h2>
              <div className="mt-5 space-y-4 text-muted">
                {story.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <p className="mt-6 border-l-2 border-accent pl-4 font-display text-lg font-bold tracking-tight text-ink">“{site.slogan}”</p>
            </Reveal>
            <Reveal delay={120} className="relative">
              <div className="overflow-hidden border border-line bg-ink"><img src={aboutImg} alt="Arslan Tanıtım" className="aspect-[4/3] w-full object-cover" /></div>
              <div className="absolute -bottom-3 -left-3 hidden h-16 w-16 border-b-4 border-l-4 border-accent md:block" />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/85 p-6 md:hidden">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-6 w-full text-center">
                  {site.stats.map((s) => (
                    <div key={s.key}>
                      <dt className="font-display text-2xl font-black tracking-tight text-white">
                        {pick(s.value, lang)}
                      </dt>
                      <dd className="mt-1 text-[10px] uppercase tracking-widest text-mutedDark">
                        {t(`stats.${s.key}`)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            <Reveal className="bg-card p-7 md:p-9">
              <span className="grid h-12 w-12 place-items-center bg-accent/10 text-accent"><Target className="h-6 w-6" strokeWidth={1.75} /></span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">{t('pages.about.missionT')}</h3>
              <p className="mt-2 text-muted">{t('pages.about.mission')}</p>
            </Reveal>
            <Reveal delay={100} className="bg-card p-7 md:p-9">
              <span className="grid h-12 w-12 place-items-center bg-accent/10 text-accent"><Eye className="h-6 w-6" strokeWidth={1.75} /></span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">{t('pages.about.visionT')}</h3>
              <p className="mt-2 text-muted">{t('pages.about.vision')}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="hidden md:block">
        <TrustStats bordered />
      </div>
      <WhyUs />
      <ServiceAreas />
      <ProcessSteps />
      <QuoteCTA />
    </>
  )
}
