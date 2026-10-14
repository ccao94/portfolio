import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { footer, profile } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Footer() {
  const { tr } = useLang()

  return (
    <footer className="bg-ink-soft px-5 pb-10 pt-16 font-mono text-[11px] tracking-wider text-cream/60 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <div className="space-y-1">
          {footer.lines.map((line, i) => (
            <p key={i}>{tr(line)}</p>
          ))}
        </div>
        <div className="md:text-center">
          <p>{profile.location}</p>
          <a href="#projects" className="link-grow mt-1 inline-block text-cream">
            {tr(footer.viewProjects)}
          </a>
        </div>
        <div className="md:text-right">
          <p className="inline-flex items-center gap-2 text-matcha">
            <span className="h-1.5 w-1.5 rounded-full bg-matcha" />
            {tr(footer.available)}
          </p>
        </div>
      </div>

      {/* Big name, rises a little when it comes into view */}
      <div className="overflow-hidden py-16 md:py-20">
        <motion.p
          className="select-none text-center font-display text-[26vw] font-bold leading-[0.85] tracking-tighter text-cream md:text-[19vw]"
          initial={{ y: '40%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          aria-hidden="true"
        >
          {profile.brand}
          <span className="text-matcha">.</span>
        </motion.p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-cream/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.fullName} · {tr(footer.builtWith)}
        </p>
        <div className="flex items-center gap-5 text-cream/80">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-matcha">
            <MailIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-matcha">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-matcha">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
