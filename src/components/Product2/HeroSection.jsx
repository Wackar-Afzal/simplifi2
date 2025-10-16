"use client";
import React, { useState } from "react";
const HeroSection = ({data}) => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <>
      <section className=" max-w-7xl mx-auto">
      
        <div className=" is-small">
          <div className="hero-wrapper">
            <div className="hero-left flex-1">
              <h1 className="heading-style-h1 text-center lg:!text-left">{data.heading}</h1>
              <p className=" paragraph-style-body !text-center lg:!text-left">
                {data.descrip}
              </p>
            </div>
            <div className="hero-tabs-wrapper flex-1 ">
            <div className="rounded-2xl overflow-hidden">
              <img src={data.bckgroundImage} alt="Hero Image" className="!rounded-[3rem] " />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;















