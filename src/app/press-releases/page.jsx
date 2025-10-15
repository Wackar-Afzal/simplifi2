// Navbar moved to root layout
import Cases from "@/components/Product1Page/Cases";
import HeroProduct from "@/components/Product1Page/HeroProduct";
// Footer moved to root layout
import React from "react";
import { pressReleases } from "@/utils/press/press-combined.js";
import { blogs } from "@/utils/blogs/blogs.js";
import PageFooter from "@/components/common/PageFooter";

const PressReleasesPage = () => {
  return (
    <>
      <div className="mt-5 md:mt-10">
        <HeroProduct data={pressReleases.pressReleases.hero} />
      </div>
      <div className="">
        <Cases data={pressReleases.pressReleases.pressReleases} />
      </div>
      <div className="mt-20 mb-30">
        <Cases data={pressReleases.pressReleases.media} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
      {/* Footer provided by root layout */}
    </>
  );
};

export default PressReleasesPage;
