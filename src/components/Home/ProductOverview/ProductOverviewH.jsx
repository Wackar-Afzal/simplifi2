"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductOverviewH = () => {
  return (
    <div className=" products text-white pt-20 pb-4 px-10">
      <div className="w-full   mx-auto">
        <motion.div
          // className="grid md:grid-cols-2 gap-16 mb-20 w-full justify-center items-center"
          className="grid md:grid-cols-2 gap-16 mb-4 w-full justify-center items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants} className="max-w-xl">
              <h1 className="heading-style-h2_fintech">
                Add cards to your stack instantly
              </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="max-w-xl">
              <p className="">
                Our easy-to-implement APIs let you issue cards and connect them to your systems with minimal effort.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-md flex flex-col gap-6"
          >
            <h1 className="heading-style-h2_fintech">What you can do</h1>
            <ul className="flex flex-col list-disc list-outside gap-2">
                <li className="paragraph-style-body text-color-inverted">Embed card issuance into your existing web or mobile portals</li>
                <li className="paragraph-style-body text-color-inverted">Custom-build your own experience with direct integration into your ERP or expense management software</li>
                <li className="paragraph-style-body text-color-inverted">Offer both virtual and physical cards to your customers as part of your own platform</li>
            </ul>
            <p className="paragraph-style-body text-color-inverted">
              
            </p>
            {/* <p className="paragraph-style-body text-color-inverted">
              Humbleteam is specifically geared for this, aiming to boost your product from within, not just on the
              surface.
            </p> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductOverviewH;
