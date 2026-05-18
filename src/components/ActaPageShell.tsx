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
    <div className={cn('acta-page', className)}>
      <header className={cn('acta-page-hero', align === 'center' && 'acta-page-hero--center')}>
        <div className="acta-page-hero__blob" aria-hidden />
        <div className="acta-inner acta-page-hero__inner">
          <Reveal immediate from="scale">
            <p className="acta-eyebrow">{eyebrow}</p>
            <h1 className="acta-page-hero__title mt-4">{title}</h1>
            {lead ? <p className="acta-page-hero__lead">{lead}</p> : null}
          </Reveal>
        </div>
      </header>
      <div className="acta-page-body">
        <div className="acta-inner pb-16 sm:pb-20 md:pb-24">{children}</div>
      </div>
    </div>
  )
}
