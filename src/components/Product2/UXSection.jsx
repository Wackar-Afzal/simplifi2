"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Globe, 
  Settings, 
  Users, 
  Lock,
  Smartphone,
  Building,
  Briefcase
} from "lucide-react";

// Icon mapping
const iconMap = {
  Zap,
  CreditCard,
  TrendingUp,
  Shield,
  Globe,
  Settings,
  Users,
  Lock,
  Smartphone,
  Building,
  Briefcase,
};

export default function UXSection({ data }) {
  return (
    <section className={`px-4`}>
      <div className={`mx-auto flex justify-center bg-[#f4f4f4] ${data.reverse?"lg:pl-8":"lg:pr-8"} py-16 rounded-[4rem] max-w-7xl`}>
        <div className={`md:flex flex-col ${ data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8  !w-full`}
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
            className={`flex-1  flex flex-col h-full gap-3 px-4 lg:px-0`}
          >
            <h2
              className={`text-[2.8rem] leading-12 font-semibold `}>
              {data.title}
            </h2>

            <h2 className="paragraph-style-body !text-gray-500">{data.subTitle}</h2>

            <motion.p
              className="paragraph-style-body !text-gray-500"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {data.description}
            </motion.p>

            <div className="paragraph-style-body !text-gray-500 !font-semibold pt-2">{data.includedTitle}</div>
            
            {/* Two-column grid for features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {data.includedItems.map((item, idx) => {
                // Handle both object format (new) and string format (legacy)
                const isObject = typeof item === 'object' && item !== null;
                const IconComponent = isObject && item.icon ? iconMap[item.icon] : null;
                
                return (
                  <div key={idx} className="flex gap-3">
                    {IconComponent && (
                      <div className="flex-shrink-0 w-[3rem] h-[3rem] bg-blue-100 rounded-md flex items-center justify-center  transition-colors">
                        <IconComponent className="w-[1.5rem] h-[1.5rem] text-blue-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      {isObject ? (
                        <>
                          <div className="!font-semibold text-gray-900 paragraph-style-body">
                            {item.title}
                          </div>
                          <div className="text-gray-500 paragraph-style-body text-sm">
                            {item.description}
                          </div>
                        </>
                      ) : (
                        <div className="paragraph-style-body !text-gray-500">
                          {item}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

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
