import { cn } from '../../lib/cn'

// Numbered "kerf" heading — the bespoke signature: 01/02 index + thin orange rule.
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  className,
}) {
  return (
    <div className={cn(center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {(eyebrow || index) && (
        <div className={cn('mb-4 flex items-center gap-3', center && 'justify-center')}>
          {index && (
            <span className="font-display text-sm font-extrabold text-accent">{index}</span>
          )}
          <span className="h-px w-8 bg-accent" />
          {eyebrow && (
            <span className={cn('eyebrow', light ? 'text-mutedDark' : 'text-muted')}>{eyebrow}</span>
          )}
        </div>
      )}
      {title && (
        <h2
          className={cn(
            'font-display font-extrabold leading-[1.05] tracking-tight',
            'text-3xl md:text-[2.6rem]',
            light ? 'text-white' : 'text-ink'
          )}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p className={cn('mt-4 text-base md:text-lg leading-relaxed', light ? 'text-mutedDark' : 'text-muted')}>
          {intro}
        </p>
      )}
    </div>
  )
}
