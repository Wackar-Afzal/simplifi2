// Navbar provided by root layout
import React from "react";
import HeroSection from "@/components/Product2/HeroSection";
import about from "@/utils/About/about.json";
import { Clients } from "@/components/about/Clients";
import ClientsMarquee from "@/components/Product2/ClientsMargquee";
import PageFooter from "@/components/common/PageFooter";
import ClientsGrid from "@/components/Product2/ClientsGrid";
// Footer provided by root layout
const Page = () => {
  console.log(about.about, "about");
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto  my-2 md:my-5">
        <HeroSection data={about.about.hero} />
      </div>
      <div className=" max-w-7xl  mx-auto my-20 md:my-30">
        <h1 className="heading-style-h2_fintech ">{about.about.story.heading}</h1>
        <div className="flex flex-col gap-4 mt-6">
          {about.about.story.paras.map((para, index) => (
            <p key={index} className="paragraph-style-body">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="py-20 md:py-30 max-w-7xl mx-auto overflow-hidden">
        <Clients data={about.about.clientsCount} />
      </div>
      <div className="my-20 md:my-30">
        <ClientsGrid data={about.about.clientMarquee} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
      {/* Footer provided by root layout */}
    </div>
  );
};

export default Page;
