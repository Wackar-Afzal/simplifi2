"use client";
import React, { useState } from "react";
const HeroSection = ({data}) => {
  console.log(data,"datataat")
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <>
      <section className="section_hero">
        <img
          src={data.background}
          loading="lazy"
          width="1172.5"
          sizes="(max-width: 1279px) 100vw, 1172.5px"
          alt=""
          className="hero-bg"
        />
        <div className="container-global is-small">
          <div className="hero-wrapper">
            <div className="hero-left">
              <h1 className="heading-style-h1">{data.heading}</h1>
              <p className="hero-desc">
                {data.descrip}
              </p>
            </div>
            <div className="hero-tabs-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f49322a_hero-left.avif"
                loading="lazy"
                width="705.5"
                sizes="(max-width: 767px) 100vw, 705.5px"
                alt=""
                srcSet="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f49322a_hero-left.avif 500w, https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f49322a_hero-left.avif 1411w"
                className="hero-bg-left"
              />
              <img
                src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f49322b_hero-right.avif"
                loading="lazy"
                width="334"
                alt=""
                className="hero-bg-right"
              />
              <div
                data-w-id="9a75a3f4-0b3e-4b99-16fb-ce152753a987"
                data-current={activeTab}
                data-easing="ease"
                data-duration-in="300"
                data-duration-out="0"
                className="hero-tabs w-tabs"
              >
                <div className="hero-tabs-menu w-tab-menu" role="tablist">
                  <a
                    data-w-tab="Tab 1"
                    className={`hero-tab-link w-inline-block w-tab-link ${activeTab === "Tab 1" ? "w--current" : ""
                      }`}
                    id="w-tabs-0-data-w-tab-0"
                    href="#w-tabs-0-data-w-pane-0"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-0"
                    aria-selected={activeTab === "Tab 1"}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Tab 1");
                    }}
                  >
                    <div className="hero-tab-icon w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.0112 6.22181C15.1396 5.836 15.205 5.43206 15.2051 5.02546C15.2051 4.35265 15.0258 3.69199 14.6859 3.11138C14.0028 1.9223 12.7356 1.18818 11.3641 1.18818C11.0939 1.18818 10.8245 1.21672 10.5603 1.27331C10.2049 0.872947 9.76877 0.55246 9.28051 0.33298C8.79226 0.113499 8.26303 1.17013e-05 7.72771 0H7.70367L7.69465 5.30453e-05C6.03358 5.30453e-05 4.5605 1.07189 4.04987 2.65202C3.5213 2.76028 3.02196 2.98021 2.58527 3.29707C2.14858 3.61394 1.78461 4.02044 1.51774 4.48935C1.17881 5.07345 1.00021 5.73672 1 6.41203C1.00013 7.36109 1.35243 8.27635 1.98867 8.98056C1.86024 9.36636 1.79474 9.77031 1.79468 10.1769C1.79474 10.8497 1.97396 11.5104 2.31391 12.091C2.71817 12.7949 3.33554 13.3521 4.07698 13.6825C4.81842 14.0128 5.64561 14.0992 6.43928 13.929C6.79468 14.3294 7.23089 14.6499 7.71918 14.8694C8.20746 15.0888 8.73673 15.2023 9.27207 15.2024H9.29612L9.30588 15.2023C10.9679 15.2023 12.4405 14.1304 12.9511 12.5489C13.4797 12.4406 13.979 12.2206 14.4157 11.9038C14.8524 11.5869 15.2164 11.1804 15.4833 10.7115C15.8218 10.1279 16.0001 9.46518 16 8.7905C15.9999 7.84145 15.6474 6.926 15.0112 6.22181ZM9.29707 14.2085H9.29314C8.62812 14.2083 7.9842 13.975 7.47338 13.5492C7.50371 13.5328 7.53369 13.5158 7.56329 13.4982L10.5902 11.7498C10.6658 11.7068 10.7286 11.6445 10.7723 11.5694C10.816 11.4943 10.839 11.4089 10.839 11.322V7.05168L12.1185 7.79042C12.1252 7.79377 12.131 7.79872 12.1353 7.80484C12.1396 7.81096 12.1424 7.81806 12.1433 7.82551V11.3595C12.1416 12.9307 10.8684 14.2053 9.29707 14.2085ZM3.17605 11.5942C2.92602 11.1619 2.7943 10.6713 2.79413 10.1719C2.79413 10.009 2.80835 9.84573 2.83606 9.68523C2.85856 9.69872 2.89783 9.7227 2.92602 9.73889L5.95296 11.4873C6.02842 11.5314 6.11424 11.5546 6.20163 11.5546C6.28901 11.5545 6.37482 11.5313 6.45027 11.4872L10.1458 9.35336V10.8309L10.1459 10.8334C10.1459 10.8406 10.1442 10.8476 10.1411 10.8539C10.1379 10.8603 10.1333 10.8658 10.1276 10.8701L7.06763 12.6369C6.63466 12.886 6.14389 13.0173 5.64433 13.0174C5.14425 13.0173 4.65297 12.8858 4.21975 12.636C3.78653 12.3862 3.42661 12.027 3.17605 11.5942ZM2.37972 4.98613C2.71218 4.40868 3.23712 3.96654 3.86268 3.73708C3.86268 3.76314 3.86119 3.80931 3.86119 3.84137V7.33828L3.86114 7.34115C3.86115 7.42798 3.88414 7.51326 3.92778 7.58832C3.97141 7.66339 4.03413 7.72557 4.10958 7.76856L7.80515 9.9021L6.52579 10.6408C6.51948 10.645 6.51224 10.6475 6.50471 10.6482C6.49718 10.6489 6.4896 10.6477 6.48264 10.6448L3.42237 8.87654C2.98975 8.62592 2.63061 8.26601 2.38092 7.83286C2.13123 7.39971 1.99977 6.90854 1.99971 6.40858C1.9999 5.9094 2.13083 5.41883 2.37972 4.98613ZM12.8914 7.43228L9.19581 5.29847L10.4752 4.56C10.4815 4.55583 10.4888 4.55329 10.4963 4.55261C10.5038 4.55192 10.5114 4.55311 10.5184 4.55607L13.5786 6.32281C14.0116 6.57303 14.3711 6.93276 14.6211 7.36586C14.8711 7.79897 15.0027 8.29022 15.0028 8.79029C15.0028 9.98388 14.258 11.0519 13.1382 11.4641V7.86266C13.1383 7.86133 13.1383 7.85995 13.1383 7.85862C13.1383 7.77212 13.1155 7.68715 13.0721 7.61229C13.0287 7.53743 12.9664 7.47534 12.8914 7.43228ZM14.1648 5.51571C14.135 5.49748 14.1051 5.47961 14.0749 5.4621L11.0479 3.71362C10.9725 3.66964 10.8867 3.64646 10.7993 3.64643C10.712 3.64646 10.6262 3.66964 10.5507 3.71362L6.85512 5.84747V4.36994L6.85506 4.36739C6.85506 4.35295 6.86191 4.33937 6.87343 4.33071L9.93338 2.56546C10.3662 2.31593 10.857 2.18457 11.3566 2.18454C12.93 2.18454 14.2059 3.46045 14.2059 5.03379C14.2058 5.19525 14.1921 5.35657 14.1648 5.51571ZM6.15952 8.14915L4.87985 7.41041C4.87313 7.40706 4.86735 7.40211 4.863 7.39599C4.85866 7.38987 4.8559 7.38277 4.85495 7.37533V3.84126C4.85564 2.26877 6.13155 0.993925 7.7042 0.993925C8.37027 0.994063 9.01526 1.22739 9.52726 1.65343C9.50422 1.66601 9.46404 1.68819 9.43735 1.70438L6.41041 3.45281C6.33488 3.49578 6.27208 3.55798 6.22839 3.63309C6.18469 3.7082 6.16167 3.79354 6.16165 3.88043V3.88324L6.15952 8.14915ZM6.85453 6.6507L8.50048 5.70003L10.1464 6.65007V8.55077L8.50048 9.50085L6.85453 8.55077V6.6507Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>ChatGPT</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className={`hero-tab-link w-inline-block w-tab-link ${activeTab === "Tab 2" ? "w--current" : ""
                      }`}
                    id="w-tabs-0-data-w-tab-1"
                    href="#w-tabs-0-data-w-pane-1"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-1"
                    aria-selected={activeTab === "Tab 2"}
                    tabIndex={activeTab === "Tab 2" ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Tab 2");
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f6_icon.svg"
                      alt=""
                    />
                    <div>Gemini</div>
                  </a>
                  <a
                    data-w-tab="Tab 3"
                    className={`hero-tab-link w-inline-block w-tab-link ${activeTab === "Tab 3" ? "w--current" : ""
                      }`}
                    id="w-tabs-0-data-w-tab-2"
                    href="#w-tabs-0-data-w-pane-2"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-2"
                    aria-selected={activeTab === "Tab 3"}
                    tabIndex={activeTab === "Tab 3" ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Tab 3");
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f7_icon-1.svg"
                      alt=""
                    />
                    <div>Meta AI</div>
                  </a>
                  <a
                    data-w-tab="Tab 4"
                    className={`hero-tab-link w-inline-block w-tab-link ${activeTab === "Tab 4" ? "w--current" : ""
                      }`}
                    id="w-tabs-0-data-w-tab-3"
                    href="#w-tabs-0-data-w-pane-3"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-3"
                    aria-selected={activeTab === "Tab 4"}
                    tabIndex={activeTab === "Tab 4" ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Tab 4");
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f5_icon-2.svg"
                      alt=""
                    />
                    <div>Cohere</div>
                  </a>
                  <a
                    data-w-tab="Tab 5"
                    className={`hero-tab-link w-inline-block w-tab-link ${activeTab === "Tab 5" ? "w--current" : ""
                      }`}
                    id="w-tabs-0-data-w-tab-4"
                    href="#w-tabs-0-data-w-pane-4"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-4"
                    aria-selected={activeTab === "Tab 5"}
                    tabIndex={activeTab === "Tab 5" ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Tab 5");
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f8_icon-3.svg"
                      alt=""
                    />
                    <div>Perplexity</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className={`w-tab-pane ${activeTab === "Tab 1" ? "w--tab-active" : ""
                      }`}
                    id="w-tabs-0-data-w-pane-0"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-0"
                  >
                    <div
                      data-is-ix2-target="1"
                      className="hero-lottie-animation"
                      data-w-id="fc18090a-e0ca-b074-1f0f-8ed9f21c6349"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f3_chat.lottie"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="0"
                    ></div>
                    <div className="hero-lottie-trigger"></div>
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className={`w-tab-pane ${activeTab === "Tab 2" ? "w--tab-active" : ""
                      }`}
                    id="w-tabs-0-data-w-pane-1"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-1"
                  >
                    <div
                      data-is-ix2-target="1"
                      className="hero-lottie-animation"
                      data-w-id="6481c442-2bee-effb-383a-a5f4bc636eba"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f1_Gemini.lottie"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    data-w-tab="Tab 3"
                    className={`w-tab-pane ${activeTab === "Tab 3" ? "w--tab-active" : ""
                      }`}
                    id="w-tabs-0-data-w-pane-2"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-2"
                  >
                    <div
                      data-is-ix2-target="1"
                      className="hero-lottie-animation"
                      data-w-id="1ddab1b8-03ab-0a4f-d7f3-b5cdeb4cc0c6"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493239_meta.json"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    data-w-tab="Tab 4"
                    className={`w-tab-pane ${activeTab === "Tab 4" ? "w--tab-active" : ""
                      }`}
                    id="w-tabs-0-data-w-pane-3"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-3"
                  >
                    <div
                      data-is-ix2-target="1"
                      className="hero-lottie-animation"
                      data-w-id="07faaec5-62e7-785c-8131-075c7d0dc045"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f0_cohere.lottie"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    data-w-tab="Tab 5"
                    className={`w-tab-pane ${activeTab === "Tab 5" ? "w--tab-active" : ""
                      }`}
                    id="w-tabs-0-data-w-pane-4"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-4"
                    style={{
                      opacity: activeTab === "Tab 5" ? 1 : 0,
                      transition: "all, opacity 300ms",
                    }}
                  >
                    <div
                      data-is-ix2-target="1"
                      className="hero-lottie-animation"
                      data-w-id="ad2ca1c4-68ac-dc7f-8ced-f2833c4b1aa6"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f4931f4_Perplexity.lottie"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="0"
                      data-duration="0"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;















