import { useCallback, useEffect, useMemo, useState } from 'react'
import { LangContext } from './langContext'

function readSavedLang() {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'fr'
  } catch {
    return 'fr'
  }
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(readSavedLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // private browsing: the choice just isn't remembered
    }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  }, [])

  // Texts in content.js are either plain strings or { fr, en } objects
  const tr = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value) && 'fr' in value) {
        return value[lang] ?? value.fr
      }
      return value
    },
    [lang],
  )

  const ctx = useMemo(() => ({ lang, toggleLang, tr }), [lang, toggleLang, tr])

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>
}
