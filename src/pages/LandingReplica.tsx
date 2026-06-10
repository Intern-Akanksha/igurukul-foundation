import { useEffect } from 'react'

export default function LandingReplica() {
  useEffect(() => {
    document.title = 'iGurukul Cultural Extravaganza 2026'
  }, [])

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#0b0f19]">
      <iframe
        src="/landing/index.html"
        title="iGurukul Cultural Extravaganza 2026"
        className="h-full w-full border-0"
        loading="eager"
      />
    </div>
  )
}
