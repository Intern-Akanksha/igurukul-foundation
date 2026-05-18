import { Mail, User } from 'lucide-react'
import Container from './Container'
import Reveal from './Reveal'
import { teamMembers, type TeamMember } from '../data/team'

function TeamMemberCard({ member }: { member: TeamMember }) {
  const paragraphs = member.bioParagraphs ?? (member.bio ? [member.bio] : [])

  return (
    <article className="acta-panel acta-panel--padded flex h-full flex-col overflow-hidden sm:flex-row sm:text-left">
      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div className="igf-motion-img-wrap relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-xl ring-2 ring-igf-gold/25 sm:w-48 md:w-52">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br from-igf-orange/10 to-igf-gold/15">
              <User className="h-16 w-16 text-igf-orange/45" aria-hidden />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-heading text-xl font-bold text-igf-ink sm:text-2xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-igf-orange">
          {member.role}
        </p>
        {paragraphs.length > 0 ? (
          <div className="mt-4 space-y-3">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-igf-gray sm:text-[0.9375rem]">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {member.email ? (
          <a
            href={`mailto:${member.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-igf-charcoal transition hover:text-igf-orange"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            {member.email}
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default function TeamSection() {
  const hasMembers = teamMembers.length > 0

  return (
    <section id="team" className="acta-section acta-section--warm relative border-t border-black/5 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-igf-gold/40 to-transparent"
        aria-hidden
      />
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="acta-eyebrow">Team</p>
            <h2 className="acta-section-title mt-4">Meet Our Team</h2>
            <p className="acta-body mx-auto mt-4 max-w-2xl text-center">
              The volunteers and leaders who guide our programs, events, and community initiatives.
            </p>
          </div>
        </Reveal>

        {hasMembers ? (
          <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-10">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.id} delayMs={80 * idx} from={idx % 2 === 0 ? 'left' : 'right'}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delayMs={120}>
            <div className="igf-editorial-card mx-auto mt-14 max-w-2xl px-8 py-12 text-center sm:px-12 sm:py-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-igf-orange/10 ring-1 ring-igf-gold/25">
                <User className="h-8 w-8 text-igf-orange/70" aria-hidden />
              </div>
              <p className="mt-6 font-heading text-lg font-bold text-igf-ink">
                Team profiles coming soon
              </p>
              <p className="mt-2 text-sm text-igf-gray">
                Photos and member details will be added here.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
