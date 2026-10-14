import { useLang } from '../i18n/useLang'
import { places, skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

// Chip that links a skill to the place where it was used
function PlaceChip({ id }) {
  const { tr } = useLang()
  const place = places[id]
  if (!place) return null
  const cls = 'rounded-full border border-ink/15 px-2 py-0.5 font-mono text-[10px] leading-4 text-ink/60'

  if (!place.href) return <span className={cls}>{tr(place.label)}</span>
  return (
    <a href={place.href} className={`${cls} transition-colors hover:border-olive hover:bg-olive hover:text-cream`}>
      {tr(place.label)}
    </a>
  )
}

export default function Skills() {
  const { tr } = useLang()

  return (
    <section id="skills" className="relative bg-cream py-28 text-ink md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:pl-20">
        <SectionHeader tone="light" label={skills.label} title={skills.title} titleItalic={skills.titleItalic} desc={skills.desc} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, gi) => (
            <Reveal
              key={gi}
              delay={(gi % 3) * 0.08}
              className="rounded-2xl border border-ink/10 bg-cream-2/50 p-6 transition-colors duration-300 hover:border-olive/40"
            >
              <h3 className="mb-5 border-b border-ink/10 pb-4 font-display text-2xl">{tr(group.title)}</h3>
              <ul className="space-y-3.5">
                {group.items.map((skill, si) => (
                  <li key={si} className="flex items-start justify-between gap-3">
                    <span className="flex max-w-[58%] shrink-0 items-center gap-2.5 text-sm font-medium">
                      <span className="flex w-5 justify-center text-olive">
                        <TechIcon name={skill.icon} size={18} />
                      </span>
                      {tr(skill.name)}
                    </span>
                    <span className="flex flex-wrap justify-end gap-1">
                      {skill.used.map((id) => (
                        <PlaceChip key={id} id={id} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
