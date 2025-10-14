"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UXSection({ data }) {
  return (
    <section className={`section_services text-white py-10 lg:py-15 px-4`}>
      <div className="mx-auto flex justify-center">
        <div className={`md:flex flex-col ${ data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 max-w-[1400px] !w-full`}
        >
          {/* Left image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start mb-4">
            <div className="overflow-hidden  rounded-[2.5rem]">
              <motion.img
                src={data.image}
                className="flex-1 h-full object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Right content */}
          <div
            className={`flex-1  flex flex-col h-full gap-3 `}
          >
            <h2
              className={`text-[2.8rem] leading-12 font-semibold `}>
              {data.title}
            </h2>

            <h2 className="paragraph-style-body !text-gray-400">{data.subTitle}</h2>

            <motion.p
              className="paragraph-style-body !text-gray-400"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {data.description}
            </motion.p>

            <div className="paragraph-style-body !text-gray-400">{data.includedTitle}</div>
            <ul className="list-disc pl-5 text-white">
            {data.includedItems.map((item, idx) => (
              <li key={idx} className="pt-3 paragraph-style-body !text-gray-400">
                {item}
              </li>
            ))}
            </ul>


            <div className="w-[8rem] py-6">
              <Link href={data?.buttonLink} className="nav-contained-button">
                {data?.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
