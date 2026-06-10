import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, site } from '../data/site'
import { cn } from '../utils/cn'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
        'lux-nav',
        scrolled && 'lux-nav--scrolled',
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--lux-gold)]/35 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="lux-nav__logo-frame">
            <img
              src={site.logoUrl}
              alt={site.name}
              className="h-10 w-10 rounded-lg object-cover"
            />
          </div>
          <div className="hidden min-w-0 lg:block">
            <div className="font-heading text-base font-semibold leading-tight tracking-[0.02em] lux-text-ink">
              {site.name}
            </div>
            <div className="mt-0.5 max-w-[16rem] text-[11px] leading-[1.35] lux-text-walnut">
              {site.tagline}
            </div>
          </div>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'igf-nav-link-editorial shrink-0 whitespace-nowrap rounded-full px-3 py-2',
                  'lux-text-walnut hover:text-[var(--lux-burgundy)]',
                  isActive && 'igf-nav-link-editorial-active',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <Link to="/donate" className="hidden lg:inline-flex">
            <Button attention className="lux-shimmer text-xs xl:text-sm">
              Donate
            </Button>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--lux-gold)_30%,transparent)] bg-white/90 text-[var(--lux-burgundy)] shadow-sm transition duration-300 hover:border-[var(--lux-gold)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[var(--lux-burgundy)] transition-all duration-300',
                  open && 'top-1.5 rotate-45 bg-[var(--lux-gold)]',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-[var(--lux-burgundy)] transition-all duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 rounded-full bg-[var(--lux-burgundy)] transition-all duration-300',
                  open && 'top-1.5 -rotate-45 bg-[var(--lux-gold)]',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-[color-mix(in_srgb,var(--lux-gold)_18%,transparent)] bg-[color-mix(in_srgb,var(--lux-ivory)_96%,white)] backdrop-blur-2xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[85dvh] opacity-100' : 'max-h-0 opacity-0',
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
                    'rounded-xl px-4 py-3 text-sm font-semibold transition duration-300',
                    isActive
                      ? 'bg-[color-mix(in_srgb,var(--lux-gold)_18%,white)] text-[var(--lux-burgundy)]'
                      : 'lux-text-walnut hover:bg-white hover:text-[var(--lux-burgundy)]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 border-t border-[color-mix(in_srgb,var(--lux-gold)_15%,transparent)] pt-4">
            <Link to="/donate" onClick={() => setOpen(false)}>
              <Button attention className="w-full justify-center">
                Donate Now
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
