import type { ReactNode } from 'react'
import { cn } from '../utils/cn'
import Container from './Container'

type Props = {
  title: string
  subtitle?: ReactNode
  imageUrl: string
  align?: 'left' | 'center'
}

export default function PageHero({
  title,
  subtitle,
  imageUrl,
  align = 'left',
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="igf-hero-media absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="igf-hero-shade absolute inset-0" />
      <div className="igf-grain pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative py-16 sm:py-20">
        <div
          className={cn(
            'max-w-3xl rounded-3xl bg-white/75 p-8 shadow-[0_22px_70px_rgba(42,36,27,0.22)] backdrop-blur ring-1 ring-black/10',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-brick">
            iGurukul Foundation
          </div>
          <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <div className="mt-4 text-base leading-relaxed text-igf-gray">
              {subtitle}
            </div>
          ) : null}
        </div>
      </Container>
      <div className="igf-hero-swoosh pointer-events-none absolute inset-x-0 bottom-0 h-16" />
    </section>
  )
}
