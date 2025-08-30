import React from 'react'
import Marquee from "react-fast-marquee";

  const clients = [
    {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    }, {

      logo: "https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931fa_company%20name%20%26logo-1.png",

    },

  ];
const ClientsMargquee = () => {
  return (
         <section data-w-id="98497e24-bb38-c836-dd0c-6f7393fd4e39" className="section_clients">
        <h2 className="section-heading">
          Trusted by fintechs, startups, and enterprises across MENA
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
                <img
                  src={client.logo}
                  alt=""
                  className="clients-logo"
                  loading="lazy"
                />
              ))}
              </div>
          </div>
      </div>
        </Marquee>
    </section>
  )
}

export default ClientsMargquee