import { Star, Quote } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { useLang, pick } from '../../i18n/LanguageContext'
import { reviews, googleRating, googleMapsUrl } from '../../data/reviews'

function Stars({ n }) {
  return (
    <span className="flex shrink-0 text-accent" aria-label={`${n}/5`}>
      {Array.from({ length: n }).map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />)}
    </span>
  )
}

export default function Testimonials({ surface = false }) {
  const { t, lang } = useLang()
  return (
    <section className={surface ? 'bg-surface py-12 md:py-16' : 'bg-paper py-12 md:py-16'}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t('testi.eyebrow')} title={t('testi.title')} intro={t('testi.intro')} />
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 border border-line bg-card px-4 py-3 transition-colors hover:border-ink">
            <span className="font-display text-3xl font-black leading-none text-ink">{googleRating.score}</span>
            <span className="flex flex-col">
              <Stars n={5} />
              <span className="mt-0.5 text-xs text-muted">{googleRating.count} {t('testi.badge')}</span>
            </span>
          </a>
        </div>

        <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 70} className="flex w-[85%] shrink-0 snap-center flex-col overflow-hidden border border-line bg-card md:w-auto md:shrink">
              <div className="aspect-[16/10] overflow-hidden bg-ink">
                <img src={r.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <Quote className="absolute right-6 top-6 h-6 w-6 text-accent/30" />
                <p className="pr-8 flex-1 text-sm leading-relaxed text-muted">“{pick(r.text, lang)}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white">{r.initials}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="block truncate font-display text-sm font-bold tracking-tight text-ink">{r.name}</span>
                      <Stars n={r.rating} />
                    </div>
                    <span className="block text-xs text-ink/50">{t('testi.verified')} · {pick(r.when, lang)}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
