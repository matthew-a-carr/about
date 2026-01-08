import Image from 'next/image';
import Footer from './components/footer/Footer';
import TechnicalSkills from './components/technical-skills/TechnicalSkills';
import ThemeToggle from './components/theme-toggle/ThemeToggle';

const focusAreas = [
  {
    title: 'Platform clarity',
    text: 'Designing services that stay readable under pressure and scale without drama.',
  },
  {
    title: 'Operational calm',
    text: 'Observability, safe rollout paths, and systems that behave predictably.',
  },
  {
    title: 'Developer experience',
    text: 'APIs and workflows that feel considered, documented, and easy to trust.',
  },
];

const snapshot = [
  {
    label: 'Role',
    value: 'Senior Backend Engineer',
  },
  {
    label: 'Stack',
    value: 'Java, Kotlin, Spring Boot, AWS, Terraform',
  },
  {
    label: 'Current',
    value: 'Benefex - Rewards & Recognition platform',
  },
  {
    label: 'Interests',
    value: 'Reliability, scalability, developer experience',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] font-body selection:bg-[color:var(--accent-soft)] selection:text-[color:var(--fg)]">
      <header className="border-b border-[color:var(--border)]">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--fg)]">
            Matthew Carr
          </span>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
              Senior Backend Engineer
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-10 top-12 h-40 w-40 rounded-full bg-[color:var(--accent-glow)] opacity-40 blur-2xl"></div>
        <div className="container mx-auto px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                About
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
                Senior backend engineer building reliable platforms.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[color:var(--soft)]">
                I design backend systems and cloud infrastructure with a focus
                on reliability, clarity, and developer experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:carr.matty@gmail.com"
                  className="rounded-full bg-[color:var(--fg)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--fg-strong)]"
                >
                  Say hello
                </a>
                <a
                  href="https://github.com/matthew-a-carr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] border border-[color:var(--accent)] opacity-60"></div>
              <div className="relative rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
                <img
                  src="https://avatars.githubusercontent.com/u/76042279?v=4"
                  alt="Matthew Carr"
                  className="w-full rounded-[20px] object-cover"
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

      <section className="border-t border-[color:var(--border)] py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <div className="h-1 w-10 rounded-full bg-[color:var(--accent)]"></div>
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

      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                What I care about
              </h2>
              <p className="mt-4 text-lg text-[color:var(--soft)]">
                Infrastructure should be invisible to the user and predictable
                for the team. I build for stability first, then scale.
              </p>
              <p className="mt-4 text-lg text-[color:var(--soft)]">
                I like clean interfaces, expressive documentation, and systems
                that let the next engineer move fast without fear.
              </p>
              <p className="mt-4 text-lg text-[color:var(--soft)]">
                I&apos;m experimenting with AI to streamline backend workflows
                and developer tooling.
              </p>
            </div>
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                Snapshot
              </p>
              <div className="mt-6 space-y-4 text-sm">
                {snapshot.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start justify-between gap-6 border-b border-[color:var(--border)] pb-4"
                  >
                    <span className="text-[color:var(--muted)]">
                      {row.label}
                    </span>
                    <span className="text-right font-medium text-[color:var(--fg)]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] py-14">
        <div className="container mx-auto px-6">
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

      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                  Current role
                </p>
                <h3 className="mt-3 font-display text-2xl">
                  Senior Backend Engineer at Benefex
                </h3>
                <p className="mt-3 text-sm text-[color:var(--soft)]">
                  Building the Rewards & Recognition platform with a focus on
                  reliability and speed.
                </p>
              </div>
              <a
                href="https://benifex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm font-medium text-[color:var(--fg)] shadow-sm transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              >
                <Image
                  src="/benefex.jpeg"
                  alt="Benefex logo"
                  width={52}
                  height={52}
                  className="rounded-xl"
                />
                Visit Benefex
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--fg)] px-8 py-12 text-[color:var(--on-dark)] shadow-sm">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--accent-soft)]">
                  Let&apos;s connect
                </p>
                <h3 className="mt-4 font-display text-3xl sm:text-4xl">
                  Open to ambitious backend and platform work.
                </h3>
                <p className="mt-4 text-sm text-[color:var(--on-dark-muted)]">
                  If you want calm systems and clean execution, I&apos;d love to
                  talk.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
                <a
                  href="mailto:carr.matty@gmail.com"
                  className="rounded-full bg-[color:var(--accent-soft)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-glow)]"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-carr-17012284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--accent-soft)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--on-dark)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Footer />
          </div>
        </div>
      </footer>
    </main>
  );
}
