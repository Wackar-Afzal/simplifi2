import Navbar from "@/components/layouts/Navbar";
import CaseStudies from "@/components/Product1Page/CaseStudies";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import { Footer } from "@/components/layouts/Footer";
import React from "react";
import {blogs} from "@/utils/blogs/blogs.js"

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <HeroProduct data={blogs.blogs.hero} />
      <CaseStudies data={blogs.blogs.blogs}/>
      <CaseStudies data={blogs.blogs.blogs2}/>
      <CaseStudies data={blogs.blogs.blogs3}/>
      <CaseStudies data={blogs.blogs.blogs4}/>
      <CaseStudies data={blogs.blogs.blogs5}/>
      <CaseStudies data={blogs.blogs.blogs6}/>
      <CaseStudies data={blogs.blogs.blogs7}/>
      <CaseStudies data={blogs.blogs.blogs8}/>
      <Footer />
    </>
  );
};

export default BlogsPage;
