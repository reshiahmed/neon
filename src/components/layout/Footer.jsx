import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons'
import { site, nav } from '../../data/site'
import { services } from '../../data/services'
import { telLink } from '../../lib/whatsapp'
import { useLang, pick } from '../../i18n/LanguageContext'
import BrandWordmark from './BrandWordmark'

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`

  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <BrandWordmark light size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mutedDark">{t('footer.desc')}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="grid h-10 w-10 place-items-center rounded-full border border-linedark text-mutedDark transition-colors hover:border-accent hover:text-accent">
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="grid h-10 w-10 place-items-center rounded-full border border-linedark text-mutedDark transition-colors hover:border-accent hover:text-accent">
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white md:text-[11px]">{t('footer.menu')}</h4>
            <ul className="mt-4 space-y-2 text-xs text-mutedDark md:text-sm">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="transition-colors hover:text-accent">{t(`nav.${n.key}`)}</Link></li>
              ))}
              <li><Link to="/teklif" className="transition-colors hover:text-accent">{t('nav.quote')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white md:text-[11px]">{t('footer.services')}</h4>
            <ul className="mt-4 space-y-2 text-xs text-mutedDark md:text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/hizmetler/${s.slug}`} className="transition-colors hover:text-accent">{pick(s.name, lang)}</Link></li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white md:text-[11px]">{t('footer.contact')}</h4>
            <div className="mt-4 overflow-hidden border border-linedark">
              <iframe title="Arslan Tanıtım" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-24 w-full md:h-28" />
            </div>
            <div className="mt-4 space-y-2 text-xs text-mutedDark md:text-sm">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{site.address.full}</span></p>
              <a href={telLink(site.phonePrimary)} className="flex items-center gap-2 transition-colors hover:text-accent"><Phone className="h-4 w-4 shrink-0 text-accent" /> {site.phonePrimaryDisplay}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-accent"><Mail className="h-4 w-4 shrink-0 text-accent" /> {site.email}</a>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block pt-1 font-semibold text-accent hover:underline">{t('common.openMaps')} →</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-linedark pt-6 sm:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-white/40">© {year} {site.legalName}</p>
          <p className="text-[10px] uppercase tracking-widest text-white/40">{site.slogan} · İstanbul</p>
        </div>
      </div>
    </footer>
  )
}
