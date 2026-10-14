// Wavy edge between two colored sections. "fill" is the color of the next section.
export default function Wave({ fill, flip = false, className = '' }) {
  return (
    <div className={`pointer-events-none absolute left-0 w-full leading-none ${flip ? 'top-0 rotate-180 -translate-y-px' : 'bottom-0 translate-y-px'} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-10 w-full md:h-16" style={{ fill }}>
        <path d="M0,58 C180,96 360,18 600,40 C840,62 1020,98 1230,66 C1320,52 1390,40 1440,44 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}
