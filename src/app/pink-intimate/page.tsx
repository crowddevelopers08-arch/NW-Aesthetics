import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import QuoteStickyBar from "@/components/lp/QuoteStickyBar";
import PinkHero from "@/components/pink-intimate/PinkHero";
import PinkProblem from "@/components/pink-intimate/PinkProblem";
import PinkSolution from "@/components/pink-intimate/PinkSolution";
import PinkReasons from "@/components/pink-intimate/PinkReasons";
import PinkNumbers from "@/components/pink-intimate/PinkNumbers";
import PinkProof from "@/components/pink-intimate/PinkProof";
import PinkQuote from "@/components/pink-intimate/PinkQuote";

export const metadata: Metadata = {
  title: "Pink Intimate Lightening Peel for Clinics — NW Aesthetics",
  description:
    "An Italian peel for underarms, bikini line and inner thighs. No needles. No downtime. Training included.",
  openGraph: {
    title:
      "Your City Has the Demand for Intimate Lightening. Does Your Clinic Have the Treatment?",
    description:
      "An Italian peel for underarms, bikini line and inner thighs. No needles. No downtime.",
    type: "website",
    images: ["/images/pink-intimate/pink-intimate-kit-tight.jpg"],
  },
};

export default function PinkIntimatePage() {
  return (
    <div className="theme-pink-intimate lp-grain">
      <LpNav ctaLabel="Get the Quote & Protocol" />
      <main>
        <PinkHero />
        <PinkProblem />
        <PinkSolution />
        <PinkReasons />
        <PinkNumbers />
        <PinkProof />
        <PinkQuote />
      </main>
      <LpFooter privacyHref="/pink-intimate/privacy-policy" />
      <QuoteStickyBar
        note="Training included"
        ctaLabel="Get the Quote & Protocol"
      />
    </div>
  );
}
