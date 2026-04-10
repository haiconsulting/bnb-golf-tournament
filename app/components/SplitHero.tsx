"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HERO_BEER_IMAGE, HERO_GOLF_IMAGE } from "@/lib/hero-images";
import { ROYAL_LAKES } from "@/lib/venue";

type Side = "beer" | "golf" | null;

const heroSizes =
  "(max-width: 768px) 100vw, 50vw" as const;

export function SplitHero() {
  const [active, setActive] = useState<Side>(null);

  return (
    <section
      className="relative grid min-h-[min(68svh,520px)] w-full grid-cols-1 grid-rows-1 overflow-hidden bg-black md:min-h-[min(88vh,760px)]"
      aria-label="Beers and Bogeys Invitational hero"
    >
      {/* Layer 1 — optimized WebP via next/image */}
      <div className="col-start-1 row-start-1 flex h-full min-h-[min(68svh,520px)] w-full flex-col md:min-h-[min(88vh,760px)] md:flex-row">
        {/* Beers — left */}
        <button
          type="button"
          className={`group relative min-h-[200px] flex-1 cursor-default overflow-hidden border-0 bg-black p-0 text-left transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:min-h-0 md:h-full ${
            active === "beer" ? "md:flex-[1.22]" : active === "golf" ? "md:flex-[0.78]" : "md:flex-1"
          }`}
          onMouseEnter={() => setActive("beer")}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive("beer")}
          onBlur={() => setActive(null)}
        >
          <Image
            src={HERO_BEER_IMAGE}
            alt="Cold beer in a glass"
            fill
            sizes={heroSizes}
            priority
            quality={75}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-transparent md:to-transparent" />
          <span className="pointer-events-none absolute right-4 top-4 z-20 text-right font-[family-name:var(--font-serif)] text-xl font-semibold tracking-tight text-white drop-shadow-md sm:right-5 sm:top-5 md:right-8 md:top-1/2 md:-translate-y-1/2 md:text-3xl">
            Beers
          </span>
        </button>

        {/* Bogeys — right */}
        <button
          type="button"
          className={`group relative min-h-[200px] flex-1 cursor-default overflow-hidden border-0 bg-black p-0 text-left transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:min-h-0 md:h-full ${
            active === "golf" ? "md:flex-[1.22]" : active === "beer" ? "md:flex-[0.78]" : "md:flex-1"
          }`}
          onMouseEnter={() => setActive("golf")}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive("golf")}
          onBlur={() => setActive(null)}
        >
          <Image
            src={HERO_GOLF_IMAGE}
            alt="Golf ball at the hole on a sunlit green"
            fill
            sizes={heroSizes}
            priority
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent md:bg-gradient-to-l md:from-black/40 md:via-transparent md:to-transparent" />
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 text-right font-[family-name:var(--font-serif)] text-xl font-semibold tracking-tight text-white drop-shadow-md sm:bottom-6 sm:right-6 md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:text-left md:text-3xl">
            Bogeys
          </span>
        </button>
      </div>

      {/* Layer 2 — glass card */}
      <div className="pointer-events-none col-start-1 row-start-1 z-10 flex h-full min-h-[min(68svh,520px)] w-full items-center justify-center self-stretch px-3 py-6 md:min-h-[min(88vh,760px)] md:px-4 md:py-10">
        <div className="hero-glass pointer-events-auto max-w-lg rounded-2xl border border-white/25 bg-black/40 px-4 py-6 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-10">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-gold)] sm:text-xs sm:tracking-[0.28em]">
            Invitational
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.35rem]">
            Beers &amp; Bogeys
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/90 sm:mt-3 sm:text-base">
            {ROYAL_LAKES.shortName} · Flowery Branch, GA · ~20 players · Sign up
            below
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3">
            <Link
              href="#details"
              className="rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25 sm:px-4 sm:py-2.5"
            >
              Event details
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-[var(--color-gold)] px-3 py-2 text-sm font-semibold text-[var(--color-pine-deep)] shadow transition hover:bg-[var(--color-gold-muted)] hover:text-black sm:px-4 sm:py-2.5"
            >
              Register to play
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
