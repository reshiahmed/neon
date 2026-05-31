import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import lion from '../../assets/brand/lion-mark.png'

// Lion mark + wordmark lockup. Used in nav and footer.
export default function BrandWordmark({ light = true, className, size = 'sm' }) {
  const img = size === 'lg' ? 'h-12 w-12' : 'h-9 w-9'
  const text = size === 'lg' ? 'text-2xl' : 'text-lg'
  return (
    <Link to="/" aria-label="Arslan Tanıtım" className={cn('group flex items-center gap-2.5', className)}>
      <img src={lion} alt="" className={cn('object-contain', img)} />
      <span className={cn('font-display font-extrabold leading-none tracking-tight', text)}>
        <span className={light ? 'text-white' : 'text-ink'}>arslan </span>
        <span className="text-accent">tanıtım</span>
      </span>
    </Link>
  )
}
