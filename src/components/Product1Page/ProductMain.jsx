import { cardAsService } from "@/utils/cardAsService.json";

import Navbar from "../layouts/Navbar";
import WhatsCookin from "./WhatsCookin";
import { ContactUs } from "../common/ContactUs";
import { Footer } from "../layouts/Footer";
import HeroSection from "../Product2/HeroSection";
import CareerList from "../Career/CareerList";
import WorkFlowSectionCases from "../Home/WorkFlow";
import ClientsMarquee from "../Product2/ClientsMargquee";
import Ai from "../Product2/Ai2";

export const ProductMain = () => {

  console.log(cardAsService,"cardAsService")
  return (
    <div>
      <Navbar />
      <HeroSection data={cardAsService.hero} />
      <ClientsMarquee data={cardAsService.clientMarquee} />

      {/* <HeroProduct /> */}
      <div className="mb-20">
      <CareerList data={cardAsService.careerList} />

      </div>
      <Ai data={cardAsService.useCases} />
      <div className="mt-20">
      <WhatsCookin data={cardAsService.whatsCookin} />
      </div>
      {/* <CaseStudies /> */}
      {/* <Brags /> */}
      {/* <ClientSays /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
