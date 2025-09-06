import React from "react";

import HeroProduct from "./HeroProduct";
import Navbar from "../layouts/Navbar";
import WhatsCookin from "./WhatsCookin";
import CaseStudies from "./CaseStudies";
import Brags from "./Brags";
import ClientSays from "./ClientSays";
import { ContactUs } from "../common/ContactUs";
import { Footer } from "../layouts/Footer";
import HeroSection from "../Product2/HeroSection";
import { cardAsService } from "@/utils/cardAsService.json";
import CareerList from "../Career/CareerList";
import WorkFlowSectionCases from "../Home/WorkFlow";

export const ProductMain = () => {
  return (
    <div>
      <Navbar />
      <HeroSection data={cardAsService.hero} />
      {/* <HeroProduct /> */}
      <CareerList data={cardAsService.careerList} />
      <WorkFlowSectionCases data={cardAsService.useCases} />
      <WhatsCookin data={cardAsService.whatsCookin} />
      {/* <CaseStudies /> */}
      {/* <Brags /> */}
      {/* <ClientSays /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
