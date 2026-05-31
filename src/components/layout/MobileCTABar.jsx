import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, FileText, X } from 'lucide-react'
import { site } from '../../data/site'
import { waLink, waMessages, telLink } from '../../lib/whatsapp'
import { useLang, pick } from '../../i18n/LanguageContext'

// Contact people shown in the Call person-picker.
const contacts = [
  { name: 'Murat Bey', role: { tr: 'Yetkili / Keşif', en: 'Manager / Survey' }, phone: site.phonePrimary, display: site.phonePrimaryDisplay },
  { name: 'Salih Bey', role: { tr: 'Müşteri Temsilcisi', en: 'Customer Rep' }, phone: site.phoneSecondary, display: site.phoneSecondaryDisplay },
]

// Sticky bottom action bar — mobile only. Quote · Call (person picker) · WhatsApp.
export default function MobileCTABar() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <>
          <button
            type="button"
            aria-label="close"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />
          <div className="fixed inset-x-3 bottom-[3.75rem] z-50 overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-black/20 animate-[fade-up_0.2s_ease-out_both] md:hidden">
            {contacts.map((c) => (
              <a
                key={c.name}
                href={telLink(c.phone)}
                data-cta="mobilebar-call-person"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-line px-4 py-3 last:border-b-0"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-base font-bold tracking-tight text-ink">{c.name}</span>
                  <span className="block text-xs text-muted">{pick(c.role, lang)} · {c.display}</span>
                </span>
              </a>
            ))}
          </div>
        </>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] border-t border-linedark bg-ink md:hidden">
        <Link to="/teklif" data-cta="mobilebar-quote" className="flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 text-white/85">
          <FileText className="h-5 w-5" strokeWidth={2} />
          <span className="text-[11px] font-medium">{t('common.quoteShort')}</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          data-cta="mobilebar-call"
          className="flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 text-white/85"
        >
          {open ? <X className="h-5 w-5" strokeWidth={2.25} /> : <Phone className="h-5 w-5" strokeWidth={2} />}
          <span className="text-[11px] font-medium">{t('common.call')}</span>
        </button>
        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="mobilebar-whatsapp"
          className="flex min-h-[3.5rem] items-center justify-center gap-2 bg-accent font-display text-sm font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} /> WhatsApp
        </a>
      </div>
    </>
  )
}
