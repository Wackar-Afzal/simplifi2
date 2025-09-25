// Navbar and Footer provided by root layout
import { blogs } from "@/utils/blogs/blogs.js";
import Link from "next/link";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";

export default function BlogsPage() {
  const blogSlides = blogs.blogs.slides;
  return (
    <>
      <HeroProduct data={blogs.blogs.hero} />
      <Cases data={blogs?.blogs?.posts }/>
      <PageFooter/>
    </>
  );
}
