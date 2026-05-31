import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ProjectCard from '../cards/ProjectCard'
import { featuredProjects } from '../../data/projects'
import { useLang } from '../../i18n/LanguageContext'

export default function FeaturedWork() {
  const { t } = useLang()
  const items = featuredProjects.slice(0, 5)
  return (
    <section className="bg-ink py-12 md:py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t('featured.eyebrow')} title={t('featured.title')} intro={t('featured.intro')} light />
          <Link to="/referanslar" className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-accent">
            {t('common.allReferences')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80} className={i === 0 ? 'col-span-2 row-span-2 md:col-span-2' : ''}>
              <ProjectCard project={p} className={i === 0 ? 'h-full min-h-[260px] md:min-h-[520px]' : 'aspect-square h-full'} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
