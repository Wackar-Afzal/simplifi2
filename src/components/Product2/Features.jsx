"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import homeText from "@/utils/homeText.json";

const Features = () => {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define final positions for each card
  const finalPositions = {
    card1: { x: -396, y: -232 }, // -6rem, -7rem in pixels (16px = 1rem)
    card2: { x: 386, y: -242 }, // 7rem, -5rem
    card3: { x: -440, y: 180 }, // -5rem, 5rem
    card4: { x: 404, y: 150 }, // 9rem, 7rem
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
      <div className=" relative h-[300vh] " ref={containerRef}>
        <div className=" sticky top-0 h-screen ">
          <section className="section_features h-full">
            <img
              src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif"
              loading="lazy"
              width="538"
              sizes="(max-width: 767px) 100vw, 538px"
              alt=""
              srcSet="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif 500w, https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif 1076w"
              className="features-bg1"
            />
            <img
              src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif 500w, https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif 2000w"
              alt=""
              className="features-bg2"
            />
            <div className="features-wrapper text-center">
              <h2
                id="w-node-a950199f-2e45-8c40-a20e-d831862318e8-8f49312d"
                className="features-heading text-center"
              >
                {homeText.homepage.features.title}
                <br />
                {homeText.homepage.features.subtitle}
              </h2>
              <button
                id="w-node-d881b892-6b3f-0f50-5bea-8135d7946171-8f49312d"
                href="#request"
                className="btn-primary w-button mt-5"
              >
                {homeText.homepage.features.cta}
              </button>
              <motion.div
                className="features-card absolute -translate-y-[90%] -translate-x-[-120%]"
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
                  {homeText.homepage.features.features[0].title}
                </div>
                <p className="features-desc">
                  {homeText.homepage.features.features[0].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card absolute -translate-y-[80%]  -translate-x-[-150%]"
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
                  {homeText.homepage.features.features[1].title}
                </div>
                <p className="features-desc">
                  {homeText.homepage.features.features[1].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card absolute -translate-y-[20%] -translate-x-[-125%]"
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
                  {homeText.homepage.features.features[2].title}
                </div>
                <p className="features-desc">
                  {homeText.homepage.features.features[2].description}
                </p>
              </motion.div>
              <motion.div
                className="features-card absolute -translate-y-[10%] -translate-x-[-160%]"
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
                  {homeText.homepage.features.features[3].title}
                </div>
                <p className="features-desc">
                  {homeText.homepage.features.features[3].description}
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    // </div>
  );
};

export default Features;
