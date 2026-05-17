/** Exhibition ambient layer — visual only. */
export default function EventBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="igf-exhibit-ambient absolute inset-0" />
      <div className="igf-mesh-aurora absolute -left-[25%] -top-[35%] h-[90%] w-[95%] rounded-full opacity-60 blur-3xl" />
      <div className="igf-mesh-aurora-secondary absolute -right-[20%] top-[20%] h-[70%] w-[75%] rounded-full opacity-50 blur-3xl" />
      <div className="igf-grain absolute inset-0 opacity-15" />
    </div>
  )
}
