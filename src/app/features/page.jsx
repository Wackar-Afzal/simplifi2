// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import features from "@/utils/features.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
// Footer provided by root layout

const Features = () => {
  return (
    <>
    <div className="my-20 md:my-30">
    <HeroProduct data={features.features.hero} />

    </div>
      <div className="my-20 md:my-30">
      <Cases data={features.features.caseStudies}/>

      </div>
      <div className="my-20 md:my-30">
      <PageFooter data={features.features.footer} />

      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default Features;
