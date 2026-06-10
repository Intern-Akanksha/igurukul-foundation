import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Sparkles } from 'lucide-react'
import { navItems, site } from '../data/site'
import Button from './Button'
import Container from './Container'
import SocialIcon from './SocialIcon'

const footerEmail = 'igurukulfoundation@gmail.com'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/IGurukulFoundation',
    kind: 'facebook' as const,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@igurukulfoundation8773',
    kind: 'youtube' as const,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/igurukulfoundation?igsh=NjZhYmZmNXc0c2ds',
    kind: 'instagram' as const,
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    window.location.href = `mailto:${footerEmail}?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20foundation%20updates.%0A%0AEmail:%20${encodeURIComponent(email)}`
  }

  return (
    <footer className="lux-footer relative z-10 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[var(--lux-gold)]/8 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--lux-burgundy)]/15 blur-[90px]"
        aria-hidden
      />

      <Container className="relative grid gap-10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <div className="flex items-start gap-4">
            <div className="lux-nav__logo-frame">
              <img src={site.logoUrl} alt={site.name} className="h-14 w-14 rounded-lg object-cover" />
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-[var(--lux-ivory)]">{site.name}</div>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[color-mix(in_srgb,var(--lux-ivory)_70%,transparent)]">
                <Heart className="h-3.5 w-3.5 shrink-0 fill-[var(--lux-gold)] text-[var(--lux-gold)]" aria-hidden />
                {site.tagline}
              </p>
            </div>
          </div>
          <div className="lux-footer__card mt-6 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] lux-text-gold">
              Foundation Information
            </div>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[color-mix(in_srgb,var(--lux-ivory)_72%,transparent)]">
              <div>{site.location}</div>
              <div>Participation • Partnership • Peace • Progress</div>
              <div>Volunteer-driven learning and cultural stewardship</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold uppercase tracking-wider lux-text-gold">Quick Links</div>
          <div className="lux-footer__card mt-4 grid grid-cols-2 gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[color-mix(in_srgb,var(--lux-ivory)_75%,transparent)] transition duration-300 hover:bg-[color-mix(in_srgb,var(--lux-gold)_12%,transparent)] hover:text-[var(--lux-gold)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold uppercase tracking-wider lux-text-gold">Contact</div>
          <div className="lux-footer__card mt-4 space-y-5 p-5 text-sm text-[color-mix(in_srgb,var(--lux-ivory)_72%,transparent)]">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 lux-text-gold" aria-hidden />
              <div>
                <div className="font-semibold text-[var(--lux-ivory)]">Email</div>
                <a
                  className="mt-1 block break-all font-semibold lux-text-gold underline decoration-[color-mix(in_srgb,var(--lux-gold)_30%,transparent)] underline-offset-4 hover:decoration-[var(--lux-gold)]"
                  href={`mailto:${footerEmail}`}
                >
                  {footerEmail}
                </a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--lux-ivory)]">Social Media</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--lux-gold)_20%,transparent)] bg-[color-mix(in_srgb,var(--lux-ivory)_8%,transparent)] text-[color-mix(in_srgb,var(--lux-ivory)_80%,transparent)] transition duration-300 hover:scale-105 hover:border-[var(--lux-gold)] hover:bg-[color-mix(in_srgb,var(--lux-gold)_15%,transparent)] hover:text-[var(--lux-gold)]"
                  >
                    <SocialIcon kind={s.kind} className="h-5 w-5" title={s.label} />
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubscribe}>
              <div className="text-sm font-semibold text-[var(--lux-ivory)]">Newsletter</div>
              <p className="mt-1 text-xs leading-6">Stay connected with events and foundation updates.</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-lg border border-[color-mix(in_srgb,var(--lux-gold)_20%,transparent)] bg-[color-mix(in_srgb,var(--lux-ivory)_6%,transparent)] px-3 py-2 text-sm text-[var(--lux-ivory)] outline-none placeholder:text-[color-mix(in_srgb,var(--lux-ivory)_40%,transparent)] focus:border-[var(--lux-gold)]"
                />
                <Button type="submit" attention className="shrink-0 justify-center px-4 py-2 text-sm">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      <div className="lux-footer__bar relative py-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--lux-gold)]/40 to-transparent" />
        <Container className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <div className="text-[color-mix(in_srgb,var(--lux-ivory)_88%,transparent)]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-[color-mix(in_srgb,var(--lux-ivory)_65%,transparent)]">
            <Sparkles className="h-3.5 w-3.5 lux-text-gold" aria-hidden />
            <span>Roots &amp; Wings — Crafted for culture, education, and human development.</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
