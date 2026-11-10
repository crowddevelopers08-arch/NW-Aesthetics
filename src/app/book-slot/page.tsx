import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SubmitApplicationEvent from "@/components/ui/SubmitApplicationEvent";
import CalendlyInline from "@/components/ui/CalendlyInline";

export const metadata: Metadata = {
  title: "Pick a time — NW Aesthetics",
  description: "Choose a slot for your one-to-one MShape consultation.",
  /* Post-submission page: kept out of search so visitors arrive via the form. */
  robots: { index: false, follow: true },
};

export default function BookSlotPage() {
  return (
    <>
      <SubmitApplicationEvent />
      <Nav />
      <main>
        <section className="bg-surface px-4 pt-32 pb-14 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="sr-only">Pick a time for your demo</h1>
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <CalendlyInline />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
