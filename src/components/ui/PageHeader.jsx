import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'
import { useLang } from '../../i18n/LanguageContext'

// Dark inner-page header with breadcrumb.
export default function PageHeader({ eyebrow, title, intro, crumbs = [] }) {
  const { t } = useLang()
  return (
    <section className="border-b border-linedark bg-ink py-12 md:py-16">
      <Container>
        <nav aria-label="breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-white/50">
          <Link to="/" className="hover:text-accent">{t('nav.home')}</Link>
          {crumbs.map((c) => (
            <span key={c.path || c.name} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.path ? <Link to={c.path} className="hover:text-accent">{c.name}</Link> : <span className="text-white/80">{c.name}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="eyebrow text-accent">{eyebrow}</span>
          </div>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mutedDark md:text-lg">{intro}</p>}
      </Container>
    </section>
  )
}
