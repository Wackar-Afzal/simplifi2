import React from "react";
import HeroSection from "./HeroSection";
// Navbar provided by root layout
import { ContactUs } from "../common/ContactUs";
// Footer provided by root layout
import Ai from "./Ai2";
import CareerList from "../Career/CareerList";
import ProductOverviewH from "../Home/ProductOverview/ProductOverviewH";
import WhatWeDo from "@/components/Home/WhatWeDo";
import PageFooter from "../common/PageFooter";
import ClientsMarquee from "./ClientsMargquee";

const Product2 = ({ data }) => {
  return (
    <div>
      <div className="px-2 my-5 md:my-10">
        <HeroSection data={data.embedreadytouse.hero} />
      </div>
      <div className="my-20 md:my-40">
        <ClientsMarquee data={data.embedreadytouse.clientMarquee} />
      </div>
      <div className="px-2 my-20 md:my-30">
        <Ai data={data.embedreadytouse.useCases} />
      </div>
      <div className="my-20 md:my-30">
        <ProductOverviewH data={data.embedreadytouse.productOverview1} />
      </div>
      <div className="px-8 my-20 md:my-30">
        <CareerList data={data.embedreadytouse.careerList} />
      </div>
      <div className="my-20 md:my-30">
        <WhatWeDo data={data.embedreadytouse.whatwedo} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter data={data.embedreadytouse.footer} />
      </div>
    </div>
  );
};

export default Product2;
