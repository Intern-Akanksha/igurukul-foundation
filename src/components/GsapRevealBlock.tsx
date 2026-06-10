import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { ensureGsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../utils/cn'

type GsapRevealBlockProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  immediate?: boolean
}

export default function GsapRevealBlock({
  children,
  className,
  delay = 0,
  y = 36,
  immediate = false,
}: GsapRevealBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !ref.current) return
    const gsap = ensureGsap()
    const el = ref.current
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        delay,
        ease: 'power3.out',
        scrollTrigger: immediate
          ? undefined
          : {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
      },
    )
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [delay, immediate, reduced, y])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
