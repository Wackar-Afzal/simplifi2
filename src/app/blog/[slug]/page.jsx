"use client";
import React, { useState, useEffect } from "react";
import { blogService } from "@/services/contentService";
import { blogs } from "@/utils/blogs/blogs.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Page from "@/app/Embed-Ready-To-Use-Card/page";
import PageFooter from "@/components/common/PageFooter";
import { use } from "react";

export default function BlogDetailPage({ params }) {
  const resolvedParams = use(params);
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShare = async () => {
    const url = window.location.href;
    const title = blog?.title || 'SimpliFi Blog';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
      }
    }
  };

  useEffect(() => {
    async function loadBlogData() {
      try {
        setLoading(true);
        
        // Use the new Strapi function that returns both blog post and related posts
        const blogData = await blogService.getBlogBySlugNew(slug);
        
        if (!blogData) {
          notFound();
        }

        // Extract the main blog post and related posts
        const { relatedPosts, ...mainBlog } = blogData;
        
        setBlog(mainBlog);
        setRelatedBlogs(relatedPosts || []);
        
      } catch (error) {
        console.error('Error loading blog:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    loadBlogData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <>

      {/* Blog Header */}
      <section className="px-2 mt-5 md:mt-10 max-w-7xl mx-auto">
        <div className="">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
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
            className="heading-style-h1 mb-4"
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
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-2 my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={blog.image || blog.img || '/blogs/default-blog.jpg'}
              alt={blog.alt || blog.title || "Blog image"}
              className="w-full  object-cover"
              onError={(e) => {
                console.error('Image failed to load:', blog.image || blog.img);
                e.target.src = '/blogs/default-blog.jpg';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Subtitle */}
      {/* <section className="px-2 my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="paragraph-style-body text-gray-600 text-lg leading-relaxed"
          >
            {blog.subtitle}
          </motion.p>
        </div>
      </section> */}

      {/* Blog Content */}
      <section className="px-2 my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            {blog.content ? (
              <div 
                className="paragraph-style-body space-y-6 text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
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

                <h2 className="heading-style-h3 mt-12 mb-6">Understanding the Fundamentals</h2>

                <p>
                  When implementing new fintech solutions, several factors must be carefully evaluated to ensure
                  success and compliance. These include regulatory requirements, technical integration capabilities,
                  scalability considerations, and user experience optimization.
                </p>

                <p>
                  The key to successful fintech implementation lies in understanding both the technical and business
                  aspects of financial services. This includes knowledge of payment processing, regulatory compliance,
                  security protocols, and customer experience design.
                </p>

                <h2 className="heading-style-h3 mt-12 mb-6">Best Practices and Implementation</h2>

                <p>
                  Industry best practices emphasize the importance of security, scalability, and user experience.
                  Modern fintech solutions must be designed with these principles in mind from the ground up,
                  rather than as afterthoughts.
                </p>

                <p>
                  Successful implementation requires careful planning, thorough testing, and ongoing monitoring.
                  Organizations must also ensure they have the right team and processes in place to support
                  their fintech initiatives.
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
            )}
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="px-2 section_services bg-gray-50 py-20">
          <div className="my-20 md:my-30 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-style-h2_fintech mb-4 !text-white">Related Articles</h2>
              <p className="paragraph-style-body text-gray-600">
                Discover more insights and trends in fintech
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Link href={`/blog/${relatedBlog.slug}`} className="group block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedBlog.image || relatedBlog.img || '/blogs/default-blog.jpg'}
                          alt={relatedBlog.alt || relatedBlog.title || "Related blog image"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = '/blogs/default-blog.jpg';
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{relatedBlog.date}</div>
                        <h3 className="heading-style-h4 !text-black mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="paragraph-style-body text-gray-600 text-sm line-clamp-3">
                          {relatedBlog.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-center mt-12"
            >
              <Link href="/blogs" className="contained-button">
                View All Articles
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <div className="my-20 md:my-30 max-w-7xl mx-auto">
        <PageFooter />
      </div>
    </>
  );
}
