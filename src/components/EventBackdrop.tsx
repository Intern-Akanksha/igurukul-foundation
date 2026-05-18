/** Editorial ambient layer — warm cream canvas (visual only). */
export default function EventBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="igf-editorial-ambient absolute inset-0" />
      <div className="igf-mesh-aurora absolute -left-[20%] -top-[30%] h-[85%] w-[90%] rounded-full opacity-50 blur-3xl" />
      <div className="igf-grain absolute inset-0 opacity-[0.12]" />
    </div>
  )
}
