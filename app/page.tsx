import Image from 'next/image';
import GsapEffects from './components/effects/GsapEffects';
import Footer from './components/footer/Footer';
import HeroCanvas from './components/hero-canvas/HeroCanvas';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';

const profileSnapshot = [
  { label: 'Role', value: 'Staff Backend Engineer' },
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

const marqueeItems = [
  'Java',
  'Spring Boot',
  'Kotlin',
  'Kubernetes',
  'AWS',
  'GCP',
  'PostgreSQL',
  'Terraform',
  'Docker',
  'TypeScript',
];

const navLinks = [
  { label: 'Overview', href: '#main-content' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Current', href: '#current' },
  { label: 'Contact', href: '#contact' },
];

const MarqueeList = () => (
  <>
    {marqueeItems.map((item) => (
      <span
        key={item}
        className="flex shrink-0 items-center gap-8 pr-8 font-display text-2xl text-[color:var(--muted)] sm:text-3xl"
      >
        {item}
        <span aria-hidden="true" className="text-[color:var(--accent)]">
          ✦
        </span>
      </span>
    ))}
  </>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] font-body">
      <GsapEffects />
      <div aria-hidden="true" className="grain" />
      <div aria-hidden="true" className="scroll-progress" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-[color:var(--fg)] focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-[color:var(--bg)]"
      >
        Skip to content
      </a>

      <header className="header-solid sticky top-0 z-30 border-b border-[color:var(--border)]">
        <div className="container mx-auto flex h-14 items-center gap-3 px-4 sm:px-8">
          <span className="hidden whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-[color:var(--fg)] sm:inline">
            Matthew Carr
          </span>
          <nav
            aria-label="Primary"
            className="flex flex-1 items-center justify-end gap-0.5 overflow-x-auto whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted)] sm:gap-2 sm:text-[12px]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full px-2 py-1.5 transition-colors hover:text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] sm:px-3"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="main-content"
        className="relative flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden"
      >
        <HeroCanvas />
        <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-center px-5 pt-20 pb-14 sm:px-8 sm:pt-24">
          <p className="eyebrow" data-hero>
            Staff Backend Engineer — Benifex
          </p>
          <h1
            data-split
            className="mt-6 font-display text-[clamp(3.4rem,13vw,11rem)] leading-[0.95] tracking-[-0.045em] text-[color:var(--fg)]"
          >
            Matthew Carr
          </h1>
          <p
            data-hero
            className="mt-8 max-w-xl text-lg text-[color:var(--soft)] sm:text-xl"
          >
            I build backend platforms teams trust in production — reliable
            systems, faster shipping, cleaner architecture.
          </p>
          <div data-hero className="mt-10 flex flex-wrap gap-3">
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
        </div>
        <div className="container relative z-10 mx-auto px-5 pb-10 sm:px-8">
          <div
            data-hero
            className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {profileSnapshot.map((row) => (
              <div key={row.label} className="bg-[color:var(--bg)] px-5 py-4">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {row.label}
                </p>
                <p className="mt-1 text-[15px] font-medium text-[color:var(--fg)]">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills ticker */}
      <div
        aria-hidden="true"
        className="marquee border-y border-[color:var(--border)] py-6"
      >
        <div className="marquee-track">
          <MarqueeList />
          <MarqueeList />
        </div>
      </div>

      {/* About */}
      <section id="about">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <p className="eyebrow" data-animate>
            01 · About
          </p>
          <h2
            data-statement
            className="mt-8 max-w-4xl font-display text-3xl leading-snug text-[color:var(--fg)] sm:text-5xl"
          >
            I work on product-critical backends where reliability and delivery
            speed both matter. Vague requirements become resilient services
            teams can trust.
          </h2>
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div
              data-animate
              className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-3xl border border-[color:var(--border)] lg:mx-0"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/76042279?v=4"
                alt="Matthew Carr"
                width={460}
                height={460}
                data-parallax
                className="h-auto w-full scale-110 grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {workPrinciples.map((principle, index) => (
                <article
                  key={principle.title}
                  data-animate
                  data-delay={`${index * 0.1}`}
                  className="card p-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
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
          <div data-animate className="max-w-2xl">
            <p className="eyebrow">02 · Impact</p>
            <h2 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
              What teams get when we work together
            </h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {impactHighlights.map((item, index) => (
              <div
                key={item.title}
                data-animate
                data-delay={`${index * 0.1}`}
                className="card p-8"
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
          <div data-animate className="flex flex-col items-center text-center">
            <p className="eyebrow">03 · Toolbox</p>
            <h2 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
              Technical skills
            </h2>
          </div>
          <div
            data-animate
            data-delay="0.1"
            className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            <TechnicalSkills />
          </div>
        </div>
      </section>

      {/* Current */}
      <section id="current" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div
            data-animate
            className="card flex flex-col items-start gap-8 p-10 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="eyebrow">04 · Current</p>
              <h2 className="mt-5 font-display text-3xl text-[color:var(--fg)] sm:text-4xl">
                Staff Backend Engineer at Benifex
              </h2>
              <p className="mt-3 max-w-md text-[15px] text-[color:var(--soft)]">
                Product-led work across multiple projects.
              </p>
            </div>
            <a
              href="https://benifex.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Benifex"
              className="rounded-2xl border border-[color:var(--border)] bg-white px-6 py-4 transition hover:border-[color:var(--border-strong)]"
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
          <div className="flex flex-col items-start gap-10">
            <p className="eyebrow" data-animate>
              05 · Let&apos;s connect
            </p>
            <h2
              data-lines
              className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[1.02] text-[color:var(--fg)]"
            >
              Not hiring myself out.
              <br />
              <span className="text-[color:var(--muted)]">
                Always open to talk.
              </span>
            </h2>
            <div data-animate className="flex flex-wrap gap-3">
              <a
                href="https://github.com/matthew-a-carr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-carr-17012284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
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
