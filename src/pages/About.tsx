import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { quotes, site } from '../data/site'

const values = [
  {
    title: 'Vision',
    description:
      'A thriving community that learns together, grows together, and passes cultural wisdom forward.',
  },
  {
    title: 'Belief',
    description:
      'Learning is lifelong and social—grounded in respect, curiosity, and service.',
  },
  {
    title: 'Faith',
    description:
      'Our heritage matters. Language, art, and values create roots that strengthen every generation.',
  },
]

const structure = [
  { role: 'Board & Advisors', description: 'Stewardship, governance, and guidance' },
  { role: 'Program Leadership', description: 'Curriculum, mentors, and instructors' },
  { role: 'Community Volunteers', description: 'Events, logistics, and outreach' },
  { role: 'Families & Learners', description: 'The heart of our community learning' },
]

export default function About() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            About {site.shortName}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
            {site.name} ({site.shortName}) is a registered nonprofit cultural and
            educational organization focused on social learning, human
            development, and preserving Oriya language and culture within the
            immigrant community.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-orange">
                  Who We Are
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold text-igf-ink">
                  Mission
                </div>
                <p className="mt-3 text-base leading-relaxed text-igf-gray">
                  To provide high-quality learning programs that strengthen
                  cultural identity, develop human potential, and support a
                  caring community of families and learners.
                </p>
                <div className="mt-8 rounded-2xl bg-white/50 p-6 ring-1 ring-black/5">
                  <div className="font-quote text-base italic text-igf-ink">
                    “{quotes.huxley.text}”
                  </div>
                  <div className="mt-2 text-sm font-semibold text-igf-gray">
                    — {quotes.huxley.author}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="mt-6 igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-orange">
                  Genesis
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold text-igf-ink">
                  From CHAOS to iGurukul
                </div>
                <p className="mt-3 text-base leading-relaxed text-igf-gray">
                  What began as a small community effort—often described as a
                  journey from “CHAOS” to clarity—grew into iGurukul: a learning
                  space shaped by volunteers, educators, parents, and students.
                  Over time, programs expanded from language learning into arts,
                  wellness, forums, and intergenerational engagement.
                </p>
                <p className="mt-3 text-base leading-relaxed text-igf-gray">
                  Today, {site.shortName} continues that story with a simple
                  promise: build roots through heritage and give wings through
                  learning.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/85">
                  Vision, Belief & Faith
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold">
                  Values that guide our work
                </div>
                <div className="mt-6 grid gap-4">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                          <span className="h-2.5 w-2.5 rounded-full bg-igf-orange" />
                        </div>
                        <div className="font-heading text-base font-extrabold">
                          {v.title}
                        </div>
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-white/90">
                        {v.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="mt-6 igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-orange">
                  Organizational Structure
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold text-igf-ink">
                  How we work together
                </div>
                <div className="mt-6 grid gap-3">
                  {structure.map((item) => (
                    <div
                      key={item.role}
                      className="flex items-start gap-4 rounded-2xl bg-white/50 p-5 ring-1 ring-black/5"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
                        <span className="h-2.5 w-2.5 rounded-full bg-igf-orange" />
                      </div>
                      <div>
                        <div className="font-heading text-sm font-extrabold text-igf-ink">
                          {item.role}
                        </div>
                        <div className="mt-1 text-sm text-igf-gray">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  )
}
