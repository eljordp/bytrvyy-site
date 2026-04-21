import './index.css'

const stats = [
  { value: '$2M+', label: 'Revenue Generated' },
  { value: '50+', label: 'Creators Managed' },
  { value: '300%', label: 'Avg Growth Rate' },
  { value: '24/7', label: 'Account Coverage' },
]

const services = [
  {
    title: 'Account Management',
    desc: 'Full day-to-day operations. Messaging, fan engagement, upsells, and retention strategy handled entirely by our team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Content Strategy',
    desc: 'Data-driven posting schedules, content calendars, and creative direction that keeps subscribers paying and engaged.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Growth & Marketing',
    desc: 'Cross-platform promotion, social media funnels, Reddit campaigns, and paid traffic that drives real subscriber growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Brand Development',
    desc: 'We build your personal brand beyond the platform. Social presence, aesthetic cohesion, and long-term positioning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const process_steps = [
  { num: '01', title: 'Apply', desc: 'Fill out our intake form. We review your profile, content, and growth potential.' },
  { num: '02', title: 'Onboard', desc: 'We audit your account, set benchmarks, and build your custom strategy.' },
  { num: '03', title: 'Scale', desc: 'Our team takes over operations. You create. We handle everything else.' },
  { num: '04', title: 'Earn', desc: 'Watch your revenue climb while we optimize every lever of your business.' },
]

function App() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl text-white tracking-wide">BYTRVYY</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-light-muted hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm text-light-muted hover:text-white transition-colors">Process</a>
            <a href="#about" className="text-sm text-light-muted hover:text-white transition-colors">About</a>
            <a
              href="https://www.instagram.com/bytrvyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-dark bg-gold hover:bg-gold-light px-5 py-2 transition-colors"
            >
              Apply Now
            </a>
          </div>
          <a
            href="https://www.instagram.com/bytrvyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-sm font-medium text-dark bg-gold px-4 py-2"
          >
            Apply
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:pt-52 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">Creator Management Agency</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8">
            We turn creators into<br />
            <span className="text-gold">six-figure brands.</span>
          </h1>
          <p className="text-light-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Full-service OnlyFans management. Strategy, operations, growth, and monetization — so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/bytrvyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-dark bg-gold hover:bg-gold-light font-medium px-8 py-4 text-base transition-colors"
            >
              Start Your Application
            </a>
            <a
              href="#services"
              className="inline-block text-white border border-dark-border hover:border-muted px-8 py-4 text-base transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-6 py-10 md:py-14 text-center ${i < stats.length - 1 ? 'border-r border-dark-border' : ''}`}
            >
              <p className="font-serif text-3xl md:text-4xl text-gold mb-2">{s.value}</p>
              <p className="text-sm text-light-muted tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-16">
            Everything your account needs.<br />Nothing you don't.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-dark-card border border-dark-border p-8 md:p-10 group hover:border-gold/30 transition-colors">
                <div className="text-gold mb-5">{s.icon}</div>
                <h3 className="font-serif text-xl text-white mb-3">{s.title}</h3>
                <p className="text-light-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 px-6 border-t border-dark-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">The Process</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-16">
            From application to income.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process_steps.map((s, i) => (
              <div key={i} className="relative">
                <p className="font-serif text-5xl text-gold/20 mb-4">{s.num}</p>
                <h3 className="font-serif text-xl text-white mb-3">{s.title}</h3>
                <p className="text-light-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 px-6 border-t border-dark-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
            Built by Tray Irving.
          </h2>
          <div className="space-y-6 text-light-muted text-lg leading-relaxed">
            <p>
              I started managing creators because I saw the gap — talented people leaving money on the table because they didn't have the systems, strategy, or time to run a real business.
            </p>
            <p>
              Now I run a team that handles everything from messaging and fan retention to content scheduling and cross-platform growth. Our creators don't just earn more — they build sustainable brands.
            </p>
            <p>
              If you're serious about scaling, I'm serious about getting you there.
            </p>
          </div>
          <div className="mt-10 flex gap-6">
            <a
              href="https://www.instagram.com/bytrvyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-sm font-medium tracking-wide flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @bytrvyy
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-dark-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Ready to scale?
          </h2>
          <p className="text-light-muted text-lg mb-10 max-w-xl mx-auto">
            We only take on creators we believe in. If you're ready to take your account seriously, reach out.
          </p>
          <a
            href="https://www.instagram.com/bytrvyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-dark bg-gold hover:bg-gold-light font-medium px-10 py-4 text-base transition-colors"
          >
            Apply via Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-serif text-lg text-white tracking-wide">BYTRVYY</a>
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} BYTRVYY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
