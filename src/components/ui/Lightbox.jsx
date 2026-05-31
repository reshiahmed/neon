import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang, pick } from '../../i18n/LanguageContext'

// Accessible image lightbox: backdrop click / Esc to close, ← → / arrows to navigate.
export default function Lightbox({ items, index, onClose, onIndex }) {
  const { lang } = useLang()
  const open = index != null

  const go = useCallback(
    (d) => {
      if (index == null || !items.length) return
      onIndex((index + d + items.length) % items.length)
    },
    [index, items.length, onIndex]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go, onClose])

  if (!open) return null
  const item = items[index]
  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={pick(item.caption, lang)}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 animate-[fade-up_0.2s_ease-out_both]"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-accent md:right-6 md:top-6"
      >
        <X className="h-7 w-7" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center text-white/70 transition-colors hover:text-accent md:left-6"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); go(1) }}
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center text-white/70 transition-colors hover:text-accent md:right-6"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </>
      )}

      <figure className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={pick(item.caption, lang)} className="max-h-[80vh] max-w-full object-contain" />
        <figcaption className="mt-4 flex items-center gap-3 text-sm">
          <span className="font-display font-semibold text-white">{pick(item.caption, lang)}</span>
          <span className="text-white/40">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>
  )
}
