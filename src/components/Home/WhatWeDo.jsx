"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeText from "@/utils/homeText.json";

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(1);
  const highlights = homeText.homepage.whatwedo.highlights;

  const activeTabData = highlights.find((t) => t.id === activeTab);

  return (
    <section className="whatwedo text-white container-custom">
      <div className="mx-auto">
        <h2 className="heading-style-h2_fintech text-color-inverted">
          {homeText.homepage.whatwedo.title}
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTabData && (
                <motion.img
                  key={activeTabData.id}
                  src={activeTabData.img}
                  alt={activeTabData.alt}
                  className="w-full"
                  style={{ borderRadius: "2.5rem" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col space-y-4">
            {highlights.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 text-left transition-all ${
                  activeTab === tab.id ? "active-tabs-btn" : "tabs-btn"
                }`}
              >
                <p className="heading-style-h2_big">{tab.title}</p>
                {activeTab === tab.id && tab.description?.trim() && (
                  <p className="paragraph-style-body text-color-inverted">
                    {tab.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-8 mt-12">
          {highlights.map((tab) => (
            <motion.div
              key={tab.id}
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="paragraph-style-body text-color-inverted">
                {tab.description}
              </p>
              <h3 className="heading-style-h3 text-color-inverted">
                {tab.title}
              </h3>
              <motion.img
                src={tab.img}
                alt={tab.alt}
                className="rounded-xl shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
          <button className="contained-button w-full">Get Quote</button>
        </div>
      </div>
    </section>
  );
}
