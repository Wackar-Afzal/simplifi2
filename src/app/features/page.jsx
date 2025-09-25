import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import features from "@/utils/features.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
import { Footer } from "@/components/layouts/Footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={features.features.hero} />
      <div className="mt-20">
      <Cases data={features.features.caseStudies}/>

      </div>
      <div className="mt-10">
      <PageFooter data={features.features.footer} />

      </div>
      <Footer/>
    </>
  );
};

export default Features;
