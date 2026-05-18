import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, site } from '../data/site'
import { cn } from '../utils/cn'
import Button from './Button'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 48)
  const overlayOnHero = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
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
        'igf-nav-acta',
        overlayOnHero && 'igf-nav-acta--overlay',
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={site.logoUrl}
            alt={site.name}
            loading="eager"
            decoding="async"
            className="h-9 w-auto max-w-[min(52vw,220px)] object-contain object-left brightness-110 drop-shadow-sm transition duration-300 group-hover:opacity-90 sm:h-11 sm:max-w-[260px] lg:max-w-[300px]"
          />
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
                  'igf-nav-link-editorial shrink-0 whitespace-nowrap px-3 py-2',
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
            <Button attention className="text-xs xl:text-sm">
              Donate
            </Button>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white/20 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300',
                  open && 'top-1.5 rotate-45 bg-[var(--acta-mustard)]',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white transition-all duration-300',
                  open && 'top-1.5 -rotate-45 bg-[var(--acta-mustard)]',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'igf-nav-acta-mobile overflow-hidden transition-all duration-300 lg:hidden',
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
                    'rounded-lg px-4 py-3 text-sm font-semibold transition duration-300',
                    isActive
                      ? 'bg-white/12 text-[var(--acta-mustard)]'
                      : 'text-white/85 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 border-t border-white/10 pt-4">
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
