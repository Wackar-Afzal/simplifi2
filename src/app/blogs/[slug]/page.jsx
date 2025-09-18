"use client";

import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { blogs } from "@/utils/blogs/blogs.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";

// Helper function to get all blog entries from all blog sections
function getAllBlogs() {
  const allBlogs = [];
  const blogSections = ['blogs', 'blogs2', 'blogs3', 'blogs4', 'blogs5', 'blogs6', 'blogs7', 'blogs8'];

  blogSections.forEach(section => {
    if (blogs.blogs[section] && blogs.blogs[section].slides) {
      allBlogs.push(...blogs.blogs[section].slides);
    }
  });

  return allBlogs;
}

// Helper function to find blog by slug
function getBlogBySlug(slug) {
  const allBlogs = getAllBlogs();
  return allBlogs.find(blog => blog.slug === slug);
}

// Helper function to get related blogs (excluding current blog)
function getRelatedBlogs(currentSlug, limit = 3) {
  const allBlogs = getAllBlogs();
  return allBlogs
    .filter(blog => blog.slug !== currentSlug)
    .slice(0, limit);
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(params.slug);

  return (
    <>
      <Navbar />

      {/* Blog Header */}
      <section className="section_hero pt-32 pb-8">
        <div className="container-global max-w-4xl" >
          <div className="flex flex-col gap-4">

          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </motion.div>

          {/* Blog Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-style-h1 mb-8"
          >
            {blog.title}
          </motion.h1>

          {/* Blog Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 mb-12 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="container-global max-w-4xl">
          <div> 

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={blog.src}
              alt={blog.alt}
              className="w-full h-[400px] object-cover"
              />
          </motion.div>
              </div>
        </div>
      </section>

      {/* Blog Subtitle */}
      <section className="mb-8">
        <div className="container-global max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="paragraph-style-body text-gray-600 text-lg leading-relaxed"
          >
            {blog.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="mb-20">
        <div className="container-global max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            {/* Sample blog content - In a real app, this would come from a CMS or markdown */}
            <div className="paragraph-style-body space-y-6 text-gray-800 leading-relaxed">
              <p>
                The fintech landscape is rapidly evolving, and staying ahead of the curve requires understanding
                the latest trends, technologies, and regulatory changes that shape the industry. In this comprehensive
                guide, we'll explore the key insights that every fintech professional should know.
              </p>

              <p>
                Modern payment infrastructure has transformed the way businesses and consumers interact with financial
                services. From embedded finance solutions to advanced card issuing platforms, the tools available
                today enable unprecedented flexibility and control over financial operations.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">Key Considerations</h2>

              <p>
                When implementing new fintech solutions, several factors must be carefully evaluated to ensure
                success and compliance. These include regulatory requirements, technical integration capabilities,
                scalability considerations, and user experience optimization.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">The Future of Fintech</h2>

              <p>
                Looking ahead, the fintech industry continues to innovate with emerging technologies like blockchain,
                artificial intelligence, and advanced analytics. These technologies are reshaping how financial
                services are delivered and consumed across global markets.
              </p>

              <p>
                As we move forward, the focus remains on creating seamless, secure, and scalable financial solutions
                that meet the evolving needs of businesses and consumers alike. The key to success lies in understanding
                these trends and adapting quickly to market changes.
              </p>
            </div>
          </motion.article>
        </div>
      </section>


      <Footer />
    </>
  );
}
