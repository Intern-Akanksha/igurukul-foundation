import { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

type ContactForm = {
  firstName: string
  lastName: string
  email: string
  message: string
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown>,
      ) => string | number
      reset: (widgetId: string | number) => void
    }
  }
}

const contactFormEndpoint = 'https://wajooba-contactform-worker-prod.mark-2c2.workers.dev/'
const contactFormDomainKey = 'igurukul-foundation-production.up.railway.app'
const fallbackTurnstileSiteKey = '0x4AAAAAABk4xyduLZeZJCMY'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileLoadError, setTurnstileLoadError] = useState(false)
  const widgetIdRef = useRef<string | number | null>(null)
  const [widgetEl, setWidgetEl] = useState<HTMLDivElement | null>(null)

  const apiKey = import.meta.env.VITE_WAJOOBA_CONTACTFORM_API_KEY as string | undefined
  const turnstileSiteKey =
    (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) ?? fallbackTurnstileSiteKey

  useEffect(() => {
    if (!widgetEl) return

    let cancelled = false

    const render = () => {
      if (cancelled) return
      if (!window.turnstile) return
      if (!widgetEl) return
      if (widgetIdRef.current != null) return

      widgetEl.innerHTML = ''
      const id = window.turnstile.render(widgetEl, {
        sitekey: turnstileSiteKey,
        theme: 'light',
        size: 'flexible',
        callback: (token: unknown) => {
          if (typeof token === 'string') setTurnstileToken(token)
        },
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
      widgetIdRef.current = id
      setTurnstileLoadError(false)
    }

    if (window.turnstile) {
      render()
      return () => {
        cancelled = true
      }
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]',
    )
    if (existing) {
      existing.addEventListener('load', render, { once: true })
      existing.addEventListener(
        'error',
        () => {
          if (!cancelled) setTurnstileLoadError(true)
        },
        { once: true },
      )
      return () => {
        cancelled = true
      }
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.addEventListener('load', render, { once: true })
    script.addEventListener(
      'error',
      () => {
        if (!cancelled) setTurnstileLoadError(true)
      },
      { once: true },
    )
    document.head.appendChild(script)

    const timeoutId = window.setTimeout(() => {
      if (!cancelled && widgetIdRef.current == null) setTurnstileLoadError(true)
    }, 4500)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      widgetIdRef.current = null
    }
  }, [turnstileSiteKey, widgetEl])

  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
            Reach out for registration details, volunteering opportunities, or
            partnership ideas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="font-heading text-xl font-extrabold text-igf-ink">
                  Send a message
                </div>
                <p className="mt-2 text-sm text-igf-gray">
                  We’ll reply by email. For urgent questions, email us directly.
                </p>

                {sent ? (
                  <div className="mt-6 rounded-2xl bg-white/50 p-5 ring-1 ring-black/5">
                    <div className="text-sm font-semibold text-igf-ink">
                      Message sent
                    </div>
                    <div className="mt-2 text-sm text-igf-gray">
                      Thanks for reaching out. We’ll get back to you soon.
                    </div>
                  </div>
                ) : (
                  <form
                    className="mt-6 grid gap-4"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setError(null)

                      if (!apiKey) {
                        setError('Contact form is not configured yet. Please try again later.')
                        return
                      }
                      if (!turnstileToken) {
                        setError('Please complete the verification step.')
                        return
                      }

                      try {
                        setSubmitting(true)
                        const res = await fetch(contactFormEndpoint, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            apiKey,
                            domainKey: contactFormDomainKey,
                            cfTurnstileResponse: turnstileToken,
                            email: form.email,
                            firstName: form.firstName,
                            lastName: form.lastName,
                            message: form.message,
                          }),
                        })

                        if (!res.ok) {
                          const text = await res.text().catch(() => '')
                          setError(text || 'Failed to submit. Please try again.')
                          return
                        }

                        setSent(true)
                        setForm({ firstName: '', lastName: '', email: '', message: '' })
                        setTurnstileToken('')
                        if (widgetIdRef.current != null) {
                          window.turnstile?.reset(widgetIdRef.current)
                        }
                      } catch {
                        setError('Failed to submit. Please try again.')
                      } finally {
                        setSubmitting(false)
                      }
                    }}
                  >
                    {error ? (
                      <div className="rounded-2xl bg-white/60 p-4 text-sm font-semibold text-igf-charcoal ring-1 ring-black/10">
                        {error}
                      </div>
                    ) : null}

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        First name
                      </span>
                      <input
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, firstName: e.target.value }))
                        }
                        placeholder="First name"
                        autoComplete="given-name"
                        required
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Last name
                      </span>
                      <input
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, lastName: e.target.value }))
                        }
                        placeholder="Last name"
                        autoComplete="family-name"
                        required
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Email
                      </span>
                      <input
                        type="email"
                        className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.email}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-igf-ink">
                        Message
                      </span>
                      <textarea
                        className="min-h-36 resize-y rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                        value={form.message}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, message: e.target.value }))
                        }
                        placeholder="How can we help?"
                        required
                      />
                    </label>

                    <div className="mt-2">
                      <div className="igf-surface rounded-2xl border border-black/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                        <div className="text-center text-sm font-semibold text-igf-gray">
                          Verification
                        </div>
                        <div className="mt-3 flex justify-center">
                          <div className="max-w-full overflow-x-auto">
                            <div
                              ref={setWidgetEl}
                              className="mx-auto"
                              style={{ minHeight: 68 }}
                            />
                          </div>
                        </div>
                      </div>
                      {turnstileLoadError ? (
                        <div className="mt-2 text-center text-sm font-semibold text-igf-gray">
                          Verification didn&apos;t load. Please disable ad blockers / privacy
                          shields and refresh.
                        </div>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 h-11 rounded-full bg-gradient-to-b from-igf-orange/90 to-igf-orange px-5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igf-orange/40 active:translate-y-px disabled:opacity-70"
                    >
                      {submitting ? 'Submitting…' : 'Submit'}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={140}>
              <div className="rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/85">
                  Contact details
                </div>
                <div className="mt-3 space-y-3 text-sm text-white/90">
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
                    <div className="font-semibold text-white">Social</div>
                    <div className="mt-3 flex gap-2">
                      <a
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                        href="https://www.facebook.com/search/top?q=igurukul%20foundation"
                        aria-label="Facebook"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06a10.06 10.06 0 0 0 8.26 9.89v-6.99H7.9v-2.9h2.36V9.23c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9h-2.17v6.99A10.06 10.06 0 0 0 22 12.06Z"
                          />
                        </svg>
                      </a>
                      <a
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                        href="https://www.youtube.com/@iGurukulOdissi"
                        aria-label="YouTube"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M23 12c0-2.16-.18-3.45-.44-4.23-.25-.75-.82-1.33-1.57-1.58C19.2 5.92 12 5.92 12 5.92s-7.2 0-8.99.27c-.75.25-1.32.83-1.57 1.58C1.18 8.55 1 9.84 1 12s.18 3.45.44 4.23c.25.75.82 1.33 1.57 1.58C4.8 18.08 12 18.08 12 18.08s7.2 0 8.99-.27c.75-.25 1.32-.83 1.57-1.58.26-.78.44-2.07.44-4.23ZM9.92 15.14V8.86L15.58 12l-5.66 3.14Z"
                          />
                        </svg>
                      </a>
                      <a
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                        href="https://www.instagram.com/igurukulfoundation?igsh=NjZhYmZmNXc0c2ds"
                        aria-label="Instagram"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M12 2.2c-2.7 0-3.04.01-4.1.06-1.06.05-1.78.22-2.41.47-.65.25-1.2.59-1.75 1.14-.55.55-.89 1.1-1.14 1.75-.25.63-.42 1.35-.47 2.4-.05 1.07-.06 1.41-.06 4.1s.01 3.03.06 4.1c.05 1.05.22 1.77.47 2.4.25.65.59 1.2 1.14 1.75.55.55 1.1.89 1.75 1.14.63.25 1.35.42 2.41.47 1.06.05 1.4.06 4.1.06s3.04-.01 4.1-.06c1.06-.05 1.78-.22 2.41-.47.65-.25 1.2-.59 1.75-1.14.55-.55.89-1.1 1.14-1.75.25-.63.42-1.35.47-2.4.05-1.07.06-1.41.06-4.1s-.01-3.03-.06-4.1c-.05-1.05-.22-1.77-.47-2.4a4.79 4.79 0 0 0-1.14-1.75 4.79 4.79 0 0 0-1.75-1.14c-.63-.25-1.35-.42-2.41-.47-1.06-.05-1.4-.06-4.1-.06Zm0 2.2c2.66 0 2.98.01 4.03.06.98.05 1.51.21 1.86.35.47.18.8.39 1.15.74.35.35.56.68.74 1.15.14.35.3.87.35 1.86.05 1.05.06 1.37.06 4.03s-.01 2.98-.06 4.03c-.05.99-.21 1.51-.35 1.86a2.59 2.59 0 0 1-.74 1.15c-.35.35-.68.56-1.15.74-.35.14-.87.3-1.86.35-1.05.05-1.37.06-4.03.06s-2.98-.01-4.03-.06c-.99-.05-1.51-.21-1.86-.35-.47-.18-.8-.39-1.15-.74a2.59 2.59 0 0 1-.74-1.15c-.14-.35-.3-.87-.35-1.86-.05-1.05-.06-1.37-.06-4.03s.01-2.98.06-4.03c.05-.99.21-1.51.35-1.86.18-.47.39-.8.74-1.15.35-.35.68-.56 1.15-.74.35-.14.87-.3 1.86-.35 1.05-.05 1.37-.06 4.03-.06Zm0 3.1a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 2.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z"
                          />
                        </svg>
                      </a>
                    </div>
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
