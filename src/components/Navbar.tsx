import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, site } from '../data/site'
import { cn } from '../utils/cn'
import Button from './Button'
import Container from './Container'

const logoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 6)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-black/5 bg-igf-bg/70 backdrop-blur transition-shadow',
        scrolled && 'shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
      )}
    >
      <Container className="flex h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="iGurukul Foundation logo"
            loading="eager"
            decoding="async"
            className="h-12 w-auto shrink-0 object-contain"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-xs font-extrabold tracking-[0.22em] text-igf-charcoal">
              {site.name.toUpperCase()}
            </div>
            <div className="mt-0.5 text-[11px] font-semibold tracking-[0.18em] text-igf-gray">
              {site.tagline.toUpperCase()}
            </div>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-2 text-sm font-semibold text-igf-gray transition hover:bg-white/60 hover:text-igf-charcoal',
                  isActive && 'bg-white/70 text-igf-charcoal shadow-sm ring-1 ring-black/5',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/donate">
            <Button variant="secondary">Donate</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-black/10 transition hover:bg-white/60 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative h-4 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-0.5 w-5 rounded bg-igf-charcoal transition',
                open && 'top-1.5 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1.5 h-0.5 w-5 rounded bg-igf-charcoal transition',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-3 h-0.5 w-5 rounded bg-igf-charcoal transition',
                open && 'top-1.5 -rotate-45',
              )}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-black/5 bg-igf-bg/95 backdrop-blur md:hidden">
          <Container className="flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm font-semibold text-igf-gray transition hover:bg-white/60 hover:text-igf-charcoal',
                    isActive && 'bg-white/70 text-igf-charcoal ring-1 ring-black/5',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
