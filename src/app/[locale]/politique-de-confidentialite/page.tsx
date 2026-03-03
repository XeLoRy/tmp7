import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return { title: t('title') };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections = [
    { title: t('dataCollection'), text: t('dataCollectionText') },
    { title: t('dataUse'), text: t('dataUseText') },
    { title: t('dataRetention'), text: t('dataRetentionText') },
    { title: t('rights'), text: t('rightsText') },
    { title: t('cookies'), text: t('cookiesText') },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-800 mb-4">{t('title')}</h1>
        <p className="text-neutral-600 mb-12">{t('intro')}</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-neutral-800 mb-3">{section.title}</h2>
              <p className="text-neutral-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
