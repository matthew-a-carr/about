'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { type NavLink, navLinks, profile } from '../../content';

const linkClass =
  'shrink-0 rounded-full px-2 py-2 transition hover:text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] sm:px-3 aria-[current=true]:text-[color:var(--fg)]';

const useActiveSection = (links: readonly NavLink[]): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = links.map((l) => l.sectionId);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  return activeId;
};

const SiteNav = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navLinks);

  const closeDrawer = useCallback(() => {
    setOpen(false);
    dialogRef.current?.close();
  }, []);

  const openDrawer = useCallback(() => {
    setOpen(true);
    dialogRef.current?.showModal();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setOpen(false);
    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      closeDrawer();
    }
  };

  const renderLink = (link: NavLink, onClick?: () => void) => {
    const isActive = activeId === link.sectionId;
    return (
      <a
        key={link.href}
        href={link.href}
        onClick={onClick}
        aria-current={isActive ? 'true' : undefined}
        className={linkClass}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border)] bg-[color:var(--bg)] backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-5 sm:px-6">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--fg)]">
          {profile.name}
        </span>

        <nav
          aria-label="Primary"
          className="hidden sm:flex -mx-3 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]"
        >
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <button
          type="button"
          aria-label="Open navigation"
          aria-controls="site-nav-drawer"
          aria-expanded={open}
          onClick={openDrawer}
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: native <dialog> handles ESC dismissal; onClick only detects backdrop clicks */}
      <dialog
        ref={dialogRef}
        id="site-nav-drawer"
        aria-label="Site navigation"
        onClick={handleBackdropClick}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-sm border-l border-[color:var(--border)] bg-[color:var(--bg)] p-0 text-[color:var(--fg)] backdrop:bg-black/40 sm:hidden"
      >
        <div className="flex items-center justify-between border-b border-[color:var(--border)] px-5 py-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--fg)]">
            {profile.name}
          </span>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeDrawer}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav
          aria-label="Mobile primary"
          className="flex flex-col gap-2 px-5 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]"
        >
          {navLinks.map((link) =>
            renderLink(link, () => {
              closeDrawer();
            }),
          )}
        </nav>
      </dialog>
    </header>
  );
};

export default SiteNav;
