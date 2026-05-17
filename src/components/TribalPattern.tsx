import { cn } from '../utils/cn'

type TribalPatternProps = {
  side?: 'left' | 'right' | 'both'
  className?: string
}

/** Decorative tribal line art — visual only, no content. */
export default function TribalPattern({ side = 'both', className }: TribalPatternProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-[2] flex justify-between', className)} aria-hidden>
      {(side === 'left' || side === 'both') && <div className="igf-tribal-stripe h-full w-10 sm:w-14 md:w-20" />}
      {(side === 'right' || side === 'both') && (
        <div className="igf-tribal-stripe h-full w-10 scale-x-[-1] sm:w-14 md:w-20" />
      )}
    </div>
  )
}
