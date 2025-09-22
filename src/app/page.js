import { ContactUs } from "@/components/common/ContactUs";
import { Clients } from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero/Hero";
import Partners from "@/components/Home/Partners";
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
import homeText from "@/utils/homeText.json";
import Cases from "@/components/Product1Page/Cases";
import {blogs} from "@/utils/blogs/blogs.js"
<<<<<<< HEAD
import {pressReleases} from "@/utils/press/press.js"
import  PageFooter  from "@/components/common/PageFooter";
=======
import Link from "next/link";
>>>>>>> news-sec

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <ClientsMargquee data={homeText.homepage.clientMarquee} />
      <ProductOverview />
      {/* <Services/> */}
      <UXSection data={homeText.homepage.productOverview1} />
      <UXSection data={homeText.homepage.productOverview2} />

      <div className="lg:pb-18">
        <Clients data={homeText.homepage.clientsCount} />
      </div>
      <WhatsCookin data={homeText.homepage.whatsCookin} />
      <div className="lg:pb-18">
        <Ai data={homeText.homepage.usps} />
      </div>
      <Features />
      {/* <Testimonials/> */}
      {/* <Partners/> */}
      <ClientsMargquee data={homeText.homepage.clientMarquee1} />

      <WhatWeDo data={homeText.homepage.whatwedo} />

      <Cases data={{
        ...blogs.blogs,
        slides: blogs.blogs.slides.slice(0, 3)
      }}/>
      
      {/* See More Button */}
      <section className="py-8">
        <div className="container-global text-center">
          <Link href="/press-releases" className="outlined-button inline-block">
            See More
          </Link>
        </div>
      </section>

      {/* <ClientSays /> */}
      {/* <WorkFlowSectionCases/> */}
      {/* <ContactUs/> */}
      <Footer />
    </div>
  );
}
