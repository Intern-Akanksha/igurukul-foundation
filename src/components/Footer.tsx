import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { navItems, site } from '../data/site'
import Button from './Button'
import Container from './Container'
import SocialIcon from './SocialIcon'

const logoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

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
    <footer className="igf-footer-arch relative z-10 overflow-hidden bg-gradient-to-b from-igf-brown via-igf-charcoal to-igf-ink text-white">
      <div className="igf-paisley-bg pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-igf-orange/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-igf-magenta/20 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(61,43,107,0.35)_0%,transparent_45%)]"
        aria-hidden
      />

      <div className="igf-monument-divider relative mx-auto max-w-4xl" aria-hidden />
      <Container className="relative grid gap-8 py-10 md:grid-cols-12 md:py-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="iGurukul Foundation logo"
              loading="lazy"
              decoding="async"
              className="h-14 w-auto shrink-0 rounded-xl object-contain ring-2 ring-white/10"
            />
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[0.22em] text-white">
                {site.name.toUpperCase()}
                <Heart className="h-3.5 w-3.5 fill-igf-orange text-igf-orange" aria-hidden />
              </div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-amber-100/90">
                {site.tagline.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-white/85">
            <div className="font-semibold text-white">iGurukul Foundation — 26 Glorious Years</div>
            <div>Rooted in heritage, rising together through language, arts, and community.</div>
            <div>501(c)(3) Nonprofit Organization • Tax ID #45-2943477</div>
            <div>San Francisco Bay Area, California</div>
            <div>
              <a
                className="font-semibold text-amber-200/95 underline decoration-white/25 underline-offset-4 transition hover:decoration-igf-orange"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">Quick links</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-2 py-1.5 text-sm font-semibold text-white/85 transition duration-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">Contact</div>
          <div className="mt-4 space-y-2 text-sm text-white/85">
            <div>
              Email:{' '}
              <a
                className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:decoration-igf-orange"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div className="pt-2">
              <div className="text-sm font-semibold text-white">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/15 transition duration-300 hover:scale-105 hover:bg-igf-orange/25 hover:ring-igf-orange/40 hover:text-white"
                  >
                    <SocialIcon kind={s.kind} className="h-5 w-5" title={s.label} />
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <Link to="/subscribe">
                <Button attention className="w-full justify-center shadow-lg shadow-orange-900/30">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-igf-orange/35 to-transparent" />
        <Container className="flex flex-col gap-2 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-white/65">
            <span>Powered by</span>
            <img
              src="https://www.kalaawishkar.com/lovable-uploads/a7abffa8-d100-4852-8b1a-258625020bbd.png"
              alt="Wajooba"
              loading="lazy"
              decoding="async"
              className="h-4 w-auto opacity-90"
            />
          </div>
        </Container>
      </div>
    </footer>
  )
}
