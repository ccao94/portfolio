import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { nav, profile, hero } from '../data/content'

export default function Navbar() {
  const { lang, toggleLang, tr } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marks the link of the section currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const solid = scrolled || open

  // Mobile menu: close it first, then scroll. Scrolling while the menu
  // collapses gets cancelled on phones, so the link seemed to do nothing.
  function goTo(e, id) {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }, 260)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-cream/10 bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-cream">
          {profile.brand}
          <span className="text-matcha">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`link-grow text-sm transition-colors ${active === id ? 'text-matcha' : 'text-cream/70 hover:text-cream'}`}
            >
              {tr(label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-cream/20 px-3 py-1 font-mono text-xs text-cream/80 transition-colors hover:border-matcha hover:text-matcha"
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-matcha md:inline-block"
          >
            {tr(hero.ctaContact)}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-cream md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-forest md:hidden"
            aria-label="Sections"
          >
            <div className="flex flex-col px-5 py-4">
              {nav.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => goTo(e, id)}
                  className="border-b border-cream/15 py-3 font-display text-xl text-cream last:border-none"
                >
                  {tr(label)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}