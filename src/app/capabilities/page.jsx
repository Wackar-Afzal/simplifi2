import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import capabilities from "@/utils/capabilitites.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
import { Footer } from "@/components/layouts/Footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={capabilities.capabilities.hero} />
      {/* <CaseStudies data={capabilities.caseStudies}/> */}
      <Cases data={capabilities.capabilities.caseStudies}/>
      <PageFooter data={capabilities.capabilities.footer} />
      <Footer />
    </>
  );
};

export default Features;
