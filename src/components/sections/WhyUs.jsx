import { Factory, Clock, ShieldCheck, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { useLang } from '../../i18n/LanguageContext'

const icons = [Factory, Clock, ShieldCheck, MapPin]

export default function WhyUs() {
  const { t } = useLang()
  const points = t('why.p')
  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <SectionHeading eyebrow={t('why.eyebrow')} title={t('why.title')} intro={t('why.intro')} />
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={p.t} delay={i * 80} className="bg-card p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink">{p.t}</h3>
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
