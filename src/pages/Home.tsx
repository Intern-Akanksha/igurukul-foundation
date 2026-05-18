import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import ActaWave from '../components/ActaWave'
import Button from '../components/Button'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import {
  homeDonate,
  homeGallery,
  homeHero,
  homeImpact,
  homePartner,
  homePrograms,
  homeSubscribe,
  homeVision,
  homeWhoWeAre,
} from '../data/homeContent'
import { sitePhotos } from '../data/site'

const heroVideoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/iGF2026Promo.mp4'

const galleryPreview = [
  { src: sitePhotos.heroPoster, alt: 'Classical dance performance' },
  { src: sitePhotos.odissi, alt: 'Odissi welcome' },
  { src: sitePhotos.classical, alt: 'Bharatanatyam on stage' },
]

export default function Home() {
  const { scrollY } = useScroll()
  const mediaY = useTransform(scrollY, [0, 500], [0, 80])

  return (
    <motion.div className="acta-page">
      {/* Cinematic hero image + wave into cream */}
      <section className="acta-hero-media">
        <motion.div style={{ y: mediaY }} className="absolute inset-0 h-[110%]">
          <video
            className="acta-hero-media__img"
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={sitePhotos.heroPoster}
            aria-hidden
          />
        </motion.div>
        <div className="acta-hero-media__shade" aria-hidden />
        <ActaWave fill="var(--acta-cream)" className="absolute bottom-0 left-0 right-0 z-10" />
      </section>

      <section className="acta-hero-intro">
        <div className="acta-hero-intro__inner">
          <div className="acta-olive-blob" aria-hidden />
          <Reveal immediate>
            <motion.div
              className="acta-hero-intro__content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="acta-eyebrow">{homeHero.eyebrow}</p>
              <h1 className="acta-headline mt-4">{homeHero.headline}</h1>
              <p className="acta-lead">{homeHero.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/programs">
                  <Button attention className="px-7 py-3">
                    {homeHero.primaryCta}
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="secondary" className="px-7 py-3">
                    {homeHero.secondaryCta}
                  </Button>
                </Link>
              </div>
              <p className="acta-tax-line">{homeHero.taxLine}</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="acta-section acta-section--cream">
        <div className="acta-inner">
          <Reveal>
            <h2 className="acta-section-title">{homeImpact.title}</h2>
            <p className="acta-section-sub">{homeImpact.subtitle}</p>
            <p className="acta-body max-w-3xl">{homeImpact.intro}</p>
          </Reveal>
          <ul className="acta-stat-grid">
            {homeImpact.stats.map((s, idx) => (
              <li key={s.label}>
                <Reveal delayMs={60 * idx} from="up">
                  <div className="acta-stat-item">
                    <div className="acta-stat-item__value">{s.value}</div>
                    <p className="acta-stat-item__label">{s.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delayMs={120}>
            <p className="acta-body mt-8 max-w-3xl">{homeImpact.closing}</p>
            <Link to="/events" className="mt-8 inline-flex">
              <Button variant="rust">{homeImpact.cta}</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <ActaWave fill="var(--acta-cream-deep)" />

      {/* Who we are â€” collage */}
      <section className="acta-section acta-section--warm">
        <div className="acta-inner">
          <div className="acta-split acta-split--reverse">
            <Reveal from="right" className="acta-split__text">
              <h2 className="acta-section-title">{homeWhoWeAre.title}</h2>
              {homeWhoWeAre.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'acta-body' : 'acta-body mt-4'}>
                  {p}
                </p>
              ))}
              <ul className="acta-list">
                {homeWhoWeAre.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="acta-body mt-4">{homeWhoWeAre.closing}</p>
              <Link to="/about" className="mt-8 inline-flex">
                <Button variant="rust">{homeWhoWeAre.cta}</Button>
              </Link>
            </Reveal>
            <Reveal from="left" delayMs={100} className="acta-split__visual">
              <div className="acta-collage">
                <Parallax offset={30} className="acta-collage__main acta-zoom-wrap">
                  <img src={sitePhotos.community} alt="Community at Castro Valley Center for the Arts" loading="lazy" decoding="async" />
                </Parallax>
                <div className="acta-collage__circle acta-zoom-wrap">
                  <img src={sitePhotos.odissi} alt="Odissi dancer" loading="lazy" decoding="async" />
                </div>
                <div className="acta-collage__rect acta-zoom-wrap">
                  <img src={sitePhotos.classical} alt="" loading="lazy" decoding="async" aria-hidden />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="acta-section acta-section--cream">
        <div className="acta-inner acta-programs-wrap">
          <motion.div className="acta-programs-blob" aria-hidden />
          <div className="acta-split">
            <Reveal from="left" className="acta-split__visual">
              <div className="acta-zoom-wrap rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={sitePhotos.heroPoster}
                  alt="Cultural performance"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </Reveal>
            <Reveal from="right" delayMs={80} className="acta-split__text">
              <h2 className="acta-section-title">{homePrograms.title}</h2>
              <p className="acta-section-sub">{homePrograms.subtitle}</p>
              <p className="acta-body">{homePrograms.intro}</p>
              <div className="acta-program-list">
                {homePrograms.items.map((item) => (
                  <div key={item.title} className="acta-program-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <Link to="/programs" className="mt-8 inline-flex">
                <Button attention>{homePrograms.cta}</Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="acta-section acta-section--warm">
        <div className="acta-inner max-w-3xl">
          <Reveal>
            <h2 className="acta-section-title">{homeVision.title}</h2>
            <p className="acta-section-sub">{homeVision.subtitle}</p>
            <p className="acta-body">{homeVision.intro}</p>
            <ul className="acta-list">
              {homeVision.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="acta-body mt-4">{homeVision.closing}</p>
            <Link to="/contact" className="mt-8 inline-flex">
              <Button variant="secondary">{homeVision.cta}</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partner */}
      <section className="acta-section acta-section--warm">
        <div className="acta-inner max-w-3xl">
          <Reveal>
            <h2 className="acta-section-title">{homePartner.title}</h2>
            <p className="acta-section-sub">{homePartner.subtitle}</p>
            <p className="acta-body">{homePartner.intro}</p>
            <ul className="acta-list">
              {homePartner.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="acta-body mt-4">{homePartner.closing}</p>
            <Link to="/partner-with-us" className="mt-8 inline-flex">
              <Button variant="rust">{homePartner.cta}</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Donate invest band */}
      <section className="acta-invest">
        <Reveal className="acta-invest__visual h-full min-h-[inherit]">
          <img
            src={sitePhotos.odissi}
            alt="Odissi dancer in traditional attire"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <Reveal from="right" delayMs={80} className="acta-invest__content">
          <h2>{homeDonate.title}</h2>
          <p>{homeDonate.intro}</p>
          <ul className="acta-list mt-4 text-white/90">
            {homeDonate.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/80">{homeDonate.taxNote}</p>
          <Link to="/donate" className="mt-8 inline-flex">
            <Button attention>{homeDonate.cta}</Button>
          </Link>
        </Reveal>
      </section>

      {/* Gallery preview */}
      <section className="acta-section acta-section--cream">
        <div className="acta-inner">
          <Reveal>
            <h2 className="acta-section-title">{homeGallery.title}</h2>
            <p className="acta-section-sub">{homeGallery.subtitle}</p>
          </Reveal>
          <div className="acta-card-grid">
            {galleryPreview.map((img, idx) => (
              <Reveal key={img.src} delayMs={70 * idx} from="up">
                <div
                  className={`acta-story-card acta-zoom-wrap${idx === 1 ? ' acta-story-card--accent' : ''}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={150}>
            <Link to="/gallery" className="mt-10 inline-flex">
              <Button variant="rust">{homeGallery.cta}</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Subscribe */}
      <section className="acta-section acta-section--warm">
        <div className="acta-inner max-w-2xl text-center">
          <Reveal>
            <h2 className="acta-section-title">{homeSubscribe.title}</h2>
            <p className="acta-body">{homeSubscribe.intro}</p>
            <ul className="acta-list mx-auto mt-6 max-w-md text-left">
              {homeSubscribe.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link to="/subscribe" className="mt-8 inline-flex">
              <Button attention>{homeSubscribe.cta}</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
