import { Mail, User } from 'lucide-react'
import Container from './Container'
import Reveal from './Reveal'
import { teamMembers, type TeamMember } from '../data/team'

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="igf-glass-card igf-torn-paper flex h-full flex-col overflow-hidden text-center">
      <div className="relative mx-auto mt-6 aspect-square w-36 overflow-hidden rounded-2xl ring-2 ring-igf-gold/30 sm:w-40">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-igf-orange/15 to-igf-gold/20">
            <User className="h-14 w-14 text-igf-orange/50" aria-hidden />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="font-heading text-xl font-bold text-igf-ink">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-igf-orange">
          {member.role}
        </p>
        {member.bio ? (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-igf-gray">{member.bio}</p>
        ) : null}
        {member.email ? (
          <a
            href={`mailto:${member.email}`}
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-igf-charcoal transition hover:text-igf-orange"
          >
            <Mail className="h-4 w-4" aria-hidden />
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
    <section id="team" className="relative border-t border-igf-gold/15 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-igf-gold/40 to-transparent"
        aria-hidden
      />
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">Team</span>
            </p>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-igf-ink sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-igf-gray sm:text-lg">
              The volunteers and leaders who guide our programs, events, and community initiatives.
            </p>
          </div>
        </Reveal>

        {hasMembers ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.id} delayMs={60 * idx}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delayMs={120}>
            <div className="igf-gradient-border-wrap mx-auto mt-14 max-w-2xl">
              <div className="igf-gradient-border-inner px-8 py-12 text-center sm:px-12 sm:py-14">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-igf-orange/10 ring-1 ring-igf-gold/25">
                  <User className="h-8 w-8 text-igf-orange/70" aria-hidden />
                </div>
                <p className="mt-6 font-heading text-lg font-bold text-igf-ink">
                  Team profiles coming soon
                </p>
                <p className="mt-2 text-sm text-igf-gray">
                  Photos and member details will be added here.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
