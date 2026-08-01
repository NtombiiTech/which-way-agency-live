import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const archivo = localFont({
  src: [
    { path: "./fonts/archivo.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/archivo-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope.woff2",
  weight: "200 800",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whichwayagency.co.za"),
  title: {
    default: "Which Way Agency | Experiences That Build Impact",
    template: "%s | Which Way Agency",
  },
  description:
    "Which Way Agency creates brand experiences, events, activations, stories and community programmes that connect with people.",
  openGraph: {
    title: "Which Way Agency",
    description: "Shaping experiences. Building impact.",
    url: "https://whichwayagency.co.za",
    siteName: "Which Way Agency",
    images: [{ url: "/videos/hero-desktop-poster.webp", width: 1280, height: 720 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Way Agency",
    description: "Shaping experiences. Building impact.",
    images: ["/videos/hero-desktop-poster.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <body>
        <div className="global-grain" aria-hidden="true" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
