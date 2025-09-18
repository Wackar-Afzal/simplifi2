import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import { Footer } from "@/components/layouts/Footer";
import React from "react";
import {pressReleases} from "@/utils/press/press.js"

const PressReleasesPage = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={pressReleases.pressReleases.hero} />
      <CaseStudies data={pressReleases.pressReleases.pressReleases}/>
      <CaseStudies data={pressReleases.pressReleases.pressReleases2}/>
      <CaseStudies data={pressReleases.pressReleases.pressReleases3}/>
      <CaseStudies data={pressReleases.pressReleases.pressReleases4}/>
      <CaseStudies data={pressReleases.pressReleases.pressReleases5}/>
      <CaseStudies data={pressReleases.pressReleases.pressReleases6}/>
      <Footer />
    </>
  );
};

export default PressReleasesPage;
