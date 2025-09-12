import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


const ClientsMarquee = ({data}) => {
  return (
    <section className="section_clients ">
      <div className="flex justify-center flex-col !w-full">
      <h2 className="heading-style-h2_fintech  max-w-6xl !text-center mx-auto">
        {data.heading}
      </h2>
      </div>


      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
      >
        <div className="flex mt-16">
          {data.clientLogos.map((client, index) => (
            <div key={index} className=" flex items-center !gap-0">
              <img
                src={client.logo}
                alt={client.name}
                className=" object-contain h-[8vh] mx-10 "
              />
              {/* <span className="text-black sr-only z-10">jk</span> */}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default ClientsMarquee;
