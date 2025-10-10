import React from "react";
import Image from "next/image";

const ClientsGrid = ({ data }) => {
  return (
    <section className=" max-w-7xl mx-auto">
      <div className="flex justify-center flex-col !w-full">
        <h2 className="heading-style-h2_fintech max-w-6xl !text-center mx-auto">
          {data.heading}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-16 gap-8 px-4">
        {data.clientLogos.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center  shadow-sm hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
            style={{ width: "calc(17% - 2rem)", minWidth: "100px" }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="object-contain w-full mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsGrid;

