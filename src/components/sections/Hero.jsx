import { MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { waLink, waMessages } from '../../lib/whatsapp'
import { useLang } from '../../i18n/LanguageContext'
import heroBg from '../../assets/brand/hero-bg.png'
import heroMobileBg from '../../assets/brand/hero-bg-mobile.png'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-ink md:min-h-[calc(100svh-4.5rem)]">
      <img src={heroMobileBg} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover md:hidden" />
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 -z-20 hidden h-full w-full object-cover md:block" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/10" />
      <div className="absolute inset-0 -z-10 bg-ink/10" />
      <Container className="relative grid min-h-[calc(100svh-4rem)] items-start gap-10 py-10 md:min-h-[calc(100svh-4.5rem)] md:grid-cols-2 md:items-center md:gap-12 md:py-20 lg:py-24">
        <div className="animate-[fade-up_0.6s_ease-out_both] md:pt-0">
          <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.pre')}<span className="text-accent">{t('hero.accent')}</span>{t('hero.post')}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mutedDark md:text-lg">{t('hero.sub')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={MessageCircle} arrow={false} data-cta="hero-whatsapp" className="hidden justify-center md:inline-flex">
              {t('common.waQuote')}
            </Button>
            <Button to="/referanslar" variant="ghostDark" className="justify-center">{t('common.viewReferences')}</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
