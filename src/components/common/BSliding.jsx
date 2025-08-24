"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BSlidingDiv({
  children,
  className = "",
  speed = 0.7,
  delay = 0,
  threshold = 0.2,
  distanceX = 50, // Horizontal distance
  distanceY = 50, // Vertical distance
  direction = "up", // Now supports diagonal movement
  ease = "easeOut",
  repeat = false,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (repeat) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, repeat, threshold]);

  // Movement combinations for X and Y
  const directionVariants = {
    up: { y: distanceY, opacity: 0 },
    down: { y: -distanceY, opacity: 0 },
    left: { x: distanceX, opacity: 0 },
    right: { x: -distanceX, opacity: 0 },
    "x-y": { x: distanceX, y: distanceY, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} `}
      initial={directionVariants[direction]}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{
        duration: speed,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}
