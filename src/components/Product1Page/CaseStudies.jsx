"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

export default function CaseStudies({data}) {
    const splideRef = useRef(null);

    const goNext = () => {
        if (splideRef.current) splideRef.current.splide.go("+1");
    };

    const goPrev = () => {
        if (splideRef.current) splideRef.current.splide.go("-1");
    };

   

    return (
        <section className="relative w-full slider-section   overflow-hidden p-5 py-20">
            <div className="flex items-center justify-between mb-10">
                <h1 className="h2">{data.heading}</h1>
                <div className="flex gap-2">
                    <button onClick={goPrev} className="splide__arrow splide__arrow--prev">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8045 10.9502L8.13858 17.3135C8.07664 17.3726 8.00312 17.4195 7.9222 17.4515C7.84128 17.4835 7.75455 17.5 7.66696 17.5C7.57938 17.5 7.49265 17.4835 7.41173 17.4515C7.33081 17.4195 7.25728 17.3726 7.19535 17.3135C7.13342 17.2544 7.08429 17.1842 7.05077 17.107C7.01725 17.0297 7 16.9469 7 16.8633C7 16.7797 7.01725 16.6969 7.05077 16.6197C7.08429 16.5424 7.13342 16.4722 7.19535 16.4131L13.3905 10.5L7.19535 4.58689C7.07027 4.46749 7 4.30554 7 4.13669C7 3.96783 7.07027 3.80588 7.19535 3.68648C7.32043 3.56708 7.49007 3.5 7.66696 3.5C7.84385 3.5 8.0135 3.56708 8.13858 3.68648L14.8045 10.0498C14.8665 10.1089 14.9156 10.1791 14.9492 10.2563C14.9827 10.3336 15 10.4164 15 10.5C15 10.5836 14.9827 10.6664 14.9492 10.7437C14.9156 10.8209 14.8665 10.8911 14.8045 10.9502Z" fill="currentColor"></path>
                    </svg>
                    </button>
                    <button onClick={goNext} className="splide__arrow splide__arrow--next">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8045 10.9502L8.13858 17.3135C8.07664 17.3726 8.00312 17.4195 7.9222 17.4515C7.84128 17.4835 7.75455 17.5 7.66696 17.5C7.57938 17.5 7.49265 17.4835 7.41173 17.4515C7.33081 17.4195 7.25728 17.3726 7.19535 17.3135C7.13342 17.2544 7.08429 17.1842 7.05077 17.107C7.01725 17.0297 7 16.9469 7 16.8633C7 16.7797 7.01725 16.6969 7.05077 16.6197C7.08429 16.5424 7.13342 16.4722 7.19535 16.4131L13.3905 10.5L7.19535 4.58689C7.07027 4.46749 7 4.30554 7 4.13669C7 3.96783 7.07027 3.80588 7.19535 3.68648C7.32043 3.56708 7.49007 3.5 7.66696 3.5C7.84385 3.5 8.0135 3.56708 8.13858 3.68648L14.8045 10.0498C14.8665 10.1089 14.9156 10.1791 14.9492 10.2563C14.9827 10.3336 15 10.4164 15 10.5C15 10.5836 14.9827 10.6664 14.9492 10.7437C14.9156 10.8209 14.8665 10.8911 14.8045 10.9502Z" fill="currentColor"></path>
                    </svg>
                    </button>
                </div>
            </div>

            <Splide
                ref={splideRef}
                options={{
                    type: "loop",
                    autoplay: false,
                    interval: 4000,
                    gap: "1rem",
                    arrows: false,
                    pagination: true,
                    perPage: 3, // 👈 show 3 cards
                    perMove: 1, // 👈 slide one by one
                    pauseOnHover: false,
                      breakpoints: {
                        1280: { perPage: 2 }, // large tablets
                        1024: { perPage: 1 }, // tablets
                        768: { perPage: 1 },  // small tablets / large phones
                        480: { perPage: 1 },  // mobile
                    },
                }}
                aria-label="Hero Carousel"
              
            >
                {data.slides.map((slide, index) => (
                    <SplideSlide key={index} className="relative">
                        <div className="  overflow-hidden h-full flex flex-col">
                            <div className="case-img-wrapper">


                                <img
                                    src={slide.src}
                                    alt={slide.alt || `Slide ${index + 1}`}
                                    className="case-img"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <p className="case-name  mb-5">
                                    <img src={data.image}
                                     alt="" />
                                    {slide.title}
                                    </p>
                                <h2 className="body-medium is-case-desc mb-5">{slide.subtitle}</h2>
                                <button className="case-button">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
}
