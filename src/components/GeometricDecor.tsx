/** Exhibition-style geometric accents — visual only. */
export default function GeometricDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        className="absolute -right-8 top-8 h-24 w-24 opacity-20 sm:h-32 sm:w-32"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 5 L95 50 L50 95 L5 50 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-cyan-400"
        />
        <path
          d="M50 25 L75 50 L50 75 L25 50 Z"
          fill="currentColor"
          className="text-fuchsia-500/40"
        />
      </svg>
      <svg
        className="absolute -left-4 bottom-16 h-20 w-20 opacity-15"
        viewBox="0 0 80 80"
        fill="none"
      >
        <rect x="10" y="10" width="25" height="25" fill="currentColor" className="text-amber-400" />
        <rect
          x="45"
          y="45"
          width="25"
          height="25"
          fill="currentColor"
          className="text-violet-500/50"
        />
      </svg>
    </div>
  )
}
