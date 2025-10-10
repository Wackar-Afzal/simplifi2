import React from "react";
import BSlidingDiv from "../common/BSliding";
import homeText from "@/utils/homeText.json";

export const Clients = ({data}) => {
  return (
    <div className="flex justify-center">
    <div className="px-4 md:px-0 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ">
        <div className="!w-full !text-center lg:w-auto md:col-span-6">
          <h2 className="heading-style-h2_fintech !w-full !text-center lg:!text-left">
            {data.title}
          </h2>

          
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 auto-cols-fr gap-x-5 gap-y-6 mt-20">
        <div className="flex flex-col flex-wrap gap-4">
          <BSlidingDiv className="bg-white  border-radius-primary p-2 md:p-6 fintech-2-content-grid-card_small ">
            <div className="flex items-center gap-2">
              <span className="number-style  ">
                {data.stats[0].number}
              </span>
            </div>
            <p className="mt-2 text-gray-600">
              {data.stats[0].label}
            </p>
          </BSlidingDiv>

          <BSlidingDiv className="bg-white border-radius-primary p-2 md:p-6 fintech-2-content-grid-card_small ">
            <div className="number-style ">
              {data.stats[1].number}
            </div>
            <p className="mt-2 text-gray-600">
              {data.stats[1].label}
            </p>
          </BSlidingDiv>
        </div>
        <div className="flex flex-col gap-4">
          <BSlidingDiv className="bg-white border-radius-primary p-6 fintech-2-content-grid-card_small ">
            <div className="number-style ">
              {data.stats[2].number}
            </div>
            <p className="mt-2 text-gray-600">
              {data.stats[2].label}
            </p>
          </BSlidingDiv>
          <BSlidingDiv className="bg-white border-radius-primary p-6 fintech-2-content-grid-card_small ">
            <div className="number-style ">
              {data.stats[3].number}
            </div>
            <p className="mt-2 text-gray-600">
              {data.stats[3].label}
            </p>
          </BSlidingDiv>
        </div>

        <div className="hidden col-span-2 md:flex justify-center items-center relative w-full md:w-[99%]">
          <img
            src="backgrounds/powerbybusiness.png"

            alt="A mobile phone displaying abstract 3D shapes in the background, with a financial management app on the screen"
            className="rounded-xl  !w-[120%] h-auto object-contain mt-[-0%] md:mt-[-28%] ml-[-20%] z-[-1] pointer-events-none !max-w-none
   
                        
                        "
          />
        </div>
      </div>
    </div>
    </div>
  );
};
