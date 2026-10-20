import { useLang } from '../i18n/useLang'
import { places, skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

// Names of the places where a skill was used, as plain text
function usedIn(ids, tr) {
  return ids
    .map((id) => places[id])
    .filter(Boolean)
    .map((place) => tr(place.label))
    .join(' · ')
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
              <ul className="space-y-4">
                {group.items.map((skill, si) => (
                  <li key={si} className="flex items-center gap-3.5">
                    {/* Bigger logo in a soft tile, then the name and where it was used */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive">
                      <TechIcon name={skill.icon} size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium leading-snug">{tr(skill.name)}</span>
                      <span className="block font-mono text-[11px] leading-snug text-ink/50">{usedIn(skill.used, tr)}</span>
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
