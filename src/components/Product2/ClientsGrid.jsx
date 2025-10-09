import React from "react";
import Image from "next/image";

const ClientsGrid = ({ data }) => {
  return (
    <section className="section_clients">
      <div className="flex justify-center flex-col !w-full">
        <h2 className="heading-style-h2_fintech max-w-6xl !text-center mx-auto">
          {data.heading}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-16 gap-8 px-4">
        {data.clientLogos.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#f4f4f4] p-4 rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
            style={{ width: "calc(20% - 2rem)", minWidth: "150px" }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="object-contain h-[8vh] w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsGrid;

