import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { strings } from './strings'
import { pick } from '../lib/loc'

export { pick }

const LangContext = createContext(null)
const KEY = 'arslan_lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const s = localStorage.getItem(KEY)
      if (s === 'en' || s === 'tr') return s
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('en')) return 'en'
    } catch { /* ignore */ }
    return 'tr'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(KEY, lang) } catch { /* ignore */ }
  }, [lang])

  const setLang = useCallback((l) => setLangState(l === 'en' ? 'en' : 'tr'), [])

  // t('a.b.c') with fallback to Turkish, then to the key itself.
  const t = useCallback((path) => {
    const parts = path.split('.')
    const read = (root) => parts.reduce((o, p) => (o == null ? o : o[p]), root)
    const val = read(strings[lang])
    return val !== undefined ? val : (read(strings.tr) ?? path)
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
