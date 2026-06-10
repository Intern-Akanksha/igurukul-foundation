import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { ensureGsap } from '../lib/gsap'

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches)
      return

    const gsap = ensureGsap()
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (event: MouseEvent) => {
      xTo(event.clientX - window.innerWidth / 2)
      yTo(event.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(123,30,38,0.06)_42%,transparent_68%)] blur-3xl"
    />
  )
}
