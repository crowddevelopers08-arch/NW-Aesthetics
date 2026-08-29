import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import RealResults from "@/components/sections/RealResults";
import WhatItIs from "@/components/sections/WhatItIs";
import WillItPayOff from "@/components/sections/WillItPayOff";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyMShape from "@/components/sections/WhyMShape";
import WeHelpYouFillIt from "@/components/sections/WeHelpYouFillIt";
import SeeIt from "@/components/sections/SeeIt";
import IsItForYou from "@/components/sections/IsItForYou";
import SetupSupport from "@/components/sections/SetupSupport";
import Faq from "@/components/sections/Faq";
import BookDemo from "@/components/sections/BookDemo";
import Footer from "@/components/sections/Footer";
import StickyCta from "@/components/sections/StickyCta";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <RealResults />
        <WhatItIs />
        <WillItPayOff />
        <CaseStudies />
        <WhyMShape />
        <WeHelpYouFillIt />
        <SeeIt />
        <IsItForYou />
        <SetupSupport />
        <Faq />
        <BookDemo />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
