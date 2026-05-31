import { Plus } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useLang, pick } from '../../i18n/LanguageContext'

// Native <details> accordion — accessible, no JS state needed.
export default function FAQAccordion({ items, className }) {
  const { lang } = useLang()
  return (
    <div className={cn('divide-y divide-line border-y border-line', className)}>
      {items.map((f, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-bold tracking-tight text-ink md:text-lg [&::-webkit-details-marker]:hidden">
            {pick(f.q, lang)}
            <Plus className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" strokeWidth={2.25} />
          </summary>
          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted md:text-base">{pick(f.a, lang)}</p>
        </details>
      ))}
    </div>
  )
}
