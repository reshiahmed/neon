import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ServiceCard from '../cards/ServiceCard'
import { services } from '../../data/services'
import { useLang } from '../../i18n/LanguageContext'

export default function ServicesSection({ eyebrow, title, intro, surface = false }) {
  const { t } = useLang()
  return (
    <section className={surface ? 'bg-surface py-12 md:py-16' : 'bg-paper py-12 md:py-16'}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow ?? t('services.eyebrow')}
          title={title ?? t('services.title')}
          intro={intro ?? t('services.intro')}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
