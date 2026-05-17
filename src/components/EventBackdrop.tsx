/**
 * Heritage festival ambient layer — textures, grain, warm glow (visual only).
 */
export default function EventBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="igf-ambient-base absolute inset-0" />
      <div className="igf-mesh-aurora absolute -left-[25%] -top-[35%] h-[90%] w-[95%] rounded-full opacity-100 blur-3xl" />
      <div className="igf-mesh-aurora-secondary absolute -bottom-[30%] -right-[20%] h-[75%] w-[90%] rounded-full opacity-90 blur-3xl" />
      <div className="igf-neural-fog absolute inset-0 opacity-60" />
      <div className="igf-grain absolute inset-0" />
      <div className="igf-vignette absolute inset-0" />
    </div>
  )
}
