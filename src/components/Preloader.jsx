import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content'

// Green shutter: the name fills up like a tea glass, then the shutter slides up
export default function Preloader({ onDone }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(onDone, reduce ? 0 : 1900)
    return () => clearTimeout(timer)
  }, [onDone, reduce])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-forest"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="relative font-display text-6xl font-bold tracking-tight md:text-8xl"
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-forest-deep">{profile.brand}.</span>
        <motion.span
          className="absolute inset-0 text-cream"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.4, delay: 0.15, ease: 'easeInOut' }}
        >
          {profile.brand}
          <span className="text-matcha">.</span>
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
