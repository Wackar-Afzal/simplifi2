"use client";

// Navbar and Footer imports removed
import { pressReleases } from "@/utils/press/press-combined.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Cases from "@/components/Product1Page/Cases";
import PageFooter from "@/components/common/PageFooter";
import { use } from "react";

function getPressReleaseBySlug(slug) {
  const allPressReleases = pressReleases.pressReleases.pressReleases.slides;
  return allPressReleases.find(pr => pr.slug === slug);
}

function getRelatedPressReleases(currentSlug) {
  // Get all press releases except the current one
  const allOtherPressReleases = pressReleases.pressReleases.pressReleases.slides.filter(pr => pr.slug !== currentSlug);

  // Randomly select 3 press releases
  return allOtherPressReleases
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
}

export default function PressReleaseDetailPage({ params }) {
  const resolvedParams = use(params);
  const pressRelease = getPressReleaseBySlug(resolvedParams.slug);

  if (!pressRelease) {
    notFound();
  }

  const relatedPressReleases = getRelatedPressReleases(resolvedParams.slug);

  return (
    <>

      {/* Press Release Header */}
      <section className=" my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/press-releases"
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
              Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
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
      <section className="my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
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
      <section className="my-20 md:my-30 max-w-7xl mx-auto">
        <div className="">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="paragraph-style-body space-y-6 text-gray-800 leading-relaxed">
              <p>
                This press release represents another significant milestone in SimpliFi's journey to transform
                the financial services landscape across MENA and Pakistan. Our continued innovation and strategic
                partnerships enable businesses to access cutting-edge payment solutions with unprecedented ease and flexibility.
              </p>

              <p>
                Through our comprehensive Cards-as-a-Service platform, we're democratizing access to advanced
                payment infrastructure, allowing businesses of all sizes to launch sophisticated card programs
                without the traditional barriers and complexities.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">Key Highlights</h2>

              <p>
                This announcement underscores our commitment to driving financial inclusion and innovation
                across the region. By partnering with leading financial institutions and technology providers,
                we continue to expand our capabilities and reach.
              </p>

              <p>
                Our platform's flexibility and scalability ensure that businesses can adapt quickly to changing
                market demands while maintaining the highest standards of security and compliance.
              </p>

              <h2 className="heading-style-h3 mt-12 mb-6">Looking Forward</h2>

              <p>
                As we continue to grow and evolve, SimpliFi remains focused on our mission to simplify and
                democratize financial services. This development is just one of many exciting initiatives
                we have planned for the coming months.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Press Releases */}
      {/* {relatedPressReleases.length > 0 && (
        <section className="section_services bg-gray-50 py-20">
          <div className="container-global">
            <Cases
              data={{
                heading: "More Press Releases",
                descrip: "Stay informed with our latest company news",
                slides: relatedPressReleases.map(pr => ({
                  ...pr,
                  buttonLink: `/press-releases/${pr.slug}`,
                  buttonText: "Read More"
                }))
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-center mt-12"
            >
              <Link href="/press-releases" className="contained-button">
                View All Press Releases
              </Link>
            </motion.div>
          </div>
        </section>
      )} */}
      <div className="my-20 md:my-30 max-w-7xl mx-auto">
        <PageFooter />
      </div>
      {/* Footer moved to root layout */}
    </>
  );
}
