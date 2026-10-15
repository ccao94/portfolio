import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content'
import Leaf from './Leaf'

// Green shutter: a leaf drops into the name, the name fills up like a cup of tea, then the shutter slides up
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
        {/* Leaf drifting down into the name */}
        <span className="absolute -top-14 left-1/2 -translate-x-1/2 md:-top-20">
          <motion.span
            className="block text-matcha"
            initial={{ y: -30, x: 0, rotate: -40, opacity: 0 }}
            animate={{ y: [-30, 10, 40, 70], x: [0, 14, -10, 0], rotate: [-40, 0, 25, 10], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Leaf className="h-7 w-7 md:h-9 md:w-9" />
          </motion.span>
        </span>
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
