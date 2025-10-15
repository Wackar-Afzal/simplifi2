// Navbar provided by root layout
import React from "react";
import HeroSection from "@/components/Product2/HeroSection";
import about from "@/utils/About/about.json";
import { Clients } from "@/components/about/Clients";
import ClientsMarquee from "@/components/Product2/ClientsMargquee";
import PageFooter from "@/components/common/PageFooter";
import ClientsGrid from "@/components/Product2/ClientsGrid";
import { API_ENDPOINTS } from "@/varConstant";
// Footer provided by root layout

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[story][populate]=*&populate[clientsCount][populate]=*&populate[clientMarquee][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.ABOUT}${queryParams}`, {
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
    heading: strapiData?.hero?.heading || about.about.hero.heading,
    descrip: strapiData?.hero?.descrip || about.about.hero.descrip,
    bckgroundImage: strapiData?.hero?.bckgroundImage?.url || about.about.hero.bckgroundImage,
  };

  // Merge story data with fallback
  const storyData = {
    heading: strapiData?.story?.heading || about.about.story.heading,
    paras: strapiData?.story?.paras || about.about.story.paras,
  };

  // Merge clientsCount data with fallback (no img from API, use local)
  const clientsCountData = {
    title: strapiData?.clientsCount?.title || about.about.clientsCount.title,
    stats: strapiData?.clientsCount?.stats || about.about.clientsCount.stats,
    img: strapiData?.clientsCount?.img?.url || about.about.clientsCount.img,
  };

  // Merge clientMarquee data with fallback
  const clientMarqueeData = {
    heading: strapiData?.clientMarquee?.heading || about.about.clientMarquee.heading,
    clientLogos: strapiData?.clientMarquee?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Investor",
      logo: client.url || client.logo,
    })) || about.about.clientMarquee.clientLogos,
  };

  const mergedData = {
    about: {
      hero: heroData,
      story: storyData,
      clientsCount: clientsCountData,
      clientMarquee: clientMarqueeData,
    }
  };

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto  my-2 md:my-5">
        <HeroSection data={mergedData.about.hero} />
      </div>
      <div className=" max-w-7xl  mx-auto my-20 md:my-30">
        <h1 className="heading-style-h2_fintech ">{mergedData.about.story.heading}</h1>
        <div className="flex flex-col gap-4 mt-6">
          {mergedData.about.story.paras.map((para, index) => (
            <p key={index} className="paragraph-style-body">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="py-20 md:py-30 max-w-7xl mx-auto overflow-hidden">
        <Clients data={mergedData.about.clientsCount} />
      </div>
      <div className="my-20 md:my-30">
        <ClientsGrid data={mergedData.about.clientMarquee} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
      {/* Footer provided by root layout */}
    </div>
  );
}
