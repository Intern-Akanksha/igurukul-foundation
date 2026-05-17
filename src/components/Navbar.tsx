import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { navItems, site } from '../data/site'
import { cn } from '../utils/cn'
import Button from './Button'

const logoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 6)
  const onHero = isHome && !scrolled

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
        onHero ? 'igf-nav-exhibit-transparent text-white' : 'igf-nav-exhibit text-igf-charcoal',
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-igf-indigo/30 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative">
            <span
              className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-cyan-500/25 to-violet-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <img
              src={logoUrl}
              alt="iGurukul Foundation logo"
              loading="eager"
              decoding="async"
              className="relative h-10 w-auto rounded-lg object-contain ring-1 ring-black/5 transition duration-300 group-hover:ring-igf-indigo/35 sm:h-11"
            />
          </span>
          <div className="hidden min-w-0 leading-tight md:block">
            <div
              className={cn(
                'flex items-center gap-1.5 font-display text-[10px] font-extrabold tracking-[0.18em] xl:text-[11px] xl:tracking-[0.2em]',
                onHero ? 'text-white' : 'text-igf-charcoal',
              )}
            >
              <span className="truncate whitespace-nowrap">{site.name.toUpperCase()}</span>
              <Sparkles
                className={cn('h-3 w-3 shrink-0 opacity-90', onHero ? 'text-cyan-300' : 'text-igf-indigo')}
                aria-hidden
              />
            </div>
            <div
              className={cn(
                'mt-0.5 hidden truncate whitespace-nowrap text-[10px] font-semibold tracking-[0.14em] xl:block',
                onHero ? 'text-white/75' : 'text-igf-gray',
              )}
            >
              {site.tagline.toUpperCase()}
            </div>
          </div>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'igf-nav-link-exhibit shrink-0 whitespace-nowrap px-3 py-2 text-[13px] xl:text-sm',
                  isActive && 'igf-nav-link-exhibit-active',
                  onHero
                    ? isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                    : isActive
                      ? 'text-igf-indigo'
                      : 'text-igf-gray hover:text-igf-charcoal',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <Link to="/donate" className="hidden lg:inline-flex">
            <Button
              attention
              className="whitespace-nowrap px-5 py-2 text-xs shadow-md shadow-blue-900/20 xl:px-6 xl:text-sm"
            >
              Donate
            </Button>
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-sm transition duration-300 lg:hidden',
              onHero
                ? 'border-white/25 bg-white/10 hover:bg-white/20'
                : 'border-igf-indigo/10 bg-white/90 hover:border-igf-indigo/25 hover:shadow-md',
              open && (onHero ? 'bg-white/20' : 'border-igf-indigo/30 bg-igf-indigo/5'),
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full transition-all duration-300',
                  onHero ? 'bg-white' : 'bg-igf-charcoal',
                  open && 'top-1.5 rotate-45 bg-igf-indigo',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 rounded-full transition-all duration-300',
                  onHero ? 'bg-white' : 'bg-igf-charcoal',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 rounded-full transition-all duration-300',
                  onHero ? 'bg-white' : 'bg-igf-charcoal',
                  open && 'top-1.5 -rotate-45 bg-igf-indigo',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t backdrop-blur-xl transition-all duration-300 lg:hidden',
          onHero ? 'border-white/15 bg-igf-maroon/95' : 'border-igf-indigo/10 bg-white',
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
                    'whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition duration-300',
                    onHero
                      ? isActive
                        ? 'bg-white/15 text-white ring-1 ring-white/25'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                      : isActive
                        ? 'bg-igf-indigo/10 text-igf-indigo ring-1 ring-igf-indigo/20'
                        : 'text-igf-gray hover:bg-slate-50 hover:text-igf-charcoal',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className={cn('mt-4 border-t pt-4', onHero ? 'border-white/15' : 'border-slate-200')}>
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
