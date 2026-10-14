import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import ProductPrivacyPolicy from "@/components/lp/ProductPrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — NucleoSkin by NW Aesthetics",
  description:
    "How NW Aesthetics collects, uses and protects the details you share when you request the NucleoSkin quote and protocol.",
};

export default function NucleoSkinPrivacyPolicyPage() {
  return (
    <div className="theme-nucleoskin lp-grain">
      <LpNav ctaLabel="Get the Quote & Protocol" ctaHref="/nucleoskin#quote" />
      <main>
        <ProductPrivacyPolicy
          product="NucleoSkin"
          professions={["Dermatologist", "Aesthetic clinic owner", "Other doctor"]}
        />
      </main>
      <LpFooter privacyHref="/nucleoskin/privacy-policy" />
    </div>
  );
}
