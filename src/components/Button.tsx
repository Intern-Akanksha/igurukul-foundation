import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'outline'

type ButtonBaseProps = {
  variant?: ButtonVariant
  /** Subtle pulse + shimmer on primary CTAs */
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
  const cls = cn(
    'igf-btn',
    variant === 'primary' && 'igf-btn-primary',
    variant === 'secondary' && 'igf-btn-secondary',
    variant === 'ghost' && 'igf-btn-ghost',
    variant === 'inverse' && 'igf-btn-inverse',
    variant === 'outline' && 'igf-btn-outline',
    variant === 'primary' && attention && 'igf-btn-shimmer igf-cta-attention',
    className,
  )

  if ('href' in props && typeof props.href === 'string') {
    return <a className={cls} {...props} />
  }

  return <button className={cls} {...props} />
}
