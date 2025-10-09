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
    <section className="relative w-full slider-section   overflow-hidden p-5 py-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-20">
        <h1 className="heading-style-h2_fintech max-w-6xl !text-center mx-auto  w-full">{data.title} <br/> {data.title1}</h1>
        {/* <div className=" text-end   gap-2 flex justify-end  ">
          <button
            onClick={goPrev}
            className="splide__arrow splide__arrow--prev"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8045 10.9502L8.13858 17.3135C8.07664 17.3726 8.00312 17.4195 7.9222 17.4515C7.84128 17.4835 7.75455 17.5 7.66696 17.5C7.57938 17.5 7.49265 17.4835 7.41173 17.4515C7.33081 17.4195 7.25728 17.3726 7.19535 17.3135C7.13342 17.2544 7.08429 17.1842 7.05077 17.107C7.01725 17.0297 7 16.9469 7 16.8633C7 16.7797 7.01725 16.6969 7.05077 16.6197C7.08429 16.5424 7.13342 16.4722 7.19535 16.4131L13.3905 10.5L7.19535 4.58689C7.07027 4.46749 7 4.30554 7 4.13669C7 3.96783 7.07027 3.80588 7.19535 3.68648C7.32043 3.56708 7.49007 3.5 7.66696 3.5C7.84385 3.5 8.0135 3.56708 8.13858 3.68648L14.8045 10.0498C14.8665 10.1089 14.9156 10.1791 14.9492 10.2563C14.9827 10.3336 15 10.4164 15 10.5C15 10.5836 14.9827 10.6664 14.9492 10.7437C14.9156 10.8209 14.8665 10.8911 14.8045 10.9502Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button
            onClick={goNext}
            className="splide__arrow splide__arrow--next"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8045 10.9502L8.13858 17.3135C8.07664 17.3726 8.00312 17.4195 7.9222 17.4515C7.84128 17.4835 7.75455 17.5 7.66696 17.5C7.57938 17.5 7.49265 17.4835 7.41173 17.4515C7.33081 17.4195 7.25728 17.3726 7.19535 17.3135C7.13342 17.2544 7.08429 17.1842 7.05077 17.107C7.01725 17.0297 7 16.9469 7 16.8633C7 16.7797 7.01725 16.6969 7.05077 16.6197C7.08429 16.5424 7.13342 16.4722 7.19535 16.4131L13.3905 10.5L7.19535 4.58689C7.07027 4.46749 7 4.30554 7 4.13669C7 3.96783 7.07027 3.80588 7.19535 3.68648C7.32043 3.56708 7.49007 3.5 7.66696 3.5C7.84385 3.5 8.0135 3.56708 8.13858 3.68648L14.8045 10.0498C14.8665 10.1089 14.9156 10.1791 14.9492 10.2563C14.9827 10.3336 15 10.4164 15 10.5C15 10.5836 14.9827 10.6664 14.9492 10.7437C14.9156 10.8209 14.8665 10.8911 14.8045 10.9502Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>

  {data.slides.length < 5 ? (
  <div className="flex justify-center gap-8 flex-wrap">
    {data.slides.map((slide, index) => (
      <div key={index} className="relative feed-link w-[250px]"> {/* Adjust width as needed */}
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
