import { cn } from '../../lib/cn'

export default function Container({ className, children }) {
  return <div className={cn('container-site', className)}>{children}</div>
}
