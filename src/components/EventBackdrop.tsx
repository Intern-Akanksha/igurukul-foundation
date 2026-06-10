/** Subtle luxury ambient layer. */
export default function EventBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 8% 12%, rgba(212,175,55,0.06), transparent 32%), radial-gradient(circle at 92% 88%, rgba(123,30,38,0.04), transparent 28%), var(--lux-ivory, #f8f4ee)',
        }}
      />
      <div className="igf-grain absolute inset-0 opacity-[0.04]" />
    </div>
  )
}
