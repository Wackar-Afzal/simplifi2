"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import homeText from "@/utils/homeText.json";
import Link from "next/link";

export default function Hero() {
  const imgRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInside, setIsInside] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const images = [
    "HoverImages/1.png",
    "HoverImages/2.png",
    "HoverImages/3.png",
    "HoverImages/4.png",
    "HoverImages/5.png",
    "HoverImages/6.png",
    "HoverImages/7.png",
  ];

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    const img = imgRef.current;
    if (!img) return;

    const handleMouseMove = (e) => {
      if (isInside) {
        img.style.left = `${e.clientX + window.scrollX}px`;
        img.style.top = `${e.clientY + window.scrollY}px`;

        const columnWidth = window.innerWidth / 7;
        const columnIndex = Math.floor(e.clientX / columnWidth);

        img.src = images[columnIndex] || images[0];
      } else {
        img.src = null;
      }
    };
    const handleScroll = (e) => {

      if (isInside) {
        img.style.left = `${window.scrollX}px`;
        img.style.top = `${window.scrollY}px`;
      } else {
        img.src = null;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen, images]);

  useEffect(() => {
    if (isSmallScreen) return;

    const img = imgRef.current;
    if (!img) return;

    // store the last mouse position
    let lastX = 0;
    let lastY = 176;

    const updateImagePosition = () => {
      if (isInside) {
        img.style.left = `${lastX + window.scrollX}px`;
        img.style.top = `${-126 + lastY + window.scrollY}px`;
      } else {
        img.src = "";
      }
    };

    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (isInside) {
        const columnWidth = window.innerWidth / 7;
        const columnIndex = Math.floor(lastX / columnWidth);

        img.src = images[columnIndex] || images[0];
      }

      updateImagePosition();
    };

    const handleScroll = () => {
      updateImagePosition();
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen, images, isInside]);
  // 🔥 loop images for small screens
  useEffect(() => {
    if (!isSmallScreen) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % smallImages.length);
    }, 3000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, [isSmallScreen]);
  const smallImages = [
    { src: images[1], className: "top-4 left-1/2 -translate-x-1/2" },
    { src: images[2], className: "right-4 top-1/2 -translate-y-1/2" },
    { src: images[3], className: "bottom-4 left-1/2 -translate-x-1/2" },
    { src: images[4], className: "left-4 top-1/2 -translate-y-1/2" },
  ];

  return (
    <div
      className="relative hero w-screen h-[100vh] md:h-[95vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* Large screen cursor-follow image */}
      {!isSmallScreen && isInside && (
        <motion.img
          ref={imgRef}
          src={images[0]}
          alt="Dynamic"
          className="absolute  top-0 left-0 w-[21.25rem]  pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-[4rem] bg-black border-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 200, // higher = faster, snappier
            damping: 20, // lower = more bouncy
            mass: 1, // adjust "weight"
          }}
        />
      )}

      {/* Small screen looping images */}
      {isSmallScreen &&
        smallImages.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={`img-${i}`}
            className={`absolute w-[15rem] rounded-xl ${img.className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: activeIndex === i ? 1 : 0,
              scale: activeIndex === i ? 1 : 0.9,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}

      {/* Center Text */}
      <motion.div
        className="max-w-full p-2  absolute text-center flex justify-between gap-1 flex-col items-center lg:max-w-3xl "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.3,
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
      >
        <motion.h2
          className="heading-style-h1_fintech  text-white mix-blend-difference md:max-w-[50%] lg:max-w-[80%]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Powering Cards for Every Business
          <br />
          <TypeAnimation
            sequence={[
              "Startup.",
              1000,
              "Enterprise.",
              1000,
              "Platform.",
              1000,
              "Fintech.",
              1000,
            ]}
            speed={50}
            className="block"
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p className="text-white  paragraph-style-body mt-4  mix-blend-difference cursor-none  ">
          {homeText.homepage.hero.description}{" "}
        </motion.p>
        <motion.p className="text-black mt-4 paragraph-style-body   mix-blend-difference cursor-none mb-6">
          <span className="text-color-secondary">
            {homeText.homepage.hero.features}
          </span>
        </motion.p>
        <Link href={homeText.homepage.hero.ctaLink} className="contained-button">
          {homeText.homepage.hero.cta}
        </Link>
      </motion.div>
    </div>
  );
}
