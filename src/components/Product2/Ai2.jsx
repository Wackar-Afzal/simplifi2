import React from "react";

const Ai = ({ data }) => {
  return (
    <div className="mb-4">
      <div className="section-cases">

        <div className="container-global">
          <h2 className="section-heading is-large lg:mb-20">{data.title}</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-x-5 gap-y-16  md:[grid-template-rows:auto] 
">
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
  
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[0].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[0].description}
                  </div>
                </div>
              </div>
              <div className="cases-card-item-image-wrapper" >
                <img
                  src={data.features[0].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary lg:mt-[-8rem]"
            >
              <div className="cases-card-item-content-wrapper">
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[1].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[1].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                src={data.features[1].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
            <div

              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4 text-color-inverted">
                    {data.features[2].title}
                  </h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[2].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[2].image}
                  loading="eager"
                  sizes="(max-width: 1056px) 100vw, 1056px"
                  alt=""
                />
              </div>
            </div>
         <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[3].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[3].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[3].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary lg:mt-[-8rem]"
            >
              <div className="cases-card-item-content-wrapper">

                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4 text-color-inverted">
                    {data.features[4].title}
                  </h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[4].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[4].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[5].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[5].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[5].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
         <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary lg:col-start-2 lg:mt-[-8rem]"
            >
              <div className="cases-card-item-content-wrapper">
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[6].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[6].description}
                  </div>
                </div>
              </div>
              <div
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[6].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  className="rounded-[3rem]"

                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ai;
