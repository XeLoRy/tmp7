'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';

type NavItem = (typeof NAV_ITEMS)[number];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change (resize above breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function handleDropdownEnter(key: string) {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  }

  function handleDropdownLeave() {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }

  function getHref(item: { href: string }) {
    return item.href;
  }

  // Separate contact from the rest for the CTA button
  const mainNavItems = NAV_ITEMS.filter((item) => item.key !== 'contact');
  const contactItem = NAV_ITEMS.find((item) => item.key === 'contact');

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/fluidalp-full.png"
              alt="FluidAlp"
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {mainNavItems.map((item) => {
              const hasChildren = 'children' in item && item.children;

              if (hasChildren) {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={getHref(item)}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:text-teal-dark"
                    >
                      {t(item.key)}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.key ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown menu */}
                    {openDropdown === item.key && (
                      <div className="absolute left-0 top-full pt-1">
                        <div className="min-w-[220px] rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
                          {(
                            item.children as ReadonlyArray<{
                              key: string;
                              href: string;
                            }>
                          ).map((child) => (
                            <Link
                              key={child.key}
                              href={getHref(child)}
                              className="block px-4 py-2.5 text-sm text-neutral-800 transition-colors hover:bg-teal-50 hover:text-teal-dark"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {t(child.key)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={getHref(item)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:text-teal-dark"
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side: locale switcher + CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LocaleSwitcher />
            </div>

            {contactItem && (
              <Link
                href={getHref(contactItem)}
                className="hidden lg:inline-flex items-center rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-light"
              >
                {t('contact')}
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-800 transition-colors hover:text-teal-dark lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-neutral-900/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute inset-x-0 top-0 flex h-full flex-col bg-white">
            {/* Mobile header (mirrors main header) */}
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 border-b border-neutral-200">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex-shrink-0">
                <Image
                  src="/images/logo/fluidalp-full.png"
                  alt="FluidAlp"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-800 transition-colors hover:text-teal-dark"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const hasChildren = 'children' in item && item.children;
                  const isExpanded = mobileExpanded === item.key;

                  if (hasChildren) {
                    return (
                      <li key={item.key}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : item.key)
                          }
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-neutral-800 transition-colors hover:text-teal-dark"
                        >
                          {t(item.key)}
                          <svg
                            className={`h-5 w-5 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {isExpanded && (
                          <ul className="ml-4 mt-1 space-y-1 border-l-2 border-neutral-200 pl-3">
                            {/* Parent link */}
                            <li>
                              <Link
                                href={getHref(item)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-teal-dark transition-colors hover:bg-teal-50"
                                onClick={() => setMobileOpen(false)}
                              >
                                {t(item.key)} — {locale === 'fr' ? 'Vue d\'ensemble' : 'Overview'}
                              </Link>
                            </li>
                            {(
                              item.children as ReadonlyArray<{
                                key: string;
                                href: string;
                              }>
                            ).map((child) => (
                              <li key={child.key}>
                                <Link
                                  href={getHref(child)}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-neutral-800 transition-colors hover:bg-teal-50 hover:text-teal-dark"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {t(child.key)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.key}>
                      <Link
                        href={getHref(item)}
                        className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                          item.key === 'contact'
                            ? 'mt-4 bg-orange text-center text-white hover:bg-orange-light'
                            : 'text-neutral-800 hover:text-teal-dark'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(item.key)}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile locale switcher */}
              <div className="mt-8 flex justify-center border-t border-neutral-200 pt-6">
                <LocaleSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
