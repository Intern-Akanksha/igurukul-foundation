import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LUXURY_EASE } from '../motion/presets'

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="igf-page-intro"
      initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
      transition={{ duration: 0.55, ease: LUXURY_EASE }}
    >
      {children}
    </motion.div>
  )
}
