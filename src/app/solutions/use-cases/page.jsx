// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import useCases from "@/utils/solutions/use-cases"
import CareerList from "@/components/Career/CareerList";
import PageFooter from "@/components/common/PageFooter";
// Footer provided by root layout

const Page = () => {
  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={useCases.useCases.hero} />
      </div>
      <div className="my-20 md:my-30">
        <CaseStudies data={useCases.useCases.caseStudies} />
      </div>
      <div className="my-20 md:my-30">
        <CaseStudies data={useCases.useCases.caseStudies1} />
      </div>
      <div className=" my-20 md:my-30">
        <CaseStudies data={useCases.useCases.caseStudies2} />
      </div>
      <div className=" my-20 md:my-30">
        <CaseStudies data={useCases.useCases.caseStudies3} />
      </div>
   
      <div className="px-2 my-20 md:my-30">
        <CareerList data={useCases.useCases.careerList} />
      </div>

      <div className="px-2 my-20 md:my-30">
        <PageFooter data={useCases.useCases.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default Page;
