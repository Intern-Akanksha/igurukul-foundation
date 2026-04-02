type Props = {
  images: string[]
}

export default function MasonryGallery({ images }: Props) {
  return (
    <div className="igf-masonry">
      {images.map((src, idx) => {
        const rot = ((idx % 6) - 3) * 0.75
        return (
          <div key={src} className="break-inside-avoid pb-4">
            <div
              className="igf-polaroid rounded-3xl border border-black/10 p-3"
              style={{ ['--rot' as never]: `${rot}deg` }}
            >
              <img
                src={src}
                alt="Gallery"
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
              />
              <div className="mt-3 flex items-center justify-between px-1 text-xs font-semibold text-igf-gray">
                <span>Community</span>
                <span className="text-igf-brick">IGF</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
