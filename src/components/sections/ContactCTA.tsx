'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { COMPANY } from '@/lib/constants';
import { FadeIn } from '@/components/animations';

export function ContactCTA() {
  const t = useTranslations('cta');

  return (
    <section className="bg-teal-dark py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">{t('title')}</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">{t('subtitle')}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-block bg-orange hover:bg-orange-light text-white rounded-lg px-8 py-4 font-semibold transition-colors"
              >
                {t('button')}
              </Link>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 text-white hover:text-white/80 font-semibold transition-colors"
              >
                {/* Phone icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
