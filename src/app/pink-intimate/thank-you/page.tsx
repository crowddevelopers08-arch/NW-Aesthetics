import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import QuoteThankYou from "@/components/lp/QuoteThankYou";

export const metadata: Metadata = {
  title: "Thank you — Pink Intimate by NW Aesthetics",
  /* Post-submission page: kept out of search so no one lands here unasked. */
  robots: { index: false, follow: true },
};

export default function PinkIntimateThankYouPage() {
  return (
    <div className="theme-pink-intimate lp-grain">
      <LpNav />
      <main>
        <QuoteThankYou message="Price, protocol sheet and training dates on WhatsApp within 2 working hours." />
      </main>
      <LpFooter privacyHref="/pink-intimate/privacy-policy" />
    </div>
  );
}
