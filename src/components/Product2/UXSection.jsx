"use client";
import { motion } from "framer-motion";

export default function UXSection({ data }) {
  console.log(data);
  return (
    <section className={`section_services text-white is-xsmall `}>
      <div className="mx-auto">
        <div className={`md:flex flex-col ${ data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8`}
        >
          {/* Left image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start mb-4">
            <div className="overflow-hidden  rounded-[2.5rem]">
              <motion.img
                src={data.imageUrl}
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
              className={`text-[1rem] `}>
              {data.heading}
            </h2>

            <h2 className="services-title">{data.title}</h2>

            <motion.p
              className="services-desc "
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {data.description}
            </motion.p>

            <div className="services-title">{data.includedTitle}</div>

            {data.includedItems.map((item, idx) => (
              <h2 key={idx} className="services-title services-menu-link">
                {item}
              </h2>
            ))}

            <div className="w-[8rem]">
              <button className="nav-contained-button">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
