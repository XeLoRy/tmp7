'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-teal/20 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">{t('title')}</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">{t('message')}</p>
        <Link
          href="/"
          className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
