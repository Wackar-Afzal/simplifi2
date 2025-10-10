import React from "react";
import HeroSection from "./HeroSection";
// Navbar provided by root layout
import { ContactUs } from "../common/ContactUs";
// Footer provided by root layout
import Ai from "./Ai2";
import embedreadytouse from "@/utils/EmbedReadytouse.json";
import CareerList from "../Career/CareerList";
import ProductOverviewH from "../Home/ProductOverview/ProductOverviewH";
import WhatWeDo from "@/components/Home/WhatWeDo";
import PageFooter from "../common/PageFooter";
import ClientsMarquee from "./ClientsMargquee";
const Product2 = () => {
  return (
    <div>
      <div className="px-2 my-20 md:my-30">
        <HeroSection data={embedreadytouse.embedreadytouse.hero} />

      </div>
      {/* <UXSection data={embedreadytouse.productOverview1} /> */}
      {/* <Ai data={embedreadytouse.usps} /> */}
      <div className="my-20 md:my-40">
        <ClientsMarquee data={embedreadytouse.embedreadytouse.clientMarquee} />

      </div>

      <div className="px-2 my-20 md:my-30">
        <Ai data={embedreadytouse.embedreadytouse.useCases} />
      </div>
      <div className="my-20 md:my-30">
        <ProductOverviewH />

      </div>

      <div className="px-8 my-20 md:my-30">
        <CareerList data={embedreadytouse.embedreadytouse.careerList} />
      </div>
      <div className="my-20 md:my-30">
        <WhatWeDo data={embedreadytouse.embedreadytouse.whatwedo} />
      </div>

      {/* <Features /> */}
      {/* <ContactUs /> */}
      <div className="my-20 md:my-30">
        <PageFooter data={embedreadytouse.embedreadytouse.footer} />

      </div>
    </div>
  );
};

export default Product2;
