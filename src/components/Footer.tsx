import { Link } from 'react-router-dom'
import { navItems, site } from '../data/site'
import Container from './Container'
import SocialIcon from './SocialIcon'

const logoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=igurukul%20foundation',
    kind: 'facebook' as const,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@iGurukulOdissi',
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
    <footer className="border-t border-black/10 bg-igf-charcoal text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="iGurukul Foundation logo"
              loading="lazy"
              decoding="async"
              className="h-14 w-auto shrink-0 object-contain"
            />
            <div>
              <div className="text-xs font-extrabold tracking-[0.22em] text-white">
                {site.name.toUpperCase()}
              </div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/85">
                {site.tagline.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-white/85">
            <div className="font-semibold text-white">iGurukul Foundation — 26 Glorious Years</div>
            <div>501(c)(3) Nonprofit Organization • Tax ID #45-294347</div>
            {/* <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <a
                href={site.website}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-igf-orange"
              >
                igurukulfoundation.org
              </a>
              <span className="text-white/45">•</span>
              <a
                className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-igf-orange"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div> */}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-semibold text-white">Quick links</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-2 py-1 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm font-semibold text-white">Contact</div>
          <div className="mt-3 space-y-2 text-sm text-white/85">
            <div>
              Email:{' '}
              <a
                className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-igf-orange"
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
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                  >
                    <SocialIcon kind={s.kind} className="h-5 w-5" title={s.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/registration"
              className="font-semibold text-white hover:text-igf-orange"
            >
              Register
            </Link>
            <Link
              to="/contact"
              className="font-semibold text-white hover:text-igf-orange"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
