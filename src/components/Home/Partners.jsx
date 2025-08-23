"use client"
import React, { useState, useEffect } from 'react';

const Partners = () => {
  const [showMoreStartups, setShowMoreStartups] = useState(false);
  const [startupCount, setStartupCount] = useState(25);
  const [enterpriseCount, setEnterpriseCount] = useState(10);

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (targetValue, setter) => {
      let current = 0;
      const increment = targetValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setter(targetValue);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    animateCounter(25, setStartupCount);
    animateCounter(10, setEnterpriseCount);
  }, []);

  const startupCompanies = [
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6634d44ed1d559949e589d68_dilypay-userpic.webp",
      name: "Dailypay",
      type: "Payroll services",
      funding: "Unicorn, $1B in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d3d16b7a19a72f1d3e_startup-05.webp",
      name: "Deserve",
      type: "Mobile-first credit card platform",
      funding: "$544M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8fa0e6f9e3a57c17618_startups-22.webp",
      name: "Stilt",
      type: "Neobank for immigrants and students",
      funding: "$338M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f78a5637f46c514211_startups-17.webp",
      name: "Onbo",
      type: "B2B credit infrastructure",
      funding: "$336M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d48cc445600fac19d2_startup-09.webp",
      name: "Hello Brigit",
      type: "Borrow & build credit app",
      funding: "$115M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d561d9934796d4cfcb_startup-01.webp",
      name: "Abra",
      type: "Crypto platform",
      funding: "$106M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f7dad57d5c9bd6dbdd_startups-21.webp",
      name: "Rocket Money",
      type: "Subscription manager",
      funding: "$84M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d3e064bdb00487a7ca_startup-02.webp",
      name: "Argyle",
      type: "Payroll platform",
      funding: "$77M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f70fd3b9bad5ad6a92_startups-18.webp",
      name: "Oxygen",
      type: "Business & personal finance",
      funding: "$45M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d3638906189940772c_startup-03.webp",
      name: "Cogni",
      type: "Lifestyle bank",
      funding: "$31M in funding"
    }
  ];

  const additionalStartups = [
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/661518d061588026026d2fb3_startups-30.webp",
      name: "Cushion",
      type: "Credit builder",
      funding: "$21M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f7968611f7ed9e5e80_startups-19.webp",
      name: "Piñata",
      type: "Reward program for renters",
      funding: "$16M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f6a2efd7f97ec865dc_startups-14.webp",
      name: "Knot",
      type: "Infrastructure",
      funding: "$13M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d4d066b9481b2e4fc0_startup-07.webp",
      name: "Finzly",
      type: "Payment infrastructure",
      funding: "$10M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d4a803508ebbb75475_startup-08.webp",
      name: "Get Nude",
      type: "Saving app",
      funding: "Apple App of the Day, $9M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f99ba7539ae89ea9e8_startups-24.webp",
      name: "Stoovo",
      type: "Fintech app for gig workers",
      funding: "$7M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6634d442c4a7de9e545f67d8_sequin-userpic.svg",
      name: "Sequin",
      type: "Neobank for women",
      funding: "$5M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8fabea59132fc9c399a_startups-27.webp",
      name: "Zavo",
      type: "Neobank for B2B",
      funding: "$2M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f699a0e1fa3fa1805f_startups-12.webp",
      name: "Ivella",
      type: "Neobank for couples",
      funding: "$4M in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f60f7fd19021bb6e4b_startups-15.webp",
      name: "Kyshi",
      type: "Cross-border payments",
      funding: "$400K in funding"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f69211e9ffbbf77734_startups-10.webp",
      name: "Hi.com",
      type: "Web3 neobank",
      funding: "2M+ downloads"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f6debf13f891bd0e46_startups-13.webp",
      name: "KASB",
      type: "Stock trading app",
      funding: "2M+ downloads"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f73165c4cc57767fab_startups-16.webp",
      name: "Moka",
      type: "Automated investing app",
      funding: "#1 saving app in Canada"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f7ac06bc65a411be52_startups-20.webp",
      name: "Realtify",
      type: "Real estate data platform",
      funding: "Acquired"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d3db00712e1426bb6a_startup-06.webp",
      name: "Finance HQ",
      type: "Financial advisors platform",
      funding: "—"
    }
  ];

  const enterprises = [
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef0cc2c7d22767ebd95_enterprises-01.webp",
      name: "Broadcom",
      type: "ATM Monitoring system"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef0c780e48edeee2061_enterprises-02.webp",
      name: "Deloitte",
      type: "KYC and security design consulting"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef067261accc5377b7b_enterprises-03.webp",
      name: "ERSTE",
      type: "Mobile app"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef1d186dc12255733fa_enterprises-04.webp",
      name: "FNBO",
      type: "Banking infrastructure and back-office tools"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613d8f6bd901539c7ddcce7_startups-11.webp",
      name: "IBM Accelerator",
      type: "Accelerator"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef15993bb6e02daae1c_enterprises-05.webp",
      name: "ING",
      type: "Banking for SMB"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef04656d306af1b87ef_enterprises-06.webp",
      name: "J.G. Wentworth",
      type: "Mobile banking for immigrants"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef286243e358b24d8e7_enterprises-07.webp",
      name: "McKinsey",
      type: "Personal banking assistant app"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef5402b7e92f73de697_enterprises-08.webp",
      name: "Raiffeisen",
      type: "All around design support"
    },
    {
      img: "https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6634d442a6b3d02081ea3616_sadapay-userpic.svg",
      name: "Sadapay",
      type: "Neobank for payments and digital wallet"
    }
  ];

  const ArrowIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.59622 36.6758H36.6758V4.59622H32.093V28.8528L3.93386 0.675781L0.675781 3.93386L28.8528 32.093H4.59622V36.6758Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="section-clients">
    
      
      <div className="container-global">
        <div className="clients-grid">
          <h2 
            id="w-node-_421aad16-8bf9-b698-927e-3334556a0062-2da5785d" 
            className="heading-style-h2_big"
          >
            Our work spans the globe, from startups on the US West Coast to leading banks in Europe, the UK, and Singapore.
          </h2>
          
          <div id="w-node-_33cb1850-4d8f-f7e6-9f91-c5f83a42a668-2da5785d" className="divider"></div>
          
          <div id="w-node-_84265ba1-4522-fc06-6db0-bdee2cec3305-2da5785d" className="clients-grid-title-wrapper">
            <div id="w-node-c5dfb098-c984-494e-4474-cd9915f314cb-2da5785d" className="misc_table-counter-flex">
              <div className="paragraph-style-caption">[</div>
              <div className="paragraph-style-caption countstartups">{startupCount}</div>
              <div className="paragraph-style-caption">]</div>
            </div>
            <h3 id="w-node-_84265ba1-4522-fc06-6db0-bdee2cec3308-2da5785d" className="heading-style-h2_small">
              Startup companies
            </h3>
          </div>
          
          <div className="clients-grid-list-wrapper">
            <div className="clients-grid-list">
              {startupCompanies.map((company, index) => (
                <div key={index} id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2d-208dea2d" className="lists-grid-list-row">
                  <img 
                    src={company.img} 
                    loading="lazy" 
                    id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2e-208dea2d" 
                    alt=""
                  />
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2f-208dea2d" className="paragraph-style-table">
                    {company.name}
                  </div>
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea31-208dea2d" className="paragraph-style-table">
                    {company.type}
                  </div>
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea33-208dea2d" className="paragraph-style-table">
                    {company.funding}
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              data-w-id="0bcd1e4c-c25c-ef2e-d6c3-41d7fde49c6b" 
              style={{ display: showMoreStartups ? 'grid' : 'none' }} 
              className="clients-grid-list"
            >
              {additionalStartups.map((company, index) => (
                <div key={index} id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2d-208dea2d" className="lists-grid-list-row">
                  <img 
                    src={company.img} 
                    loading="lazy" 
                    id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2e-208dea2d" 
                    alt=""
                  />
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea2f-208dea2d" className="paragraph-style-table">
                    {company.name}
                  </div>
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea31-208dea2d" className="paragraph-style-table">
                    {company.type}
                  </div>
                  <div id="w-node-_289cdf1c-cc30-dc8f-aede-3aea208dea33-208dea2d" className="paragraph-style-table">
                    {company.funding}
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              data-w-id="9a0af54e-8907-db86-0a48-8d6316145af0" 
              className="clients-grid-expand-button" 
              style={{ display: showMoreStartups ? 'none' : 'grid' }}
              onClick={() => setShowMoreStartups(true)}
            >
              <div className="misc_counter">+15</div>
              <div id="w-node-e4dc8ebd-5066-c42f-8537-06a6802b52a3-2da5785d" className="paragraph-style-table_no-fill">
                Show more
              </div>
              <div className="misc_height-225rem">
                <ArrowIcon />
              </div>
            </div>
            
            <div 
              data-w-id="05747a66-281d-15ea-fa36-463e400a4723" 
              style={{ display: showMoreStartups ? 'grid' : 'none' }} 
              className="clients-grid-expand-button"
              onClick={() => setShowMoreStartups(false)}
            >
              <div className="misc_counter">–15</div>
              <div id="w-node-_05747a66-281d-15ea-fa36-463e400a4726-2da5785d" className="paragraph-style-table_no-fill">
                Show less
              </div>
              <div className="misc_height-225rem is-rotated">
                <ArrowIcon />
              </div>
            </div>
          </div>
          
          <div id="w-node-_8560e8b5-6ae7-313c-4ca6-ef899ea9d6e5-2da5785d" className="divider"></div>
          
          <div id="w-node-_32ada7a1-c654-b228-9e78-b8aa32b293de-2da5785d" className="clients-grid-title-wrapper">
            <div id="w-node-b00a7ba3-f5b4-ead0-34c1-51630caf666b-2da5785d" className="misc_table-counter-flex">
              <div className="paragraph-style-caption">[</div>
              <div className="paragraph-style-caption countenterprise">{enterpriseCount}</div>
              <div className="paragraph-style-caption">]</div>
            </div>
            <h3 className="heading-style-h2_small">Enterprises</h3>
          </div>
          
          <div id="w-node-_9c1510a6-defe-9a65-25b1-5428a8a9ff05-2da5785d" className="clients-grid-list">
            {enterprises.map((enterprise, index) => (
              <div key={index} id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6b-a7124d6b" className="lists-grid-list-row_enterprise">
                <img 
                  loading="lazy" 
                  id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6c-a7124d6b" 
                  src={enterprise.img} 
                  alt=""
                />
                <div id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6d-a7124d6b" className="paragraph-style-table">
                  {enterprise.name}
                </div>
                <div id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6f-a7124d6b" className="paragraph-style-table">
                  {enterprise.type}
                </div>
              </div>
            ))}
              <a 
            id="click_CTA_consultation_fintech" 
            data-tracker="click_CTA_consultation_fintech" 
            href="#request" 
            className="button-primary_large w-fit mt-10"
          >
            Schedule a free consultation
          </a>
          </div>
          
          {/* <div style={{ marginTop: '40px' }}>
            <Societe Generale Group Enterprise />
          </div> */}
          
        
        </div>
      </div>
    </div>
  );
};

const SocieteGeneraleGroup = () => (
  <div id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6b-a7124d6b" className="lists-grid-list-row_enterprise">
    <img 
      loading="lazy" 
      id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6c-a7124d6b" 
      src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6634e2c46c7f5de93e2b0176_sgg-userpic.svg" 
      alt=""
    />
    <div id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6d-a7124d6b" className="paragraph-style-table">
      Societe Generale Group
    </div>
    <div id="w-node-_8aeaed15-af9e-d11f-1722-6deca7124d6f-a7124d6b" className="paragraph-style-table">
      Eco-friendly banking incentive program
    </div>
  </div>
);

export default Partners;