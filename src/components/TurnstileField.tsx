import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown> & {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
        },
      ) => string
      reset: (widgetId?: string) => void
      remove?: (widgetId: string) => void
    }
  }
}

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA'

let turnstileScriptPromise: Promise<void> | null = null

function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  if (turnstileScriptPromise) return turnstileScriptPromise

  turnstileScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Turnstile failed to load.')), {
        once: true,
      })
      return
    }

    const script = document.createElement('script')
    script.src = TURNSTILE_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Turnstile failed to load.'))
    document.head.appendChild(script)
  })

  return turnstileScriptPromise
}

type TurnstileFieldProps = {
  onChange: (token: string) => void
}

export default function TurnstileField({ onChange }: TurnstileFieldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    loadTurnstileScript()
      .then(() => {
        if (!mounted || !containerRef.current || !window.turnstile) return
        containerRef.current.innerHTML = ''

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_TEST_SITE_KEY,
          theme: 'light',
          appearance: 'always',
          callback: (token: string) => {
            onChange(token)
            setLoadError(null)
          },
          'expired-callback': () => onChange(''),
          'error-callback': () => {
            onChange('')
            setLoadError('Verification is temporarily unavailable. Please refresh and try again.')
          },
        })
      })
      .catch(() => {
        if (!mounted) return
        setLoadError('Verification is temporarily unavailable. Please refresh and try again.')
      })

    return () => {
      mounted = false
      const widgetId = widgetIdRef.current
      if (widgetId && window.turnstile?.remove) {
        window.turnstile.remove(widgetId)
      } else if (widgetId && window.turnstile) {
        window.turnstile.reset(widgetId)
      }
    }
  }, [onChange])

  return (
    <div>
      <div ref={containerRef} />
      {loadError ? <p className="mt-3 text-sm text-[#C86B48]">{loadError}</p> : null}
    </div>
  )
}
