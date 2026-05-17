import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonBaseProps = {
  variant?: ButtonVariant
  attention?: boolean
}

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonBaseProps & (ButtonAsButton | ButtonAsLink)

export default function Button({
  variant = 'primary',
  attention,
  className,
  ...props
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igf-orange/40 active:translate-y-px disabled:pointer-events-none disabled:opacity-60'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'igf-btn-shimmer overflow-hidden bg-gradient-to-b from-igf-orange via-igf-gold to-igf-ruby text-igf-cream shadow-[0_8px_28px_rgba(212,98,42,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(232,184,74,0.35)]',
    secondary:
      'bg-igf-cream/90 text-igf-charcoal ring-1 ring-igf-gold/30 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-igf-cream hover:shadow-[0_12px_32px_rgba(42,18,16,0.15)]',
    ghost: 'bg-transparent text-igf-charcoal hover:bg-white/60',
  }

  const cls = cn(base, variants[variant], attention && 'igf-cta-attention', className)

  if ('href' in props && typeof props.href === 'string') {
    return <a className={cls} {...props} />
  }

  return (
    <button
      className={cls}
      {...props}
    />
  )
}
