import cardAsService  from "@/utils/cardAsService.json";

// Navbar provided by root layout
import WhatsCookin from "./WhatsCookin";
import { ContactUs } from "../common/ContactUs";
// Footer provided by root layout
import CareerList from "../Career/CareerList";
import ClientsMarquee from "../Product2/ClientsMargquee";
import Ai from "../Product2/Ai2";
import HeroSection from "../Product2/HeroSection";
import PageFooter from "../common/PageFooter";

export const ProductMain = () => {

  console.log(cardAsService,"cardAsService")
  return (
    <div>
      <div className="px-2 my-20 md:my-30">
      <HeroSection data={cardAsService.cardAsService.hero} />
      </div>
      <div className="my-20 md:my-30">
      <ClientsMarquee data={cardAsService.cardAsService.clientMarquee} />
      </div>
      {/* <HeroProduct /> */}
      <div className="px-4 md:px-8 my-20 md:my-30">
      <CareerList data={cardAsService.cardAsService.careerList} />
      </div>
      <div className="my-20 md:my-30">
      <Ai data={cardAsService.cardAsService.useCases} />

      </div>
      <div className="px-4 md:px-0 my-20 md:my-30">
      <WhatsCookin data={cardAsService.cardAsService.whatsCookin} />
      </div>
      {/* <CaseStudies /> */}
      {/* <Brags /> */}
      {/* <ClientSays /> */}
      <div className="my-20 md:my-30">
      <PageFooter data={cardAsService.cardAsService.footer} />

      </div>
    </div>
  );
};
