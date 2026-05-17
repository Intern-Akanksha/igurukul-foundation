/** Decorative saffron skyline strip — visual only, no content. */
export default function HeritageSkyline() {
  return (
    <div className="igf-skyline-banner relative h-9 w-full shrink-0 sm:h-11" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 64"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5c842" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#e8821a" />
            <stop offset="100%" stopColor="#8b4513" />
          </linearGradient>
        </defs>
        <rect width="1200" height="64" fill="url(#skyGrad)" />
        <g fill="#2a1810" opacity="0.85">
          <path d="M80 64V38l12-8 12 8v26H80zm200 0V32l8-14 8 6 8-6 8 14v32H280zm120 0V28l10-12 10 12v36H400zm180 0V34l14-10 14 10v30H580zm100 0V30l-20-18-20 18v34H680zm140 0V36l16-14 16 14v28H820zm160 0V32l12-16 12 16v32H980zm100 0V40l18-12 18 12v24H1080z" />
          <ellipse cx="600" cy="52" rx="28" ry="8" opacity="0.5" />
          <path d="M520 64c8-12 16-18 24-18s16 6 24 18H520zm80 0c6-10 12-14 20-14s14 4 20 14H600z" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}
