import BSlidingDiv from "../common/BSliding";

export default function WorkFlowSectionCases({data}) {
  return (
    <div className="section-cases  px-6">
      <div className="container-global">
        <div>
          <h2 className="text-center heading-style-h2_fintech text-align-center mb-2 sm:mb-2 md:mb-2">
            {data.heading}
          </h2>
          <p className="mt-8">
           {data.descrip}
          </p>
        </div>

        <div className="section-cases-grid">
          {/* ING */}
          <div
            id="w-node-_8545a01a-43bd-28fc-8c15-0a43f8cc9953-2da5785d"
            data-w-id="8545a01a-43bd-28fc-8c15-0a43f8cc9953"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
              transformStyle: "preserve-3d",
            }}
            className="cases-grid-item border-radius-primary "
          >
            <BSlidingDiv>
              <div className="cases-card-item-content-wrapper">
                <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.cases[0].logo}
                    loading="lazy"
                    width="24"
                    alt=""
                  />
                  <div className="paragraph-style-table text-color-inverted">
                    {data.cases[0].company}
                  </div>
                </div>
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4 text-color-inverted">
                    {data.cases[0].title}
                  </h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.cases[0].description}
                  </div>
                </div>
              </div>
              <div className="cases-card-item-image-wrapper">
                <img
                  src={data.cases[0].image}
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 40vw, (max-width: 991px) 43vw, (max-width: 1279px) 27vw, 28vw"
                  alt="Mobile phone with a fintech app lying on a 3D background"
                />
              </div>
            </BSlidingDiv>
          </div>

          {/* Société Générale Group */}
          <div
            id="w-node-d56dec60-de7e-8d6d-584d-62d0d1efbba1-2da5785d"
            data-w-id="d56dec60-de7e-8d6d-584d-62d0d1efbba1"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
              transformStyle: "preserve-3d",
            }}
            className="cases-grid-item background-color-secondary border-radius-primary"
          >
            <BSlidingDiv className="cases-card-item-content-wrapper">
              <div className="hflex-05rem_leftcenter">
                <img
                  src={data.cases[1].logo}
                  loading="lazy"
                  width="24"
                  alt=""
                />
                <div className="paragraph-style-table">
                  {data.cases[1].company}
                </div>
              </div>
              <div className="cases-card-itm-title">
                <h3 className="heading-style-h4">
                  {data.cases[1].title}
                </h3>
                <div className="paragraph-style-body text-color-secondary">
                  {data.cases[1].description}
                </div>
              </div>
            </BSlidingDiv>
            <BSlidingDiv className="cases-card-item-image-wrapper">
              <img
                src={data.cases[1].image}
                loading="eager"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 40vw, (max-width: 991px) 43vw, (max-width: 1279px) 27vw, 28vw"
                alt="Mobile screen displaying a banking app with flowers in the background"
              />
            </BSlidingDiv>
          </div>

          {/* Moka */}
          <div
            className="cases-grid-item border-radius-primary"
            id="w-node-bc9a16cb-67f3-e1d0-55bd-3b49311aff14-2da5785d"
          >
            <BSlidingDiv>
              <div className="cases-card-item-content-wrapper">
                <div className="hflex-05rem_leftcenter">
                  <img
                    src={data.cases[2].logo}
                    loading="lazy"
                    width="24"
                    alt=""
                  />
                  <div className="paragraph-style-table text-color-inverted">
                    {data.cases[2].company}
                  </div>
                </div>
                <div className="cases-card-itm-title">
                  <h3 className="heading-style-h4 text-color-inverted">
                    {data.cases[2].title}
                  </h3>
                  <div className="paragraph-style-body text-color-secondary">
                    {data.cases[2].description}
                  </div>
                </div>
              </div>
              <div className="cases-card-item-image-wrapper">
                <img
                  src={data.cases[2].image}
                  loading="eager"
                  alt="Moka fintech app screens displayed on mobile devices"
                />
              </div>
            </BSlidingDiv>
          </div>

          {/* Oxygen */}
          <div
            className="cases-grid-item is-horizontal background-color-secondary"
            id="w-node-_9d80c8a9-d880-7a19-032b-ecd4895eb515-2da5785d"
          >
            <div className="cases-card-item-content-wrapper">
              <div className="hflex-05rem_leftcenter">
                <img
                  src={data.cases[3].logo}
                  loading="lazy"
                  width="24"
                  alt=""
                />
                <div className="paragraph-style-table">{data.cases[2].company}</div>
              </div>
              <div className="cases-card-itm-title">
                <h3 className="heading-style-h4">
                  {data.cases[3].title}
                </h3>
                <div className="paragraph-style-body text-color-secondary">
                   {data.cases[2].description}
                </div>
              </div>
            </div>
            <div className="cases-card-item-image-wrapper">
              <img
                src={data.cases[3].image}
                className="misc_grid-offset-image-3 "
                loading="eager"
                alt="Oxygen neobank app interface on multiple screens"
              />
            </div>
          </div>

