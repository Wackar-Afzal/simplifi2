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
import { API_ENDPOINTS } from "@/varConstant";

// Revalidate every 2 hours (7200 seconds)
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[ClientsMargquee][populate]=*&populate[productOverview1][populate]=*&populate[productOverview2][populate]=*&populate[productOverview3][populate]=*&populate[clientsCount][populate]=*&populate[clientMarquee2][populate]=*&populate[WhatsCookin][populate]=*&populate[usps][populate]=*&populate[features][populate]=*&populate[clientMarquee1][populate]=*&populate[whatwedo][populate]=*&populate[pressReleases][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.HOME}${queryParams}`, {
      next: { revalidate: 2 }, // Revalidate every 2 seconds for testing
    });

    if (!response.ok) {
      console.error("Strapi API fetch failed:", response.status);
      return null;
    }

    const jsonResponse = await response.json();
    return jsonResponse?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    return null;
  }
}

export default async function Home() {
  // Fetch data from Strapi
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    title: strapiData?.hero?.title || homeText.homepage.hero.title,
    repeatingWords: strapiData?.hero?.repeatingWords || homeText.homepage.hero.repeatingWords,
    subtitle: strapiData?.hero?.subtitle || homeText.homepage.hero.subtitle,
    description: strapiData?.hero?.description || homeText.homepage.hero.description,
    cta: strapiData?.hero?.cta || homeText.homepage.hero.cta,
    ctaLink: strapiData?.hero?.ctaLink || homeText.homepage.hero.ctaLink,
    left: strapiData?.hero?.left?.url || homeText.homepage.hero.left,
    right: strapiData?.hero?.right?.url || homeText.homepage.hero.right,
  };

  // Merge ClientsMarquee data with fallback
  const clientsMarqueeData = {
    heading: strapiData?.ClientsMargquee?.heading || homeText.homepage.clientMarquee.heading,
    clientLogos: strapiData?.ClientsMargquee?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Client",
      logo: client.url || client.logo,
    })) || homeText.homepage.clientMarquee.clientLogos,
  };

  // Merge ProductOverview1 data with fallback
  const productOverview1Data = {
    heading: strapiData?.productOverview1?.heading || homeText.homepage.ProductOverview1.heading,
    description: strapiData?.productOverview1?.description || homeText.homepage.ProductOverview1.description,
  };

  // Merge ProductOverview2 data with fallback
  const productOverview2Data = {
    title: strapiData?.productOverview2?.title || homeText.homepage.productOverview2.title,
    subTitle: strapiData?.productOverview2?.subTitle || homeText.homepage.productOverview2.subTitle,
    description: strapiData?.productOverview2?.description || homeText.homepage.productOverview2.description,
    includedTitle: strapiData?.productOverview2?.includedTitle || homeText.homepage.productOverview2.includedTitle,
    includedItems: strapiData?.productOverview2?.includedItems || homeText.homepage.productOverview2.includedItems,
    reverse: strapiData?.productOverview2?.reverse ?? homeText.homepage.productOverview2.reverse,
    buttonText: strapiData?.productOverview2?.buttonText || homeText.homepage.productOverview2.buttonText,
    buttonLink: strapiData?.productOverview2?.buttonLink || homeText.homepage.productOverview2.buttonLink,
    image: strapiData?.productOverview2?.image?.url || homeText.homepage.productOverview2.image,
  };

  // Merge ProductOverview3 data with fallback
  const productOverview3Data = {
    title: strapiData?.productOverview3?.title || homeText.homepage.productOverview3.title,
    subTitle: strapiData?.productOverview3?.subTitle || homeText.homepage.productOverview3.subTitle,
    description: strapiData?.productOverview3?.description || homeText.homepage.productOverview3.description,
    includedTitle: strapiData?.productOverview3?.includedTitle || homeText.homepage.productOverview3.includedTitle,
    includedItems: strapiData?.productOverview3?.includedItems || homeText.homepage.productOverview3.includedItems,
    reverse: strapiData?.productOverview3?.reverse ?? homeText.homepage.productOverview3.reverse,
    buttonText: strapiData?.productOverview3?.buttonText || homeText.homepage.productOverview3.buttonText,
    buttonLink: strapiData?.productOverview3?.buttonLink || homeText.homepage.productOverview3.buttonLink,
    image: strapiData?.productOverview3?.image?.url || homeText.homepage.productOverview3.image,
  };

  // Merge ClientsCount data with fallback
  const clientsCountData = {
    title: strapiData?.clientsCount?.title || homeText.homepage.clientsCount.title,
    stats: strapiData?.clientsCount?.stats || homeText.homepage.clientsCount.stats,
    img: strapiData?.clientsCount?.img?.url || homeText.homepage.clientsCount.img,
  };

  // Merge ClientMarquee2 data with fallback
  const clientMarquee2Data = {
    heading: strapiData?.clientMarquee2?.heading || homeText.homepage.clientMarquee2.heading,
    clientLogos: strapiData?.clientMarquee2?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Investor",
      logo: client.url || client.logo,
    })) || homeText.homepage.clientMarquee2.clientLogos,
  };

  // Merge WhatsCookin data with fallback
  const whatsCookinData = {
    title: strapiData?.WhatsCookin?.title || homeText.homepage.whatsCookin.title,
    subtitle: strapiData?.WhatsCookin?.subtitle || homeText.homepage.whatsCookin.subtitle,
    slides: strapiData?.WhatsCookin?.slides || homeText.homepage.whatsCookin.slides,
  };

  // Merge USPs data with fallback
  const uspsData = {
    title: strapiData?.usps?.title || homeText.homepage.usps.title,
    descrip: strapiData?.usps?.descrip || homeText.homepage.usps.descrip,
    features: strapiData?.usps?.feature || homeText.homepage.usps.features,
  };

  // Merge Features data with fallback
  const featuresData = {
    title: strapiData?.features?.title || homeText.homepage.features.title,
    subtitle: strapiData?.features?.subtitle || homeText.homepage.features.subtitle,
    features: strapiData?.features?.features || homeText.homepage.features.features,
    cta: strapiData?.features?.cta || homeText.homepage.features.cta,
    buttonLink: strapiData?.features?.buttonLink || homeText.homepage.features.buttonLink,
  };

  // Merge ClientMarquee1 data with fallback
  const clientMarquee1Data = {
    heading: strapiData?.clientMarquee1?.heading || homeText.homepage.clientMarquee1.heading,
    clientLogos: strapiData?.clientMarquee1?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Partner",
      logo: client.url || client.logo,
    })) || homeText.homepage.clientMarquee1.clientLogos,
  };

  // Merge WhatWeDo data with fallback
  const whatWeDoData = {
    title: strapiData?.whatwedo?.title || homeText.homepage.whatwedo.title,
    description: strapiData?.whatwedo?.description || homeText.homepage.whatwedo.description,
    highlightsTitle: strapiData?.whatwedo?.highlightsTitle || homeText.homepage.whatwedo.highlightsTitle,
    textSize: strapiData?.whatwedo?.textSize || homeText.homepage.whatwedo.textSize,
    highlights: strapiData?.whatwedo?.highlights || homeText.homepage.whatwedo.highlights,
  };

  // Merge PressReleases data with fallback
  const pressReleasesData = {
    heading: strapiData?.pressReleases?.heading || homeText.homepage.pressReleases.heading,
    descrip: strapiData?.pressReleases?.descrip || homeText.homepage.pressReleases.descrip,
    slides: (strapiData?.pressReleases?.slides || homeText.homepage.pressReleases.slides).slice(0, 3),
  };

  return (
    <div className="mx-auto">
      <Hero data={heroData} />
      <div className="my-20 lg:mb-30 lg:mt-15">
        <ClientsMargquee data={clientsMarqueeData} />
      </div>
      <div className="py-20 lg:pb-30 lg:pt-15">
      <ProductOverview data={productOverview1Data} />
   
      {/* <Services/> */}
      <UXSection data={productOverview2Data} />
   

      <UXSection data={productOverview3Data} />
      </div>
      <div className="my-20 md:my-30 px-4">
        <Clients data={clientsCountData} />
      </div>
      <div className="my-40 lg:my-40 px-4">
        <ClientsGrid data={clientMarquee2Data} />
      </div>

      <div className="px-4 my-20 lg:my-30 px-4">
        <WhatsCookin data={whatsCookinData} />
      </div>
      <div className="my-20 lg:my-30 px-4">
        <Ai data={uspsData} />
      </div>
      <Features data={featuresData} />
      <div className="my-20 mx-2 md:mx-0 md:my-30">
        <ClientsMargquee data={clientMarquee1Data} />
      </div>

      <div className="my-20  md:my-30">
        <WhatWeDo data={whatWeDoData} />
      </div>
      <div className="my-20 md:my-30 px-4">
        <Cases data={pressReleasesData} />

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

      <div className="my-5 md:my-10">
        <PageFooter />

      </div>
    </div>
  );
}
