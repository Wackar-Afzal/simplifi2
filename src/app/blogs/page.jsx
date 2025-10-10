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
      <div className="mt-20 md:mt-30">
        <HeroProduct data={blogs.blogs.hero} />
      </div>
      <div className="">
        <Cases data={blogs?.blogs?.posts} />
      </div>
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
    </>
  );
}
