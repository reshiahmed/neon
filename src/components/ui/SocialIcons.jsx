// Inline brand icons (lucide-react no longer ships Instagram/Facebook).
export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-7h2.4l.4-3h-2.8V9.9c0-.85.25-1.43 1.5-1.43H16.6V5.78A20.6 20.6 0 0 0 14.3 5.6c-2.3 0-3.9 1.4-3.9 4v2.4H8v3h2.4v7h3.1z" />
    </svg>
  )
}
