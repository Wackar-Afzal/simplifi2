// Navbar provided by root layout
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import React from "react";
import useCases from "@/utils/solutions/use-cases"
import CareerList from "@/components/Career/CareerList";
import PageFooter from "@/components/common/PageFooter";
import { API_ENDPOINTS } from "@/varConstant";
// Footer provided by root layout

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[caseStudies][populate]=*&populate[caseStudies1][populate]=*&populate[caseStudies2][populate]=*&populate[caseStudies3][populate]=*&populate[careerList][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.USE_CASES}${queryParams}`, {
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

  // Helper function to merge case studies
  const mergeCaseStudies = (strapiSection, localSection) => ({
    heading: strapiSection?.heading || localSection.heading,
    descrip: strapiSection?.descrip || localSection.descrip,
    slides: strapiSection?.slides?.map((slide, index) => ({
      id: slide.id,
      img: slide.img?.url || localSection.slides[index]?.img,
      alt: slide.alt || slide.title,
      subtitle: slide.subtitle,
      title: slide.title,
      buttonText: slide.buttonText || localSection.slides[index]?.buttonText,
      buttonLink: slide.buttonLink || localSection.slides[index]?.buttonLink,
      image: slide.image?.url || localSection.slides[index]?.image,
    })) || localSection.slides,
  });

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.hero?.heading || useCases.useCases.hero.heading,
    descrip: strapiData?.hero?.descrip || useCases.useCases.hero.descrip,
    desVideo: strapiData?.hero?.desVideo?.url || useCases.useCases.hero.desVideo,
    mobVideo: strapiData?.hero?.mobVideo?.url || useCases.useCases.hero.mobVideo,
  };

  // Merge all 4 case study sections
  const caseStudiesData = mergeCaseStudies(strapiData?.caseStudies, useCases.useCases.caseStudies);
  const caseStudies1Data = mergeCaseStudies(strapiData?.caseStudies1, useCases.useCases.caseStudies1);
  const caseStudies2Data = mergeCaseStudies(strapiData?.caseStudies2, useCases.useCases.caseStudies2);
  const caseStudies3Data = mergeCaseStudies(strapiData?.caseStudies3, useCases.useCases.caseStudies3);

  // Merge careerList data
  const careerListData = {
    heading: strapiData?.careerList?.heading || useCases.useCases.careerList.heading,
    descrip: strapiData?.careerList?.descrip || useCases.useCases.careerList.descrip,
    careerPositions: strapiData?.careerList?.careerPositions?.map((position, index) => ({
      title: position.title,
      href: position.href || useCases.useCases.careerList.careerPositions[index]?.href || "",
      location: position.location || useCases.useCases.careerList.careerPositions[index]?.location || "",
      descrip: position.descrip || "",
      icon: position.icon?.url || useCases.useCases.careerList.careerPositions[index]?.icon,
    })) || useCases.useCases.careerList.careerPositions,
  };

  // Merge footer data with fallback
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? useCases.useCases.footer["bg-dark"],
    heading: strapiData?.footer?.heading || useCases.useCases.footer.heading,
    subheading: strapiData?.footer?.subheading || useCases.useCases.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || useCases.useCases.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || useCases.useCases.footer.buttonLink,
  };

  const mergedData = {
    useCases: {
      hero: heroData,
      caseStudies: caseStudiesData,
      caseStudies1: caseStudies1Data,
      caseStudies2: caseStudies2Data,
      caseStudies3: caseStudies3Data,
      careerList: careerListData,
      footer: footerData,
    }
  };

  return (
    <>
      <div className="my-20 md:my-30">
        <HeroProduct data={mergedData.useCases.hero} />
      </div>
      <div className="my-20 md:my-30">
        <CaseStudies data={mergedData.useCases.caseStudies} />
      </div>
      <div className="my-20 md:my-30">
        <CaseStudies data={mergedData.useCases.caseStudies1} />
      </div>
      <div className=" my-20 md:my-30">
        <CaseStudies data={mergedData.useCases.caseStudies2} />
      </div>
      <div className=" my-20 md:my-30">
        <CaseStudies data={mergedData.useCases.caseStudies3} />
      </div>
   
      <div className="px-4 my-20 md:my-30">
        <CareerList data={mergedData.useCases.careerList} />
      </div>

      <div className="px-2 my-20 md:my-30">
        <PageFooter data={mergedData.useCases.footer} />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
}
