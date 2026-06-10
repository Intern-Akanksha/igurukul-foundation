import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { cn } from '../utils/cn'

type ActaPageShellProps = {
  eyebrow: string
  title: ReactNode
  lead?: string
  align?: 'center' | 'left'
  children: ReactNode
  className?: string
}

export default function ActaPageShell({
  eyebrow,
  title,
  lead,
  align = 'center',
  children,
  className,
}: ActaPageShellProps) {
  return (
    <div className={cn('lux-page', className)}>
      <header className={cn('lux-page-hero', align === 'center' && 'lux-page-hero--center')}>
        <div className="lux-page-hero__blob" aria-hidden />
        <div className="lux-container lux-page-hero__inner">
          <Reveal immediate from="scale">
            <p className="lux-eyebrow">{eyebrow}</p>
            <h1 className="lux-page-hero__title mt-4">{title}</h1>
            {lead ? <p className="lux-page-hero__lead">{lead}</p> : null}
          </Reveal>
        </div>
      </header>
      <div className="lux-container pb-16 sm:pb-20 md:pb-24">{children}</div>
    </div>
  )
}
