import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { blogs } from "@/utils/blogs/blogs.js";
import Link from "next/link";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";

export default function BlogsPage() {
  const blogSlides = blogs.blogs.slides;
  return (
    <>
      <Navbar />
        <HeroProduct data={blogs.blogs.hero} />
            <Cases data={blogs?.blogs?.posts }/>
            <PageFooter/>
      <Footer />
    </>
  );
}
