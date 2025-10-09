// Navbar provided by root layout
import React from "react";
import HeroSection from "@/components/Product2/HeroSection";
import about  from "@/utils/About/about.json";
import  {Clients} from "@/components/about/Clients";
import ClientsMarquee from "@/components/Product2/ClientsMargquee";
import PageFooter from "@/components/common/PageFooter";
import ClientsGrid from "@/components/Product2/ClientsGrid";
// Footer provided by root layout
const Page = () => {
  console.log(about.about, "about");
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <HeroSection data={about.about.hero} />
      </div>
      <div className="container-custom !pt-20 !pb-0 max-w-7xl  mx-auto">
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
        <ClientsGrid data={about.about.clientMarquee} />
        </div>
    <PageFooter/>
    {/* Footer provided by root layout */}
    </>
  );
};

export default Page;
