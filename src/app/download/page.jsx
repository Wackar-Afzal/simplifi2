"use client";

import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { motion } from "framer-motion";

export default function DownloadPage() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="section_hero px-8 ">
        <div className="container-global is-small">
          <div className="hero-wrapper">
            {/* Left Content */}
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-style-h1">Take Control on the Go</h1>
              <p className="paragraph-style-body hero-desc">
                Track loads, approve requests, and manage your card securely with the SimpliFi Go App.
              </p>

              {/* App Store Buttons */}
              <div className="flex gap-4 mt-8 flex-wrap justify-start items-center">
                <a
                  href="https://apps.apple.com/pk/app/simplifi-go/id6739935320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1711929600"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.simplifi.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right - Phone Mockups */}
            <motion.div
              className="hero-tabs-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative flex items-center justify-center gap-8 rounded-3xl overflow-hidden">
              <img src="/download/footer_phone_2.png" alt="Download" className="w-full h-full object-cover" />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

   
      {/* CTA Section */}
      {/* <section className="py-10 md:py-20 px-8">
        <div className="container-global">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-style-h2_fintech mb-6">
                Ready to Get Started?
              </h2>
              <p className="paragraph-style-body text-gray-600 mb-8">
                Download the SimpliFi Go App today and take control of your finances wherever you are.
              </p>

              <div className="flex gap-4 justify-center items-center flex-wrap">
                <a
                  href="https://apps.apple.com/pk/app/simplifi-go/id6739935320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1711929600"
                    alt="Download on the App Store"
                    className="h-11"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.simplifi.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-16"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

    </div>
  );
}
