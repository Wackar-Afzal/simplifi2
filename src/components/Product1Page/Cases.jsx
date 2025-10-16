"use client";

import React from "react";
import Link from "next/link";
import SkeletonImage from "@/components/common/SkeletonImage";

// Function to check if URL is external
const isExternalUrl = (url) => {
  if (!url || url === '#') return false;
  
  // Check if it starts with http:// or https://
  if (url.startsWith('http://') || url.startsWith('https://')) {
    // Check if it's not our own domain
    const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';
    const urlObj = new URL(url);
    return urlObj.hostname !== currentDomain;
  }
  
  return false;
};

export default function Cases({ data }) {
  // Safety check for undefined data
  if (!data || !data.slides || !Array.isArray(data.slides)) {
    console.error('Cases component received invalid data:', data);
    return (
      <section className="relative w-full overflow-hidden px-5 pb-4 max-w-7xl mx-auto">
        <div className="text-center py-10">
          <p className="text-gray-500">No data available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full  overflow-hidden px-5 pb-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        {data.heading&&<h1 className="h2 !text-center mx-auto pb-10">{data.heading}</h1>}
        {/* Removed carousel arrows */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-12">
        {data.slides.map((slide, index) => (
          <div key={index} className="relative overflow-hidden h-full flex flex-col shadow-lg rounded-4xl">
            <div className="case-img-wrapper">
              <SkeletonImage
                src={slide.img}
                alt={slide.alt || `Slide ${index + 1}`}
                className="case-img"
                backgroundColor="bg-gray-200"
              />
            </div>
            <div className="p-4 my-4 flex flex-col flex-grow justify-between ">
              <p className="features-title   mb-5 flex items-center gap-2 !line-clamp-2">
                {/* <img src={data.image} alt="" /> */}
                {slide.title}
              </p>
              <h2 className="body-medium is-case-desc mb-2 line-clamp-3">{slide.subtitle}</h2>
              {slide?.buttonLink&&
              (() => {
                const linkUrl = slide.buttonLink || slide.path || '#';
                const isExternal = isExternalUrl(linkUrl);
                
                if (isExternal) {
                  return (
                    <a 
                      href={linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="case-button !mt-4 text-center no-underline"
                    >
                      {slide.buttonText}
                    </a>
                  );
                } else {
                  return (
                    <Link href={linkUrl} className="case-button !mt-4 text-center no-underline">
                      {slide.buttonText}
                    </Link>
                  );
                }
              })()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
