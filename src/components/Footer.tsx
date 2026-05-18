import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { navItems, site } from '../data/site'
import Button from './Button'
import Container from './Container'
import SocialIcon from './SocialIcon'

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
  return (
    <footer className="acta-footer igf-footer-editorial relative z-10 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-igf-orange/10 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-igf-gold/15 blur-[90px]"
        aria-hidden
      />

      <Container className="relative grid gap-10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <div>
            <img
              src={site.logoUrl}
              alt={site.name}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-[4.5rem] sm:max-w-[320px]"
            />
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-igf-gray">
              <Heart className="h-3.5 w-3.5 shrink-0 fill-igf-orange text-igf-orange" aria-hidden />
              {site.tagline}
            </p>
          </div>
          <div className="mt-6 space-y-2 text-sm text-igf-charcoal/85">
            <div className="font-semibold text-igf-ink">iGurukul Foundation — 26 Glorious Years</div>
            <div>Rooted in heritage, rising together through language, arts, and community.</div>
            <div>501(c)(3) Nonprofit Organization • Tax ID #45-2943477</div>
            <div>San Francisco Bay Area, California</div>
            <div>
              <a
                className="font-semibold text-igf-orange underline decoration-white/25 underline-offset-4 transition hover:decoration-igf-orange"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold uppercase tracking-wider text-igf-orange">Quick links</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-2 py-1.5 text-sm font-semibold text-igf-charcoal/85 transition duration-300 hover:bg-white/10 hover:text-igf-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm font-semibold uppercase tracking-wider text-igf-orange">Contact</div>
          <div className="mt-4 space-y-2 text-sm text-igf-charcoal/85">
            <div>
              Email:{' '}
              <a
                className="font-semibold text-igf-ink underline decoration-white/25 underline-offset-4 hover:decoration-igf-orange"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div className="pt-2">
              <div className="text-sm font-semibold text-igf-ink">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-igf-ink/90 ring-1 ring-white/15 transition duration-300 hover:scale-105 hover:bg-igf-orange/25 hover:ring-igf-orange/40 hover:text-igf-ink"
                  >
                    <SocialIcon kind={s.kind} className="h-5 w-5" title={s.label} />
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <Link to="/subscribe">
                <Button attention className="w-full justify-center">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="acta-footer-bar relative border-t border-white/10 py-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-igf-orange/35 to-transparent" />
        <Container className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <div className="acta-footer-bar__copy">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="acta-footer-bar__credit flex items-center gap-2 text-xs">
            <span>Powered by</span>
            <img
              src="https://www.kalaawishkar.com/lovable-uploads/a7abffa8-d100-4852-8b1a-258625020bbd.png"
              alt="Wajooba"
              loading="lazy"
              decoding="async"
              className="h-4 w-auto"
            />
          </div>
        </Container>
      </div>
    </footer>
  )
}
