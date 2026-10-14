import { useLang } from '../i18n/useLang'
import { experience } from '../data/content'
import { ArrowRightIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Wave from './Wave'

function JobCard({ job, index }) {
  const { tr } = useLang()

  return (
    <Reveal delay={index * 0.1} className="flex h-full flex-col rounded-3xl border border-cream/10 bg-forest-deep p-7 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs leading-relaxed text-cream/50">{tr(job.date)}</span>
        <span className="shrink-0 rounded-full border border-cream/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream/70">
          {tr(job.type)}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-tight">{tr(job.role)}</h3>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-matcha">
        {job.company}
        {job.team && <span className="text-cream/50"> · {job.team}</span>}
      </p>
      <p className="mt-1 text-xs text-cream/50">{tr(job.place)}</p>

      <ul className="mb-7 mt-6 space-y-2.5 text-sm leading-relaxed text-cream/75">
        {job.points.map((point, i) => (
          <li key={i} className="relative pl-4">
            <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 bg-matcha" />
            {tr(point)}
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-wrap gap-2 border-t border-cream/10 pt-5">
        {job.stack.map((tech, i) => (
          <li key={i} className="rounded-full bg-cream/10 px-3 py-1 font-mono text-[11px] text-cream/80">
            {tr(tech)}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

// Dashed card: the apprenticeship I'm looking for
function NextCard() {
  const { tr } = useLang()
  const n = experience.next

  return (
    <Reveal delay={0.2} className="flex h-full flex-col rounded-3xl border border-dashed border-cream/40 p-7">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-matcha">{tr(n.date)}</span>
        <span className="shrink-0 rounded-full bg-matcha px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
          {tr(n.type)}
        </span>
      </div>
      <h3 className="mt-5 font-display text-3xl italic leading-tight text-cream">{tr(n.title)}</h3>
      <p className="mb-8 mt-4 text-sm leading-relaxed text-cream/75">{tr(n.text)}</p>
      <a
        href="#contact"
        className="group mt-auto inline-flex items-center gap-2 self-start rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-matcha"
      >
        {tr(n.cta)}
        <ArrowRightIcon width={16} height={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-forest pb-40 pt-36 md:pb-48 md:pt-44">
      <Wave fill="var(--color-ink)" flip />

      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:pl-20">
        <SectionHeader label={experience.label} title={experience.title} titleItalic={experience.titleItalic} />

        <div className="grid gap-5 lg:grid-cols-3">
          {experience.list.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
          <NextCard />
        </div>
      </div>

      <Wave fill="var(--color-cream)" />
    </section>
  )
}
