import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { FadeIn } from '@/components/animations';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const credentials = [
    t('founderCredentials.0'),
    t('founderCredentials.1'),
    t('founderCredentials.2'),
    t('founderCredentials.3'),
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-neutral-600 mb-12 max-w-3xl">
            {t('subtitle')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/team/eric-casale.webp"
                alt="Eric Casalé - Fondateur FluidAlp"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              {t('founderTitle')}
            </h2>
            <ul className="space-y-4">
              {credentials.map((credential, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-teal flex-shrink-0" />
                  <span className="text-neutral-600">{credential}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <p key={i} className="text-neutral-600 leading-relaxed">
                  {t(`description.${i}`)}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Research / University link */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/about/amu-research.webp"
                alt="Laboratoire de recherche - Université d'Aix-Marseille"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-500 italic">
              {t('researchCaption')}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
