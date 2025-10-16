// Navbar moved to root layout
import Cases from "@/components/Product1Page/Cases";
import HeroProduct from "@/components/Product1Page/HeroProduct";
// Footer moved to root layout
import React from "react";
import { pressReleases } from "@/utils/press/press-combined.js";
import { pressService } from "@/services/contentService.js";
import PageFooter from "@/components/common/PageFooter";

const PressReleasesPage = async () => {
  // Fetch press releases from Strapi (with fallback to JSON)
  const pressData = await pressService.getAllPressReleasesNew();
  
  
  // Fallback to local data if Strapi data is not available
  const finalData = pressData?.pressReleases || pressReleases.pressReleases;
  
  // Ensure we have the correct data structure for Cases component
  const pressReleasesData = finalData.pressReleases || { heading: "", slides: [] };
  // Always use local media data as fallback since it exists
  const mediaData = finalData.media || pressReleases.pressReleases.media || { heading: "SimpliFi in the media", slides: [] };
  
  
  
  return (
    <>
      <div className="mt-5 md:mt-10">
        <HeroProduct data={finalData.hero} />
      </div>
      <div className="">
        <Cases data={pressReleasesData} />
      </div>
      <div className="mt-20 mb-30">
        <Cases data={mediaData} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default PressReleasesPage;
