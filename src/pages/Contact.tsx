import { useCallback, useState } from 'react'
import { Mail, MapPin, SendHorizonal, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import GsapRevealBlock from '../components/GsapRevealBlock'
import { ClosingQuoteSection } from '../components/FoundationSections'
import TurnstileField from '../components/TurnstileField'
import { site } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [verificationToken, setVerificationToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleTokenChange = useCallback((token: string) => {
    setVerificationToken(token)
  }, [])

  function updateField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [field]: value }))
    setError(null)
    setStatus('idle')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all fields before submitting your message.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!verificationToken) {
      setError('Please complete the verification section before submitting.')
      return
    }

    const subject = encodeURIComponent(`Message from ${form.firstName} ${form.lastName}`)
    const body = encodeURIComponent(
      [
        `First Name: ${form.firstName}`,
        `Last Name: ${form.lastName}`,
        `Email: ${form.email}`,
        '',
        'Message:',
        form.message,
      ].join('\n'),
    )

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setError(null)
  }

  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <section className="relative px-4 pb-18 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="lux-glow lux-glow--gold pointer-events-none absolute left-[-6rem] top-12 h-40 w-40" />
        <div className="lux-glow lux-glow--burgundy pointer-events-none absolute right-[-5rem] top-24 h-44 w-44" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <GsapRevealBlock className="relative">
              <div className="igf-page-eyebrow">Contact</div>
              <h1 className="mt-4 font-heading text-5xl font-bold leading-[0.96] tracking-[-0.04em] lux-text-ink sm:text-6xl">
                Send a message to the foundation.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 lux-text-ink/76 sm:text-lg">
                Share your interest, questions, or ideas for collaboration through a more
                personal and thoughtful conversation channel.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="lux-panel lux-panel--sm">
                  <div className="lux-icon-wrap h-11 w-11">
                    <Mail className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] lux-text-gold">
                    Email
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 block break-all font-display text-3xl leading-tight lux-text-ink"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="lux-panel lux-panel--sm">
                  <div className="lux-icon-wrap h-11 w-11">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] lux-text-gold">
                    Location
                  </div>
                  <div className="mt-3 font-display text-3xl leading-tight lux-text-ink">
                    {site.location}
                  </div>
                </div>
              </div>

              <div className="lux-panel lux-panel--sm mt-5">
                <div className="lux-badge-pill">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Thoughtful Communication
                </div>
                <p className="mt-5 text-base leading-8 lux-text-ink/76">
                  This message experience is designed to feel more editorial and personal than a
                  standard contact form, while still remaining easy to use on every screen size.
                </p>
              </div>
            </GsapRevealBlock>

            <GsapRevealBlock delay={0.08}>
              <form
                onSubmit={handleSubmit}
                className="lux-panel lux-panel--padded relative overflow-hidden"
              >
                <div className="lux-glow lux-glow--gold pointer-events-none absolute -left-8 top-4 h-28 w-28" />
                <div className="lux-glow lux-glow--burgundy pointer-events-none absolute right-0 top-0 h-32 w-32" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] lux-text-gold">
                      Send a Message
                    </div>
                    <h2 className="mt-4 font-display text-4xl font-semibold leading-none lux-text-ink sm:text-5xl">
                      A refined way to connect
                    </h2>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/74 lux-text-gold shadow-[0_14px_32px_rgba(31,41,55,0.08)] sm:flex">
                    <SendHorizonal className="h-5 w-5" aria-hidden />
                  </div>
                </div>

                <div className="relative mt-8 grid gap-4 md:grid-cols-2">
                  <label className="group lux-field block px-5 py-4">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] lux-text-gold">
                      First Name
                    </span>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(event) => updateField('firstName', event.target.value)}
                      className="mt-3 w-full border-0 bg-transparent p-0 font-medium lux-text-ink outline-none placeholder:lux-text-walnut/40"
                      placeholder="Enter your first name"
                    />
                  </label>

                  <label className="group lux-field block px-5 py-4">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] lux-text-gold">
                      Last Name
                    </span>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(event) => updateField('lastName', event.target.value)}
                      className="mt-3 w-full border-0 bg-transparent p-0 font-medium lux-text-ink outline-none placeholder:lux-text-walnut/40"
                      placeholder="Enter your last name"
                    />
                  </label>

                  <label className="group lux-field block px-5 py-4 md:col-span-2">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] lux-text-gold">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      className="mt-3 w-full border-0 bg-transparent p-0 font-medium lux-text-ink outline-none placeholder:lux-text-walnut/40"
                      placeholder="Enter your email address"
                    />
                  </label>

                  <label className="group lux-field block px-5 py-4 md:col-span-2">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] lux-text-gold">
                      Message
                    </span>
                    <textarea
                      rows={7}
                      value={form.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      className="mt-3 w-full resize-none border-0 bg-transparent p-0 font-medium lux-text-ink outline-none placeholder:lux-text-walnut/40"
                      placeholder="Write your message, question, or interest in collaboration."
                    />
                  </label>
                </div>

                <div className="lux-panel lux-panel--sm relative mt-6">
                  <div className="flex items-center gap-3">
                    <div className="lux-icon-wrap h-10 w-10">
                      <ShieldCheck className="h-4.5 w-4.5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] lux-text-gold">
                        Verification
                      </div>
                      <p className="mt-1 text-sm lux-text-ink/70">
                        Please complete the verification before sending your message.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <TurnstileField onChange={handleTokenChange} />
                  </div>
                </div>

                <div className="relative mt-6 flex flex-col gap-4 border-t border-[color-mix(in_srgb,var(--lux-gold)_16%,transparent)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm lux-text-ink/68">
                    Submitting opens your preferred mail app with the message pre-filled to{' '}
                    <span className="font-semibold lux-text-ink">{site.email}</span>.
                  </div>
                  <Button type="submit" attention className="justify-center sm:min-w-[13rem]">
                    Submit Message
                  </Button>
                </div>

                {error ? (
                  <p className="mt-4 text-sm font-medium lux-text-gold">{error}</p>
                ) : null}
                {status === 'success' ? (
                  <p className="mt-4 text-sm font-medium lux-text-gold">
                    Your message is ready to send.
                  </p>
                ) : null}
              </form>
            </GsapRevealBlock>
          </div>
        </div>
      </section>
      <ClosingQuoteSection />
    </div>
  )
}

