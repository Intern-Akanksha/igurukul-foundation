import type { ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../utils/cn'

type ParallaxProps = {
  children: ReactNode
  className?: string
  /** Vertical shift in px across the element's scroll range */
  offset?: number
  /** Scale subtly while scrolling */
  scale?: boolean
}

export default function Parallax({ children, className, offset = 40, scale = false }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const s = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [1.04, 1, 0.98] : [1, 1, 1])

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y, scale: scale ? s : 1 }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
