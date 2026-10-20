import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { profile, projects } from '../data/content'
import { ArrowRightIcon, GitHubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

// Steps of a pipeline, shown as boxes linked by arrows, one after the other
function Flow({ flow }) {
  const { tr } = useLang()
  return (
    <div className="mt-5">
      <p className="eyebrow mb-2 text-cream/40">{tr(flow.label)}</p>
      <ol className="flex flex-wrap items-center gap-y-2 font-mono text-xs">
        {flow.steps.map((step, i) => {
          const last = i === flow.steps.length - 1
          return (
            <motion.li
              key={i}
              className="flex items-center"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.35 }}
            >
              {i > 0 && <span className="mx-2 text-matcha">→</span>}
              <span
                className={`whitespace-nowrap rounded-md border px-2.5 py-1 ${
                  last ? 'border-matcha/60 text-matcha' : 'border-cream/15 bg-cream/5 text-cream/75'
                }`}
              >
                {tr(step)}
              </span>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

// Screenshot with an optional caption under it
function Shot({ shot }) {
  const { tr } = useLang()
  return (
    <figure>
      <img
        src={shot.src}
        alt={tr(shot.alt)}
        loading="lazy"
        className="w-full rounded-xl border border-cream/10"
      />
      {shot.caption && <figcaption className="mt-2 font-mono text-[11px] text-cream/45">{tr(shot.caption)}</figcaption>}
    </figure>
  )
}

function ProjectCard({ project, index }) {
  const { tr } = useLang()
  const number = String(index + 1).padStart(2, '0')
  const featured = index === 0
  const images = project.images ?? []

  return (
    <Reveal delay={0.05}>
      <article
        id={`project-${project.id}`}
        className={`group scroll-mt-24 rounded-3xl p-px transition-transform duration-300 hover:-translate-y-1 ${
          featured ? 'bg-gradient-to-br from-matcha/50 via-cream/10 to-forest' : 'bg-cream/10'
        }`}
      >
        <div className="h-full rounded-[calc(1.5rem-1px)] bg-ink-soft/95 p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-matcha/30 bg-matcha/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-matcha">
              {tr(project.badge)}
            </span>
            <span className="font-mono text-xs text-cream/50">{tr(project.date)}</span>
          </div>

          <div className="mt-6 flex items-baseline gap-4 md:gap-6">
            <span className="font-display text-5xl italic text-cream/15 transition-colors duration-300 group-hover:text-matcha/40 md:text-6xl">
              {number}
            </span>
            <h3 className="font-display text-2xl leading-tight md:text-4xl">{tr(project.title)}</h3>
          </div>

          {/* One screenshot: next to the text. Several: in a row under the text */}
          <div className={images.length === 1 ? 'mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start' : 'mt-6'}>
            <div>
              <p className="max-w-3xl text-sm leading-relaxed text-cream/70 md:text-base">{tr(project.description)}</p>
              {project.flows.map((flow, i) => (
                <Flow key={i} flow={flow} />
              ))}
            </div>
            {images.length === 1 && <Shot shot={images[0]} />}
          </div>
          {images.length > 1 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {images.map((shot) => (
                <Shot key={shot.src} shot={shot} />
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-cream/10 pt-6">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-cream/10 px-3 py-1 text-xs text-cream/60">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-matcha"
                  >
                    {tr(projects.demoLabel)}
                    <ArrowRightIcon width={14} height={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                  >
                    <GitHubIcon width={16} height={16} />
                    {tr(projects.githubLabel)}
                  </a>
                )}
              </div>
              {/* Free hosting sleeps, so the first visit is slow */}
              {project.demo && project.demoNote && <p className="font-mono text-[11px] text-cream/45">{tr(project.demoNote)}</p>}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const { tr } = useLang()

  return (
    <section id="projects" className="grid-bg relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:pl-20">
        <SectionHeader label={projects.label} title={projects.title} titleItalic={projects.titleItalic} desc={projects.desc} />

        <div className="flex flex-col gap-8">
          {projects.list.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-cream/20 px-7 py-3.5 font-medium transition-colors hover:border-matcha hover:text-matcha"
          >
            <GitHubIcon />
            {tr(projects.allRepos)}
            <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
