'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useEffect } from 'react';

/**
 * Drives every animation on the page from data attributes so the page itself
 * stays a server component. Content is fully visible in the server HTML;
 * GSAP hides elements only at animation start, so no-JS visitors, crawlers,
 * and reduced-motion users always see the rested state.
 *
 *  - [data-split]      hero heading, character-level rise-in
 *  - [data-hero]       hero elements, staggered fade-up on load
 *  - [data-animate]    fade-up when scrolled into view (data-delay optional)
 *  - [data-statement]  word-by-word brighten, scrubbed to scroll position
 *  - [data-parallax]   slow vertical drift, scrubbed to scroll position
 *  - [data-lines]      line-masked rise-in when scrolled into view
 *
 * Also drives the reading-progress bar, marks the in-view section's nav link
 * with aria-current, and adds magnetic hover to buttons on fine pointers.
 */
export default function GsapEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const splits: SplitText[] = [];

      const heroHeading = document.querySelector<HTMLElement>('[data-split]');
      if (heroHeading) {
        const split = SplitText.create(heroHeading, {
          type: 'chars,words',
          mask: 'words',
          aria: 'auto',
        });
        splits.push(split);
        gsap.from(split.chars, {
          yPercent: 110,
          duration: 1.1,
          ease: 'power4.out',
          stagger: { each: 0.035, from: 'start' },
          delay: 0.15,
        });
      }

      gsap.from('[data-hero]', {
        y: 28,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.5,
      });

      for (const el of gsap.utils.toArray<HTMLElement>('[data-animate]')) {
        gsap.from(el, {
          y: 44,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
          delay: Number.parseFloat(el.dataset.delay ?? '0'),
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => el.classList.add('in-view'),
          },
        });
      }

      const statement = document.querySelector<HTMLElement>('[data-statement]');
      if (statement) {
        const split = SplitText.create(statement, {
          type: 'words',
          wordsClass: 'statement-word',
          aria: 'auto',
        });
        splits.push(split);
        gsap.to(split.words, {
          opacity: 1,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: statement,
            start: 'top 80%',
            end: 'bottom 45%',
            scrub: true,
          },
        });
      }

      for (const el of gsap.utils.toArray<HTMLElement>('[data-parallax]')) {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }

      for (const el of gsap.utils.toArray<HTMLElement>('[data-lines]')) {
        const split = SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          aria: 'auto',
        });
        splits.push(split);
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      }

      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });

      for (const section of gsap.utils.toArray<HTMLElement>(
        'main section[id]',
      )) {
        const link = document.querySelector(
          `nav[aria-label="Primary"] a[href="#${section.id}"]`,
        );
        if (link) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) {
                link.setAttribute('aria-current', 'true');
              } else {
                link.removeAttribute('aria-current');
              }
            },
          });
        }
      }

      const abort = new AbortController();
      if (window.matchMedia('(pointer: fine)').matches) {
        for (const btn of gsap.utils.toArray<HTMLElement>(
          '.btn-primary, .btn-secondary',
        )) {
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
          btn.addEventListener(
            'mousemove',
            (event) => {
              const rect = btn.getBoundingClientRect();
              xTo((event.clientX - rect.left - rect.width / 2) * 0.3);
              yTo((event.clientY - rect.top - rect.height / 2) * 0.3);
            },
            { signal: abort.signal },
          );
          btn.addEventListener(
            'mouseleave',
            () => {
              xTo(0);
              yTo(0);
            },
            { signal: abort.signal },
          );
        }
      }

      return () => {
        abort.abort();
        for (const split of splits) {
          split.revert();
        }
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
