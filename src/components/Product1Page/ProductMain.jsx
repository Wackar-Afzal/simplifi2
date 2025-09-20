import cardAsService  from "@/utils/cardAsService.json";

import Navbar from "../layouts/Navbar";
import WhatsCookin from "./WhatsCookin";
import { ContactUs } from "../common/ContactUs";
import { Footer } from "../layouts/Footer";
import CareerList from "../Career/CareerList";
import ClientsMarquee from "../Product2/ClientsMargquee";
import Ai from "../Product2/Ai2";
import HeroSection from "../Product2/HeroSection";
import PageFooter from "../common/PageFooter";

export const ProductMain = () => {

  console.log(cardAsService,"cardAsService")
  return (
    <div>
      <Navbar />
      <HeroSection data={cardAsService.cardAsService.hero} />
      <ClientsMarquee data={cardAsService.cardAsService.clientMarquee} />

      {/* <HeroProduct /> */}
      <div className="mb-20">
      <CareerList data={cardAsService.cardAsService.careerList} />

      </div>
      <Ai data={cardAsService.cardAsService.useCases} />
      <div className="mt-20">
      <WhatsCookin data={cardAsService.cardAsService.whatsCookin} />
      </div>
      {/* <CaseStudies /> */}
      {/* <Brags /> */}
      {/* <ClientSays /> */}
      <PageFooter data={cardAsService.cardAsService.footer} />
      <Footer />
    </div>
  );
};
