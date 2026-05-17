import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { programs, site } from '../data/site'

type FormState = {
  fullName: string
  email: string
  program: string
  message: string
}

export default function Registration() {
  const programOptions = useMemo(
    () => programs.map((p) => p.title),
    [],
  )

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    program: programOptions[0] ?? '',
    message: '',
  })

  return (
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-igf-indigo/10 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-igf-indigo">Collaborate</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
            Partner With Us
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-igf-gray sm:text-lg">
            Share your interest in collaborating with iGurukul Foundation through sponsorship,
            volunteering, workshops, or educational partnerships.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="igf-gradient-border-wrap shadow-[0_24px_60px_rgba(61,43,107,0.1)]">
                <div className="igf-gradient-border-inner p-9">
                <div className="font-heading text-xl font-extrabold text-igf-ink">
                  Partnership interest form
                </div>
                <p className="mt-2 text-sm text-igf-gray">
                  This form collects your details so our team can follow up with collaboration options.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-2xl bg-white/50 p-5 ring-1 ring-black/5">
                    <div className="text-sm font-semibold text-igf-ink">
                      Thanks! We received your request.
                    </div>
                    <div className="mt-2 text-sm text-igf-gray">
                      If you don’t hear back soon, email us at{' '}
                      <a
                        className="font-semibold text-igf-ink underline decoration-black/15 underline-offset-4 hover:decoration-igf-orange"
                        href={`mailto:${site.email}`}
                      >
                        {site.email}
                      </a>
                      .
                    </div>
                  </div>
                ) : (
                  <form
                    className="mt-6 grid gap-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Full name
                      </span>
                      <input
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-indigo/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.fullName}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, fullName: e.target.value }))
                        }
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Email
                      </span>
                      <input
                        type="email"
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-indigo/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.email}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        required
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">Area of interest</span>
                      <select
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-indigo/30 focus:ring-2"
                        value={form.program}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, program: e.target.value }))
                        }
                      >
                        {programOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Message (optional)
                      </span>
                      <textarea
                        className="min-h-28 resize-y rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-igf-ink outline-none ring-igf-indigo/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.message}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, message: e.target.value }))
                        }
                        placeholder="Sponsorship, volunteering, event support, learning programs, or other details…"
                      />
                    </label>

                    <Button type="submit" attention className="mt-2 w-full sm:w-auto">
                      Submit request
                    </Button>
                  </form>
                )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={140}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-igf-indigo via-igf-charcoal to-black p-9 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/15">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-igf-magenta/25 blur-[64px]"
                  aria-hidden
                />
                <div className="relative text-xs font-semibold uppercase tracking-wider text-amber-200/90">
                  Quick info
                </div>
                <div className="relative mt-3 font-heading text-2xl font-extrabold">
                  Contact & privacy
                </div>
                <div className="relative mt-5 space-y-3 text-sm text-white/90">
                  <div>
                    Email:{' '}
                    <a
                      className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <div className="font-semibold text-white">
                      Privacy summary
                    </div>
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      <li>
                        We only use your information to respond about classes
                        and registration.
                      </li>
                      <li>
                        We do not sell or share personal data for marketing.
                      </li>
                      <li>
                        You can request deletion by emailing {site.email}.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  )
}
