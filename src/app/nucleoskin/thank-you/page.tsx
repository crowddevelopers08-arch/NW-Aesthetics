import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import QuoteThankYou from "@/components/lp/QuoteThankYou";

export const metadata: Metadata = {
  title: "Thank you — NucleoSkin by NW Aesthetics",
  /* Post-submission page: kept out of search so no one lands here unasked. */
  robots: { index: false, follow: true },
};

export default function NucleoSkinThankYouPage() {
  return (
    <div className="theme-nucleoskin lp-grain">
      <LpNav />
      <main>
        <QuoteThankYou message="Price, protocol sheet and training dates on WhatsApp within 2 working hours." />
      </main>
      <LpFooter privacyHref="/nucleoskin/privacy-policy" />
    </div>
  );
}
