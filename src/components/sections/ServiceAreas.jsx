import { MapPin } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { districts } from '../../data/site'
import { useLang } from '../../i18n/LanguageContext'

export default function ServiceAreas() {
  const { t } = useLang()
  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
          <SectionHeading eyebrow={t('areas.eyebrow')} title={t('areas.title')} intro={t('areas.intro')} />
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {districts.map((d) => (
              <div key={d} className="flex items-center gap-2 bg-card px-4 py-5 font-display font-semibold tracking-tight text-ink">
                <MapPin className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {d}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
