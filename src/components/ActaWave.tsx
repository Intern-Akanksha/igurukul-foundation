import { cn } from '../utils/cn'

type ActaWaveProps = {
  fill?: string
  className?: string
  flip?: boolean
}

export default function ActaWave({
  fill = '#fdf6ed',
  className,
  flip = false,
}: ActaWaveProps) {
  return (
    <div className={cn('acta-wave', flip && 'acta-wave--flip', className)} aria-hidden>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,48 C320,96 640,8 960,56 C1200,88 1320,40 1440,64 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
