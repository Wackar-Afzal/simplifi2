"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero({data}) {
  const typeSequence = data.repeatingWords.flatMap(word => [`${word}.`, 1000]);
  return (
    <div className="relative hero w-screen h-[100vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Left Side Image - Slides in from left, then wavy motion */}
      <motion.img
        src={data.left}
        alt="Left decoration"
        className="hidden md:block absolute left-0 top-1/2 h-[50%] md:h-[55vh] lg:h-[70vh] w-auto object-contain pointer-events-none z-10"
        initial={{ x: -500, opacity: 0, y: "-50%" }}
        animate={{
          x: 0,
          opacity: 1,
          y: ["-50%", "-48%", "-52%", "-50%"],
        }}
        transition={{
          x: { delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] },
          opacity: { delay: 1.2, duration: 1 },
          y: {
            delay: 2.2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Right Side Image - Slides in from right, then wavy motion */}
      <motion.img
        src={data.right}
        alt="Right decoration"
        className="hidden md:block absolute right-0 top-1/2 h-[50%] md:h-[55vh] lg:h-[70vh] w-auto object-contain pointer-events-none z-10"
        initial={{ x: 500, opacity: 0, y: "-50%" }}
        animate={{
          x: 0,
          opacity: 1,
          y: ["-50%", "-52%", "-48%", "-50%"],
        }}
        transition={{
          x: { delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] },
          opacity: { delay: 1.2, duration: 1 },
          y: {
            delay: 2.2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Center Text - Animates from bottom to center */}
      <motion.div
        className="max-w-full p-2 px-4 relative text-center flex justify-center gap-4 flex-col items-center lg:max-w-4xl z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.h2
          className="heading-style-h1_fintech text-black  md:max-w-[70%] lg:max-w-[70%]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {data.title}
          <br />
          <TypeAnimation
            sequence={typeSequence}
            speed={50}
            className="block"
            repeat={Infinity}
          />
        </motion.h2>
        
        <motion.p
          className="text-black paragraph-style-body mt-2 !max-w-[30rem] mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {data.subtitle}
        </motion.p>
        
        <motion.p
          className="text-black paragraph-style-body"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-color-secondary">
            {data.description}
          </span>
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6"
        >
          <Link href={data.ctaLink} className="contained-button">
            {data.cta}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
