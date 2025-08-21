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


export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <ProductOverview />
      <Clients/>
      <Testimonials/>
      <Partners/>
      <WhatWeDo/>
      <WorkFlowSectionCases/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
