import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// List of logos from /public (green-colored ones in your screenshot)
const clientLogos = [
  { name: "Bayzat", logo: "/bayzat.png" },
  { name: "Floward", logo: "/floward.png" },
  { name: "Jisr", logo: "/jisr.webp" },
  { name: "Kamel Pay", logo: "/kamelpay.png" },
  { name: "NQOODLET", logo: "/nqoodlet.png" },
  { name: "Transportr", logo: "/transportr.png" },
  { name: "Walaplus", logo: "/walaplus.png" },
];

const ClientsMarquee = () => {
  return (
    <section className="section_clients ">
      <h2 className="section-heading">Our Clients</h2>

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
