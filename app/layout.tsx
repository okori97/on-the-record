import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "On the Record",
  description:
    "A ledger of dated, sourced public predictions and how they resolved.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={serif.variable}>
      <body>
        <header className="site-header">
          <Link href="/" className="wordmark">
            On the Record
          </Link>
          <nav>
            <Link href="/method">Method</Link>
            <a href="https://github.com/okori-valarian/on-the-record" rel="noreferrer">GitHub</a>
            <a href="/data">JSON</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>
            Every entry is quoted verbatim from a source a maintainer has
            opened. Corrections are logged publicly. If you can improve a
            source or think an entry is wrong,{" "}
            <a href="https://github.com/okori-valarian/on-the-record/issues" rel="noreferrer">open an issue</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
