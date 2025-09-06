import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import {features} from "@/utils/features.json"

const Features = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={features.hero} />
      <CaseStudies data={features.caseStudies}/>
    </>
  );
};

export default Features;
