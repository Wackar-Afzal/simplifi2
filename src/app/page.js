import { ContactUs } from "@/components/common/ContactUs";
import { Clients } from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero/Hero";
import Partners  from "@/components/Home/Partners";
import ProductOverview from "@/components/Home/ProductOverview/ProductOverview";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WorkFlowSectionCases from "@/components/Home/WorkFlow";
import { Footer } from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ClientSays from "@/components/Product1Page/ClientSays";
import WhatsCookin from "@/components/Product1Page/WhatsCookin";
import Ai from "@/components/Product2/Ai2";
import ClientsMargquee from "@/components/Product2/ClientsMargquee";
import Features from "@/components/Product2/Features";
import Services from "@/components/Product2/Services";
import UXSection from "@/components/Product2/UXSection";
import homeText from "@/utils/homeText.json"
export default function Home() {

  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <ClientsMargquee/>
      <ProductOverview />
      {/* <Services/> */}
      <UXSection data={homeText.homepage.productOverview1} />
      <UXSection data={homeText.homepage.productOverview2} />

      <div className="lg:pb-22">
      <Clients/>

      </div>
      <WhatsCookin data={homeText.homepage.whatsCookin}/>

      <Ai data={homeText.homepage.usps}/>
      <Features/>
      {/* <Testimonials/> */}
      {/* <Partners/> */}
      <WhatWeDo data={homeText.homepage.whatwedo}/>

      <ClientSays/>
      {/* <WorkFlowSectionCases/> */}
      {/* <ContactUs/> */}

      <Footer/>
    </div>
  );
}
