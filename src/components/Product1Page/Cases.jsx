"use client";

import React from "react";

export default function Cases({ data }) {
  return (
    <section className="relative w-full slider-section overflow-hidden p-5 py-20">
      <div className="flex items-center justify-between mb-10">
        <h1 className="h2">{data.heading}</h1>
        {/* Removed carousel arrows */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slides.map((slide, index) => (
          <div key={index} className="relative overflow-hidden h-full flex flex-col shadow-lg rounded-4xl">
            <div className="case-img-wrapper">
              <img
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                className="case-img"
              />
            </div>
            <div className="p-4 mb-10 flex flex-col flex-grow">
              <p className="case-name mb-5 flex items-center gap-2">
                <img src={data.image} alt="" />
                {slide.title}
              </p>
              <h2 className="body-medium is-case-desc ">{slide.subtitle}</h2>
              {/* <button className="case-button">{slide.buttonText}</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
