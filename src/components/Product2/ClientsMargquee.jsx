import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// List of logos from /public (green-colored ones in your screenshot)
const clientLogos = [
  { name: "Floward", logo: "/Logosweb/1.png" },
  { name: "Walaplus", logo: "/Logosweb/2.png" },
  { name: "NQOODLET", logo: "/Logosweb/3.png" },
  { name: "Kamel Pay", logo: "/Logosweb/4.png" },
  { name: "Transportr", logo: "/Logosweb/5.png" },
  { name: "jisr", logo: "/Logosweb/Jisr.png" },
  // { name: "Bayzat", logo: "/Logosweb/6.png" },
  // { name: "Bayzat", logo: "/Logosweb/7.png" },
  // { name: "Bayzat", logo: "/Logosweb/8.png" },
  // { name: "Bayzat", logo: "/Logosweb/9.png" },
  // { name: "Bayzat", logo: "/Logosweb/10.png" },
  // { name: "Bayzat", logo: "/Logosweb/11.png" },
  // { name: "Bayzat", logo: "/Logosweb/12.png" },
  // { name: "Bayzat", logo: "/Logosweb/13.png" },
  // { name: "Bayzat", logo: "/Logosweb/14.png" },
  // { name: "Bayzat", logo: "/Logosweb/15.png" },
  // { name: "Bayzat", logo: "/Logosweb/16.png" },
  // { name: "Bayzat", logo: "/Logosweb/17.png" },
  // { name: "Bayzat", logo: "/Logosweb/18.png" },
  // { name: "Bayzat", logo: "/Logosweb/19.png" },
  // { name: "Bayzat", logo: "/Logosweb/20.png" },
  // { name: "Bayzat", logo: "/Logosweb/21.png" },
];

const ClientsMarquee = () => {
  return (
    <section className="section_clients ">
      <h2 className="heading-style-h2_fintech text-center">
        Trusted by fintechs, startups, and enterprises across MENA
      </h2>

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
