import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";
import "./redesign.css";

const agencyFont = localFont({
  src: "./fonts/oswald.ttf",
  weight: "200 700",
  variable: "--font-agency",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whichwayagency.co.za"),
  icons: { icon: "/favicon.svg" },
  title: {
    default: "Which Way Agency | Creative Direction, Talent & Culture",
    template: "%s | Which Way Agency",
  },
  description:
    "A South African creative agency connecting brands, talent and culture through creative direction, campaign ideas, brand activations and live experiences.",
  openGraph: {
    title: "Which Way Agency",
    description: "Creative direction. Talent. Events. Culture.",
    url: "https://whichwayagency.co.za",
    siteName: "Which Way Agency",
    images: [{ url: "/videos/hero-desktop-poster.webp", width: 1280, height: 720 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Way Agency",
    description: "Creative direction. Talent. Events. Culture.",
    images: ["/videos/hero-desktop-poster.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={agencyFont.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="global-grain" aria-hidden="true" />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
