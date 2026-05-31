import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { nav, site } from '../../data/site'
import { waLink, waMessages, telLink } from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { useLang } from '../../i18n/LanguageContext'
import BrandWordmark from './BrandWordmark'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLang()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }) =>
    cn('text-sm font-medium transition-colors', isActive ? 'text-accent' : 'text-white/80 hover:text-white')

  return (
    <header className="sticky top-0 z-50 border-b border-linedark bg-ink">
      <nav className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
        <BrandWordmark />

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass} end={n.to === '/'}>
              {t(`nav.${n.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a href={telLink(site.phonePrimary)} className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            <Phone className="h-4 w-4" strokeWidth={2} />
            {site.phonePrimaryDisplay}
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="nav-whatsapp"
            className="inline-flex min-h-11 items-center gap-2 bg-accent px-5 font-display text-sm font-semibold tracking-tight text-white transition-colors hover:bg-accent-600"
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
            {t('common.freeQuote')}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center text-white"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-ink lg:hidden">
          <div className="container-site flex flex-col gap-1 py-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  cn('border-b border-linedark py-4 font-display text-2xl font-bold tracking-tight', isActive ? 'text-accent' : 'text-white')
                }
              >
                {t(`nav.${n.key}`)}
              </NavLink>
            ))}
          </div>
          <div className="container-site mt-auto flex flex-col gap-3 pb-8">
            <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer"
               className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 bg-accent px-6 font-display font-semibold text-white">
              <MessageCircle className="h-5 w-5" /> {t('common.waQuote')}
            </a>
            <a href={telLink(site.phonePrimary)}
               className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 border border-white/25 px-6 font-display font-semibold text-white">
              <Phone className="h-5 w-5" /> {site.phonePrimaryDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
