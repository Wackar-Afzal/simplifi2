"use client"

import BSlidingDiv from "@/components/common/BSliding"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// JSON-style config
const gridItems = [
  {
    col: "col-span-1 row-span-1 md:col-start-1 md:row-start-1",
    delay: 0,
    content: (
      <>
        <img
          className="border-radius-primary w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660d51f881948ad05838968f_fintech-1-img-1.webp"
        />
        <p className="mt-4 text-center text-sm md:text-base">
          Embed: Off-the-shelf cards, ready to go
        </p>
      </>
    ),
  },
  {
    col: "col-span-1 row-span-1 md:col-start-1 md:row-start-2",
    delay: 0.2,
    content: (
      <img
        className="border-radius-primary w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa78d5350197a028c6c34_fintech-1-img-2.webp"
      />
    ),
  },
  {
    col: "col-span-1 row-span-1 md:col-start-2 md:row-span-2",
    delay: 0.4,
    direction: "x",
    value: -30,
    content: (
      <img
        className="border-radius-primary w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa78ecce1a421bb1a2b40_fintech-1-img-3.webp"
      />
    ),
  },
  {
    col: "col-span-1 row-span-1 md:col-start-3 md:row-start-1",
    delay: 0.6,
    direction: "y",
    value: -30,
    content: (
      <img
        className="border-radius-primary w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa78d1be5d3d4f193f73b_fintech-1-img-4.webp"
      />
    ),
  },
  {
    col: "col-span-1 row-span-1 md:col-start-3 md:row-start-2",
    delay: 0.8,
    content: (
      <>
        <p className="mb-4 text-sm md:text-base">
          Launched 50+ fintech products: neobanks, BNPL, proptech, crypto, and more.
        </p>
        <img
          className="border-radius-primary w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/66166e6afcc0f52f88f0dd4b_fintech-1-img-5.webp"
        />
      </>
    ),
  },
  {
    col: "col-span-2 md:col-span-1 md:col-start-4 md:row-span-2",
    delay: 1,
    direction: "x",
    value: 30,
    content: (
      <img
        className="border-radius-primary w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660fa78eaed4381a0482be32_fintech-1-img-6.webp"
      />
    ),
  },
]

export default function ProductOverview({data}) {
  return (
    <div className=" !w-full products text-white pt-24 pb-4 px-10  " >
      <div className="!w-full   flex justify-center ">

        <motion.div
          className="flex flex-col gap-4 text-center   justify-center items-center  max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="">
            <h1 className="heading-style-h2_fintech ">
              {data.heading}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="">
            <p className="paragraph-style-body !text-gray-400">
             {data.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
