"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import homeText from "@/utils/homeText.json";
import Link from "next/link";

export default function WhatsCookin({data}) {
  const splideRef = useRef(null);

  const goNext = () => {
    if (splideRef.current) splideRef.current.splide.go("+1");
  };

  const goPrev = () => {
    if (splideRef.current) splideRef.current.splide.go("-1");
  };

 

  return (
    <section className="relative w-full    overflow-hidden  max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-20">
        <h1 className="heading-style-h2_fintech max-w-7xl !text-center mx-auto  w-full">{data.title}</h1>
      </div>

  {data.slides.length < 5 ? (
  <div className="flex justify-center gap-16 flex-wrap pb-4">
    {data.slides.map((slide, index) => (
      <div key={index} className="relative feed-link w-full lg:w-[250px] "> {/* Adjust width as needed */}
        <div className="feed-img-wrapper">
          <img
            src={slide.img}
            alt={slide.alt || `Slide ${index + 1}`}
            className="feed-img"
          />
        </div>
        <div className="my-0">
          <p className="feed-tag mb-3 mt-3">{}</p>
          <h2 className="feed-title mb-3">{slide.title}</h2>
          {slide?.buttonLink?
          <Link href={slide.buttonLink} className="case-button">
            {slide.buttonText}
          </Link>:null}
        </div>
      </div>
    ))}
  </div>
) : (
  
  <Splide
    ref={splideRef}
    options={{
      autoplay: false,
      interval: 4000,
      gap: "2rem",
      arrows: false,
      pagination: true,
      perPage: 4.5,
      perMove: 1,
      focus: 0,
      padding: 0,
      pauseOnHover: false,
      drag: 'free', // Enable free drag
      wheel: true, // Enable mouse wheel
      wheelSleep: 500,     // debounce time (ms) between scroll actions
      releaseWheel: true,  // allows continuous native scrolling when end is reached
      breakpoints: {
        1280: { perPage: 4.5 },
        1024: { perPage: 3 },
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    }}
  >
    {data.slides.map((slide, index) => (
      <SplideSlide key={index} className="relative feed-link">
        <div className="feed-img-wrapper">
          <img
            src={slide.src}
            alt={slide.alt || `Slide ${index + 1}`}
            className="feed-img"
          />
        </div>
        <div className="pb-20">
          <p className="feed-tag mb-3 mt-3">{}</p>
          <h2 className="feed-title mb-3">{slide.title}</h2>
          {slide?.buttonLink&&
          <Link href={slide.buttonLink} className="case-button">
            {slide.buttonText}
          </Link>}
        </div>
      </SplideSlide>
    ))}
  </Splide>
)}

    </section>
  );
}
