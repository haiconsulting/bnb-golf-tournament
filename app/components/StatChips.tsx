"use client";

const stats = [
  { label: "Field size", value: "18", hint: "players" },
  { label: "Date", value: "May 16", hint: "2026 · RSVP by Apr 17" },
  { label: "Teams", value: "9 × 2", hint: "man scramble teams" },
] as const;

export function StatChips() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="interactive-chip group relative overflow-hidden rounded-2xl border border-[var(--color-pine)]/20 bg-[color-mix(in_srgb,var(--color-pine)_8%,var(--color-paper))] px-5 py-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-lg"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-pine)]/80">
            {s.label}
          </p>
          <p className="mt-1 font-[family-name:var(--font-serif)] text-2xl font-semibold text-[var(--color-pine-deep)]">
            {s.value}
          </p>
          <p className="text-xs text-[var(--color-ink)]/55">{s.hint}</p>
        </div>
      ))}
    </div>
  );
}
