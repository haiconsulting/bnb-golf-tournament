import Link from "next/link";
import { EventAccordion } from "./components/EventAccordion";
import { SplitHero } from "./components/SplitHero";
import { StatChips } from "./components/StatChips";
import { VenueSpotlight } from "./components/VenueSpotlight";

export default function HomePage() {
  return (
    <>
      <SplitHero />

      <div
        id="details"
        className="mx-auto max-w-3xl scroll-mt-24 px-5 py-14 sm:py-20"
      >
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-pine)]">
          Official event page
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold text-[var(--color-pine-deep)] sm:text-4xl">
          Beers and Bogeys Invitational
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/80">
          We&apos;re hosting an intimate{" "}
          <span className="font-semibold text-[var(--color-ink)]">
            ~20 player
          </span>{" "}
          outing at Royal Lakes Golf &amp; Country Club in Flowery Branch,
          Georgia. This page has schedule notes, venue details, and sign-up —
          hover the hero on desktop to see the split panels flex.
        </p>

        <div className="mt-10">
          <StatChips />
        </div>

        <VenueSpotlight />

        <div className="mt-12">
          <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-pine-deep)]">
            Quick facts
          </h3>
          <p className="mt-2 text-sm text-[var(--color-ink)]/65">
            Tap a section to expand or collapse.
          </p>
          <div className="mt-6">
            <EventAccordion />
          </div>
        </div>

        <section className="mt-12 rounded-xl border border-[var(--color-pine)]/25 bg-[color-mix(in_srgb,var(--color-pine)_6%,var(--color-paper))] p-6 sm:p-8">
          <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-pine-deep)]">
            Ready to register?
          </h3>
          <p className="mt-3 max-w-2xl text-[var(--color-ink)]/85">
            Registration is a compact Google Form — we only collect your name,
            handicap, and phone number. Everything else lives on this page.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-pine-deep)] shadow transition hover:bg-[var(--color-gold-muted)] hover:text-black"
          >
            Open registration
          </Link>
        </section>
      </div>
    </>
  );
}
