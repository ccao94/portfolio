// Small tea leaf with its central vein, takes the text color
export default function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 21C3 10 10 3 21 3c0 11-7 18-18 18z" fill="currentColor" />
      <path d="M3 21L15 9" stroke="var(--color-ink)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}
