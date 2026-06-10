import { useLayoutEffect, useRef } from 'react'
import { ensureGsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../utils/cn'

type GsapSplitHeadlineProps = {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  immediate?: boolean
}

export default function GsapSplitHeadline({
  text,
  className,
  as = 'h1',
  immediate = false,
}: GsapSplitHeadlineProps) {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const reduced = usePrefersReducedMotion()
  const words = text.split(' ')
  const Tag = as

  useLayoutEffect(() => {
    if (reduced || !ref.current) return
    const gsap = ensureGsap()
    const el = ref.current
    const targets = el.querySelectorAll('[data-char]')
    const anim = gsap.fromTo(
      targets,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.018,
        ease: 'power4.out',
        delay: immediate ? 0.12 : 0,
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
  }, [immediate, reduced, text])

  return (
    <Tag ref={ref} className={cn(className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom pr-[0.22em]">
          <span className="inline-block">
            {[...word].map((char, charIndex) => (
              <span key={`${char}-${charIndex}`} data-char className="inline-block">
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </Tag>
  )
}
