// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import industries from "@/utils/solutions/industries";
import CareerList from "@/components/Career/CareerList";
import Ai from "@/components/Product2/Ai2";
// Footer provided by root layout
import PageFooter from "@/components/common/PageFooter";
import { API_ENDPOINTS } from "@/varConstant";

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[usps][populate][feature][populate]=*&populate[careerList][populate][careerPositions][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.INDUSTRIES}${queryParams}`, {
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

export default async function Page() {
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.hero?.heading || industries.industries.hero.heading,
    descrip: strapiData?.hero?.descrip || industries.industries.hero.descrip,
    desVideo: strapiData?.hero?.desVideo?.url || industries.industries.hero.desVideo,
    mobVideo: strapiData?.hero?.mobVideo?.url || industries.industries.hero.mobVideo,
  };

  // Merge usps data (API uses "feature" singular, local uses "features" plural)
  const uspsData = {
    title: strapiData?.usps?.title || industries.industries.usps.title,
    descrip: strapiData?.usps?.descrip || industries.industries.usps.descrip,
    features: strapiData?.usps?.feature?.map((feature, index) => ({
      id: feature.id,
      company: feature.company || industries.industries.usps.features[index]?.company || "",
      logo: feature.logo?.url || industries.industries.usps.features[index]?.logo,
      title: feature.title,
      description: feature.description,
      image: feature.image?.url || industries.industries.usps.features[index]?.image,
      style: feature.style || industries.industries.usps.features[index]?.style,
      extraStats: feature.extraStats || industries.industries.usps.features[index]?.extraStats,
    })) || industries.industries.usps.features,
  };

  // Merge careerList data
  const careerListData = {
    heading: strapiData?.careerList?.heading || industries.industries.careerList.heading,
    descrip: strapiData?.careerList?.descrip || industries.industries.careerList.descrip,
    careerPositions: strapiData?.careerList?.careerPositions?.map((position, index) => ({
      title: position.title,
      href: position.href || industries.industries.careerList.careerPositions[index]?.href || "",
      location: position.location || industries.industries.careerList.careerPositions[index]?.location || "",
      descrip: position.descrip || "",
      icon: position.icon?.url || industries.industries.careerList.careerPositions[index]?.icon,
    })) || industries.industries.careerList.careerPositions,
  };

  // Merge footer data with fallback
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? industries.industries.footer["bg-dark"],
    heading: strapiData?.footer?.heading || industries.industries.footer.heading,
    subheading: strapiData?.footer?.subheading || industries.industries.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || industries.industries.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || industries.industries.footer.buttonLink,
  };

  const mergedData = {
    industries: {
      hero: heroData,
      usps: uspsData,
      careerList: careerListData,
      footer: footerData,
    }
  };

  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={mergedData.industries.hero} />
      </div>
      <div className="px-4 my-20 md:my-30">
        <Ai data={mergedData.industries.usps} />
      </div>
      <div className="px-4 my-20 md:my-30">
        <CareerList data={mergedData.industries.careerList} />
      </div>
      <div className="px-4 my-20 md:my-30">
        <PageFooter data={mergedData.industries.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
}
