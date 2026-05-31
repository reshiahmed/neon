import { cn } from '../../lib/cn'
import { useLang, pick } from '../../i18n/LanguageContext'
import { categoryLabel } from '../../data/projects'

export default function ProjectCard({ project, className }) {
  const { lang } = useLang()
  const desc = pick(project.desc, lang)
  const cat = pick(categoryLabel(project.category), lang)
  return (
    <figure className={cn('group relative overflow-hidden bg-ink', className)}>
      <img
        src={project.image}
        alt={`${project.title} — ${desc}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-ink/85 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="eyebrow text-accent">{cat}</span>
        <span className="font-display text-base font-bold leading-tight">{project.title}</span>
        <span className="text-xs text-mutedDark">{desc} · {project.district}</span>
      </figcaption>
    </figure>
  )
}
