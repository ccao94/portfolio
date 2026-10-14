import { useLang } from '../i18n/useLang'
import Reveal from './Reveal'

// Mono label + big serif title with an italic end + optional description
export default function SectionHeader({ label, title, titleItalic, desc, tone = 'dark', center = false }) {
  const { tr } = useLang()
  const accent = tone === 'light' ? 'text-olive' : 'text-matcha'
  const muted = tone === 'light' ? 'text-ink/60' : 'text-cream/60'

  return (
    <Reveal className={`mb-14 md:mb-20 ${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      <p className={`eyebrow mb-5 ${accent}`}>{tr(label)}</p>
      <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
        {tr(title)} <em className={`italic ${accent}`}>{tr(titleItalic)}</em>
      </h2>
      {desc && <p className={`mt-6 text-base md:text-lg leading-relaxed ${muted} ${center ? 'mx-auto' : ''} max-w-xl`}>{tr(desc)}</p>}
    </Reveal>
  )
}
