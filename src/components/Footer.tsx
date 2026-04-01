import { Link } from 'react-router-dom'
import { navItems, quotes, site } from '../data/site'
import Container from './Container'
import SocialIcon from './SocialIcon'

const socials = [
  { label: 'Facebook', href: '#', kind: 'facebook' as const },
  { label: 'YouTube', href: '#', kind: 'youtube' as const },
  { label: 'Instagram', href: '#', kind: 'instagram' as const },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-igf-charcoal text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-b from-[#f07a4a] to-igf-orange text-sm font-extrabold text-white shadow-sm">
              IGF
            </span>
            <div>
              <div className="text-sm font-semibold text-white">
                {site.name}
              </div>
              <div className="text-sm text-white/85">{site.tagline}</div>
            </div>
          </div>
          <div className="mt-6 rounded-3xl bg-white/5 p-6 text-sm text-white/90 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-white/15" />
              <span className="igf-metal h-1.5 w-1.5 rounded-full" />
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <div className="mt-4 font-quote text-base italic text-white">
              “{quotes.footer.text}”
            </div>
            <div className="mt-3 font-semibold text-white/85">
              — {quotes.footer.author}
            </div>
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
            <div>
              Website:{' '}
              <a
                className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-igf-orange"
                href={site.website}
                target="_blank"
                rel="noreferrer"
              >
                {site.website}
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
