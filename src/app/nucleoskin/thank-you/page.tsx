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
        <QuoteThankYou
          message="Your NucleoSkin quote request has reached us. Price, protocol sheet and training dates are on their way to your WhatsApp within 2 working hours."
          steps={[
            {
              title: "Quote on WhatsApp",
              detail: "Clinic pricing for NucleoSkin, on the number you gave us.",
            },
            {
              title: "Protocol sheet",
              detail: "Dilution, sessions and spacing for face, under-eye and neck.",
            },
            {
              title: "Training dates",
              detail: "Hands-on training for you or your team, before your first patient.",
            },
          ]}
          backHref="/nucleoskin"
          backLabel="Back to NucleoSkin"
        />
      </main>
      <LpFooter privacyHref="/nucleoskin/privacy-policy" />
    </div>
  );
}
