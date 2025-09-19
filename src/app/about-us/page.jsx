import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import {capabilities} from "@/utils/capabilitites.json"
import Cases from "@/components/Product1Page/Cases";

const Page = () => {
  return (
    <>
      <Navbar/>
      <HeroSection data={cardAsService.hero} />
      
    </>
  );
};

export default Page;
