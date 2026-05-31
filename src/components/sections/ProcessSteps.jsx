import { Ruler, PenTool, Factory, Wrench } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { useLang } from '../../i18n/LanguageContext'

const icons = [Ruler, PenTool, Factory, Wrench]

export default function ProcessSteps({ light = false }) {
  const { t } = useLang()
  const steps = t('process.s')
  return (
    <section className={light ? 'bg-coal py-12 md:py-16' : 'bg-surface py-12 md:py-16'}>
      <Container>
        <SectionHeading eyebrow={t('process.eyebrow')} title={t('process.title')} intro={t('process.intro')} light={light} />
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={s.t} delay={i * 80} className={light ? 'bg-coal p-5 md:p-8' : 'bg-card p-5 md:p-8'}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-black text-accent md:text-3xl">{`0${i + 1}`}</span>
                    <h3 className={`font-display text-lg font-bold tracking-tight md:hidden ${light ? 'text-white' : 'text-ink'}`}>{s.t}</h3>
                  </div>
                  <Icon className={light ? 'h-6 w-6 shrink-0 text-white/40' : 'h-6 w-6 shrink-0 text-ink/30'} strokeWidth={1.75} />
                </div>
                <h3 className={`mt-5 hidden font-display text-lg font-bold tracking-tight md:block ${light ? 'text-white' : 'text-ink'}`}>{s.t}</h3>
                <p className={`mt-1.5 text-sm leading-relaxed md:mt-2 ${light ? 'text-mutedDark' : 'text-muted'}`}>{s.d}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
