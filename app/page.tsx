import Image from 'next/image';
import Footer from './components/footer/Footer';
import OutboundLink from './components/outbound-link/OutboundLink';
import SiteNav from './components/site-nav/SiteNav';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';
import {
  impactHighlights,
  profile,
  profileSnapshot,
  workPrinciples,
} from './content';

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] font-body selection:bg-[color:var(--accent-soft)] selection:text-[color:var(--fg)] bg-grid">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-[color:var(--fg)] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.3em] focus:text-[color:var(--on-dark)]"
      >
        Skip to content
      </a>
      <SiteNav />

      <section id="main-content" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[color:var(--accent-soft)] opacity-70 blur-3xl float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-[color:var(--accent-glow)] opacity-65 blur-3xl float-slower"
        />
        <div className="container mx-auto px-5 py-14 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-8">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] fade-up">
                Overview
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-[color:var(--fg)] sm:text-6xl fade-up delay-1">
                {profile.tagline}
              </h1>
              <p className="max-w-2xl text-base text-[color:var(--soft)] fade-up delay-2 sm:text-lg">
                {profile.description}
              </p>
              <div className="flex flex-wrap gap-4 fade-up delay-3">
                <OutboundLink
                  href={profile.links.linkedin}
                  tracking="linkedin_hero"
                  className="rounded-full bg-[color:var(--fg)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--on-dark)] transition hover:-translate-y-0.5 hover:bg-[color:var(--fg-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  LinkedIn
                </OutboundLink>
                <OutboundLink
                  href={profile.links.github}
                  tracking="github_hero"
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  GitHub
                </OutboundLink>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 fade-up delay-3">
                {profileSnapshot.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 shadow-[0_10px_30px_-26px_rgba(0,0,0,0.4)]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--muted)]">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[color:var(--fg)]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[32px] border border-[color:var(--accent)] opacity-50"
              />
              <div className="relative mx-auto max-w-[460px] rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_32px_70px_-50px_rgba(0,0,0,0.45)]">
                <Image
                  src="https://avatars.githubusercontent.com/u/76042279?v=4"
                  alt={profile.name}
                  width={460}
                  height={460}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="h-auto w-full rounded-[20px]"
                />
                <div className="mt-5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.32em] text-[color:var(--muted)]">
                  <span>Backend</span>
                  <span>Cloud</span>
                  <span>DX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-[color:var(--border)] py-14"
      >
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Engineer mindset: stable systems, clear decisions, sharp
                execution.
              </h2>
              <p className="mt-5 text-base text-[color:var(--soft)] sm:text-lg">
                I work best on product-critical backend platforms where
                reliability and delivery speed both matter. My bias is to keep
                architecture understandable and production behavior predictable.
              </p>
              <p className="mt-4 text-base text-[color:var(--soft)] sm:text-lg">
                I enjoy turning vague requirements into resilient services,
                well-defined interfaces, and operational patterns teams can
                trust.
              </p>
            </div>
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_24px_60px_-44px_rgba(0,0,0,0.35)]">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                How I work
              </p>
              <div className="mt-6 space-y-5">
                {workPrinciples.map((principle, index) => (
                  <article
                    key={principle.title}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--muted)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-[color:var(--fg)]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--soft)]">
                      {principle.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="border-t border-[color:var(--border)] py-14"
      >
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
              Impact
            </p>
            <h3 className="font-display text-3xl sm:text-4xl">
              What teams get when we work together
            </h3>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {impactHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_24px_60px_-44px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <div className="h-1 w-10 rounded-full bg-[color:var(--accent)]" />
                <h3 className="mt-5 font-display text-2xl text-[color:var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--soft)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-t border-[color:var(--border)] py-14"
      >
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
              Toolbox
            </p>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">
              Technical skills
            </h3>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <TechnicalSkills />
          </div>
        </div>
      </section>

      <section id="current" className="py-14">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[0_28px_70px_-52px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                  Current role
                </p>
                <h3 className="mt-3 font-display text-2xl">
                  {profile.role} at {profile.employer}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--soft)]">
                  Product-led development across multiple projects, with a focus
                  on reliability, scalability, and delivery speed.
                </p>
              </div>
              <OutboundLink
                href={profile.links.employer}
                tracking="employer"
                aria-label={profile.employer}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm font-medium text-[color:var(--fg)] shadow-sm transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                <Image
                  src="/benifex-green.png"
                  alt="Benifex logo"
                  width={120}
                  height={54}
                  className="h-8 w-auto rounded-md"
                />
              </OutboundLink>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[color:var(--border)] py-16"
      >
        <div className="container mx-auto px-5 sm:px-6">
          <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--fg)] px-6 py-10 text-[color:var(--on-dark)] shadow-[0_30px_70px_-52px_rgba(0,0,0,0.6)] sm:px-8 sm:py-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--accent-soft)]">
                  Let&apos;s connect
                </p>
                <h3 className="mt-4 font-display text-3xl sm:text-4xl">
                  Not currently looking for new roles.
                </h3>
                <p className="mt-4 text-sm text-[color:var(--on-dark-muted)]">
                  Happy to stay connected on GitHub and LinkedIn.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
                <OutboundLink
                  href={profile.links.github}
                  tracking="github_contact"
                  className="rounded-full bg-[color:var(--accent-soft)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  GitHub
                </OutboundLink>
                <OutboundLink
                  href={profile.links.linkedin}
                  tracking="linkedin_contact"
                  className="rounded-full border border-[color:var(--accent-soft)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--on-dark)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  LinkedIn
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-16">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Footer />
          </div>
        </div>
      </footer>
    </main>
  );
}
