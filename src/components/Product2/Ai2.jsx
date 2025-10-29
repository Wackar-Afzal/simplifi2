import React from "react";

const Ai = ({ data }) => {
  const isFiveLayout = data.features.length === 5;

  return (
    <div className=" flex justify-center">
      <div className="section-cases max-w-7xl w-full mx-auto">
        <div className={`container-global ${isFiveLayout?"!gap-y-6":""}` }>
          <div className="flex flex-col gap-4 justify-center items-center max-w-5xl !text-center mx-auto">
            <h2 className="heading-style-h2_fintech !text-center mb-6">{data.title}</h2>
            <p
              className={`paragraph-style-body text-center ${
                isFiveLayout ? "mb-10 lg:mb-10" : "lg:mb-20"
              }`}
            >
              {data.descrip}
            </p>
          </div>

          {/* -------- Layout for 5 cards -------- */}
          {isFiveLayout ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-x-5 gap-y-16">
              {data.features.map((feature, index) => {
                const isCenterBigCard = index === 1;

                // background color: center card = grey, others = black
                const backgroundClass = isCenterBigCard
                  ? "background-color-secondary"
                  : "background-color-black";

                return (
                  <div
                    key={index}
                    className={`
                      cases-grid-item border-radius-primary
                      ${backgroundClass}
                      ${
                        isCenterBigCard
                          ? "lg:col-start-2 lg:row-start-1 lg:row-span-2  mt-0 lg:mt-[70%]"
                          : ""
                      }
                    `}
                  >
                    <div className="cases-card-item-content-wrapper">
                      <div className="cases-card-itm-title">
                        <h3 className="heading-style-h4">{feature.title}</h3>
                        <div className="paragraph-style-body text-color-secondary">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                    <div className="cases-card-item-image-wrapper h-auto [@media(min-width:768px)]:!h-[12rem] [@media(min-width:850px)]:!h-[15rem] [@media(min-width:1024px)]:!h-[20rem]">
                      <img
                        src={feature.image}
                        loading="eager"
                        sizes="(max-width: 816px) 100vw, 816px"
                        className="rounded-[3rem] h-auto lg:h-full object-contain lg:object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* -------- Default layout for all other counts -------- */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-x-5 gap-y-16 md:[grid-template-rows:auto]">
              {data.features.map((feature, index) => {
                const total = data.features.length;
                const remainder = total % 3;
                const isLastRowStart = index >= total - remainder;

                let lastRowClasses = "";
                let isCenterColumn = index % 3 === 1;
                let isLastCenteredCard = false;

                if (isLastRowStart) {
                  if (remainder === 1 && index === total - 1) {
                    lastRowClasses = "lg:col-start-2 lg:mt-[-8rem]";
                    isCenterColumn = true;
                    isLastCenteredCard = true;
                  } else if (remainder === 2 && index >= total - 2) {
                    lastRowClasses = "lg:mt-16";
                  }
                }

                const defaultHasBg = index % 2 === 1;

                let backgroundClass = "";
                if (isLastCenteredCard) {
                  const aboveIndex = index - 3;
                  const aboveHasBg = aboveIndex >= 0 && aboveIndex % 2 === 1;
                  backgroundClass = aboveHasBg
                    ? "background-color-secondary"
                    : "";
                } else {
                  backgroundClass = defaultHasBg
                    ? "background-color-secondary"
                    : "";
                }

                const centerColumnMargin = isCenterColumn ? "lg:mt-[-8rem]" : "";

                return (
                  <div
                    key={index}
                    className={`cases-grid-item border-radius-primary ${backgroundClass} ${lastRowClasses} ${centerColumnMargin}`}
                  >
                    <div className="cases-card-item-content-wrapper">
                      <div className="cases-card-itm-title">
                        <h3 className="heading-style-h4">{feature.title}</h3>
                        <div className="paragraph-style-body text-color-secondary">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                    <div className="cases-card-item-image-wrapper h-auto [@media(min-width:768px)]:!h-[12rem] [@media(min-width:850px)]:!h-[15rem] [@media(min-width:1024px)]:!h-[20rem]">
                      <img
                        src={feature.image} 
                        loading="eager"
                        sizes="(max-width: 816px) 100vw, 816px"
                        className="rounded-[3rem] h-auto lg:h-full object-contain lg:object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ai;
