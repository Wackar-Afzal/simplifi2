import Navbar from "@/components/layouts/Navbar";
import React from "react";
import HeroSection from "@/components/Product2/HeroSection";
import about  from "@/utils/About/about.json";
import  {Clients} from "@/components/about/Clients";
import ClientsMarquee from "@/components/Product2/ClientsMargquee";
const Page = () => {
  console.log(about.about, "about");
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto overflow-hidden">
        <HeroSection data={about.about.hero} />
      </div>
      <div className="container-custom !pt-20 !pb-0 ">
        <h1 className="heading-style-h2_fintech ">{about.about.story.heading}</h1>
        <div className="flex flex-col gap-4 mt-6">
          {about.about.story.paras.map((para, index) => (
            <p key={index} className="paragraph-style-body">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:pb-18 max-w-7xl mx-auto overflow-hidden">
        <Clients data={about.about.clientsCount} />
      </div>
      <div>
        <ClientsMarquee data={about.about.clientMarquee} />
        </div>
    </>
  );
};

export default Page;
