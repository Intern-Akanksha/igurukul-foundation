import { Children, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../motion/presets'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../utils/cn'

type RevealTextProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/** Staggered fade-up for hero headlines and editorial copy blocks. */
export default function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const reduced = usePrefersReducedMotion()
  const items = Children.toArray(children)

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      transition={{ delayChildren: delay, staggerChildren: 0.12 }}
      data-no-reveal
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={staggerItem}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
