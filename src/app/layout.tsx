import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
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
      <body className="antialiased">
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1592671582149609');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1592671582149609&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {children}
      </body>
    </html>
  );
}