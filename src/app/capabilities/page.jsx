// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import capabilities from "@/utils/capabilitites.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
// Footer provided by root layout

const Features = () => {
  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={capabilities.capabilities.hero} />
      </div>
      {/* <CaseStudies data={capabilities.caseStudies}/> */}
      <div className="my-20 md:my-30">
        <Cases data={capabilities.capabilities.caseStudies} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter data={capabilities.capabilities.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default Features;
