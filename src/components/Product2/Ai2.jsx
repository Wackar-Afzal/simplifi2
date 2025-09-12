import React from "react";

const Ai = ({ data }) => {
  return (
    <div className="mb-4 flex justify-center">
      <div className="section-cases max-w-[1400px]">
        <div className="container-global">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="section-heading is-large mb-4">{data.title}</h2>
            <p className="paragraph-style-body text-center lg:mb-20">
              {data.descrip}
            </p>
          </div>

          <div
            className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-x-5 gap-y-16  md:[grid-template-rows:auto]"
          >
{data.features.map((feature, index) => {
  const total = data.features.length;
  const remainder = total % 3;
  const isLastRowStart = index >= total - remainder;

  let lastRowClasses = "";
  let isCenterColumn = index % 3 === 1;
  let isLastCenteredCard = false;

  // Detect if this is the single centered card in the last row
  if (isLastRowStart) {
    if (remainder === 1 && index === total - 1) {
      lastRowClasses = "lg:col-start-2 lg:mt-[-8rem]";
      isCenterColumn = true;
      isLastCenteredCard = true;
    } else if (remainder === 2 && index >= total - 2) {
      lastRowClasses = "lg:mt-16";
    }
  }

  // Determine default background class (even index → no bg, odd index → dark bg)
  const defaultHasBg = index % 2 === 1;

  // Flip background for last centered card based on the card above (index - 3)
  let backgroundClass = "";
  if (isLastCenteredCard) {
    const aboveIndex = index - 3;
    const aboveHasBg = aboveIndex >= 0 && aboveIndex % 2 === 1;

    // Flip: if above has bg → this should not, else apply dark background
    backgroundClass = aboveHasBg
      ? "background-color-secondary" // no bg
      : ""; // apply dark bg
  } else {
    // For all other cards: use normal alternating bg logic
    backgroundClass = defaultHasBg ? "background-color-secondary" : "";
  }

  // Additional center column margin if needed
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
      <div className="cases-card-item-image-wrapper">
        <img
          src={feature.image}
          loading="eager"
          sizes="(max-width: 816px) 100vw, 816px"
          className="rounded-[3rem]"
          alt=""
        />
      </div>
    </div>
  );
})}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Ai;
