import type { ReactNode } from 'react'

type LuxPageShellProps = {
  children: ReactNode
}

export default function LuxPageShell({ children }: LuxPageShellProps) {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" aria-hidden />
      {children}
    </div>
  )
}
