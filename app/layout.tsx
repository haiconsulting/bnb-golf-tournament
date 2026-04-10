import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beers and Bogeys Invitational",
  description:
    "Tournament information and player registration — Royal Lakes Golf & Country Club, Flowery Branch, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoFromEnv = process.env.NEXT_PUBLIC_LOGO_URL?.trim();
  const logoSrc = logoFromEnv?.startsWith("http") ? logoFromEnv : "/images/logo.webp";

  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen antialiased">
        <header className="border-b border-[color-mix(in_srgb,var(--color-pine)_18%,transparent)] bg-[var(--color-pine)] text-[var(--color-cream)]">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:py-8">
            <div className="flex items-start gap-4 sm:items-center">
              <Link
                href="/"
                className="relative mt-0.5 shrink-0 sm:mt-0"
                aria-label="Home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- reliable for /public + external club URLs */}
                <img
                  src={logoSrc}
                  alt=""
                  width={120}
                  height={120}
                  className="h-12 w-auto max-w-[140px] object-contain object-left sm:h-14"
                  fetchPriority="high"
                />
              </Link>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Invitational
                </p>
                <h1 className="mt-1 font-[family-name:var(--font-serif)] text-2xl font-semibold tracking-tight sm:text-3xl">
                  Beers and Bogeys Invitational
                </h1>
              </div>
            </div>
            <nav className="flex gap-6 text-sm font-medium">
              <Link
                href="/"
                className="border-b-2 border-transparent pb-0.5 text-[var(--color-cream)]/90 hover:border-[var(--color-gold)] hover:text-white"
              >
                Event info
              </Link>
              <Link
                href="/register"
                className="border-b-2 border-transparent pb-0.5 text-[var(--color-cream)]/90 hover:border-[var(--color-gold)] hover:text-white"
              >
                Registration
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-black/10 bg-[var(--color-paper)] px-5 py-8 text-center text-sm text-[var(--color-ink)]/60">
          <p>
            Beers and Bogeys Invitational · Questions? Contact the tournament
            organizer directly.
          </p>
          <p className="mt-3 text-xs text-[var(--color-ink)]/45">
            Logo and venue photography courtesy of{" "}
            <a
              href="https://royallakesgolfcc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-pine)]/30 underline-offset-2 hover:text-[var(--color-pine)]"
            >
              Royal Lakes Golf &amp; Country Club
            </a>
            .
          </p>
          <p className="mt-3 text-xs text-[var(--color-ink)]/45">
            Built with care by{" "}
            <a
              href="https://haicustomsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-pine)]/30 underline-offset-2 hover:text-[var(--color-pine)]"
            >
              HAI Solutions
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
