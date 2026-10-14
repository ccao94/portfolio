import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { about, profile } from '../data/content'
import Reveal from './Reveal'
import TechIcon from './TechIcon'
import Wave from './Wave'

// Access badge hanging from a lanyard. It drops in and swings a little before settling.
function Badge() {
  const { tr } = useLang()
  const b = about.badge

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[290px] origin-top"
      initial={{ y: -240, rotate: 14, opacity: 0 }}
      whileInView={{ y: 0, rotate: -3, opacity: 1 }}
      whileHover={{ rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 55, damping: 7, mass: 1.1 }}
    >
      {/* Strap and clip */}
      <div className="absolute bottom-full left-1/2 h-[340px] w-4 -translate-x-1/2 bg-ink shadow-inner">
        <div className="mx-auto h-full w-1 bg-[repeating-linear-gradient(to_bottom,var(--color-matcha)_0_10px,transparent_10px_20px)] opacity-40" />
      </div>
      <div className="absolute -top-5 left-1/2 z-10 h-10 w-7 -translate-x-1/2 rounded-md border border-cream-2 bg-cream-2 shadow-md" />

      <div className="relative rounded-2xl bg-cream p-3 text-ink shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rounded-t-xl bg-cream">
          <div className="mx-auto mt-2 h-1.5 w-8 rounded-full bg-ink/20" />
        </div>

        <div className="flex items-center justify-between px-1 pb-3 pt-2">
          <span className="font-display text-lg font-bold">
            {profile.brand}
            <span className="text-olive">.</span>
          </span>
          {/* Smart card chip */}
          <span className="grid h-6 w-8 grid-cols-3 gap-px overflow-hidden rounded-[4px] border border-olive/40 bg-olive/15 p-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="rounded-[1px] bg-olive/30" />
            ))}
          </span>
        </div>

        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-cream-2">
          <img src={profile.photo} alt={profile.fullName} className="h-full w-full object-cover" style={{ objectPosition: profile.photoPosition }} />
        </div>

        <div className="px-1 pt-4">
          <p className="font-display text-2xl leading-tight">{profile.fullName}</p>
          <p className="mt-1 font-mono text-xs text-olive">{b.role}</p>
          <p className="mt-0.5 font-mono text-xs text-ink/60">
            {b.school} · {tr(b.year)}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 rounded-lg bg-forest px-3 py-2.5 text-cream">
          <span className="font-mono text-[10px] uppercase leading-tight tracking-wider">{tr(b.tag)}</span>
          <span
            className="h-6 w-16 shrink-0 opacity-80"
            style={{ background: 'repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 3px, currentColor 3px 4px, transparent 4px 7px)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { tr } = useLang()

  return (
    <section id="about" className="relative overflow-hidden bg-forest pb-40 pt-28 md:pb-48 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-start gap-20 px-5 md:px-8 lg:grid-cols-[300px_1fr] lg:gap-24 lg:pl-20">
        <div className="pt-24 lg:pt-10">
          <Badge />
        </div>

        <div>
          <Reveal>
            <p className="eyebrow mb-5 text-matcha">{tr(about.label)}</p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {tr(about.title)} <em className="text-matcha">{tr(about.titleItalic)}</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-cream/80 md:text-[1.05rem]">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'dropcap' : ''}>
                {tr(p)}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <p className="eyebrow mb-5 text-cream/50">{tr(about.stackLabel)}</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-5">
              {about.stack.map(({ icon, name }, i) => (
                <motion.li
                  key={name}
                  className="flex flex-col items-center gap-2 text-cream"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                >
                  <TechIcon name={icon} size={34} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cream/60">{name}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-14">
            <p className="eyebrow mb-5 text-cream/50">{tr(about.factsLabel)}</p>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
              {about.facts.map((f) => (
                <div key={f.value} className="bg-forest-deep p-6">
                  <p className="font-display text-4xl text-matcha">{f.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{tr(f.text)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Wave fill="var(--color-cream)" />
    </section>
  )
}
