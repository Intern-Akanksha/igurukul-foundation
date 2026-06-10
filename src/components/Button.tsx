import { useLayoutEffect, useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { ensureGsap } from '../lib/gsap'
import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'rust' | 'inverse' | 'outlineLight'

type ButtonBaseProps = {
  variant?: ButtonVariant
  attention?: boolean
}

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonBaseProps & (ButtonAsButton | ButtonAsLink)

const variantClass: Record<ButtonVariant, string> = {
  primary: 'igf-btn-primary',
  secondary: 'igf-btn-secondary',
  ghost: 'igf-btn-ghost',
  rust: 'igf-btn-rust',
  inverse: 'igf-btn-inverse',
  outlineLight: 'igf-btn-outline-light',
}

export default function Button({
  variant = 'primary',
  attention,
  className,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (reduced || !el || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches)
      return

    const gsap = ensureGsap()
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' })

    const handleMove = (event: MouseEvent) => {
      const bounds = el.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12
      xTo(x)
      yTo(y)
    }

    const handleEnter = () => {
      gsap.to(el, { scale: 1.02, duration: 0.3, ease: 'power2.out' })
    }

    const handleLeave = () => {
      xTo(0)
      yTo(0)
      gsap.to(el, { scale: 1, duration: 0.35, ease: 'power3.out' })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [reduced, variant])

  const cls = cn(
    'igf-btn',
    variantClass[variant],
    variant === 'primary' && attention && 'igf-btn-shimmer igf-cta-attention',
    className,
  )

  if ('href' in props && typeof props.href === 'string') {
    return (
      <a
        ref={(node) => {
          ref.current = node
        }}
        className={cls}
        {...props}
      />
    )
  }

  return (
    <button
      ref={(node) => {
        ref.current = node
      }}
      className={cls}
      {...props}
    />
  )
}
