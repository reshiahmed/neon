import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLang, pick } from '../../i18n/LanguageContext'

export default function ServiceCard({ service }) {
  const { lang, t } = useLang()
  const title = pick(service.title, lang)
  return (
    <Link
      to={`/hizmetler/${service.slug}`}
      className="group flex min-h-32 flex-row-reverse border border-line bg-card transition-colors hover:border-ink sm:min-h-0 sm:flex-col"
    >
      <div className="relative w-32 shrink-0 overflow-hidden bg-ink sm:aspect-[4/3] sm:w-full">
        <img
          src={service.image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">{title}</h3>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">{pick(service.short, lang)}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-accent sm:mt-4 sm:text-sm">
          {t('common.explore')}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
        </span>
      </div>
    </Link>
  )
}
