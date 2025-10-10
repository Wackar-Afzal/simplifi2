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
      <div className="my-20 md:my-30">
        <HeroProduct data={industries.industries.hero} />
      </div>
      <div className="my-20 md:my-30">
        <Ai data={industries.industries.usps} />
      </div>
      <div className="px-4 my-20 md:my-30">
        <CareerList data={industries.industries.careerList} />
      </div>
      <div className="px-4 my-20 md:my-30">
        <PageFooter data={industries.industries.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default Page;
