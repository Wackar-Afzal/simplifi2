import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import useCases from "@/utils/solutions/use-cases"
import CareerList from "@/components/Career/CareerList";
import PageFooter from "@/components/common/PageFooter";
import { Footer } from "@/components/layouts/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={useCases.useCases.hero} />
      <CaseStudies data={useCases.useCases.caseStudies}/>
      <CaseStudies data={useCases.useCases.caseStudies1}/>
      <CaseStudies data={useCases.useCases.caseStudies2}/>
      <CareerList data={useCases.useCases.careerList}/>
      <PageFooter data={useCases.useCases.footer} />
      <Footer/>
    </>
  );
};

export default Page;
