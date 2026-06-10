import { useLayoutEffect, useRef } from 'react'
import { ensureGsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type GsapCounterValueProps = {
  end: number
  suffix?: string
}

export default function GsapCounterValue({ end, suffix = '' }: GsapCounterValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (!ref.current) return
    if (reduced) {
      ref.current.textContent = `${end}${suffix}`
      return
    }
    const gsap = ensureGsap()
    const target = { value: 0 }
    const el = ref.current
    const anim = gsap.to(target, {
      value: end,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(target.value)}${suffix}`
      },
    })
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [end, reduced, suffix])

  return <span ref={ref}>{`${end}${suffix}`}</span>
}
