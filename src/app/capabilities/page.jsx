import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import {capabilities} from "@/utils/capabilitites.json"
import Cases from "@/components/Product1Page/Cases";

const Features = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={capabilities.hero} />
      {/* <CaseStudies data={capabilities.caseStudies}/> */}
      <Cases data={capabilities.caseStudies}/>
    </>
  );
};

export default Features;
