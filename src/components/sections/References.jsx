import { Star } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { clients, clientNames } from '../../data/projects'
import { googleMapsUrl } from '../../data/reviews'
import { useLang } from '../../i18n/LanguageContext'

export default function References() {
  const { t } = useLang()
  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <SectionHeading eyebrow={t('refs.eyebrow')} title={t('refs.title')} intro={t('refs.intro')} />

        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
          {clients.map((c) => (
            <div key={c.name} className="aspect-square bg-ink">
              <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {clientNames.map((n) => (
            <span key={n} className="border border-line px-3 py-1.5 text-xs font-medium text-muted">{n}</span>
          ))}
          <span className="px-3 py-1.5 text-xs font-medium text-accent">{t('refs.more')}</span>
        </div>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-white">
              <Star className="h-6 w-6" fill="currentColor" strokeWidth={0} />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">{t('refs.ctaTitle')}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t('refs.ctaDesc')}</p>
            </div>
          </div>
          <Button href={googleMapsUrl} target="_blank" rel="noopener noreferrer" variant="dark" arrow data-cta="google-review">
            {t('refs.ctaBtn')}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
