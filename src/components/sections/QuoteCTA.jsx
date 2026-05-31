import { MessageCircle, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'
import { waLink, waMessages, telLink } from '../../lib/whatsapp'
import { useLang } from '../../i18n/LanguageContext'

export default function QuoteCTA({ title, subtitle, serviceName }) {
  const { t } = useLang()
  const msg = serviceName ? waMessages.service(serviceName) : waMessages.general
  return (
    <section className="bg-ink py-10 md:py-14">
      <Container>
        <Reveal className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow text-accent">{t('cta.eyebrow')}</span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-[2.5rem]">
              {title ?? t('cta.title')}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mutedDark md:text-lg">{subtitle ?? t('cta.subtitle')}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button href={waLink(msg)} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={MessageCircle} arrow={false} data-cta="cta-whatsapp" className="w-full justify-center md:w-auto">
              {t('common.waQuote')}
            </Button>
            <Button href={telLink(site.phonePrimary)} variant="ghostDark" icon={Phone} arrow={false} data-cta="cta-call" className="w-full justify-center md:w-auto">
              {site.phonePrimaryDisplay}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
