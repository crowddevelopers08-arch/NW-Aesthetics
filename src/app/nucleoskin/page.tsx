import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import QuoteStickyBar from "@/components/lp/QuoteStickyBar";
import NucleoHero from "@/components/nucleoskin/NucleoHero";
import NucleoProblem from "@/components/nucleoskin/NucleoProblem";
import NucleoSolution from "@/components/nucleoskin/NucleoSolution";
import NucleoReasons from "@/components/nucleoskin/NucleoReasons";
import NucleoNumbers from "@/components/nucleoskin/NucleoNumbers";
import NucleoProof from "@/components/nucleoskin/NucleoProof";
import NucleoQuote from "@/components/nucleoskin/NucleoQuote";

export const metadata: Metadata = {
  title: "NucleoSkin PDRN Booster for Clinics — NW Aesthetics",
  description:
    "NucleoSkin combines PDRN, Hyaluronic Acid and Glutathione in one 3 ml vial. Clinics charge up to ₹35,000 a session. Used by 500+ doctors across India.",
  openGraph: {
    title: "Your Patients Already Want PDRN. Give Them the Best One.",
    description:
      "PDRN, Hyaluronic Acid and Glutathione in one 3 ml vial. Made in Italy. Training included.",
    type: "website",
    images: ["/images/nucleoskin/vials-group.jpg"],
  },
};

export default function NucleoSkinPage() {
  return (
    <div className="theme-nucleoskin lp-grain">
      <LpNav ctaLabel="Get the Quote & Protocol" />
      <main>
        <NucleoHero />
        <NucleoProblem />
        <NucleoSolution />
        <NucleoReasons />
        <NucleoNumbers />
        <NucleoProof />
        <NucleoQuote />
      </main>
      <LpFooter privacyHref="/nucleoskin/privacy-policy" />
      <QuoteStickyBar
        note="Training included"
        ctaLabel="Get the Quote & Protocol"
      />
    </div>
  );
}
