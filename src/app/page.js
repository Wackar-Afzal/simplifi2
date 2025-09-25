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

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <ClientsMargquee data={homeText.homepage.clientMarquee} />
      <ProductOverview />
      {/* <Services/> */}
      <UXSection data={homeText.homepage.productOverview1} />
      <UXSection data={homeText.homepage.productOverview2} />

      <div className="pt-28 pb-18">
        <Clients data={homeText.homepage.clientsCount} />
      </div>
      <div className="lg:pb-28">
        <WhatsCookin data={homeText.homepage.whatsCookin} /> 
      </div>
      <div className="lg:pb-28">
        <Ai data={homeText.homepage.usps} />
      </div>
      <Features />
      {/* <Testimonials/> */}
      {/* <Partners/> */}
      <div className="pt-12 pb-18">
      <ClientsMargquee data={homeText.homepage.clientMarquee1} />

      </div>

      <WhatWeDo data={homeText.homepage.whatwedo} />
      <div className="my-20">
      <Cases
        data={{
          ...pressReleases.pressReleases.media,
          slides: pressReleases.pressReleases.media.slides.slice(0, 3),
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
  <PageFooter />
    </div>
  );
}
