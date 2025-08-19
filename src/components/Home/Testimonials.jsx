"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
  "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66167e7433cbf7d8d8f5985e_testimonials-01.webp",
 
 
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full testimonials py-[100px] mx-auto px-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white text-center mb-12 sm:mb-16 md:mb-20">
  Our clients say
</h2>


      <div className="relative w-full  mx-auto">
        {/* Custom Nav Buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronRight className="w-6 h-6" />
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
              className="!w-[550px] overflow-hidden transition-all duration-500"
            >
              {({ isActive }) => (
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className={`rounded-2xl shadow-lg w-full h-full object-cover transition-all duration-500 ${
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
