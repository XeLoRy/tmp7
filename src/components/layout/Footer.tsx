'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';
import Image from 'next/image';

const footerNavItems = [
  { key: 'home' as const, href: '/' },
  ...NAV_ITEMS.filter((item) =>
    ['expertise', 'tools', 'projects', 'contact'].includes(item.key)
  ),
];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale() as 'fr' | 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Description */}
          <div className="space-y-4">
            <Link href="/" aria-label={COMPANY.name}>
              <Image
                src="/images/logo/fluidalp-full.png"
                alt={COMPANY.name}
                width={180}
                height={48}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-teal-light"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <address className="not-italic leading-relaxed">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.city}
                  <br />
                  {COMPANY.address.country}
                </address>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-teal-light"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('contact.hours')}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>{t('contact.hoursWeekday')}</li>
              <li>{t('contact.hoursWeekend')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-600 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-neutral-400 transition-colors hover:text-teal-light"
            >
              {t('footer.legal')}
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-sm text-neutral-400 transition-colors hover:text-teal-light"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
