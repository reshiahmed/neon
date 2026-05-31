import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

// Bespoke "plate" button: sharp-cornered solid plate, optional trailing arrow.
const variants = {
  primary: 'bg-accent text-white hover:bg-accent-600',
  dark: 'bg-ink text-paper hover:bg-coal',
  light: 'bg-paper text-ink border border-line hover:border-ink',
  ghostDark: 'border border-white/25 text-white hover:bg-paper hover:text-ink',
  whatsapp: 'bg-accent text-white hover:bg-accent-600',
}

const sizes = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-[3.25rem] px-7 text-[15px]',
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  to,
  href,
  arrow = true,
  icon: Icon,
  className,
  children,
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-none font-display font-semibold tracking-tight transition-colors duration-200 select-none',
    variants[variant],
    sizes[size],
    className
  )
  const inner = (
    <>
      {Icon && <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />}
      <span>{children}</span>
      {arrow && <ArrowRight className="h-[18px] w-[18px] shrink-0" strokeWidth={2.25} />}
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{inner}</a>
  return <button className={classes} {...rest}>{inner}</button>
}
