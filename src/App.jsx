import { useEffect, useRef, useState } from 'react'
import './index.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  )
}

function HeroVideo({ videoId }) {
  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }

    function init() {
      if (playerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1, mute: 1, loop: 1, playlist: videoId,
          controls: 0, showinfo: 0, rel: 0, modestbranding: 1,
          playsinline: 1, disablekb: 1, fs: 0, iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: () => setReady(true),
        },
      })
    }

    if (window.YT && window.YT.Player) {
      init()
    } else {
      window.onYouTubeIframeAPIReady = init
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy()
      playerRef.current = null
    }
  }, [videoId])

  const toggleMute = (e) => {
    e.stopPropagation()
    const p = playerRef.current
    if (!p) return
    if (muted) { p.unMute(); p.setVolume(80) } else { p.mute() }
    setMuted(!muted)
  }

  return (
    <div className="w-full aspect-[16/9] overflow-hidden bg-surface relative">
      <div ref={containerRef} className="w-full h-full scale-[1.02] pointer-events-none" />
      {ready && (
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 w-10 h-10 rounded-full bg-fg/60 backdrop-blur-sm flex items-center justify-center hover:bg-fg/80 transition-colors cursor-pointer"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

function VideoCard({ id, title, artist }) {
  const [playing, setPlaying] = useState(false)
  const timeoutRef = useRef(null)

  const handleEnter = () => {
    timeoutRef.current = setTimeout(() => setPlaying(true), 400)
  }

  const handleLeave = () => {
    clearTimeout(timeoutRef.current)
    setPlaying(false)
  }

  const handleTap = () => {
    setPlaying(!playing)
  }

  return (
    <div
      className="video-card cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
    >
      <div className="aspect-video overflow-hidden bg-surface relative">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              className="video-thumb w-full h-full object-cover"
            />
            <div className="play-icon absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-fg/80 flex items-center justify-center backdrop-blur-sm">
                <svg width="16" height="20" viewBox="0 0 20 24" fill="none" className="md:w-5 md:h-6">
                  <path d="M20 12L0 24V0L20 12Z" fill="white" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted mt-0.5">{artist}</p>
      </div>
    </div>
  )
}

const videos = [
  { id: '1nWcQ-poVF0', title: 'Trip 2 China — Official Trailer', artist: 'Plaqueboymax' },
  { id: '9ZSJFnFZZJ4', title: 'RealSpill — Official Music Video', artist: 'Plaqueboymax' },
  { id: 'd4Si-Hf-U90', title: 'Oasis — Official Music Video', artist: 'Plaqueboymax' },
  { id: 'ScPB3KGVuWI', title: 'Morenos In The Dominican Republic', artist: 'Tray Irving' },
]

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <nav className="px-5 md:px-12 py-5 md:py-6 flex items-center justify-between">
        <span className="font-serif text-xl md:text-2xl italic">Tray Irving</span>
        <div className="flex items-center gap-4 md:gap-5">
          <a href="https://www.instagram.com/bytrvyy/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors">IG</a>
          <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors">YouTube</a>
          <a href="https://www.tiktok.com/@whoistray" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors">TikTok</a>
          <a href="https://twitter.com/Whoistrayy" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors hidden md:block">X</a>
          <a href="https://snapchat.com/add/whoistrayyy" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors hidden md:block">Snap</a>
        </div>
      </nav>

      {/* Hero — big type */}
      <section className="px-5 md:px-12 pt-8 pb-5 md:pt-20 md:pb-10">
        <Reveal>
          <h1 className="font-serif text-[clamp(2.2rem,9vw,7rem)] leading-[0.95] tracking-[-0.02em]">
            Creative direction,<br />
            videography<span className="italic"> & </span><br />
            creator management.
          </h1>
        </Reveal>
      </section>

      {/* Hero video */}
      <Reveal className="px-5 md:px-12 pb-14 md:pb-32">
        <HeroVideo videoId="1nWcQ-poVF0" />
        <div className="flex justify-between items-end mt-3 md:mt-4">
          <p className="text-[10px] md:text-xs text-muted tracking-wide uppercase">Trip 2 China — Plaqueboymax</p>
          <p className="text-[10px] md:text-xs text-muted">@bytrvyy</p>
        </div>
      </Reveal>

      {/* About */}
      <section className="px-5 md:px-12 py-14 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="text-xs md:text-sm text-muted tracking-wide uppercase mb-4 md:mb-6">About</p>
            <div className="space-y-4 md:space-y-5 text-fg/80 text-[15px] md:text-base leading-relaxed">
              <p>
                I make things look the way they're supposed to look. I've been behind the camera
                for creators with millions of followers and I've built the systems
                that turn content into real revenue.
              </p>
              <p>
                Now I'm taking that same eye and those same systems to
                OnlyFans management — helping creators who are serious about
                building something worth building.
              </p>
              <p className="text-fg font-medium">
                If you're making content and leaving money on the table, that's
                where I come in.
              </p>
            </div>
            <a
              href="https://www.instagram.com/bytrvyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 md:mt-8 text-sm font-medium text-fg border-b border-fg pb-0.5 hover:opacity-60 transition-opacity"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={1}>
            <div className="aspect-[16/10] md:aspect-[4/5] overflow-hidden">
              <img src="/img/hero-1.jpg" alt="Tray Irving" className="w-full h-full object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="px-5 md:px-12 py-14 md:py-32 border-t border-border">
        <Reveal>
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl italic">Selected work</h2>
            <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted hover:text-fg transition-colors">
              View all
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i % 2 === 0 ? 0 : 1}>
              <VideoCard {...v} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-12 py-14 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8">
          <Reveal className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-5xl italic leading-[1.1]">Services</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            {[
              { title: 'OnlyFans management', desc: 'Full account operations — messaging, fan engagement, retention, upsells. I run it like a business so you don\'t have to.' },
              { title: 'Content strategy & direction', desc: 'What to shoot, when to post, how to frame it. I build content systems that keep subscribers paying month after month.' },
              { title: 'Videography & production', desc: 'Campaign shoots, social content, music videos. Same quality I bring to million-subscriber creators — applied to your brand.' },
              { title: 'Growth & marketing', desc: 'Cross-platform funnels and social strategy that drives real subscribers — not vanity numbers.' },
            ].map((s, i) => (
              <Reveal key={i}>
                <div className={i < 3 ? 'pb-8 mb-8 md:pb-10 md:mb-10 border-b border-border' : ''}>
                  <h3 className="text-base md:text-lg font-medium mb-2">{s.title}</h3>
                  <p className="text-muted text-[15px] md:text-base leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image break — Tray */}
      <Reveal className="px-5 md:px-12 pb-14 md:pb-32">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="aspect-video overflow-hidden">
            <img src="/img/tray-la.jpg" alt="Tray Irving in Los Angeles" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-video overflow-hidden">
            <img src="/img/hero-1.jpg" alt="Tray Irving — Dominican Republic" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <section className="px-5 md:px-12 py-14 md:py-32 border-t border-border">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-6xl italic leading-[1.05] mb-4 md:mb-6">
              Let's work.
            </h2>
            <p className="text-muted text-[15px] md:text-lg leading-relaxed mb-8 md:mb-10">
              Whether you need full account management or a one-time shoot —
              DM me on Instagram and let's figure out what makes sense.
            </p>
            <a
              href="https://www.instagram.com/bytrvyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-fg text-bg px-6 py-3.5 md:px-8 md:py-4 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity active:opacity-60"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              DM @bytrvyy
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-12 py-6 md:py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <span className="font-serif italic text-lg">Tray Irving</span>
          <div className="flex items-center flex-wrap gap-4 md:gap-5 text-xs text-muted">
            <a href="https://www.instagram.com/bytrvyy/" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors active:opacity-60">Instagram</a>
            <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors active:opacity-60">YouTube</a>
            <a href="https://www.tiktok.com/@whoistray" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors active:opacity-60">TikTok</a>
            <a href="https://twitter.com/Whoistrayy" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors active:opacity-60">X</a>
            <a href="https://snapchat.com/add/whoistrayyy" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors active:opacity-60">Snapchat</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
