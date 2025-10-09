import { Linkedin, Mail, MessageCircleMore, Facebook, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
    return (
        <div className="footer-wrapper py-20 px-5 max-w-7xl mx-auto mt-0">
            <div className="flex justify-between items-center flex-wrap gap-8">
                <div>
                     <h3 className="tracking-[-0.04em] text-[2.8rem] font-normal leading-[1.06em]">SimpliFi Card Solutions</h3>
                         <div className="paragraph-style-body">
                         We power the cards that drive your brand and platform.
                    </div>
                
                </div>
                <div>
                    <p className="text-[22px]">Stay connected</p>
                    <p> Follow us on social media <br/> for updates and news:</p>
                <div
                    id="w-node-_5ab5dc9a-cdec-672b-b43e-39b097ff44e3-2da5785d"
                    className="footer-grid-social mt-2"
                >
                    <a
                        href="https://www.facebook.com/Simplifipay/"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                      <Facebook />
                    </a>
                    <a
                        href="mailto:sales@simplifipay.com"
                        className="hover:text-primary w-inline-block"
                    >
                         <Mail />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/simplifipay/"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                          <Linkedin />
                    </a>
                     {/* <a
                        href="tel:+971566010001"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                          <Phone />
                    </a> */}
                </div>
                </div>
            </div>
            <div
                id="w-node-b6552f31-5db0-5f65-fbf0-ba9c2ec5a579-2da5785d"
                className="divider my-10"
            ></div>
            <div className="footer-grid">
                <div className="footer-location-wrapper">
                    Bahrain
                    <div className="paragraph-style-body text-gray-500">
                        Building 2102, Road/Street 2825, Block 428,
                        Al Seef, Manama
                    </div>
                </div>

                <div className="footer-location-wrapper">
                    UAE
                    <div className="paragraph-style-body text-gray-500">
                        Unit 208, Level 1, 
                        Gate Avenue - South Zone,
                        DIFC, Dubai
                    </div>
                </div>
                <div className="footer-location-wrapper">
                    Egypt
                    <div className="paragraph-style-body text-gray-500">
                        22 Sheikh Rihan Street, Founder Spaces Abdeen, Cairo
                    </div>
                </div>
                <div className="footer-location-wrapper">
                    Pakistan
                    <div className="paragraph-style-body text-gray-500">
                        Workhall, Plot No.32/75, 
                        Tipu Sultan,
                        Karachi
                    </div>
                </div>
                <div className="footer-location-wrapper">
                    Saudi Arabia
                    <div className="paragraph-style-body text-gray-500">
                        Al Rabi District, 13316 Riyadh
                    </div>
                </div>
                <div className="">
                    {/* <img
                        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660ab991b4522a7e4bd62b9f_footer-banner-label.svg"
                        loading="lazy"
                        id="w-node-_5b144210-9a2b-712f-0ba2-5940534911d6-2da5785d"
                        alt=""
                        className="margin_top--035rem"
                    /> */}
                    <div
                        id="w-node-d48fe428-e64b-1aa8-c2fc-d1ed84b7a195-2da5785d"
                        className="paragraph-style-body is-bold flex flex-col gap-2"
                    >
                          <a
                            href="/terms-and-conditions"
                            className="paragraph-style-body is-bold hover:text-blue-600 transition-colors"
                        >
                             Terms and Conditions
                        </a>
                       
                        
                        <a
                            href="/privacy-policy"
                            className="paragraph-style-body is-bold hover:text-blue-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        
                        {/* <a
                            href="/download"
                            className="paragraph-style-body is-bold hover:text-blue-600 transition-colors"
                        >
                            Download App
                        </a> */}
                    </div>
                    {/* <img
                        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660ab79e0b6882c961ae5447_footer-banner-mic.svg"
                        loading="lazy"
                        id="w-node-_9383bbfb-449d-7fe5-6d91-1c3d6760ebdc-2da5785d"
                        alt=""
                        className="image"
                    /> */}
                </div>
            </div>
            
            {/* Copyright and Regulatory Information */}
            <div className="mt-12 pt-8 border-t border-gray-300">
                <div className="text-left">
                    <p className="text-sm font-semibold mb-4">
                        © 2025 SimpliFi. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 !text-left max-w-5xl leading-relaxed">
                        SimpliFi is regulated by the Dubai Financial Services Authority (DFSA). It holds a Category 4 license allowing it to advise on and arrange money services products and provide account information and payment initiation services. All products and services are offered in accordance with applicable laws and regulations. The information provided on this website is for general informational purposes only and does not constitute an offer, solicitation, or financial advice.
                    </p>
                </div>
            </div>
        </div>
    );
};
