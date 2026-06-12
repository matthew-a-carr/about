'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DISTANCE = 130;
const POINTER_RADIUS = 160;
const MAX_PARTICLES = 140;

/**
 * Decorative particle constellation behind the hero. Particles drift slowly,
 * link to near neighbours, and are pushed away from the pointer. Renders a
 * single static frame when the user prefers reduced motion, and stops the
 * animation loop entirely while the hero is offscreen or the tab is hidden.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let visible = true;
    const pointer = { x: -1, y: -1, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        MAX_PARTICLES,
        Math.round((width * height) / 14000),
      );
      particles = Array.from({ length: count }, (_, i) => ({
        // Deterministic-ish scatter via golden-angle keeps reseeding stable
        // across resizes without Math.random clumping.
        x: ((i * 137.508) % 360) * (width / 360),
        y: ((i * 97.13) % 360) * (height / 360),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (pointer.active) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 0 && dist < POINTER_RADIUS) {
              const force = (1 - dist / POINTER_RADIUS) * 0.6;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          if (p.x < 0 || p.x > width) {
            p.vx *= -1;
            p.x = Math.min(Math.max(p.x, 0), width);
          }
          if (p.y < 0 || p.y > height) {
            p.vy *= -1;
            p.y = Math.min(Math.max(p.y, 0), height);
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(209, 198, 255, 0.55)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(177, 161, 255, ${
              0.18 * (1 - dist / LINK_DISTANCE)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      step();
      rafId = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (!rafId && !reducedMotion && visible && !document.hidden) {
        rafId = window.requestAnimationFrame(loop);
      }
    };

    const stop = () => {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.y >= 0 &&
        pointer.y <= rect.height &&
        pointer.x >= 0 &&
        pointer.x <= rect.width;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) {
        step();
      }
    });

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        start();
      } else {
        stop();
      }
    });

    resize();
    if (reducedMotion) {
      step();
    } else {
      start();
    }

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
