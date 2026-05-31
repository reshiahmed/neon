import { useLang } from '../../i18n/LanguageContext'
import { cn } from '../../lib/cn'

// TR / EN toggle. `tone` adapts to dark surfaces.
export default function LanguageSwitcher({ className }) {
  const { lang, setLang } = useLang()
  const opt = (code, label) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={cn(
        'px-2 py-1 font-display text-xs font-bold tracking-wide transition-colors',
        lang === code ? 'text-accent' : 'text-mutedDark hover:text-white'
      )}
    >
      {label}
    </button>
  )
  return (
    <div className={cn('flex items-center', className)}>
      {opt('tr', 'TR')}
      <span className="text-white/25">/</span>
      {opt('en', 'EN')}
    </div>
  )
}
