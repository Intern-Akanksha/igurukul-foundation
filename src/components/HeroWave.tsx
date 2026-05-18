/** Organic hero-to-content wave — visual only. */
export default function HeroWave({ className = '' }: { className?: string }) {
  return (
    <div className={`igf-editorial-wave ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-16 w-full sm:h-24 md:h-28">
        <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,72 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
