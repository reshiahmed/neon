import { MessageCircle } from 'lucide-react'
import { waLink, waMessages } from '../../lib/whatsapp'
import { useLang } from '../../i18n/LanguageContext'

// Persistent WhatsApp CTA (desktop bottom-right; mobile uses the sticky bar).
export default function WhatsAppFloat() {
  const { t } = useLang()
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="float-whatsapp"
      aria-label={t('common.waQuote')}
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 border border-linedark bg-ink px-4 py-3 text-white shadow-lg shadow-black/20 transition-colors hover:bg-coal md:inline-flex"
    >
      <MessageCircle className="h-6 w-6 text-accent" strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-display text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
        {t('common.freeQuote')}
      </span>
    </a>
  )
}
