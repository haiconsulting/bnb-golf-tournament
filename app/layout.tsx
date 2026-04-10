import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "./components/SiteHeader";
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
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen antialiased">
        <SiteHeader />
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
