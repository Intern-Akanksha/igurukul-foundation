import { ArrowRight, Mail, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Reveal from './Reveal'
import { teamMembers, type TeamMember } from '../data/team'
import { cn } from '../utils/cn'

type TeamSectionProps = {
  variant?: 'compact' | 'full'
  members?: TeamMember[]
  selectedMemberId?: string
  hideHeader?: boolean
}

export function TeamMemberImage({
  member,
  className,
}: {
  member: TeamMember
  className?: string
}) {
  const imageStyle = member.photoObjectPosition ? { objectPosition: member.photoObjectPosition } : undefined

  return member.photoUrl ? (
    <img
      src={member.photoUrl}
      alt={member.name}
      loading="lazy"
      decoding="async"
      style={imageStyle}
      className={cn('h-full w-full object-cover', !member.photoObjectPosition && 'object-top', className)}
    />
  ) : (
    <div className="flex h-full min-h-[240px] w-full items-center justify-center bg-[color-mix(in_srgb,var(--lux-gold)_12%,var(--lux-ivory))]">
      <User className="h-16 w-16 text-[color-mix(in_srgb,var(--lux-gold)_45%,transparent)]" aria-hidden />
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const paragraphs = member.bioParagraphs ?? (member.bio ? [member.bio] : [])

  return (
    <article
      id={member.id}
      className="scroll-mt-24 lux-panel flex h-full flex-col overflow-hidden sm:flex-row sm:text-left"
    >
      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div className="igf-motion-img-wrap relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-[1.35rem] ring-2 ring-[color-mix(in_srgb,var(--lux-gold)_22%,transparent)] sm:w-48 md:w-52">
          <TeamMemberImage member={member} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-heading text-xl font-bold lux-text-ink sm:text-2xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide lux-text-gold">
          {member.role}
        </p>
        {paragraphs.length > 0 ? (
          <div className="mt-4 space-y-3">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed lux-text-walnut sm:text-[0.9375rem]">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {member.email ? (
          <a
            href={`mailto:${member.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold lux-text-gold transition hover:lux-text-gold"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            {member.email}
          </a>
        ) : null}
      </div>
    </article>
  )
}

function TeamSummaryCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="group lux-card relative overflow-hidden px-4 py-4 text-left sm:px-5">
      <div className="lux-glow lux-glow--gold pointer-events-none absolute -right-6 -top-6 h-20 w-20 transition duration-500 group-hover:scale-125" />
      <div className="relative flex h-full items-center gap-4 sm:gap-5">
        <div className="igf-motion-img-wrap relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-[color-mix(in_srgb,var(--lux-gold)_22%,transparent)] transition duration-500 group-hover:scale-[1.04] sm:h-24 sm:w-24">
          <TeamMemberImage member={member} className="object-top" />
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[10px] font-bold tracking-[0.18em] lux-text-gold shadow-md">
            {initials}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold lux-text-ink sm:text-xl">{member.name}</h3>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] lux-text-gold sm:text-xs">
            {member.role}
          </p>
          <div className="mt-4">
            <Link
              to={`/team#${member.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold lux-text-ink transition duration-300 group-hover:lux-text-gold hover:lux-text-gold"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function TeamSection({
  variant = 'full',
  members,
  selectedMemberId,
  hideHeader = false,
}: TeamSectionProps) {
  const displayedMembers = members ?? teamMembers
  const hasMembers = displayedMembers.length > 0
  const isCompact = variant === 'compact'

  return (
    <section id="team" className="lux-section-surface py-16 sm:py-20">
      <div className="lux-glow lux-glow--gold pointer-events-none absolute left-[-5rem] top-12 h-40 w-40" />
      <div className="lux-glow lux-glow--burgundy pointer-events-none absolute bottom-8 right-[-5rem] h-44 w-44" />
      <Container>
        {!hideHeader ? (
          <Reveal>
            <div className="text-center">
              <p className="igf-page-eyebrow justify-center">Team</p>
              <h2 className="lux-section-title mt-4">Meet Our Team</h2>
              <p className="lux-body-lg mx-auto mt-4 max-w-2xl text-center">
                {isCompact
                  ? 'Meet the leaders and volunteers behind iGurukul Foundation. Open each profile to view the full biography.'
                  : 'The volunteers and leaders who guide our programs, events, and community initiatives.'}
              </p>
            </div>
          </Reveal>
        ) : null}

        {hasMembers ? (
          isCompact ? (
            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {displayedMembers.map((member, idx) => (
                <Reveal key={member.id} delayMs={60 * idx} from="scale">
                  <div
                    className={cn(
                      'transition duration-300',
                      selectedMemberId === member.id && 'lux-ring-selected scale-[1.01]',
                    )}
                  >
                    <TeamSummaryCard member={member} />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-10">
              {displayedMembers.map((member, idx) => (
                <Reveal key={member.id} delayMs={80 * idx} from={idx % 2 === 0 ? 'left' : 'right'}>
                  <TeamMemberCard member={member} />
                </Reveal>
              ))}
            </div>
          )
        ) : (
          <Reveal delayMs={120}>
            <div className="lux-panel lux-panel--padded mx-auto mt-14 max-w-2xl text-center">
              <div className="lux-icon-wrap mx-auto h-16 w-16">
                <User className="h-8 w-8 opacity-70" aria-hidden />
              </div>
              <p className="mt-6 font-heading text-lg font-bold lux-text-ink">
                Team profiles coming soon
              </p>
              <p className="mt-2 text-sm lux-text-walnut">
                Photos and member details will be added here.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
