import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('title') };
}

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });

  const sections = [
    { title: t('editor'), text: t('editorText') },
    { title: t('director'), text: t('directorText') },
    { title: t('hosting'), text: t('hostingText') },
    { title: t('ip'), text: t('ipText') },
    { title: t('liability'), text: t('liabilityText') },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-800 mb-12">{t('title')}</h1>
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
