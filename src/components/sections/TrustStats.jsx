import Container from '../ui/Container'
import { site } from '../../data/site'
import { useLang, pick } from '../../i18n/LanguageContext'

// Hard trust signals. Dark band, sits right under the hero.
export default function TrustStats({ bordered = false }) {
  const { t, lang } = useLang()
  return (
    <section className={bordered ? 'border-y border-line bg-paper py-10' : 'bg-coal py-10'}>
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.key} className="text-center">
              <dt className={`font-display text-3xl font-black tracking-tight md:text-5xl ${bordered ? 'text-ink' : 'text-white'}`}>
                {pick(s.value, lang)}
              </dt>
              <dd className={`mt-1 text-xs uppercase tracking-widest md:text-sm ${bordered ? 'text-muted' : 'text-mutedDark'}`}>
                {t(`stats.${s.key}`)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
