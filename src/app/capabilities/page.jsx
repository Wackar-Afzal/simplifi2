// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import capabilities from "@/utils/capabilitites.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
import { API_ENDPOINTS } from "@/varConstant";
// Footer provided by root layout

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[caseStudies][populate][slides][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.CAPABILITIES}${queryParams}`, {
      next: { revalidate: 2 },
    });

    if (!response.ok) {
      console.error("Strapi API fetch failed:", response.status);
      return null;
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse?.data?.[0].caseStudies.slides,"jsonResponse?.data?.[0] capbilities")

    return jsonResponse?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    return null;
  }
}

export default async function Features() {
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.hero?.heading || capabilities.capabilities.hero.heading,
    descrip: strapiData?.hero?.descrip || capabilities.capabilities.hero.descrip,
    desVideo: strapiData?.hero?.desVideo?.url || capabilities.capabilities.hero.desVideo,
    mobVideo: strapiData?.hero?.mobVideo?.url || capabilities.capabilities.hero.mobVideo,
  };

  // Merge caseStudies data - API doesn't have images, use fallback
  const caseStudiesData = {
    heading: strapiData?.caseStudies?.heading || capabilities.capabilities.caseStudies.heading,
    descrip: strapiData?.caseStudies?.descrip || capabilities.capabilities.caseStudies.descrip,
    slides: strapiData?.caseStudies?.slides?.map((slide, index) => ({
      id: slide.id,
      img: slide.img?.url || capabilities.capabilities.caseStudies.slides[index]?.img,
      alt: slide.alt || slide.title,
      subtitle: slide.subtitle,
      title: slide.title,
      buttonText: slide.buttonText || capabilities.capabilities.caseStudies.slides[index]?.buttonText,
      buttonLink: slide.buttonLink || capabilities.capabilities.caseStudies.slides[index]?.buttonLink,
      image: slide.image?.url || capabilities.capabilities.caseStudies.slides[index]?.image,
    })) || capabilities.capabilities.caseStudies.slides,
  };

  // Merge footer data with fallback
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? capabilities.capabilities.footer["bg-dark"],
    heading: strapiData?.footer?.heading || capabilities.capabilities.footer.heading,
    subheading: strapiData?.footer?.subheading || capabilities.capabilities.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || capabilities.capabilities.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || capabilities.capabilities.footer.buttonLink,
  };

  const mergedData = {
    capabilities: {
      hero: heroData,
      caseStudies: caseStudiesData,
      footer: footerData,
    }
  };

  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={mergedData.capabilities.hero} />
      </div>
      {/* <CaseStudies data={capabilities.caseStudies}/> */}
      <div className="my-20 md:my-30">
        <Cases data={mergedData.capabilities.caseStudies} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter data={mergedData.capabilities.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
}
