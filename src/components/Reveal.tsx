import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../utils/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  from?: 'up' | 'left' | 'right'
}

export default function Reveal({
  children,
  className,
  delayMs,
  from = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            return
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={cn(
        'transform-gpu transition-all duration-700 ease-out',
        visible
          ? 'translate-x-0 translate-y-0 opacity-100'
          : from === 'left'
            ? '-translate-x-5 opacity-0'
            : from === 'right'
              ? 'translate-x-5 opacity-0'
              : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
