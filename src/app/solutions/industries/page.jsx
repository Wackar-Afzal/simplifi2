// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import industries from "@/utils/solutions/industries";
import CareerList from "@/components/Career/CareerList";
import Ai from "@/components/Product2/Ai2";
// Footer provided by root layout
import PageFooter from "@/components/common/PageFooter";

const Page = () => {
  return (
    <>
      <HeroProduct data={industries.industries.hero} />
      <div className="mt-30 mb-30">
        <Ai data={industries.industries.usps} />
      </div>
      <div className="mb-20">
      <CareerList data={industries.industries.careerList} />

      </div>
      <PageFooter data={industries.industries.footer} />
      {/* Footer provided by root layout */}
    </>
  );
};

export default Page;
