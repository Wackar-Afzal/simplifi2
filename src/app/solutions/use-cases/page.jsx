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
      <HeroProduct data={useCases.useCases.hero} />
      <div className="mt-20 mb-10">
      <CaseStudies data={useCases.useCases.caseStudies}/>
      </div>
      <div className="mb-10">
      <CaseStudies data={useCases.useCases.caseStudies1}/>
      </div>
      <div className=" mb-10">
      <CaseStudies data={useCases.useCases.caseStudies2}/>
      </div>
      <CareerList data={useCases.useCases.careerList}/>

      <PageFooter data={useCases.useCases.footer} />
      {/* Footer provided by root layout */}
    </>
  );
};

export default Page;
