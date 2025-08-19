"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatWeDo() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Improve product KPIs",
            subtitle: "Growth and optimisation for digital products",
            img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa8d9be8ae0145d1ea4bf_what-we-do-1.webp",
            alt: "Competitor analysis in Figma"
        },
        {
            id: 2,
            title: "Identify new revenue flows",
            subtitle: " ",
            img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa8db56e8668bde294398_what-we-do-2.webp",
            alt: "UX audit in Figma"
        },
        {
            id: 3,
            title: "Identify market opportunities",
            subtitle: "Invent and design new digital products",
            img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa8daac62cf3776b528e8_what-we-do-3.webp",
            alt: "Presentation process with 3 people"
        },
        {
            id: 4,
            title: "Find product-market fit",
            subtitle: " ",
            img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa8da74419a3c59452a47_what-we-do-4.webp",
            alt: "Colorful bank application concept"
        }
    ];

    return (
        <section className="whatwedo text-white py-16 px-6">
            <div className="  mx-auto">

                <h2 className="heading-style-h2_fintech text-color-inverted">
                    What we do
                </h2>

                <div className="hidden md:grid grid-cols-2 gap-8 mt-12">

                    <div className="flex items-center justify-center">

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={tabs.find(t => t.id === activeTab).img}
                                src={tabs.find(t => t.id === activeTab).img}
                                alt={tabs.find(t => t.id === activeTab).alt}
                                className="rounded-4xl shadow-lg w-full  "
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="flex flex-col space-y-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`p-4   text-left transition-all ${activeTab === tab.id
                                    ? "active-tabs-btn"
                                    : "tabs-btn"
                                    }`}
                            >
                                {tab.subtitle && (
                                    <p className="paragraph-style-body text-color-inverted">
                                        {tab.subtitle}
                                    </p>
                                )}
                                <p className="heading-style-h2_big">{tab.title}</p>
                            </button>
                        ))}

                    </div>



                </div>


                <div className="md:hidden space-y-8 mt-12">
                    {tabs.map(tab => (
                        <motion.div
                            key={tab.id}
                            className="bg-gray-900 rounded-2xl p-6 space-y-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold">{tab.title}</h3>
                            <p className="text-gray-300">{tab.subtitle}</p>
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
                </div>



            </div>
        </section>
    );
}
