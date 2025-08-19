"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

// Custom SVG Arrow Components
const LeftArrow = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 14.1608V17.8392H7.54203L16.4898 26.6592L14.1263 29L1 16L14.1263 3L16.4898 5.29903L7.54203 14.1608H31Z" fill="currentColor"></path>
  </svg>
);

const RightArrow = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 14.1608V17.8392H24.458L15.5102 26.6592L17.8737 29L31 16L17.8737 3L15.5102 5.29903L24.458 14.1608H1Z" fill="currentColor"></path>
  </svg>
);

const slides = [
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full testimonials py-[100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="heading-style-h2_fintech text-color-inverted text-center mb-8">
        Our clients say
      </h2>

      <div className="relative w-full mx-auto">
        {/* Left Button */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 z-10 p-2 sm:p-4 text-white hover:text-gray-300 transition left-[-15px] sm:left-2"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            <LeftArrow />
          </div>
        </button>

        {/* Right Button */}
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 z-10 p-2 sm:p-4 text-white hover:text-gray-300 transition right-[-10px] sm:right-2"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            <RightArrow />
          </div>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="flex items-center"
        >
          {slides.map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] sm:!w-[400px] md:!w-[500px] lg:!w-[550px] overflow-hidden transition-all duration-500"
            >
              {({ isActive }) => (
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className={`border-radius-primary shadow-lg w-full h-full object-cover transition-all duration-500 ${
                    isActive ? "opacity-100 scale-100" : "opacity-50 scale-90"
                  }`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
