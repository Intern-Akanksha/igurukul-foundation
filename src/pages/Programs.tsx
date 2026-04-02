import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { programs, site } from '../data/site'

export default function Programs() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            Programs & Activities
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
            Explore learning pathways that celebrate Odia language and culture,
            support wellness, and strengthen community connection through shared
            experiences.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {programs.map((p, idx) => (
            <Reveal key={p.title} delayMs={70 * idx}>
              <div className="igf-surface rounded-3xl border border-black/5 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.12)]">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/50 ring-1 ring-black/5">
                    <span className="h-2.5 w-2.5 rounded-full bg-igf-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-lg font-extrabold text-igf-ink">
                      {p.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-igf-gray">
                      {p.description}
                    </p>
                    {p.emphasis ? (
                      <div className="mt-5 rounded-2xl bg-white/50 p-4 text-sm text-igf-gray ring-1 ring-black/5">
                        <span className="font-semibold text-igf-ink">
                          Why Learn Odia?
                        </span>{' '}
                        {p.emphasis}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={180}>
          <div className="mt-16 rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="font-heading text-2xl font-extrabold">
                  Join a class or volunteer with {site.shortName}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/90">
                  Interested in schedules, eligibility, or program details?
                  Register online or contact us to learn more.
                </div>
              </div>
              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <Link to="/registration" className="w-full md:w-auto">
                  <Button
                    className="w-full md:w-auto bg-white text-igf-charcoal hover:bg-white/90"
                    attention
                  >
                    Register Now
                  </Button>
                </Link>
                <Link to="/contact" className="w-full md:w-auto">
                  <Button
                    className="w-full md:w-auto bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
                    variant="secondary"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
