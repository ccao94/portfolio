import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { hero, profile } from '../data/content'
import { ArrowRightIcon, DownloadIcon, PauseIcon, PlayIcon } from './Icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}

export default function Hero({ ready }) {
  const { tr } = useLang()
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const state = ready ? 'show' : 'hidden'

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-ink md:justify-center">
      {/* Background: optional video, otherwise the photo on the right */}
      {profile.heroVideo ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={profile.heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        </>
      ) : (
        <motion.div
          className="relative h-[52svh] w-full md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[48%]"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_40%)]"
            style={{ objectPosition: profile.photoPosition }}
          />
          <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-ink to-transparent md:block" />
        </motion.div>
      )}

      {/* Soft green glow behind the text */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-forest/40 blur-[140px]" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 md:pb-0 md:pt-16 lg:pl-20"
        variants={container}
        initial="hidden"
        animate={state}
      >
        <div className="max-w-2xl">
          <motion.p variants={item} className="eyebrow mb-6 text-matcha">
            {tr(hero.eyebrow)}
          </motion.p>

          <motion.h1 variants={item} className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            <span className="block">{tr(hero.hello)}</span>
            <em className="mt-3 block text-[0.6em] leading-tight text-matcha">{tr(hero.title)}</em>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
            {tr(hero.subtitle)}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 font-mono text-xs text-cream/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-matcha opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-matcha" />
            </span>
            {tr(hero.status)}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-matcha"
            >
              {tr(hero.ctaProjects)}
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              {tr(hero.ctaContact)}
            </a>
            <a
              href={tr(profile.cv)}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-cream/70 transition-colors hover:text-matcha"
            >
              <DownloadIcon width={16} height={16} />
              {tr(hero.ctaCv)}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Play / pause, only when there is a video */}
      {profile.heroVideo && (
        <button
          type="button"
          onClick={toggleVideo}
          className="group absolute bottom-10 right-8 z-10 flex flex-col items-center gap-2 text-cream"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/30 bg-ink/30 backdrop-blur-md transition-colors group-hover:border-matcha group-hover:bg-forest">
            {playing ? <PauseIcon width={22} height={22} /> : <PlayIcon width={22} height={22} />}
          </span>
          <span className="eyebrow text-cream/70">{tr(playing ? hero.pauseReel : hero.playReel)}</span>
        </button>
      )}

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="relative h-12 w-px overflow-hidden bg-cream/15">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-matcha"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
