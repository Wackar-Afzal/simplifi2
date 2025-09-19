import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import industries from "@/utils/solutions/industries"
import CareerList from "@/components/Career/CareerList";
import Ai from "@/components/Product2/Ai2";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={industries.industries.hero} />
      <div className="my-20">
      <Ai data={industries.industries.usps}/>

      </div>
      <CareerList data={industries.industries.careerList}/>
    </>
  );
};

export default Page;
