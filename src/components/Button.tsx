import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
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
  const cls = cn(
    'igf-btn',
    variantClass[variant],
    variant === 'primary' && attention && 'igf-btn-shimmer igf-cta-attention',
    className,
  )

  if ('href' in props && typeof props.href === 'string') {
    return <a className={cls} {...props} />
  }

  return <button className={cls} {...props} />
}
