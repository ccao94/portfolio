import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { beyond } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Leaf from './Leaf'

// One moment of the vertical timeline. Alternates left / right on large screens.
function Moment({ moment, index }) {
  const { tr } = useLang()
  const right = index % 2 === 1

  return (
    <li className="relative grid md:grid-cols-2 md:gap-16">
      {/* Tea leaf on the line instead of a plain dot */}
      <span className="absolute left-[2px] top-7 z-10 md:left-1/2 md:-translate-x-1/2">
        <motion.span
          className="block text-matcha"
          initial={{ scale: 0, rotate: -60 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 }}
        >
          <Leaf className="h-5 w-5" />
        </motion.span>
      </span>
      <Reveal
        x={right ? 30 : -30}
        y={0}
        className={`ml-10 rounded-3xl border border-cream/10 bg-ink-soft p-7 md:ml-0 ${right ? 'md:col-start-2' : 'md:text-right'}`}
      >
        <div className={`flex flex-wrap items-center gap-3 ${right ? '' : 'md:justify-end'}`}>
          <span className="font-mono text-xs text-cream/50">{tr(moment.date)}</span>
          <span className="rounded-full border border-matcha/30 bg-matcha/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-matcha">
            {tr(moment.tag)}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight md:text-3xl">{tr(moment.title)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/70">{tr(moment.text)}</p>
      </Reveal>
    </li>
  )
}

export default function Beyond() {
  const { tr } = useLang()

  return (
    <section id="beyond" className="relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:pl-20">
        <SectionHeader label={beyond.label} title={beyond.title} titleItalic={beyond.titleItalic} desc={beyond.desc} />

        <ol className="relative space-y-10">
          <span className="absolute bottom-0 left-[12px] top-0 w-px bg-gradient-to-b from-matcha/0 via-matcha/40 to-matcha/0 md:left-1/2" aria-hidden="true" />
          {beyond.moments.map((m, i) => (
            <Moment key={i} moment={m} index={i} />
          ))}
        </ol>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {beyond.hobbies.map((h, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="group rounded-3xl border border-cream/10 p-7 transition-colors duration-300 hover:border-matcha/40 hover:bg-forest/30"
            >
              <span className="block h-1.5 w-8 rounded-full bg-cream/20 transition-all duration-300 group-hover:w-14 group-hover:bg-matcha" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl">{tr(h.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{tr(h.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
