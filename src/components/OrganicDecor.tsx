/** Soft organic blobs — editorial accent shapes (visual only). */
export default function OrganicDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="igf-organic-blob igf-organic-blob-olive -left-16 top-24 h-56 w-56 opacity-80 sm:h-72 sm:w-72 igf-float-slow" />
      <div
        className="igf-organic-blob igf-organic-blob-cream -right-12 top-1/3 h-64 w-64 opacity-90 sm:h-80 sm:w-80 igf-float-slow"
        style={{ animationDelay: '-2.5s' }}
      />
      <div
        className="igf-organic-blob igf-organic-blob-rust bottom-32 left-1/4 h-40 w-48 opacity-70 igf-float-slow"
        style={{ animationDelay: '-4s' }}
      />
    </div>
  )
}
