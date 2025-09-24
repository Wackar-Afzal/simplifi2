import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import industries from "@/utils/solutions/industries";
import CareerList from "@/components/Career/CareerList";
import Ai from "@/components/Product2/Ai2";
import { Footer } from "@/components/layouts/Footer";
import PageFooter from "@/components/common/PageFooter";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={industries.industries.hero} />
      <div className="mt-30 mb-30">
        <Ai data={industries.industries.usps} />
      </div>
      <CareerList data={industries.industries.careerList} />
      <PageFooter data={industries.industries.footer} />
      <Footer />
    </>
  );
};

export default Page;
