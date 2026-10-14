import Image from "next/image";
import QuoteForm from "@/components/lp/QuoteForm";

export default function NucleoQuote() {
  return (
    <QuoteForm
      product="nucleoskin"
      heading={
        <>
          Get the Quote and Protocol{" "}
          <span className="text-accent">Before Your Competitor Does.</span>
        </>
      }
      sub="Price, protocol sheet and training dates on WhatsApp within 2 working hours."
      professions={["Dermatologist", "Aesthetic clinic owner", "Other doctor"]}
      buttonLabel="Get the Quote & Protocol"
      footnote="Training included. For doctors and clinics only."
      thankYouHref="/nucleoskin/thank-you"
      aside={
        <div className="relative overflow-hidden rounded-3xl bg-surface">
          <Image
            src="/images/nucleoskin/box-open.jpg"
            alt="An open NucleoSkin box with its vials"
            width={1400}
            height={933}
            sizes="(min-width: 1024px) 480px, 92vw"
            className="h-auto w-full"
          />
        </div>
      }
    />
  );
}
