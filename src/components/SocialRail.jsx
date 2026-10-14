import { profile } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

// Fixed vertical links on the left (large screens). mix-blend-difference keeps
// them readable on dark, green and cream sections.
export default function SocialRail() {
  const links = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon, external: true },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
    { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
  ]

  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 text-cream mix-blend-difference lg:flex">
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="opacity-60 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
        >
          <Icon />
        </a>
      ))}
      <span className="mt-2 h-16 w-px bg-cream/40" />
    </div>
  )
}