{data?.cases[4].id?
          <div
            className="cases-grid-item border-radius-primary"
            id="w-node-a6880751-85a1-73d5-6223-157ab81a55ac-2da5785d"
          >
            <div className="cases-card-item-content-wrapper">
              <div className="hflex-05rem_leftcenter">
                <img
                  src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6634d31999c671b0e98d4f9e_chuck-userpick.svg"
                  loading="lazy"
                  width="24"
                  alt=""
                />
                <div className="paragraph-style-table text-color-inverted">
                  Chuck
                </div>
              </div>
              <div className="cases-card-itm-title">
                <h3 className="heading-style-h4 text-color-inverted">
                  Helping a fintech go viral
                </h3>
                <div className="paragraph-style-body text-color-secondary">
                  Chuck wanted to make payments fun and viral. We helped design
                  a playful app experience that quickly captured user attention
                  and spread across social media.
                </div>
              </div>
            </div>
            <div className="cases-card-item-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660d2e44f9be6b2c6b04bf89_cases-4.webp"
                loading="eager"
                alt="Chuck payment app displayed on mobile phone"
              />
            </div>
          </div>:null
}
          {/* <div
            className="cases-grid-item background-color-secondary border-radius-primary"
            id="w-node-_4db10948-35de-fb69-d336-d47d74bf6e08-2da5785d"
          >
            <div className="cases-card-item-content-wrapper">
              <div className="hflex-05rem_leftcenter">
                <img
                  src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c00d4a803508ebbb75475_startup-08.webp"
                  loading="lazy"
                  width="24"
                  alt=""
                />
                <div className="paragraph-style-table">Nude</div>
              </div>
              <div className="cases-card-itm-title">
                <h3 className="heading-style-h4">
                  Making saving for a home easy
                </h3>
                <div className="paragraph-style-body text-color-secondary">
                  We helped Nude create a savings app that guides young people
                  to set aside money and plan for their first home, making the
                  process motivating and achievable.
                </div>
              </div>
            </div>
            <div className="cases-card-item-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660d42d94aa7e8ca13e7ec28_cases-6.webp"
                loading="eager"
                alt="Nude app screen with home savings goals"
              />
            </div>
          </div> */}

          {/* <div
            className="cases-grid-item is-horizontal background-color-secondary"
            id="w-node-_79ace377-de97-5a8e-5bbf-1b133cd74f4c-2da5785d"
          >
            <div className="cases-card-item-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/6613dc368e650e6c55a8f6e0_cases-7.webp"
                loading="eager"
                alt="Sadapay fintech app displayed on smartphone"
                className="misc_grid-offset-image-4"
              />
            </div>
            <div className="cases-card-item-content-wrapper">
              <div className="hflex-05rem_leftcenter">
                <img
                  src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660c0ef2961208970fa162bd_enterprises-09.webp"
                  loading="lazy"
                  width="24"
                  alt=""
                />
                <div className="paragraph-style-table  ">Sadapay</div>
              </div>
              <div className="cases-card-itm-title">
                <h3 className="heading-style-h4  ">
                  Designing Pakistan’s fastest-growing fintech
                </h3>
                <div className="paragraph-style-body text-color-secondary">
                  We designed Sadapay’s user experience from the ground up,
                  creating a modern and easy-to-use app that quickly became a
                  favorite among users in Pakistan.
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
