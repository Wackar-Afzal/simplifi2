"use client";

import React from "react";
import Link from "next/link";
import SkeletonImage from "@/components/common/SkeletonImage";

export default function Cases({ data }) {
  return (
    <section className="relative w-full slider-section overflow-hidden p-5 py-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        {data.heading&&<h1 className="h2 !text-center mx-auto pb-10">{data.heading}</h1>}
        {/* Removed carousel arrows */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-12">
        {data.slides.map((slide, index) => (
          <div key={index} className="relative overflow-hidden h-full flex flex-col shadow-lg rounded-4xl">
            <div className="case-img-wrapper">
              <SkeletonImage
                src={slide.src}
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
              <Link href={slide.buttonLink || slide.path || '#'} className="case-button !mt-4 text-center no-underline">
                {slide.buttonText}
              </Link>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
