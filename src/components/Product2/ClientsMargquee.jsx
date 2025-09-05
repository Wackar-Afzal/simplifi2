import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// List of logos from /public (green-colored ones in your screenshot)
const clientLogos = [
  { name: "Bayzat", logo: "/logosweb/6.png" },
  { name: "Floward", logo: "/logosweb/1.png" },
  // { name: "Jisr", logo: "/jisr.webp" },
  { name: "Kamel Pay", logo: "/logosweb/4.png" },
  { name: "NQOODLET", logo: "/logosweb/3.png" },
  { name: "Transportr", logo: "/logosweb/5.png" },
  { name: "Walaplus", logo: "/logosweb/2.png" },
];

const ClientsMarquee = () => {
  return (
    <section className="section_clients ">
      <h2 className="section-heading">Trusted by fintechs, startups, and enterprises across MENA</h2>

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
      >
        <div className="flex mt-16">
          {clientLogos.map((client, index) => (
            <div key={index} className=" flex items-center !gap-0">
              <img
                src={client.logo}
                alt={client.name}
              
                className=" object-contain h-[5vh] mx-10 "
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
