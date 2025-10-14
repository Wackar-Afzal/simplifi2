// Navbar provided by root layout
import WhatsCookin from "./WhatsCookin";
import { ContactUs } from "../common/ContactUs";
// Footer provided by root layout
import CareerList from "../Career/CareerList";
import ClientsMarquee from "../Product2/ClientsMargquee";
import Ai from "../Product2/Ai2";
import HeroSection from "../Product2/HeroSection";
import PageFooter from "../common/PageFooter";

export const ProductMain = ({ data }) => {
  return (
    <div>
      <div className="px-2 my-5 md:my-10">
        <HeroSection data={data.cardAsService.hero} />
      </div>
      <div className="my-20 md:my-30">
        <ClientsMarquee data={data.cardAsService.clientMarquee} />
      </div>
      {/* <HeroProduct /> */}
      <div className="px-4 md:px-8 my-20 md:my-30 ">
        <CareerList data={data.cardAsService.careerList} />
      </div>
      <div className="my-20 md:my-30 px-4">
        <Ai data={data.cardAsService.useCases} />
      </div>
      <div className="px-4 md:px-0 my-20 md:my-30">
        <WhatsCookin data={data.cardAsService.whatsCookin} />
      </div>
      {/* <CaseStudies /> */}
      {/* <Brags /> */}
      {/* <ClientSays /> */}
      <div className="my-20 md:my-30">
        <PageFooter data={data.cardAsService.footer} />
      </div>
    </div>
  );
};
