'use client';

import { useEffect, useState } from 'react';

const themes = [
  {
    id: 'ember',
    label: 'Ember',
    swatch: '#d97a4c',
  },
  {
    id: 'mist',
    label: 'Mist',
    swatch: '#7ab6ff',
  },
  {
    id: 'mono',
    label: 'Mono',
    swatch: '#8ec5ff',
  },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState('ember');

  useEffect(() => {
    const existing = document.documentElement.dataset.theme;
    if (existing) {
      setTheme(existing);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      {themes.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setTheme(item.id)}
          data-active={theme === item.id}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] data-[active=true]:text-[color:var(--fg)]"
          aria-pressed={theme === item.id}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.swatch }}
          />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
