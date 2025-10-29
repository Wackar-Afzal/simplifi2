// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import features from "@/utils/features.json"
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
import { API_ENDPOINTS } from "@/varConstant";
// Footer provided by root layout

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[Hero][populate]=*&populate[caseStudies][populate][slides][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.FEATURES}${queryParams}`, {
      next: { revalidate: 2 },
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

export default async function Features() {
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.Hero?.heading || features.features.hero.heading,
    descrip: strapiData?.Hero?.descrip || features.features.hero.descrip,
    desVideo: strapiData?.Hero?.desVideo?.url || features.features.hero.desVideo,
    mobVideo: strapiData?.Hero?.mobVideo?.url || features.features.hero.mobVideo,
  };

  // Merge caseStudies data - API doesn't have images, use fallback
  const caseStudiesData = {
    heading: strapiData?.caseStudies?.heading || features.features.caseStudies.heading,
    descrip: strapiData?.caseStudies?.descrip || features.features.caseStudies.descrip,
    slides: strapiData?.caseStudies?.slides?.map((slide, index) => ({
      id: slide.id,
      img: slide.img?.url || features.features.caseStudies.slides[index]?.img,
      alt: slide.alt || slide.title,
      subtitle: slide.subtitle,
      title: slide.title,
      buttonText: slide.buttonText || features.features.caseStudies.slides[index]?.buttonText,
      buttonLink: slide.buttonLink || features.features.caseStudies.slides[index]?.buttonLink,
      image: slide.image?.url || features.features.caseStudies.slides[index]?.image,
    })) || features.features.caseStudies.slides,
  };

  // Merge footer data with fallback
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? features.features.footer["bg-dark"],
    heading: strapiData?.footer?.heading || features.features.footer.heading,
    subheading: strapiData?.footer?.subheading || features.features.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || features.features.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || features.features.footer.buttonLink,
  };

  const mergedData = {
    features: {
      hero: heroData,
      caseStudies: caseStudiesData,
      footer: footerData,
    }
  };

  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={mergedData.features.hero} />
      </div>
      <div className="my-20 md:my-30">
        <Cases data={mergedData.features.caseStudies} />
      </div>
      <div className="my-20 md:my-30 px-2">
        <PageFooter data={mergedData.features.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
}
