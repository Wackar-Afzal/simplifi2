import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../layouts/Navbar";
import { ContactUs } from "../common/ContactUs";
import { Footer } from "../layouts/Footer";
import Ai from "./Ai2";
import Features from "./Features";
import UXSection from "./UXSection";
import { embedreadytouse } from "@/utils/EmbedReadytouse.json";
import WorkFlowSectionCases from "../Home/WorkFlow";
import CareerList from "../Career/CareerList";
import ProductOverviewH from "../Home/ProductOverview/ProductOverviewH";
import WhatWeDo from "@/components/Home/WhatWeDo";
import homeText from "@/utils/homeText.json";

console.log(embedreadytouse, "embedreadytouse");
const Product2 = () => {
  return (
    <div>
      <Navbar />
      <HeroSection  data={embedreadytouse.hero}/>
      {/* <UXSection data={embedreadytouse.productOverview1} /> */}
      {/* <Ai data={embedreadytouse.usps} /> */}
      <WorkFlowSectionCases data={embedreadytouse.useCases} />
      <CareerList data={embedreadytouse.careerList}/>
      <ProductOverviewH/>
      <WhatWeDo data={embedreadytouse.whatwedo}/>
      
      
      {/* <Features /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Product2;
