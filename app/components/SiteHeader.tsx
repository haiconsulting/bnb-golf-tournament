"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoFromEnv = process.env.NEXT_PUBLIC_LOGO_URL?.trim();
  const logoSrc = logoFromEnv?.startsWith("http") ? logoFromEnv : "/images/logo.webp";
  const logoRemote = logoSrc.startsWith("http");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--color-pine)_18%,transparent)] bg-[var(--color-pine)] text-[var(--color-cream)] shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:px-4 md:py-2.5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative shrink-0">
            {logoRemote ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoSrc}
                alt=""
                width={56}
                height={56}
                className="h-7 w-auto max-w-[56px] object-contain object-left sm:h-8 sm:max-w-[64px]"
              />
            ) : (
              <Image
                src={logoSrc}
                alt=""
                width={56}
                height={56}
                className="h-7 w-auto max-w-[56px] object-contain object-left sm:h-8 sm:max-w-[64px]"
                priority
                sizes="(max-width: 640px) 56px, 64px"
              />
            )}
          </span>
          <h1 className="min-w-0 text-left">
            <span className="block text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[var(--color-gold)] sm:text-[0.65rem] sm:tracking-[0.18em]">
              Invitational
            </span>
            <span className="mt-0.5 block font-[family-name:var(--font-serif)] text-sm font-semibold leading-snug tracking-tight sm:text-base md:text-lg">
              Beers &amp; Bogeys
            </span>
          </h1>
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-medium md:flex md:gap-6"
          aria-label="Primary"
        >
          <Link
            href="/#details"
            className="border-b-2 border-transparent pb-0.5 text-[var(--color-cream)]/90 transition hover:border-[var(--color-gold)] hover:text-white"
          >
            Event info
          </Link>
          <Link
            href="/register"
            className="border-b-2 border-transparent pb-0.5 text-[var(--color-cream)]/90 transition hover:border-[var(--color-gold)] hover:text-white"
          >
            Registration
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex w-5 flex-col gap-1" aria-hidden>
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
            </span>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-[var(--color-pine)] md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-3 py-2 sm:px-4" aria-label="Mobile">
          <Link
            href="/#details"
            className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--color-cream)] hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Event info
          </Link>
          <Link
            href="/register"
            className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--color-cream)] hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Registration
          </Link>
        </nav>
      </div>
    </header>
  );
}
