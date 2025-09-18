"use client";

import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { pressReleases } from "@/utils/press/press.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";

// Helper function to get all press releases from all sections
function getAllPressReleases() {
  const allPressReleases = [];
  const pressSections = ['pressReleases', 'pressReleases2', 'pressReleases3', 'pressReleases4', 'pressReleases5', 'pressReleases6'];
 
  pressSections.forEach(section => {
    if (pressReleases.pressReleases[section] && pressReleases.pressReleases[section].slides) {
      allPressReleases.push(...pressReleases.pressReleases[section].slides);
    }
  });
 
  return allPressReleases;
}

// Helper function to find press release by slug
function getPressReleaseBySlug(slug) {
  const allPressReleases = getAllPressReleases();
  return allPressReleases.find(press => press.slug === slug);
}

// Helper function to get related press releases (excluding current one)
function getRelatedPressReleases(currentSlug, limit = 3) {
  const allPressReleases = getAllPressReleases();
  return allPressReleases
    .filter(press => press.slug !== currentSlug)
    .slice(0, limit);
}

export default function PressReleaseDetailPage({ params }) {
  const pressRelease = getPressReleaseBySlug(params.slug);
 
  if (!pressRelease) {
    notFound();
  }

  const relatedPressReleases = getRelatedPressReleases(params.slug);

  return (
    <>
      <Navbar />
 
      {/* Press Release Header */}
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
              href="/press"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Press Releases
            </Link>
          </motion.div>

          {/* Press Release Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-style-h1 mb-8"
          >
            {pressRelease.title}
          </motion.h1>

          {/* Press Release Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 mb-12 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{pressRelease.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>3 min read</span>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              Share Release
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="container-global max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={pressRelease.src}
              alt={pressRelease.alt}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Press Release Subtitle */}
      <section className="mb-8">
        <div className="container-global max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="paragraph-style-body text-gray-600 text-lg leading-relaxed"
          >
            {pressRelease.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Press Release Content */}
      <section className="mb-20">
        <div className="container-global max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            {/* Sample press release content - In a real app, this would come from a CMS or markdown */}
            <div className="paragraph-style-body space-y-6 text-gray-800 leading-relaxed">
              <p>
                SimpliFi continues to strengthen its position as the leading Cards-as-a-Service platform 
                in the MENA and Pakistan region through strategic partnerships and innovative solutions. 
                This latest development underscores our commitment to transforming the digital payments 
                landscape across emerging markets.
              </p>
 
              <p>
                Our comprehensive platform enables businesses, fintechs, and financial institutions to 
                launch card programs quickly and efficiently, removing traditional barriers to entry 
                while maintaining the highest standards of security and compliance.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">Key Highlights</h2>
 
              <p>
                This partnership represents a significant milestone in our mission to democratize access 
                to card issuance technology. By combining our robust infrastructure with our partner's 
                expertise, we're creating new opportunities for businesses to serve their customers 
                with innovative payment solutions.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">Market Impact</h2>
 
              <p>
                The MENA and Pakistan regions represent some of the fastest-growing fintech markets 
                globally, with increasing demand for digital payment solutions. Our continued expansion 
                and partnerships position us to capture this growth while delivering exceptional value 
                to our customers and partners.
              </p>

              <p>
                As we look ahead, SimpliFi remains committed to innovation, compliance, and customer 
                success. We continue to invest in our platform capabilities and expand our partner 
                ecosystem to serve the evolving needs of the digital economy.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="heading-style-h4 mb-4">About SimpliFi</h3>
                <p className="paragraph-style-body text-gray-700">
                  SimpliFi is the leading Cards-as-a-Service platform for MENA and Pakistan, enabling 
                  businesses to launch card programs in days, not months. Our comprehensive platform 
                  provides everything needed to issue, manage, and scale payment card programs while 
                  maintaining full compliance with regional and international standards.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </>
  );
}
