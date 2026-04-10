import type { Metadata } from "next";

import { ROYAL_LAKES } from "@/lib/venue";

export const metadata: Metadata = {
  title: "Registration | Beers and Bogeys Invitational",
  description:
    "Sign up for the Beers and Bogeys Invitational at Royal Lakes — name, handicap, and phone only.",
};

const FIELDS = [
  {
    step: "01",
    title: "Name",
    detail: "Who’s joining the field",
  },
  {
    step: "02",
    title: "Handicap",
    detail: "Index or best guess — no judgment",
  },
  {
    step: "03",
    title: "Phone number",
    detail: "So we can reach you day-of",
  },
] as const;

function getEmbedUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL?.trim();
  return raw || undefined;
}

export default function RegisterPage() {
  const embedUrl = getEmbedUrl();

  return (
    <div className="relative mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[var(--color-gold)]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-32 h-48 w-48 rounded-full bg-[var(--color-pine)]/10 blur-3xl"
        aria-hidden
      />

      <p className="relative text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-pine)]">
        Player registration
      </p>
      <h2 className="relative mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold text-[var(--color-pine-deep)] sm:text-4xl">
        Save your spot
      </h2>
      <p className="relative mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/80">
        We&apos;re playing at{" "}
        <a
          href={ROYAL_LAKES.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-pine)] underline decoration-[var(--color-gold)]/50 underline-offset-2 hover:decoration-[var(--color-gold)]"
        >
          {ROYAL_LAKES.name}
        </a>{" "}
        in {ROYAL_LAKES.city}. The form only asks for three things — nothing
        else.
      </p>

      <ul className="relative mt-10 grid gap-4 sm:grid-cols-3">
        {FIELDS.map((f) => (
          <li
            key={f.step}
            className="group rounded-2xl border border-[var(--color-pine)]/15 bg-[color-mix(in_srgb,var(--color-pine)_5%,var(--color-paper))] p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/35 hover:shadow-md"
          >
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-pine)]/70">
              {f.step}
            </p>
            <p className="mt-2 font-[family-name:var(--font-serif)] text-xl font-semibold text-[var(--color-pine-deep)]">
              {f.title}
            </p>
            <p className="mt-1.5 text-sm leading-snug text-[var(--color-ink)]/70">
              {f.detail}
            </p>
          </li>
        ))}
      </ul>

      {!embedUrl ? (
        <div className="relative mt-12 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 to-[var(--color-paper)] p-6 text-amber-950 shadow-sm sm:p-8">
          <p className="font-[family-name:var(--font-serif)] text-lg font-semibold">
            Connect your Google Form
          </p>
          <p className="mt-3 text-sm leading-relaxed opacity-95">
            We can&apos;t create a form in your Google account from here. In{" "}
            <span className="font-medium">Google Forms</span>, add exactly three
            questions: <strong>Name</strong> (short answer),{" "}
            <strong>Handicap</strong> (short answer), and{" "}
            <strong>Phone number</strong> (short answer). Then use{" "}
            <span className="font-medium">Send → embed HTML</span> and copy the
            URL that ends with{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5 text-[0.85em]">
              embedded=true
            </code>
            .
          </p>
          <p className="mt-4 text-sm leading-relaxed opacity-95">
            Put that URL in{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5 text-[0.85em]">
              NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL
            </code>{" "}
            (see <code className="rounded bg-black/5 px-1.5 py-0.5 text-[0.85em]">.env.example</code>
            ) and redeploy.
          </p>
        </div>
      ) : (
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-black/10 bg-[var(--color-paper)] shadow-[0_20px_50px_-20px_rgba(15,38,32,0.35)]">
          <div className="border-b border-black/5 bg-[color-mix(in_srgb,var(--color-pine)_6%,var(--color-paper))] px-5 py-4 sm:px-6">
            <p className="text-center text-sm font-medium text-[var(--color-ink)]/75">
              Google Form — name, handicap, phone
            </p>
            <p className="mt-1 text-center text-xs text-[var(--color-ink)]/55">
              {ROYAL_LAKES.shortName} · {ROYAL_LAKES.city}, {ROYAL_LAKES.state}
            </p>
          </div>
          <iframe
            title="Beers and Bogeys Invitational registration form"
            src={embedUrl}
            className="h-[min(720px,80vh)] w-full border-0 sm:h-[640px]"
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
      )}
    </div>
  );
}
