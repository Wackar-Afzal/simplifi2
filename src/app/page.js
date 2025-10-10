import { Clients } from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero/Hero";
import ProductOverview from "@/components/Home/ProductOverview/ProductOverview";
import WhatWeDo from "@/components/Home/WhatWeDo";
// Navbar and Footer are provided by root layout
import WhatsCookin from "@/components/Product1Page/WhatsCookin";
import Ai from "@/components/Product2/Ai2";
import ClientsMargquee from "@/components/Product2/ClientsMargquee";
import Features from "@/components/Product2/Features";
import Services from "@/components/Product2/Services";
import UXSection from "@/components/Product2/UXSection";
import homeText from "@/utils/homeText.json";
import Cases from "@/components/Product1Page/Cases";
import { pressReleases } from "@/utils/press/press-combined";
import Link from "next/link";
import PageFooter from "@/components/common/PageFooter";
import ClientsGrid from "@/components/Product2/ClientsGrid";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <div className="mb-20 lg:mb-30">
      <ClientsMargquee data={homeText.homepage.clientMarquee} />
      </div>
      <ProductOverview />
      {/* <Services/> */}
      <UXSection data={homeText.homepage.productOverview1} />
      <UXSection data={homeText.homepage.productOverview2} />

      <div className="my-20 md:my-30 ">
        <Clients data={homeText.homepage.clientsCount} />
      </div>
      <div className="my-40 lg:my-40">
      <ClientsGrid data={homeText.homepage.clientMarquee2} />
      </div>

      <div className="my-20 lg:my-30">
        <WhatsCookin data={homeText.homepage.whatsCookin} /> 
      </div>
      <div className="my-20 lg:my-30">
        <Ai data={homeText.homepage.usps} />
      </div>
      <Features />
      {/* <Testimonials/> */}
      {/* <Partners/> */}
      <div className="my-20 mx-2 md:mx-0 md:my-30">
      <ClientsMargquee data={homeText.homepage.clientMarquee1} />
      </div>

<div className="my-20  md:my-30">
<WhatWeDo data={homeText.homepage.whatwedo} />

</div>
      <div className="my-20 md:my-30">
      <Cases
        data={{
          ...homeText.homepage.pressReleases,
          slides: homeText.homepage.pressReleases.slides.slice(0, 3),
        }}
      />

      {/* See More Button */}
      <section className="py-8">
        <div className="container-global text-center ">
          <Link
            href="/press-releases"
            className="contained-button inline-block max-w-[max-content] mx-auto "
          >
            See More
          </Link>
        </div>
      </section>
      </div>


      {/* <ClientSays /> */}
      {/* <WorkFlowSectionCases/> */}
      {/* <ContactUs/> */}
      <div className="my-20 md:my-30">
      <PageFooter />

      </div>
    </div>
  );
}
