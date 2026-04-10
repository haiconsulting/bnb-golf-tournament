import Image from "next/image";
import Link from "next/link";

import { ROYAL_LAKES, venueBlurb } from "@/lib/venue";

export function VenueSpotlight() {
  return (
    <section
      className="mt-12 rounded-2xl border border-[var(--color-pine)]/15 bg-[var(--color-paper)] p-6 shadow-sm sm:p-8"
      aria-labelledby="venue-heading"
    >
      <h3
        id="venue-heading"
        className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-[var(--color-pine-deep)]"
      >
        The venue: {ROYAL_LAKES.shortName}
      </h3>
      <p className="mt-2 text-[var(--color-ink)]/80">
        {ROYAL_LAKES.city}, {ROYAL_LAKES.state} ·{" "}
        <Link
          href={ROYAL_LAKES.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-pine)] underline decoration-[var(--color-gold)]/60 underline-offset-2 hover:decoration-[var(--color-gold)]"
        >
          royallakesgolfcc.com
        </Link>
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-inner">
          <Image
            src={ROYAL_LAKES.images.courseWide}
            alt="Fairways and greens at Royal Lakes Golf & Country Club"
            width={720}
            height={448}
            quality={75}
            className="h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <figcaption className="px-4 py-3 text-xs text-[var(--color-ink)]/65">
            Rolling greens and bermuda fairways — Scottish-inspired routing.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-inner">
          <Image
            src={ROYAL_LAKES.images.lakes}
            alt="Lakes on the Royal Lakes property"
            width={720}
            height={448}
            quality={75}
            className="h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <figcaption className="px-4 py-3 text-xs text-[var(--color-ink)]/65">
            About 150 acres with extensive lakes and water views.
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 space-y-4 text-[var(--color-ink)]/85">
        <p>{venueBlurb.about}</p>
        <p>{venueBlurb.dining}</p>
      </div>

      <p className="mt-6 text-xs text-[var(--color-ink)]/50">
        Photos courtesy of{" "}
        <a
          href={ROYAL_LAKES.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[var(--color-pine)]"
        >
          Royal Lakes Golf &amp; Country Club
        </a>
        .
      </p>
    </section>
  );
}
