import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resolute Ventures Winterfest 2026 | Alta & Snowbird",
  description:
    "Resolute Ventures Winterfest — Alta & Snowbird, March 9–12, 2026. Transportation, lift tickets, rentals, lessons, and tips for founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} antialiased`}>
        {/* Header — matches resolute.vc dark blue header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-blue text-tan">
          <div className="mx-auto flex h-[60px] max-w-[var(--max-width)] items-center justify-between px-[27px] md:px-[40px] lg:px-[67px]">
            <a href="#top" className="block">
              <img
                src="/Logo.svg"
                alt="Resolute Ventures"
                className="h-[28px] w-auto rounded-none"
              />
            </a>
            <nav className="hidden md:flex items-center gap-x-[32px]">
              {[
                { href: "#agenda", label: "Agenda" },
                { href: "#attendees", label: "Attendees" },
                { href: "#transportation", label: "Travel" },
                { href: "#tickets", label: "Tickets" },
                { href: "#equipment", label: "Gear" },
                { href: "#tips", label: "Tips" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[16px] font-semibold leading-none text-tan pb-[1px] border-b border-transparent transition-all hover:text-red hover:border-red"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="relative z-10 min-h-screen pt-[60px] bg-tan rounded-b-[24px] md:rounded-b-[72px]">
          {children}
        </main>

        {/* Footer — matches resolute.vc dark blue footer */}
        <footer className="bg-dark-blue text-tan pt-[48px] pb-[48px] md:pt-[72px] md:pb-[72px]">
          <div className="mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[32px] mb-[32px]">
              <nav className="flex items-center gap-x-[32px]">
                <a
                  href="https://www.resolute.vc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Logo.svg"
                    alt="Resolute Ventures"
                    className="h-[28px] w-auto rounded-none"
                  />
                </a>
                <ul className="hidden md:flex gap-x-[32px]">
                  <li>
                    <a
                      href="https://www.resolute.vc/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-semibold text-tan pb-[1px] border-b border-tan transition-all hover:text-red hover:border-red"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.resolute.vc/companies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-semibold text-tan pb-[1px] border-b border-tan transition-all hover:text-red hover:border-red"
                    >
                      Companies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.resolute.vc/community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-semibold text-tan pb-[1px] border-b border-tan transition-all hover:text-red hover:border-red"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col md:flex-row gap-[24px]">
              <p className="text-tan opacity-40 text-[14px] leading-[16px]">
                &copy; {new Date().getFullYear()} Resolute Ventures. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
