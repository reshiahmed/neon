import { useState } from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import { services } from '../data/services'
import { site } from '../data/site'
import { waLink, waMessages } from '../lib/whatsapp'
import { useLang, pick } from '../i18n/LanguageContext'
import { cn } from '../lib/cn'

const field = 'w-full rounded-none border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent'
const label = 'mb-1.5 block font-display text-sm font-semibold tracking-tight text-ink'

export default function QuoteForm({ defaultService = '', compact = false }) {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    window.open(waLink(waMessages.quote(form)), '_blank', 'noopener,noreferrer')
  }
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent('Teklif Talebi')}&body=${encodeURIComponent(waMessages.quote(form))}`

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <div>
          <label className={label} htmlFor="qf-name">{t('form.name')}</label>
          <input id="qf-name" className={field} value={form.name} onChange={set('name')} placeholder={t('form.namePh')} required />
        </div>
        <div>
          <label className={label} htmlFor="qf-phone">{t('form.phone')}</label>
          <input id="qf-phone" type="tel" className={field} value={form.phone} onChange={set('phone')} placeholder={t('form.phonePh')} required />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="qf-service">{t('form.service')}</label>
        <select id="qf-service" className={field} value={form.service} onChange={set('service')}>
          <option value="">{t('form.select')}</option>
          {services.map((s) => <option key={s.slug} value={pick(s.title, lang)}>{pick(s.title, lang)}</option>)}
          <option value={t('form.other')}>{t('form.other')}</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="qf-message">{t('form.message')}</label>
        <textarea id="qf-message" rows={compact ? 3 : 4} className={field} value={form.message} onChange={set('message')} placeholder={t('form.messagePh')} />
      </div>
      <button type="submit" data-cta="quoteform-submit" className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 bg-accent px-6 font-display font-semibold tracking-tight text-white transition-colors hover:bg-accent-600">
        <MessageCircle className="h-5 w-5" strokeWidth={2} /> {t('common.waSend')}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink/50">
        <Mail className="h-3.5 w-3.5" /> {t('form.emailPre')} <a href={mailtoHref} className="font-semibold text-accent hover:underline">{t('form.emailLink')}</a>
      </p>
    </form>
  )
}
