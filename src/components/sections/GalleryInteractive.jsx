import { useState, useMemo } from 'react'
import { Expand } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'
import { galleryItems } from '../../data/gallery'
import { categories } from '../../data/projects'
import { useLang, pick } from '../../i18n/LanguageContext'
import { cn } from '../../lib/cn'

export default function GalleryInteractive() {
  const { lang } = useLang()
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(null)

  const items = useMemo(
    () => (active === 'all' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  )

  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <div className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => { setActive(c.key); setOpen(null) }}
              className={cn(
                'shrink-0 border px-4 py-2 font-display text-sm font-semibold tracking-tight transition-colors',
                active === c.key ? 'border-accent bg-accent text-white' : 'border-line text-muted hover:border-ink'
              )}
            >
              {pick(c.label, lang)}
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 items-center text-sm text-muted md:flex">
            {items.length} {lang === 'tr' ? 'görsel' : 'photos'}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 40}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={pick(g.caption, lang)}
                className="group relative block aspect-square w-full overflow-hidden bg-ink"
              >
                <img
                  src={g.src}
                  alt={pick(g.caption, lang)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/45">
                  <Expand className="h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" strokeWidth={2} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  )
}
