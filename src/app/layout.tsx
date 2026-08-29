import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

/**
 * Jost is the ONLY typeface on this site — matching
 * treatment.ecloraaesthetics.com, which serves it via next/font.
 *
 * Self-hosted through next/font: no render-blocking request to
 * fonts.googleapis.com, and an auto-generated metric-matched fallback
 * ("Jost Fallback") that removes font-swap layout shift.
 * Jost is a variable font, so omitting `weight` gives the full 100–900 range.
 */
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NW Aesthetics — MShape Face & Body Contouring for Clinics",
  description:
    "Made in Italy. MShape treats muscle, fat and skin in one 30-minute session. Clinics are making ₹10L+ a month. Book a product demo for your clinic.",
  keywords: [
    "MShape",
    "body contouring machine India",
    "face contouring",
    "aesthetic clinic equipment",
    "NW Aesthetics",
  ],
  openGraph: {
    title: "Clinics Are Making ₹10L+ a Month With M-Shape",
    description:
      "Treats muscle, fat and skin in one 30-minute session. See the real numbers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
