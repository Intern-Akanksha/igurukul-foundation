import { useEffect, useMemo, useRef } from 'react'
import { Mail, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { ClosingQuoteSection, StrengthSection } from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'
import GsapRevealBlock from '../components/GsapRevealBlock'
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
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Team"
        title="Meet Our Team"
        lead="The volunteers and leaders who guide our programs, events, and community initiatives."
      />
      <TeamSection variant="compact" selectedMemberId={selectedMember?.id} hideHeader />
      {selectedMember ? (
        <section ref={detailRef} className="lux-section px-4 pb-8 pt-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <GsapRevealBlock immediate>
              <div className="lux-panel lux-panel--padded relative overflow-hidden">
                <div className="lux-glow lux-glow--gold pointer-events-none absolute -left-8 top-8 h-28 w-28" />
                <div className="lux-glow lux-glow--burgundy pointer-events-none absolute right-0 top-0 h-32 w-32" />
                <div className="relative grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                  <div className="mx-auto w-full max-w-[220px]">
                    <div className="igf-motion-img-wrap relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-[color-mix(in_srgb,var(--lux-gold)_20%,transparent)] shadow-[var(--lux-shadow-soft)]">
                      <TeamMemberImage member={selectedMember} />
                    </div>
                  </div>
                  <div>
                    <div className="lux-badge-pill">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      Team Member Spotlight
                    </div>
                    <h2 className="mt-5 lux-section-title text-4xl">{selectedMember.name}</h2>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] lux-text-gold">
                      {selectedMember.role}
                    </p>
                    <div className="mt-6 space-y-4">
                      {(selectedMember.bioParagraphs ?? (selectedMember.bio ? [selectedMember.bio] : [])).map(
                        (paragraph, index) => (
                          <p key={index} className="lux-body-lg text-base">
                            {paragraph}
                          </p>
                        ),
                      )}
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
            </GsapRevealBlock>
          </div>
        </section>
      ) : null}
      <StrengthSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
