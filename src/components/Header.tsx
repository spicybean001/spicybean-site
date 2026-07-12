"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: `/${locale}#products`, label: t("nav.products") },
    { href: `/${locale}#about`, label: t("nav.about") },
    { href: `/${locale}#contact`, label: t("nav.contact") },
  ];

  const localeLabels: Record<string, string> = {};
  for (const l of locales) {
    localeLabels[l] = t(`locale.${l}`);
  }

  const switchLocalePath = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as any)) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    return "/" + segments.join("/");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-spicy-black/80 backdrop-blur-md border-b border-spicy-red/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="SPICYBEAN"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-wider uppercase">
            <span className="text-gradient">SPICYBEAN</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-spicy-gray hover:text-spicy-neon transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-spicy-gray hover:text-spicy-neon transition-colors duration-300 text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              {localeLabels[locale]}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-sm border border-spicy-red/20 bg-spicy-dark shadow-xl">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocalePath(l)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-spicy-red/10 ${
                      l === locale
                        ? "text-spicy-neon font-semibold"
                        : "text-spicy-gray"
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-spicy-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-spicy-red/20 bg-spicy-dark/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-spicy-gray hover:text-spicy-neon transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-spicy-red/10 pt-4 mt-2">
              <p className="text-xs text-spicy-gray mb-2 tracking-widest uppercase">
                {t("nav.language")}
              </p>
              <div className="flex flex-wrap gap-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocalePath(l)}
                    onClick={() => setMenuOpen(false)}
                    className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                      l === locale
                        ? "border-spicy-neon text-spicy-neon bg-spicy-neon/10"
                        : "border-spicy-gray/30 text-spicy-gray hover:border-spicy-neon"
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
