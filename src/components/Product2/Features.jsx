"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import homeText from "@/utils/homeText.json";
import Link from "next/link";

const Features = ({data}) => {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define final positions for each card
  const finalPositions = {
    card1: { x: -396, y: -232 }, // -6rem, -7rem in pixels (16px = 1rem)
    card2: { x: 256, y: -242 }, // 7rem, -5rem
    card3: { x: -382, y: 65 }, // -5rem, 5rem
    card4: { x: 204, y: 40 }, // 9rem, 7rem
  };

  // Create smooth transforms for each card based on scroll progress
  const card1X = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card1.x]
  );
  const card1Y = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card1.y]
  );

  const card2X = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card2.x]
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card2.y]
  );

  const card3X = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card3.x]
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card3.y]
  );

  const card4X = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card4.x]
  );
  const card4Y = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [0, finalPositions.card4.y]
  );

  return (
    // <div className="transform-none">
    <div
      className=" relative overflow-x-hidden lg:overflow-x-visible h-auto lg:h-[300vh]  "
      ref={containerRef}
    >
      <div className=" sticky top-0 h-auto lg:h-screen ">
        <section className="section_features h-full flex justify-center">
          <div className="max-w-[1400px]">
            <div className="features-wrapper text-center">
              <div className="flex flex-col gap-4">
                <h2 className="heading-style-h2_fintech text-center">
                  {data.title}
                </h2>
                <p className="paragraph-style-body">
                  {data.subtitle}
                </p>
              </div>

              <Link
                id="w-node-d881b892-6b3f-0f50-5bea-8135d7946171-8f49312d"
                href={homeText?.homepage?.features?.buttonLink}
                className="btn-primary w-button mt-5"
              >
                {data.cta}
              </Link>
              <motion.div
                className="features-card lg:absolute lg:-translate-y-[90%] lg:-translate-x-[-90%]"
                style={{
                  willChange: "transform",
                  // transform: "translate3d(100rem, 20rem, 100px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  x: card1X,
                  y: card1Y,
                }}
              >
                <div className="features-card-number">01</div>
                <div className="features-title">
                  {data.features[0].title}
                </div>
                <p className="features-desc">
                  {data.features[0].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card lg:absolute lg:-translate-y-[80%]  lg:-translate-x-[-150%]"
                style={{
                  willChange: "transform",
                  // transform:"translate3d(7rem, -5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  x: card2X,
                  y: card2Y,
                }}
              >
                <div className="features-card-number">02</div>
                <div className="features-title">
                  {data.features[1].title}
                </div>
                <p className="features-desc">
                  {data.features[1].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card lg:absolute lg:-translate-y-[20%] lg:-translate-x-[-99%]"
                style={{
                  willChange: "transform",
                  // transform:"translate3d(-5rem, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  x: card3X,
                  y: card3Y,
                }}
              >
                <div className="features-card-number">03</div>
                <div className="features-title">
                  {data.features[2].title}
                </div>
                <p className="features-desc">
                  {data.features[2].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card lg:absolute lg:-translate-y-[10%] lg:-translate-x-[-160%]"
                style={{
                  willChange: "transform",
                  // transform:"translate3d(9rem, 7rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  x: card4X,
                  y: card4Y,
                }}
              >
                <div className="features-card-number">04</div>
                <div className="features-title">
                  {data.features[3].title}
                </div>
                <p className="features-desc">
                  {data.features[3].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
    // </div>
  );
};

export default Features;
