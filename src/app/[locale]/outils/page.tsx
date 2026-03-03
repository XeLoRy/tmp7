'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations';
import { ContactCTA } from '@/components/sections/ContactCTA';

const toolPages = [
  {
    key: 'simulation',
    href: '/outils/simulation-numerique',
    color: 'bg-teal',
  },
  {
    key: 'measurements',
    href: '/outils/mesures',
    color: 'bg-gold',
  },
] as const;

export default function ToolsOverviewPage() {
  const t = useTranslations('tools');
  const locale = useLocale();

  return (
    <>
      <section className="bg-teal-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolPages.map((tool, i) => (
              <FadeIn key={tool.key} delay={i * 0.15}>
                <Link
                  href={tool.href}
                  className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 h-full group"
                >
                  <div className={`${tool.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {tool.key === 'simulation' ? (
                        <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>
                      ) : (
                        <><path d="M12 20v-6M6 20V10M18 20v-4" /></>
                      )}
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-800 group-hover:text-teal transition-colors">
                    {t(`${tool.key}.title`)}
                  </h2>
                  <p className="mt-3 text-neutral-600">{t(`${tool.key}.description`)}</p>
                  <span className="mt-4 inline-flex items-center text-teal font-medium group-hover:text-teal-dark transition-colors">
                    {t(`${tool.key}.title`)}
                    <span className="ml-1" aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
