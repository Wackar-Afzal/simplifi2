import React from "react";

export default function HeroProduct() {
  return (
    <>
    <div className="px-8 product-hero py-30">
      <h1 className="h1 hero-heading">Interfaces and digital brands that accelerate growth</h1>
    </div>
 <section className="section is-fluid">
      <div className="hero-img-wrapper">
        {/* Lottie Animation */}
        <div
          className="hero-scroll-lottie"
          data-w-id="dc6c6667-14ff-6faf-cdeb-7c649e2ec8fa"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/6790d87e6b13913d42b5868b_lottieflow-scroll-down-03-ffffff-easey.json"
          data-loop="1"
          data-direction="1"
          data-autoplay="1"
          data-is-ix2-target="0"
          data-renderer="svg"
          data-default-duration="0"
          data-duration="2.5"
        >
          {/* Inline SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1000 1000"
            width="1000"
            height="1000"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: "visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="1000" height="1000" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_2)">
              <g
                transform="matrix(1,0,0,1,174.75,452.93841552734375)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,325.25,262.75)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="1"
                    strokeWidth="80"
                    d="M123.0989990234375,-60.5989990234375 C106.52400207519531,-44.02399826049805 -0.25,62.75 -0.25,62.75 C-0.25,62.75 -106.56199645996094,-43.5620002746582 -123.0989990234375,-60.0989990234375"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.7193397879600525,0.6946583986282349,-0.6946583986282349,0.7193397879600525,498.80828857421875,710.1649169921875)"
                opacity="1"
                style={{ display: "block" }}
              >
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d="M68.28,68.28 C68.28,68.28 28.28,68.28 28.28,68.28 C28.28,68.28 28.28,28.28 28.28,28.28 C28.28,28.28 68.28,28.28 68.28,28.28 C68.28,28.28 68.28,68.28 68.28,68.28z"
                ></path>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,48.284000396728516,48.284000396728516)"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="1"
                    strokeWidth="40"
                    d="M20,20 C20,20 -20,20 -20,20 C-20,20 -20,-20 -20,-20 C-20,-20 20,-20 20,-20 C20,-20 20,20 20,20z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Desktop Video */}
        <div className="hero-video w-embed">
          <video width="100%" height="auto" autoPlay muted playsInline loop>
            <source
              src="https://files.asad.digital/video/humbleteam/hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Mobile Video */}
        <div className="hero-video is-mobile w-embed">
          <video width="auto" height="100%" autoPlay muted playsInline loop>
            <source
              src="https://files.asad.digital/video/humbleteam/hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>

  </>
  );
}