import Image from 'next/image';
import Footer from './components/footer/Footer';
import RevealOnScroll from './components/reveal/RevealOnScroll';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';

const profileSnapshot = [
  { label: 'Role', value: 'Senior Backend Engineer' },
  { label: 'Stack', value: 'Java · Spring Boot · AWS · GCP · Kubernetes' },
  { label: 'Now', value: 'Benifex' },
  { label: 'Focus', value: 'Reliability. Scale. DX.' },
];

const workPrinciples = [
  {
    title: 'Design for change.',
    text: 'Systems that absorb new demands without rewrites.',
  },
  {
    title: 'Ship safely.',
    text: 'Progressive delivery. Guardrails. Boring releases.',
  },
  {
    title: 'Leave clear trails.',
    text: 'Readable code. Sharp docs. Paved paths.',
  },
];

const impactHighlights = [
  {
    title: 'Reliability first.',
    text: 'Calm production before clever optimization.',
  },
  {
    title: 'Product-aware.',
    text: 'Technical calls mapped to outcomes and cost.',
  },
  { title: 'Team velocity.', text: 'Less cognitive load. Faster shipping.' },
];

const navLinks = [
  { label: 'Overview', href: '#main-content' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Current', href: '#current' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] font-body">
      <RevealOnScroll />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-[color:var(--fg)] focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-[color:var(--on-dark)]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 glass border-b border-[color:var(--border)]">
        <div className="container mx-auto flex h-12 items-center justify-between px-5 sm:px-8">
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--fg)]">
            Matthew Carr
          </span>
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 overflow-x-auto text-[13px] font-medium text-[color:var(--soft)] sm:gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full px-3 py-1.5 transition-colors hover:text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--fg)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="main-content" className="relative overflow-hidden">
        <div aria-hidden="true" className="halo" />
        <div className="container mx-auto px-5 pt-24 pb-28 sm:px-8 sm:pt-32 sm:pb-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow reveal">Senior Backend Engineer</p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] text-[color:var(--fg)] sm:text-7xl">
                I build backend platforms teams trust in production.
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-[color:var(--soft)] sm:text-xl">
                Reliable systems. Faster shipping. Cleaner architecture.
              </p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/matthew-carr-17012284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/matthew-a-carr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
              <div className="reveal reveal-delay-4 mt-12 grid gap-3 sm:grid-cols-2">
                {profileSnapshot.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {row.label}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-[color:var(--fg)]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-[32px] bg-[color:var(--surface-alt)]">
                <Image
                  src="https://avatars.githubusercontent.com/u/76042279?v=4"
                  alt="Matthew Carr"
                  width={460}
                  height={460}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[color:var(--border)] bg-[color:var(--surface-alt)]"
      >
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div className="reveal">
              <p className="eyebrow">About</p>
              <h2 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
                Stable systems.
                <br />
                Sharp decisions.
              </h2>
              <p className="mt-6 max-w-md text-lg text-[color:var(--soft)]">
                I work on product-critical backends where reliability and
                delivery speed both matter.
              </p>
              <p className="mt-4 max-w-md text-lg text-[color:var(--soft)]">
                Vague requirements become resilient services teams can trust.
              </p>
            </div>
            <div className="reveal reveal-delay-1 space-y-3">
              {workPrinciples.map((principle, index) => (
                <article key={principle.title} className="card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-[color:var(--fg)]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[color:var(--soft)]">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Impact</p>
            <h3 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
              What teams get when we work together
            </h3>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {impactHighlights.map((item, index) => (
              <div
                key={item.title}
                className={`card reveal reveal-delay-${index + 1} p-8`}
              >
                <h3 className="font-display text-2xl text-[color:var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] text-[color:var(--soft)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-[color:var(--border)] bg-[color:var(--surface-alt)]"
      >
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div className="reveal flex flex-col items-center text-center">
            <p className="eyebrow">Toolbox</p>
            <h3 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
              Technical skills
            </h3>
          </div>
          <div className="reveal reveal-delay-1 mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <TechnicalSkills />
          </div>
        </div>
      </section>

      {/* Current */}
      <section id="current" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div className="reveal card flex flex-col items-start gap-8 p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Current</p>
              <h3 className="mt-5 font-display text-3xl text-[color:var(--fg)] sm:text-4xl">
                Senior Backend Engineer at Benifex
              </h3>
              <p className="mt-3 max-w-md text-[15px] text-[color:var(--soft)]">
                Product-led work across multiple projects.
              </p>
            </div>
            <a
              href="https://benifex.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Benifex"
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-4 transition hover:border-[color:var(--border-strong)]"
            >
              <Image
                src="/benifex-green.png"
                alt="Benifex logo"
                width={120}
                height={54}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div className="reveal rounded-[32px] bg-[color:var(--surface-strong)] px-8 py-16 text-[color:var(--on-dark)] sm:px-16 sm:py-24">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--on-dark-muted)]">
                  Let&apos;s connect
                </p>
                <h3 className="mt-5 font-display text-4xl sm:text-5xl">
                  Not hiring myself out.
                  <br />
                  Always open to talk.
                </h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <a
                  href="https://github.com/matthew-a-carr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition hover:scale-[1.03]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-carr-17012284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-[15px] font-medium text-white transition hover:scale-[1.03] hover:border-white/60"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--border)] py-12">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Footer />
          </div>
        </div>
      </footer>
    </main>
  );
}
