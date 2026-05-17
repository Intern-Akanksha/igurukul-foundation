import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { navItems, site } from '../data/site'
import { cn } from '../utils/cn'
import Button from './Button'

const logoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 6)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500',
        scrolled
          ? 'igf-navbar-heritage border-b backdrop-blur-xl'
          : 'border-b border-igf-gold/10 bg-gradient-to-b from-igf-maroon/90 via-igf-charcoal/85 to-igf-charcoal/75 text-igf-cream backdrop-blur-md',
      )}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-8 igf-tribal-stripe opacity-40 sm:w-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-8 scale-x-[-1] igf-tribal-stripe opacity-40 sm:w-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-igf-gold/50 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative">
            <span
              className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-igf-orange/35 to-igf-magenta/25 opacity-0 blur-md transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <img
              src={logoUrl}
              alt="iGurukul Foundation logo"
              loading="eager"
              decoding="async"
              className="relative h-10 w-auto rounded-xl object-contain ring-1 ring-black/5 transition duration-300 group-hover:ring-igf-orange/35 sm:h-11"
            />
          </span>
          <div className="hidden min-w-0 leading-tight md:block">
            <div className="flex items-center gap-1.5 font-display text-[10px] font-extrabold tracking-[0.18em] text-igf-cream xl:text-[11px] xl:tracking-[0.2em]">
              <span className="truncate whitespace-nowrap">{site.name.toUpperCase()}</span>
              <Sparkles className="h-3 w-3 shrink-0 text-igf-gold opacity-90" aria-hidden />
            </div>
            <div className="mt-0.5 hidden truncate whitespace-nowrap text-[10px] font-semibold tracking-[0.14em] text-igf-gold/80 xl:block">
              {site.tagline.toUpperCase()}
            </div>
          </div>
        </Link>

        {/* Desktop nav — single line, no wrap */}
        <nav
          className="hidden min-w-0 flex-1 justify-center lg:flex"
          aria-label="Main navigation"
        >
          <div className="inline-flex max-w-full flex-nowrap items-center gap-0.5 rounded-full border border-igf-gold/20 bg-igf-maroon/50 px-1 py-1 shadow-[0_4px_20px_rgba(26,12,10,0.25)] ring-1 ring-igf-gold/15 backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold leading-none tracking-tight transition duration-300 xl:px-3.5 xl:text-sm',
                    isActive
                      ? 'bg-gradient-to-r from-igf-orange to-igf-gold text-igf-ink shadow-md shadow-orange-900/30'
                      : 'text-igf-cream/80 hover:bg-igf-gold/15 hover:text-igf-cream',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <Link to="/donate" className="hidden lg:inline-flex">
            <Button
              attention
              className="igf-btn-shimmer whitespace-nowrap px-5 py-2 text-xs shadow-md shadow-orange-500/20 xl:px-6 xl:text-sm"
            >
              Donate
            </Button>
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-igf-indigo/10 bg-white/80 shadow-sm transition duration-300 hover:border-igf-orange/25 hover:bg-white hover:shadow-md lg:hidden',
              open && 'border-igf-orange/30 bg-igf-orange/5',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-igf-charcoal transition-all duration-300',
                  open && 'top-1.5 rotate-45 bg-igf-orange',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-igf-charcoal transition-all duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 rounded-full bg-igf-charcoal transition-all duration-300',
                  open && 'top-1.5 -rotate-45 bg-igf-orange',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-igf-gold/20 bg-igf-charcoal/98 backdrop-blur-xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[85dvh] opacity-100' : 'max-h-0 border-t-transparent opacity-0',
        )}
      >
        <nav className="mx-auto max-w-[90rem] px-4 py-4 sm:px-6" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-igf-orange/25 to-igf-gold/15 text-igf-cream ring-1 ring-igf-gold/30'
                      : 'text-igf-cream/75 hover:bg-igf-gold/10 hover:text-igf-cream',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 border-t border-black/5 pt-4">
            <Link to="/donate" onClick={() => setOpen(false)}>
              <Button className="w-full justify-center" attention>
                Donate Now
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
