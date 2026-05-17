import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

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
const subscribeMessage = 'subscribed for mailing list'

export default function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
    <div className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-igf-magenta/12 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="text-center">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">Stay Connected</span>
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
              Join Our Community
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-igf-gray sm:text-lg">
              Receive event updates, cultural insights, volunteer opportunities, and youth leadership announcements.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl">
          <Reveal>
            <div className="igf-gradient-border-wrap shadow-[0_28px_70px_rgba(61,43,107,0.12)]">
              <div className="igf-gradient-border-inner p-6 sm:p-9">
              {sent ? (
                <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-igf-ink">Subscribed</div>
                  <div className="mt-2 text-sm text-igf-gray">
                    Thanks for joining our mailing list.
                  </div>
                </div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setError(null)

                    if (!apiKey) {
                      setError('Subscription is not configured yet. Please try again later.')
                      return
                    }
                    if (!turnstileToken) {
                      setError('Please complete the verification step.')
                      return
                    }
                    const firstName = name.trim() || 'Subscriber'

                    try {
                      setSubmitting(true)
                      const res = await fetch(contactFormEndpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          apiKey,
                          domainKey: contactFormDomainKey,
                          cfTurnstileResponse: turnstileToken,
                          email,
                          firstName,
                          lastName: '',
                          message: subscribeMessage,
                        }),
                      })

                      if (!res.ok) {
                        const text = await res.text().catch(() => '')
                        setError(text || 'Failed to subscribe. Please try again.')
                        return
                      }

                      setSent(true)
                      setName('')
                      setEmail('')
                      setTurnstileToken('')
                      if (widgetIdRef.current != null) {
                        window.turnstile?.reset(widgetIdRef.current)
                      }
                    } catch {
                      setError('Failed to subscribe. Please try again.')
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
                    <span className="text-sm font-semibold text-igf-ink">Name</span>
                    <input
                      className="h-12 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      disabled={submitting}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-igf-ink">Email</span>
                    <input
                      type="email"
                      className="h-12 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 placeholder:text-igf-gray/60 focus:ring-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      disabled={submitting}
                    />
                  </label>

                  <div className="mt-2 flex justify-center">
                    <div className="max-w-full overflow-x-auto">
                      <div className="flex min-h-[70px] items-center justify-center">
                        <div ref={setWidgetEl} />
                      </div>
                    </div>
                  </div>

                  {turnstileLoadError ? (
                    <div className="rounded-2xl bg-white/60 p-4 text-sm text-igf-gray ring-1 ring-black/10">
                      Verification didn’t load. Please disable blockers and refresh.
                    </div>
                  ) : null}

                  <div className="pt-2">
                    <Button attention type="submit" className="w-full justify-center py-3 text-base" disabled={submitting}>
                      {submitting ? 'Subscribing…' : 'Subscribe'}
                    </Button>
                  </div>

                  <div className="text-center text-xs text-igf-gray">
                    Subscriptions are managed by {site.name}.
                  </div>
                </form>
              )}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
