import React from "react";
import BSlidingDiv from "../common/BSliding";

export const Clients = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-10 items-start ">
          <div className="!w-full !text-center lg:w-auto md:col-span-6">
            <h2 className="heading-style-h2_fintech !w-full !text-center lg:!text-left">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-20">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 items-start">
              {data.stats
                .slice(0, 4)
                .filter((_, index) => Math.floor(index / 2) === colIndex)
                .map((stat, index) => (
                  <BSlidingDiv 
                    key={index} 
                    className="w-full bg-white border-radius-primary p-6 fintech-2-content-grid-card_small"
                  >
                    <div className={colIndex === 0 && index === 0 ? "flex items-center gap-2" : ""}>
                      <span className="number-style !text-[2rem] !font-[1rem]">
                        {stat.number}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{stat.label}</p>
                  </BSlidingDiv>
                ))}
            </div>
          ))}

          {data.img && (
            <div className="hidden lg:flex justify-center items-center relative w-[50%]">
              <img
                src={data.img}
                alt="A mobile phone displaying abstract 3D shapes in the background, with a financial management app on the screen"
                className="rounded-xl  h-auto object-contain max-h-[800px] z-[-1] !w-[300%] max-w-none  absolute top-[-50%] bottom-auto left-[-30%] right-auto  "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
