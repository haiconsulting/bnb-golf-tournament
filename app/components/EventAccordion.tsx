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
          <span className="italic">TBD — update before invitations</span>
        </li>
        <li>
          <span className="font-semibold text-[var(--color-ink)]">Course:</span>{" "}
          <a
            href="https://royallakesgolfcc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-pine)] underline decoration-[var(--color-gold)]/50 underline-offset-2 hover:decoration-[var(--color-gold)]"
          >
            Royal Lakes Golf &amp; Country Club
          </a>
          , Flowery Branch, GA (tee sheet to follow)
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
    title: "Format & vibe",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]/85">
        <li>Simple RSVP: name, handicap, and phone in the embedded form.</li>
        <li>
          Final competitive format (scramble, best ball, etc.) confirmed closer
          to the event.
        </li>
        <li>Cart and range details go out with confirmed teams.</li>
        <li>Cold beer, warm sun, questionable swings — all welcome.</li>
      </ul>
    ),
  },
  {
    id: "rsvp",
    title: "RSVP & registration",
    body: (
      <p className="text-[var(--color-ink)]/85">
        The embedded Google Form asks for your name, handicap, and phone number
        only — we use that for headcount and pairing. No account or password on
        this site.
      </p>
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
