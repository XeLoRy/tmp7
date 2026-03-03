'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'fr' | 'en') {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale('fr')}
        className={`px-1.5 py-0.5 text-sm font-medium transition-colors ${
          locale === 'fr'
            ? 'font-bold text-teal'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
        aria-label="Passer en fran\u00e7ais"
      >
        FR
      </button>
      <span className="text-neutral-200">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-1.5 py-0.5 text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'font-bold text-teal'
            : 'text-neutral-400 hover:text-neutral-600'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
