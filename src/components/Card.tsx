import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type CardProps = {
  children: ReactNode
  className?: string
  glow?: boolean
}

export default function Card({ children, className, glow }: CardProps) {
  return (
    <div
      className={cn(
        'igf-paper rounded-3xl border border-black/10',
        glow && 'shadow-[0_26px_86px_rgba(42,36,27,0.18)]',
      )}
    >
      <div className={cn('p-7', className)}>{children}</div>
    </div>
  )
}
