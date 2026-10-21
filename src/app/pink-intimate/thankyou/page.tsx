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
        <QuoteThankYou
          message="Your Pink Intimate quote request has reached us. Price, protocol sheet and training dates are on their way to your WhatsApp within 2 working hours."
          steps={[
            {
              title: "Quote on WhatsApp",
              detail: "Clinic pricing for Pink Intimate, on the number you gave us.",
            },
            {
              title: "Protocol sheet",
              detail: "Sessions and aftercare for underarms, bikini line and inner thighs.",
            },
            {
              title: "Training dates",
              detail: "Hands-on training for you or your team, before your first patient.",
            },
          ]}
          backHref="/pink-intimate"
          backLabel="Back to Pink Intimate"
        />
      </main>
      <LpFooter privacyHref="/pink-intimate/privacy-policy" />
    </div>
  );
}
