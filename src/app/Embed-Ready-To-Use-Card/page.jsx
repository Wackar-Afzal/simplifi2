import Product2 from '@/components/Product2/Product2'
import React from 'react'
import embedreadytouse from "@/utils/EmbedReadytouse.json";
import { API_ENDPOINTS } from "@/varConstant";

// Revalidate every 2 hours (7200 seconds)
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[clientMarquee][populate]=*&populate[usps][populate][feature][populate]=*&populate[productOverview1][populate]=*&populate[careerList][populate][careerPositions][populate]=*&populate[whatwedo][populate][highlights][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.EMBED_READY}${queryParams}`, {
      next: { revalidate: 2},
    });

    if (!response.ok) {
      console.error("Strapi API fetch failed:", response.status);
      return null;
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse.data[0].hero,"jsonresponse hero ")
    console.log(jsonResponse.data[0].clientMarquee,"jsonresponse clientMarquee ")
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
    heading: strapiData?.hero?.heading || embedreadytouse.embedreadytouse.hero.heading,
    descrip: strapiData?.hero?.descrip || embedreadytouse.embedreadytouse.hero.descrip,
    bckgroundImage: strapiData?.hero?.bckgroundImage?.url || embedreadytouse.embedreadytouse.hero.bckgroundImage,
  };

  // Merge ClientMarquee data with fallback
  const clientMarqueeData = {
    heading: strapiData?.clientMarquee?.heading || embedreadytouse.embedreadytouse.clientMarquee.heading,
    clientLogos: strapiData?.clientMarquee?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Client",
      logo: client.url || client.logo,
    })) || embedreadytouse.embedreadytouse.clientMarquee.clientLogos,
  };

  // Merge usps data with fallback (note: API uses "feature" not "features")
  const useCasesData = {
    title: strapiData?.usps?.title || embedreadytouse.embedreadytouse.useCases.title,
    descrip: strapiData?.usps?.descrip || embedreadytouse.embedreadytouse.useCases.descrip,
    features: strapiData?.usps?.feature?.map(feature => ({
      id: feature.id,
      company: feature.company || "",
      logo: feature.logo?.url || feature.logo,
      title: feature.title,
      description: feature.description,
      image: feature.image?.url || feature.image,
      dark: feature.style === "dark",
      style: feature.style,
      horizontal: feature.horizontal,
    })) || embedreadytouse.embedreadytouse.useCases.features,
  };

  // Merge productOverview1 data with fallback (API uses "whatsIncluded" instead of "includedTitle")
  const productOverview1Data = {
    title: strapiData?.productOverview1?.title || embedreadytouse.embedreadytouse.productOverview1.title,
    subTitle: strapiData?.productOverview1?.subTitle || embedreadytouse.embedreadytouse.productOverview1.subTitle,
    description: strapiData?.productOverview1?.description || embedreadytouse.embedreadytouse.productOverview1.description,
    includedTitle: strapiData?.productOverview1?.whatsIncluded || strapiData?.productOverview1?.includedTitle || embedreadytouse.embedreadytouse.productOverview1.includedTitle,
    includedItems: strapiData?.productOverview1?.includedItems || embedreadytouse.embedreadytouse.productOverview1.includedItems,
    reverse: strapiData?.productOverview1?.reverse ?? embedreadytouse.embedreadytouse.productOverview1.reverse,
    buttonText: strapiData?.productOverview1?.buttonText || embedreadytouse.embedreadytouse.productOverview1.buttonText,
    buttonLink: strapiData?.productOverview1?.buttonLink || embedreadytouse.embedreadytouse.productOverview1.buttonLink,
    image: strapiData?.productOverview1?.image?.url || embedreadytouse.embedreadytouse.productOverview1.image,
  };

  // Merge careerList data with fallback
  // Note: API returns careerPositions as single object, but component expects array
  const careerListData = {
    heading: strapiData?.careerList?.heading || embedreadytouse.embedreadytouse.careerList.heading,
    descrip: strapiData?.careerList?.descrip || embedreadytouse.embedreadytouse.careerList.descrip,
    careerPositions: strapiData?.careerList?.careerPositions 
      ? (Array.isArray(strapiData.careerList.careerPositions) 
          ? strapiData.careerList.careerPositions.map(position => ({
              title: position.title,
              href: position.href || "",
              location: position.location || "",
              descrip: position.descrip || "",
              icon: position.icon?.url || position.icon,
            }))
          : [{
              title: strapiData.careerList.careerPositions.title,
              href: strapiData.careerList.careerPositions.href || "",
              location: strapiData.careerList.careerPositions.location || "",
              descrip: strapiData.careerList.careerPositions.descrip || "",
              icon: strapiData.careerList.careerPositions.icon?.url || strapiData.careerList.careerPositions.icon,
            }])
      : embedreadytouse.embedreadytouse.careerList.careerPositions,
  };

  // Merge whatwedo data with fallback
  // Note: API highlights may not have img field, use fallback for images
  const whatwedoData = {
    title: strapiData?.whatwedo?.title || embedreadytouse.embedreadytouse.whatwedo.title,
    description: strapiData?.whatwedo?.description || embedreadytouse.embedreadytouse.whatwedo.description,
    highlightsTitle: strapiData?.whatwedo?.highlightsTitle || embedreadytouse.embedreadytouse.whatwedo.highlightsTitle,
    highlights: strapiData?.whatwedo?.highlights?.map((highlight, index) => ({
      id: highlight.id,
      title: highlight.title,
      description: highlight.description || "",
      img: highlight.img?.url || highlight.img || embedreadytouse.embedreadytouse.whatwedo.highlights[index]?.img,
      alt: highlight.alt || highlight.title,
    })) || embedreadytouse.embedreadytouse.whatwedo.highlights,
    footer: strapiData?.whatwedo?.footer || embedreadytouse.embedreadytouse.whatwedo.footer,
  };

  // Merge footer data with fallback
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? embedreadytouse.embedreadytouse.footer["bg-dark"],
    heading: strapiData?.footer?.heading || embedreadytouse.embedreadytouse.footer.heading,
    subheading: strapiData?.footer?.subheading || embedreadytouse.embedreadytouse.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || embedreadytouse.embedreadytouse.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || embedreadytouse.embedreadytouse.footer.buttonLink,
  };

  const mergedData = {
    embedreadytouse: {
      hero: heroData,
      clientMarquee: clientMarqueeData,
      useCases: useCasesData,
      productOverview1: productOverview1Data,
      careerList: careerListData,
      whatwedo: whatwedoData,
      footer: footerData,
    }
  };

  return (
    <div>
      <Product2 data={mergedData} />
    </div>
  )
}

