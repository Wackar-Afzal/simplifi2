import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../layouts/Navbar";
import { ContactUs } from "../common/ContactUs";
import { Footer } from "../layouts/Footer";
import Ai from "./Ai2";
import  embedreadytouse  from "@/utils/EmbedReadytouse.json";
import CareerList from "../Career/CareerList";
import ProductOverviewH from "../Home/ProductOverview/ProductOverviewH";
import WhatWeDo from "@/components/Home/WhatWeDo";
import PageFooter from "../common/PageFooter";

const Product2 = () => {
  return (
    <div>
      <Navbar />
      <HeroSection  data={embedreadytouse.embedreadytouse.hero}/>
      {/* <UXSection data={embedreadytouse.productOverview1} /> */}
      {/* <Ai data={embedreadytouse.usps} /> */}
      <div className="mt-20"> 
      <Ai data={embedreadytouse.embedreadytouse.useCases} />
      </div>
      <CareerList data={embedreadytouse.embedreadytouse.careerList}/>
      <ProductOverviewH/>
      <WhatWeDo data={embedreadytouse.embedreadytouse.whatwedo}/>
      
      
      {/* <Features /> */}
      {/* <ContactUs /> */}
      <PageFooter data={embedreadytouse.embedreadytouse.footer} />
      <Footer />
    </div>
  );
};

export default Product2;
