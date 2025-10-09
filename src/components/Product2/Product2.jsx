import React from "react";
import HeroSection from "./HeroSection";
// Navbar provided by root layout
import { ContactUs } from "../common/ContactUs";
// Footer provided by root layout
import Ai from "./Ai2";
import  embedreadytouse  from "@/utils/EmbedReadytouse.json";
import CareerList from "../Career/CareerList";
import ProductOverviewH from "../Home/ProductOverview/ProductOverviewH";
import WhatWeDo from "@/components/Home/WhatWeDo";
import PageFooter from "../common/PageFooter";
import ClientsMarquee from "./ClientsMargquee";
const Product2 = () => {
  return (
    <div>
      <HeroSection  data={embedreadytouse.embedreadytouse.hero}/>
      {/* <UXSection data={embedreadytouse.productOverview1} /> */}
      {/* <Ai data={embedreadytouse.usps} /> */}
      <ClientsMarquee data={embedreadytouse.embedreadytouse.clientMarquee} />

      <div className="mt-30 mb-28"> 
      <Ai data={embedreadytouse.embedreadytouse.useCases} />
      </div>
      <ProductOverviewH/>

      <div className="mb-22">
      <CareerList data={embedreadytouse.embedreadytouse.careerList}/>
      </div>
      <div className="">
      <WhatWeDo data={embedreadytouse.embedreadytouse.whatwedo}/>
      </div>
      
      {/* <Features /> */}
      {/* <ContactUs /> */}
      <PageFooter data={embedreadytouse.embedreadytouse.footer} />
    </div>
  );
};

export default Product2;
