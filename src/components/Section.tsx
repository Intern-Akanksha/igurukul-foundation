import type { ReactNode } from 'react'
import Container from './Container'
import { cn } from '../utils/cn'

type SectionProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  bg?: 'default' | 'surface' | 'contrast'
  id?: string
}

export default function Section({
  children,
  className,
  containerClassName,
  bg = 'default',
  id,
}: SectionProps) {
  const bgCls =
    bg === 'surface'
      ? 'bg-white/60'
      : bg === 'contrast'
        ? 'bg-igf-charcoal text-white'
        : ''
  return (
    <section id={id} className={cn('py-20', bgCls, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
