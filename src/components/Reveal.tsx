import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../utils/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  from?: 'up' | 'left' | 'right' | 'scale'
}

const offsets = {
  up: { x: 0, y: 36, scale: 1 },
  left: { x: -40, y: 0, scale: 1 },
  right: { x: 40, y: 0, scale: 1 },
  scale: { x: 0, y: 24, scale: 0.94 },
}

export default function Reveal({ children, className, delayMs = 0, from = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px -8% 0px', amount: 0.15 })
  const offset = offsets[from]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: offset.scale }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: offset.x, y: offset.y, scale: offset.scale }
      }
      transition={{
        duration: 0.75,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('transform-gpu', className)}
    >
      {children}
    </motion.div>
  )
}
