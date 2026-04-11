"use client";

import { useState } from "react";

const items = [
  {
    id: "when",
    title: "When & where",
    body: (
      <ul className="space-y-3 text-[var(--color-ink)]/85">
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Date:</span>{" "}
          Saturday, May 16th, 2026
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Location:</span>{" "}
          TBD — we&apos;re locking in a course that can accommodate our full
          field of 18. Suggestions welcome!
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">RSVP deadline:</span>{" "}
          April 17th — all 18 spots must be confirmed before teams are drawn.
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Arrival:</span>{" "}
          Check in about 45 minutes before your tee time.
        </li>
      </ul>
    ),
  },
  {
    id: "format",
    title: "Format & rules",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]/85">
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Format:</span>{" "}
          2-man scramble — standard scramble rules apply.
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Scoring:</span>{" "}
          Straight stroke play across all 18 holes.
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Mulligans:</span>{" "}
          Each team gets 1 mulligan per 9 holes (use &apos;em wisely).
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Teams:</span>{" "}
          18 players split into 9 two-man teams, drawn randomly after the RSVP
          deadline. If pairings produce obvious favorites we&apos;ll tweak the
          draw to keep things fair across all skill levels.
        </li>
        <li>Cold beer, warm sun, questionable swings — all welcome.</li>
      </ul>
    ),
  },
  {
    id: "rsvp",
    title: "RSVP & registration",
    body: (
      <div className="space-y-3 text-[var(--color-ink)]/85">
        <p>
          The embedded Google Form asks for your name, handicap, and phone
          number only — we use that for headcount and pairing. No account or
          password required.
        </p>
        <p className="font-medium text-[var(--color-ink)]">
          Deadline: April 17th. Teams are drawn randomly once all 18 RSVPs are
          in.
        </p>
      </div>
    ),
  },
] as const;

export function EventAccordion() {
  const [openId, setOpenId] = useState<string>(items[0].id);

  return (
    <div className="space-y-3" role="region" aria-label="Event information">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-black/10 bg-[var(--color-paper)] shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              id={`acc-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black/[0.03]"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
            >
              <span className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--color-pine-deep)]">
                {item.title}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-lg leading-none text-[var(--color-pine)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`acc-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-black/5 px-5 pb-5 pt-1">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
