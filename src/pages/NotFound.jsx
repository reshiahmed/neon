import SEO from '../components/SEO'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <>
      <SEO title="404 | Arslan Tanıtım" description={t('pages.notFound.desc')} path="/404" />
      <section className="bg-ink py-16 md:py-40">
        <Container className="text-center">
          <p className="font-display text-7xl font-black text-accent md:text-9xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">{t('pages.notFound.title')}</h1>
          <p className="mx-auto mt-3 max-w-md text-mutedDark">{t('pages.notFound.desc')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/" variant="primary">{t('common.backHome')}</Button>
            <Button to="/hizmetler" variant="ghostDark">{t('pages.notFound.services')}</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
