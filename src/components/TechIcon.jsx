import { icons } from '../data/icons'

// One-color tech logo. Falls back to a small square when there is no logo.
export default function TechIcon({ name, size = 18, className = '' }) {
  const url = name ? icons[name] : null
  if (!url) {
    return <span className={`inline-block shrink-0 rotate-45 bg-current opacity-60 ${className}`} style={{ width: size * 0.4, height: size * 0.4, margin: size * 0.3 }} aria-hidden="true" />
  }
  return <span className={`tech-icon ${className}`} style={{ width: size, height: size, '--icon': `url("${url}")` }} aria-hidden="true" />
}
