import Image from 'next/image';
import GsapEffects from './components/effects/GsapEffects';
import Footer from './components/footer/Footer';
import HeroCanvas from './components/hero-canvas/HeroCanvas';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';

const profileSnapshot = [
  { label: 'Role', value: 'Staff Backend Engineer' },
  { label: 'Stack', value: 'Java · Spring Boot · AWS · GCP · Kubernetes' },
  { label: 'Now', value: 'Benifex' },
  { label: 'Focus', value: 'Engineering principles. Agentic systems.' },
];

const projects = [
  {
    name: 'Travel Planner',
    href: 'https://github.com/matthew-a-carr/travel-planner',
    description:
      'Collaborative travel budget planning for multi-destination, round-the-world trips. Production-quality Next.js with DDD-inspired layered architecture, built AI-assisted.',
    tags: ['Next.js 16', 'TypeScript', 'Drizzle', 'Expo'],
  },
  {
    name: 'Engineering Principles',
    href: 'https://github.com/matthew-a-carr/engineering-principles',
    description:
      'Cross-repo engineering principles as a Claude Code plugin. Agents read it to learn what good looks like — and write back as the principles evolve.',
    tags: ['Claude Code', 'Clean Architecture', 'DDD'],
  },
  {
    name: 'Dev Skills',
    href: 'https://github.com/matthew-a-carr/dev-skills',
    description:
      'Reusable agent skills shared across my repositories — TDD loops, dependency triage, design grilling, architecture reviews.',
    tags: ['Claude Code', 'Agent skills'],
  },
  {
    name: 'This Site',
    href: 'https://github.com/matthew-a-carr/about',
    description:
      'Built in the open: Next.js 16 and GSAP, server-rendered, tested with Vitest, Playwright and axe.',
    tags: ['Next.js', 'GSAP', 'Playwright'],
  },
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

const navLinks = [
  { label: 'Overview', href: '#main-content' },
  { label: 'Building', href: '#building' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Current', href: '#current' },
  { label: 'Contact', href: '#contact' },
];

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
            className="mt-6 font-display text-4xl text-[color:var(--fg)] sm:text-6xl"
          >
            Matthew Carr
          </h1>
          <p
            data-hero
            className="mt-8 max-w-3xl font-display text-2xl leading-snug text-[color:var(--fg)] sm:text-4xl"
          >
            I put good engineering principles and design into{' '}
            <span className="text-[color:var(--accent)]">agentic systems</span>{' '}
            — to build well-thought-out applications, in the open.
          </p>
          <div data-hero className="mt-10 flex flex-wrap gap-3">
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

      {/* Building */}
      <section id="building" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <div data-animate className="max-w-2xl">
            <p className="eyebrow">01 · Building</p>
            <h2 className="mt-5 font-display text-4xl text-[color:var(--fg)] sm:text-5xl">
              What I&apos;m building
            </h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                data-animate
                data-delay={`${(index % 2) * 0.1}`}
                className="card group flex flex-col p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-[color:var(--fg)]">
                    {project.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-xl text-[color:var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[15px] text-[color:var(--soft)]">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--muted)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[color:var(--border)]">
        <div className="container mx-auto px-5 py-28 sm:px-8 sm:py-36">
          <p className="eyebrow" data-animate>
            02 · About
          </p>
          <h2
            data-statement
            className="mt-8 max-w-4xl font-display text-3xl leading-snug text-[color:var(--fg)] sm:text-5xl"
          >
            Well-designed systems don&apos;t happen by accident. I capture the
            principles behind them — DDD, clean architecture, safe delivery — as
            living documents and skills that AI agents apply when they write
            code.
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
