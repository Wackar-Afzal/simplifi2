"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatWeDo() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Prototyping",
            subtitle:
                "From initial concepts to fully functional prototypes, we help transform ideas into impactful interfaces that engage users and drive growth.",
            img: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493238_image-min.png",
            alt: "Prototyping",
        },
        {
            id: 2,
            title: "Product UX",
            subtitle:
                "Leveraging 7+ years of AI experience, we excel at designing user-friendly interfaces for both new AI products and AI-enhanced applications.",
            img: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493207_image.avif",
            alt: "Product UX",
        },
        {
            id: 3,
            title: "Websites and landing pages",
            subtitle:
                "We transform complex requirements into simple, engaging experiences that users love—from full websites to targeted landing pages.",
            img: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493206_image-1.avif",
            alt: "Websites",
        },
        {
            id: 4,
            title: "Mobile app UX/UI",
            subtitle:
                "With 30+ apps in our portfolio, we know what drives results. Expect rapid improvements across your key performance metrics.",
            img: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493203_image-2.avif",
            alt: "Mobile App",
        },
        {
            id: 5,
            title: "Branding for AI",
            subtitle:
                "We create integrated brand systems that unite your digital product experience with every marketing touchpoint for maximum impact.",
            img: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493204_image-3.avif",
            alt: "Branding",
        },
    ];

    return (
        <section className="section_services text-white">
            <div className="services-wrapper mx-auto">
                <h2 className="section-heading is-services mb-10">
                    Embed: Off-the-shelf cards, ready to go
                </h2>

                {/* Desktop Tabs */}
                <div className="hidden md:grid grid-cols-2 gap-16">
                    {/* Fixed image container */}
                    <div className="flex items-center justify-start">
                        <div className="w-full max-w-[785px] aspect-[16/10] overflow-hidden rounded-[2.5rem]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={tabs.find((t) => t.id === activeTab).img}
                                    src={tabs.find((t) => t.id === activeTab).img}
                                    alt={tabs.find((t) => t.id === activeTab).alt}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="services-menu flex flex-col h-full">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === tab.id;

                            // Positioning rules based on active tab
                            let positionClass = "";
                            if (isActive) {
                                if (index === 0) {
                                    positionClass = "mb-auto"; // first tab active → bottom
                                } else if (index === tabs.length - 1) {
                                    positionClass = "mt-auto"; // last tab active → top
                                } else {
                                    positionClass = "mt-auto mb-auto"; // center tab active → center
                                }
                            }

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`services-menu-link ${isActive ? "w--current " + positionClass : ""
                                        }`}
                                >
                                    <div>
                                        <div className="services-title">{tab.title}</div>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    className="services-desc mt-2"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {tab.subtitle}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile version */}
                <div className="md:hidden space-y-8 mt-12">
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.id}
                            className="space-y-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="services-title">{tab.title}</h3>
                            <p className="services-desc">{tab.subtitle}</p>
                            <motion.img
                                src={tab.img}
                                alt={tab.alt}
                                className="w-full rounded-xl shadow-lg object-cover aspect-[16/10]"
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
