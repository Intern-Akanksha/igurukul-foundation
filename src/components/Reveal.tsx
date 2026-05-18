import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LUXURY_EASE } from '../motion/presets'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../utils/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  from?: 'up' | 'left' | 'right' | 'scale' | 'fade' | 'zoom' | 'pop'
  /** Run animation on mount (hero) instead of scroll */
  immediate?: boolean
}

const variants = {
  up: { opacity: 0, y: 36, filter: 'blur(6px)' },
  left: { opacity: 0, x: -44, filter: 'blur(4px)' },
  right: { opacity: 0, x: 44, filter: 'blur(4px)' },
  scale: { opacity: 0, y: 22, scale: 0.94 },
  fade: { opacity: 0 },
  zoom: { opacity: 0, scale: 0.92, y: 16 },
  pop: { opacity: 0, y: 28, scale: 0.96 },
}

const visible = { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }

export default function Reveal({
  children,
  className,
  delayMs = 0,
  from = 'up',
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()
  const inView = useInView(ref, {
    once: true,
    margin: '-8% 0px -8% 0px',
    amount: 0.12,
  })
  const show = immediate || inView
  const useSpring = from === 'scale' || from === 'pop' || from === 'zoom'

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[from]}
      animate={show ? visible : variants[from]}
      transition={
        useSpring
          ? {
              type: 'spring',
              stiffness: 85,
              damping: 22,
              delay: delayMs / 1000,
            }
          : {
              duration: 0.85,
              delay: delayMs / 1000,
              ease: LUXURY_EASE,
            }
      }
      className={cn('transform-gpu will-change-[transform,opacity,filter]', className)}
    >
      {children}
    </motion.div>
  )
}
