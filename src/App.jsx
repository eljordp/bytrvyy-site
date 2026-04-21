import './index.css'

const videos = [
  { id: '1nWcQ-poVF0', title: 'Trip 2 China — Official Trailer', artist: 'Plaqueboymax' },
  { id: '9ZSJFnFZZJ4', title: 'RealSpill — Official Music Video', artist: 'Plaqueboymax' },
  { id: 'd4Si-Hf-U90', title: 'Oasis — Official Music Video', artist: 'Plaqueboymax' },
  { id: 'ScPB3KGVuWI', title: 'Morenos In The Dominican Republic', artist: 'Tray Irving' },
]

function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between">
        <span className="font-serif text-2xl italic">Tray Irving</span>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/bytrvyy/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg transition-colors">Instagram</a>
          <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg transition-colors">YouTube</a>
          <a href="https://www.tiktok.com/@whoistray" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg transition-colors hidden md:block">TikTok</a>
        </div>
      </nav>

      {/* Hero — big type, let the name breathe */}
      <section className="px-6 md:px-12 pt-12 pb-6 md:pt-20 md:pb-10">
        <h1 className="font-serif text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.95] tracking-[-0.02em]">
          Creative direction,<br />
          videography<span className="italic">&</span><br />
          creator management.
        </h1>
      </section>

      {/* Hero image — full bleed, one strong image */}
      <section className="px-6 md:px-12 pb-20 md:pb-32">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src="/img/hero-1.jpg" alt="Tray Irving — Dominican Republic" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-end mt-4">
          <p className="text-xs text-muted tracking-wide uppercase">Dominican Republic, 2024</p>
          <p className="text-xs text-muted">@bytrvyy</p>
        </div>
      </section>

      {/* About — two column, text left, image right */}
      <section className="px-6 md:px-12 py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-sm text-muted tracking-wide uppercase mb-6">About</p>
            <div className="space-y-5 text-fg/80 leading-relaxed">
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
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-fg border-b border-fg pb-0.5 hover:opacity-60 transition-opacity"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/img/hero-2.jpg" alt="Production still" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Work — YouTube embeds */}
      <section className="px-6 md:px-12 py-20 md:py-32 border-t border-border">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic">Selected work</h2>
          <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg transition-colors hidden md:block">
            View all on YouTube
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.id}>
              <div className="aspect-video overflow-hidden bg-surface">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium">{v.title}</p>
                <p className="text-xs text-muted mt-0.5">{v.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — clean list, no icons */}
      <section className="px-6 md:px-12 py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl italic leading-[1.1]">Services</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-10">
              <div className="pb-10 border-b border-border">
                <h3 className="text-lg font-medium mb-2">OnlyFans management</h3>
                <p className="text-muted leading-relaxed">
                  Full account operations — messaging, fan engagement, retention,
                  upsells. I run it like a business so you don't have to.
                </p>
              </div>
              <div className="pb-10 border-b border-border">
                <h3 className="text-lg font-medium mb-2">Content strategy & direction</h3>
                <p className="text-muted leading-relaxed">
                  What to shoot, when to post, how to frame it. I build content
                  systems that keep subscribers paying month after month.
                </p>
              </div>
              <div className="pb-10 border-b border-border">
                <h3 className="text-lg font-medium mb-2">Videography & production</h3>
                <p className="text-muted leading-relaxed">
                  Campaign shoots, social content, music videos. Same quality I
                  bring to million-subscriber creators — applied to your brand.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Growth & marketing</h3>
                <p className="text-muted leading-relaxed">
                  Cross-platform funnels and social strategy that drives real
                  subscribers — not vanity numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="px-6 md:px-12 pb-20 md:pb-32">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="aspect-video overflow-hidden">
            <img src="/img/hero-3.jpg" alt="Live performance" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden">
            <img src="/img/about.jpg" alt="Production still" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-6xl italic leading-[1.05] mb-6">
            Let's work.
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Whether you need full account management or a one-time shoot —
            DM me on Instagram and let's figure out what makes sense.
          </p>
          <a
            href="https://www.instagram.com/bytrvyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-fg text-bg px-8 py-4 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            DM @bytrvyy
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-serif italic text-lg">Tray Irving</span>
          <div className="flex items-center gap-6 text-xs text-muted">
            <a href="https://www.instagram.com/bytrvyy/" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">Instagram</a>
            <a href="http://youtube.com/itzjusttrayz" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">YouTube</a>
            <a href="https://www.tiktok.com/@whoistray" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">TikTok</a>
            <a href="https://twitter.com/Whoistrayy" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
