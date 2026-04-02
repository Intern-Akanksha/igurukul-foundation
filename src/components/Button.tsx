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
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igf-orange/40 active:translate-y-px disabled:pointer-events-none disabled:opacity-60'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-b from-[#f07a4a] to-igf-orange text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md',
    secondary:
      'bg-transparent text-igf-charcoal ring-1 ring-igf-silver/70 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-sm',
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
