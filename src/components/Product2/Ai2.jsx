import React from "react";

const Ai = ({ data }) => {
  return (
    <div>
      <div className="section-cases">
        <img
          src={data.backgrounds[0]}
          loading="lazy"
          width="338"
          alt=""
          className="cases-bg1"
        />
        <img
          src={data.backgrounds[1]}
          loading="lazy"
          width="1137.5"
          sizes="(max-width: 1279px) 100vw, 1137.5px"
          alt=""
          className="cases-bg4"
        />
        <img
          src={data.backgrounds[2]}
          loading="lazy"
          width="191"
          alt=""
          className="cases-bg6"
        />
        <div className="container-global">
          <h2 className="section-heading is-large">{data.title}</h2>
          <div className="section-cases-grid">
            <div
              id="w-node-_8545a01a-43bd-28fc-8c15-0a43f8cc9953-8f49312d"
              data-w-id="8545a01a-43bd-28fc-8c15-0a43f8cc9953"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[0].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">
                    {data.features[0].company}
                  </div>
                </div> */}
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[0].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[0].description}
                  </div>
                </div>
              </div>
              <div
                id="w-node-f918f936-e289-a614-7c74-5a2e3ddbf2b8-8f49312d"
                className="cases-card-item-image-wrapper"
              >
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
              id="w-node-d56dec60-de7e-8d6d-584d-62d0d1efbba1-8f49312d"
              data-w-id="d56dec60-de7e-8d6d-584d-62d0d1efbba1"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[1].logo}
                    loading="lazy"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[1].company}</div>
                </div> */}
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[1].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[1].description}
                  </div>
                </div>
              </div>
              <div
                id="w-node-d56dec60-de7e-8d6d-584d-62d0d1efbbac-8f49312d"
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
              id="w-node-bc9a16cb-67f3-e1d0-55bd-3b49311aff14-8f49312d"
              data-w-id="bc9a16cb-67f3-e1d0-55bd-3b49311aff14"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[2].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[2].company}</div>
                </div> */}
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
                id="w-node-bc9a16cb-67f3-e1d0-55bd-3b49311aff1f-8f49312d"
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
              id="w-node-_79ace377-de97-5a8e-5bbf-1b133cd74f4c-8f49312d"
              data-w-id="79ace377-de97-5a8e-5bbf-1b133cd74f4c"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item is-horizontal background-color-secondary"
            >
              <div className="cases-card-item-image-wrapper is-horizontal is-left">
                <img
                  src={data.features[3].image}
                  loading="eager"
                  alt=""
                  className="cases-img-big"
                />
              </div>
              <div
                id="w-node-d4be08c7-4305-8a0f-5f66-a89b6cc8c39a-8f49312d"
                className="cases-card-item-content-wrapper is-horizontal"
              >
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[3].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[3].company}</div>
                </div> */}
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[3].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[3].description}
                  </div>
                  {/* <div className="cases-stats-wrapper">
                    <div className="cases-stats-block">
                      <div className="cases-stats-title">2 weeks</div>
                      <div>From concept to delivery</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div
              id="w-node-_4db10948-35de-fb69-d336-d47d74bf6e08-8f49312d"
              data-w-id="4db10948-35de-fb69-d336-d47d74bf6e08"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[4].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[4].company}</div>
                </div> */}
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
                id="w-node-_4db10948-35de-fb69-d336-d47d74bf6e13-8f49312d"
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
              id="w-node-a6880751-85a1-73d5-6223-157ab81a55ac-8f49312d"
              data-w-id="a6880751-85a1-73d5-6223-157ab81a55ac"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item background-color-secondary border-radius-primary"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[5].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[5].company}</div>
                </div> */}
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4">{data.features[5].title}</h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[5].description}
                  </div>
                </div>
              </div>
              <div
                id="w-node-a6880751-85a1-73d5-6223-157ab81a55b7-8f49312d"
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
              id="w-node-af17ab3e-3405-d3ce-a8be-5714ecc8a65b-8f49312d"
              data-w-id="af17ab3e-3405-d3ce-a8be-5714ecc8a65b"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="cases-grid-item border-radius-primary is-last"
            >
              <div className="cases-card-item-content-wrapper">
                {/* <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.features[6].logo}
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="cases-logo"
                  />
                  <div className="cases-company">{data.features[6].company}</div>
                </div> */}
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4 text-color-inverted">
                    {data.features[6].title}
                  </h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.features[6].description}
                  </div>
                </div>
              </div>
              <div
                id="w-node-af17ab3e-3405-d3ce-a8be-5714ecc8a666-8f49312d"
                className="cases-card-item-image-wrapper"
              >
                <img
                  src={data.features[6].image}
                  loading="eager"
                  sizes="(max-width: 816px) 100vw, 816px"
                  alt=""
                  className="rounded-[3rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif"
          loading="lazy"
          width="480"
          sizes="(max-width: 479px) 100vw, 480px"
          alt=""
          className="cases-bg2"
        />
        <img
          src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493232_07.avif"
          loading="lazy"
          sizes="100vw"
          alt=""
          className="cases-bg3"
        />
        <img
          src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493234_08.avif"
          loading="lazy"
          sizes="100vw"
          alt=""
          className="cases-bg5"
        />
        <img
          src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f49320d_exp7.avif"
          loading="lazy"
          width="429"
          alt=""
          className="cases-bg7"
        />
      </div>
    </div>
  );
};

export default Ai;
