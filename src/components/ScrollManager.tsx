import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location

    const scroll = () => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        return
      }

      const el = document.querySelector(hash)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const id = window.setTimeout(scroll, 0)
    return () => window.clearTimeout(id)
  }, [location])

  return null
}
