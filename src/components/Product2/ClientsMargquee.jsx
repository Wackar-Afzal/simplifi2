import React from "react";
import Marquee from "react-fast-marquee";
import homeText from "@/utils/homeText.json";

// Using client names from homeText.json - logos can be added later
const clients = homeText.homepage.clients.clients.map(clientName => ({
  name: clientName,
  logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png", // placeholder logo
}));
const ClientsMargquee = () => {
  return (
    <section
      data-w-id="98497e24-bb38-c836-dd0c-6f7393fd4e39"
      className="section_clients"
    >
      <h2 className="section-heading">
        {homeText.homepage.clients.title}
      </h2>

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
      >
        <div className="clients-wrapper">
          <div className="clients-carousel">
            <div className="clients-block">
              {clients.map((client, index) => (
                <div key={index} className="client-item">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="clients-logo"
                    loading="lazy"
                    title={client.name}
                  />
                  <span className="client-name sr-only">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default ClientsMargquee;
