import Navbar from "@/components/layouts/Navbar";
import Cases from "@/components/Product1Page/Cases";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import { Footer } from "@/components/layouts/Footer";
import React from "react";
import { pressReleases } from "@/utils/press/press-combined.js";
import { blogs } from "@/utils/blogs/blogs.js";
import PageFooter from "@/components/common/PageFooter";

const PressReleasesPage = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={pressReleases.pressReleases.hero} />
      <Cases data={pressReleases.pressReleases.pressReleases} />
      <div className="mt-20 mb-20">
      <Cases data={pressReleases.pressReleases.media} />
      </div>
      <PageFooter />
      <Footer />
    </>
  );
};

export default PressReleasesPage;
