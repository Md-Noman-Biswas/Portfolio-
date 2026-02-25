'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored ? stored === 'dark' : prefersDark;

    document.documentElement.classList.toggle('light', !dark);
    setIsDark(dark);
    setIsMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle('light', !next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-pressed={isDark}
      className="rounded-full border border-slate-700/80 p-2 transition hover:border-cyan-400 hover:text-cyan-300 light:border-slate-300 light:hover:text-cyan-700"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isMounted && isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
