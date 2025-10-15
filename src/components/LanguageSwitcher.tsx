'use client';

import Link from 'next/link';
import { Lang, languages } from '@/app/i18n/config';

export default function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex gap-2">
      {languages.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-400 hover:scale-105 ${
            currentLang === l
              ? 'bg-card text-foreground border-2 border-accent shadow-lg'
              : 'bg-card text-foreground border border-border hover:border-accent'
          }`}
          aria-current={currentLang === l ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}