"use client";
import { motion } from "framer-motion";



export default function UXSection({ data }) {
  console.log(data)
  return (
    <section className="section_services text-white is-xsmall">
      <div className="services-wrapper mx-auto">
        <h2 className="section-heading is-services mb-10">{data.heading}</h2>

        <div className="hidden md:grid grid-cols-2 gap-16">
          {/* Left image */}
          <div className="flex items-center justify-start">
            <div className="w-full max-w-[785px] aspect-[16/10] overflow-hidden rounded-[2.5rem]">
              <motion.img
                src={data.imageUrl}
                className="w-full h-full object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="services-menu flex flex-col h-full gap-8">
            <div className="services-title">{data.title}</div>

            <motion.p
              className="services-desc m-4 mb-14"
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
              <button className="nav-contained-button">{data.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}