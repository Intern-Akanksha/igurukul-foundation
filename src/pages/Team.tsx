import { useEffect, useMemo, useRef } from 'react'
import { Mail, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { StrengthSection } from '../components/FoundationSections'
import Reveal from '../components/Reveal'
import TeamSection, { TeamMemberImage } from '../components/TeamSection'
import { teamMembers } from '../data/team'

export default function Team() {
  const { hash } = useLocation()
  const detailRef = useRef<HTMLElement | null>(null)
  const selectedMember = useMemo(
    () => (hash ? teamMembers.find((member) => `#${member.id}` === hash) : undefined),
    [hash],
  )

  useEffect(() => {
    if (!selectedMember || !detailRef.current) return
    const id = window.setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    return () => window.clearTimeout(id)
  }, [selectedMember])

  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <TeamSection variant="compact" selectedMemberId={selectedMember?.id} />
      {selectedMember ? (
        <section ref={detailRef} className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal key={selectedMember.id} immediate from="pop">
              <div className="lux-panel lux-panel--padded relative overflow-hidden">
                <div className="lux-glow lux-glow--gold pointer-events-none absolute -left-8 top-8 h-28 w-28" />
                <div className="lux-glow lux-glow--burgundy pointer-events-none absolute right-0 top-0 h-32 w-32" />
                <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:p-10">
                  <div className="mx-auto w-full max-w-[220px]">
                    <div className="igf-motion-img-wrap relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/84 shadow-[0_18px_50px_rgba(31,41,55,0.1)]">
                      <TeamMemberImage member={selectedMember} />
                    </div>
                  </div>
                  <div>
                    <div className="lux-badge-pill">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      Team Member Spotlight
                    </div>
                    <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl">
                      {selectedMember.name}
                    </h2>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] lux-text-gold">
                      {selectedMember.role}
                    </p>
                    <div className="mt-6 space-y-4">
                      {(selectedMember.bioParagraphs ?? (selectedMember.bio ? [selectedMember.bio] : [])).map((paragraph, index) => (
                        <p key={index} className="text-base leading-8 lux-text-ink/78">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {selectedMember.email ? (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold lux-text-gold transition hover:lux-text-gold"
                      >
                        <Mail className="h-4 w-4" aria-hidden />
                        {selectedMember.email}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
      <StrengthSection />
    </div>
  )
}

