import Image from "next/image";
import QuoteForm from "@/components/lp/QuoteForm";

export default function PinkQuote() {
  return (
    <QuoteForm
      product="pink-intimate"
      heading={
        <>
          Get the Quote and Protocol{" "}
          <span className="text-accent">Before the Clinic Next Door Does.</span>
        </>
      }
      sub="Price, protocol sheet and training dates on WhatsApp within 2 working hours."
      professions={[
        "Dermatologist",
        "Gynaecologist",
        "Plastic surgeon",
        "Aesthetic clinic owner",
      ]}
      buttonLabel="Get the Quote & Protocol"
      footnote="Training included. For doctors and clinics only."
      thankYouHref="/pink-intimate/thank-you"
      aside={
        <div className="overflow-hidden rounded-3xl border border-line bg-white">
          <Image
            src="/images/pink-intimate/pink-intimate-kit-tight.jpg"
            alt="The Pink Intimate system box with a vial and a sachet"
            width={1400}
            height={1120}
            sizes="(min-width: 1024px) 480px, 92vw"
            className="h-auto w-full"
          />
        </div>
      }
    />
  );
}
