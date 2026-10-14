import type { Metadata } from "next";
import LpNav from "@/components/lp/LpNav";
import LpFooter from "@/components/lp/LpFooter";
import ProductPrivacyPolicy from "@/components/lp/ProductPrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Pink Intimate by NW Aesthetics",
  description:
    "How NW Aesthetics collects, uses and protects the details you share when you request the Pink Intimate quote and protocol.",
};

export default function PinkIntimatePrivacyPolicyPage() {
  return (
    <div className="theme-pink-intimate lp-grain">
      <LpNav ctaLabel="Get the Quote & Protocol" ctaHref="/pink-intimate#quote" />
      <main>
        <ProductPrivacyPolicy
          product="Pink Intimate"
          professions={[
          "Dermatologist",
          "Gynaecologist",
          "Plastic surgeon",
          "Aesthetic clinic owner",
        ]}
        />
      </main>
      <LpFooter privacyHref="/pink-intimate/privacy-policy" />
    </div>
  );
}
