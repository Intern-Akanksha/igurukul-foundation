import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../motion/presets'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
type StaggerRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function StaggerReveal({ children, className, delay = 0 }: StaggerRevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px', amount: 0.15 }}
      variants={staggerContainer}
      transition={{ delayChildren: delay }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={staggerItem}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
