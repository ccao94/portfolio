import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { path } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

// Axis: months since September 2020, up to December 2027
const SPAN = 87
const pct = (months) => `${(months / SPAN) * 100}%`

function monthsSinceStart() {
  const now = new Date()
  const months = (now.getFullYear() - 2020) * 12 + (now.getMonth() - 8) + now.getDate() / 31
  return Math.min(Math.max(months, 0), SPAN)
}

function Bar({ bar, index }) {
  const { tr } = useLang()
  const colors = {
    work: 'bg-olive',
    planned: 'bg-[repeating-linear-gradient(90deg,var(--color-olive)_0_4px,transparent_4px_7px)]',
  }

  return (
    <div className="absolute top-0" style={{ left: pct(bar.from), width: pct(bar.to - bar.from) }}>
      <motion.div
        className={`h-3.5 origin-left rounded-[2px] ${colors[bar.kind] ?? 'bg-ink'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      />
      {bar.label && (
        <motion.span
          className="absolute left-0 top-5 whitespace-nowrap font-mono text-[11px] text-ink/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {tr(bar.label)}
        </motion.span>
      )}
    </div>
  )
}

function Ruler() {
  const { tr } = useLang()
  const scrollRef = useRef(null)
  const today = monthsSinceStart()

  // On small screens the ruler scrolls sideways: start on the recent side
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [])

  let barIndex = 0

  return (
    <Reveal className="rounded-3xl border border-ink/10 bg-cream-2/50 p-5 md:p-8">
      <div ref={scrollRef} className="overflow-x-auto pb-2 pt-7">
        <div className="relative min-w-[680px]">
          {path.rows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-[96px_1fr] items-start">
              <span className="font-mono text-[11px] uppercase leading-[14px] tracking-wider text-ink/50">{tr(row.label)}</span>
              <div className="relative h-12">
                {row.bars.map((bar) => (
                  <Bar key={`${ri}-${bar.from}`} bar={bar} index={barIndex++} />
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-[96px_1fr]">
            <span />
            <div
              className="relative h-8 border-t border-ink/40"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(14 16 14 / 0.4) 1px, transparent 1px)',
                backgroundSize: `calc(100% / ${SPAN / 3}) 5px`,
                backgroundRepeat: 'repeat-x',
              }}
            >
              {path.years.map((year) => (
                <span key={year} className="absolute top-0 h-2.5 border-l border-ink/60" style={{ left: pct((year - 2020) * 12 - 8) }}>
                  <span className="absolute left-[-15px] top-3 font-mono text-[11px] text-ink/50">{year}</span>
                </span>
              ))}

              {/* "Today" marker, spans all the rows above */}
              <motion.span
                className="absolute bottom-0 border-l border-dashed border-olive"
                style={{ left: pct(today), top: `-${path.rows.length * 48 + 4}px` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <span className="absolute -left-6 -top-6 whitespace-nowrap font-mono text-[11px] text-olive">{tr(path.today)}</span>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 font-mono text-[11px] text-ink/50">{tr(path.legend)}</p>
    </Reveal>
  )
}

export default function Path() {
  const { tr } = useLang()

  return (
    <section id="path" className="relative bg-cream py-28 text-ink md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:pl-20">
        <SectionHeader tone="light" label={path.label} title={path.title} titleItalic={path.titleItalic} desc={path.desc} />

        <Ruler />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {path.schools.map((s, i) => (
            <Reveal
              key={i}
              delay={(i % 2) * 0.08}
              className="rounded-3xl border border-ink/10 p-7 transition-colors duration-300 hover:border-olive/40"
            >
              <p className="font-mono text-xs text-olive">{tr(s.years)}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight">{tr(s.title)}</h3>
              <p className="mt-2 text-sm font-medium">{tr(s.school)}</p>
              <p className="text-sm text-ink/55">{tr(s.place)}</p>
              {s.note && (
                <p className="mt-4 inline-block rounded-full bg-olive/10 px-3 py-1 font-mono text-[11px] text-olive">{tr(s.note)}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
