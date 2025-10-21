import React from "react";
import BSlidingDiv from "../common/BSliding";

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
        {[0, 1].map((colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 items-start">
            {data.stats
              .slice(0, 4)
              .filter((_, index) => Math.floor(index / 2) === colIndex)
              .map((stat, index) => (
                <BSlidingDiv 
                  key={index} 
                  className={`w-full !max-w-none md:!max-w-[250px] bg-white border-radius-primary ${colIndex === 0 && index === 0 ? 'p-2 md:p-6' : 'p-6'} fintech-2-content-grid-card_small`}
                >
                  <div className={colIndex === 0 && index === 0 ? "flex items-center gap-2" : ""}>
                    <span className="number-style">
                      {stat.number}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {stat.label}
                  </p>
                </BSlidingDiv>
              ))}
          </div>
        ))}

        {data.img && (
          <div className="hidden col-span-2 md:flex justify-center items-center relative w-full md:w-[99%]">
            <img
              src={data.img}

              alt="A mobile phone displaying abstract 3D shapes in the background, with a financial management app on the screen"
              className="rounded-xl  !w-[120%] h-auto object-contain mt-[-0%] md:mt-[-28%] ml-[-20%] z-[-1] pointer-events-none !max-w-none
   
                        
                        "
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
