"use client";
import React, { useState, useEffect } from "react";
import { blogService } from "@/services/contentService";
import { blogs } from "@/utils/blogs/blogs.js";
import Link from "next/link";
import HeroProduct from "@/components/Product1Page/HeroProduct";
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";

export default function BlogsPage() {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setLoading(true);
        // Use the new Strapi function
        const data = await blogService.getAllBlogsNew();
        
        // Debug: Console log the Strapi data
        console.log('=== BLOGS STRAPI DATA ===');
        console.log('blogData:', JSON.stringify(data, null, 2));
        console.log('blogData.blogs:', data.blogs);
        console.log('blogData.blogs.posts:', data.blogs?.posts);
        console.log('blogData.blogs.posts.slides:', data.blogs?.posts?.slides);
        console.log('========================');
        
        // Fallback to local data if Strapi data is not available
        const finalData = data?.blogs || blogs.blogs;
        setBlogData({ blogs: finalData });
        
      } catch (error) {
        console.error('Error loading blogs:', error);
        // Use fallback data if Strapi fails
        setBlogData({ blogs: blogs.blogs });
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to load blogs</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  // Ensure we have the correct data structure for Cases component
  const postsData = blogData.blogs?.posts || { heading: "", slides: [] };
  
  return (
    <>
      <div className="mt-5 md:mt-10">
        <HeroProduct data={blogData.blogs?.hero} />
      </div>
      <div className="">
        <Cases data={postsData} />
      </div>
      
      
      <div className="my-20 md:my-30">
        <PageFooter />
      </div>
    </>
  );
}
