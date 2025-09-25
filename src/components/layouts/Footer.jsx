import { Linkedin, Mail, MessageCircleMore, MessageCircleMoreIcon, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
    return (
        <div className="footer-wrapper py-20 px-5 max-w-7xl mx-auto mt-0">
            <div className="flex justify-between items-center flex-wrap gap-8">
                <div>
                     <h3 className="heading-style-h2_fintech">SimpliFi Card Solutions</h3>
                         <div className="paragraph-style-body">
                        We power the cards behind <span className="text-color-accent">your brand.</span>
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
                        href="https://www.instagram.com/humbleteam.agency/"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                      <MessageCircleMoreIcon />
                    </a>
                    <a
                        href="https://clutch.co/profile/humbleteam"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                         <Mail />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/humbleteam/"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                          <Linkedin />
                    </a>
                     <a
                        href="https://www.linkedin.com/company/humbleteam/"
                        target="_blank"
                        className="hover:text-primary w-inline-block"
                    >
                          <Phone />
                    </a>
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
                        <br />
                    <div className="paragraph-style-body">
                        Flat No. 1390, Building 2102,
                        <br />
                        Road/Street 2825, Block 428, 
                        <br />
                       Bahrain, AL SEEF
                    </div>
                </div>
                <div className="footer-location-wrapper">
                      UAE
                        <br />
                     <div className="paragraph-style-body">
                        Unit 208, Level 1, 
                        <br />
                        Gate Avenue - South Zone,
                        <br />
                         DIFC, Dubai
                    </div>
                    
                </div>
                <div className="footer-location-wrapper">
                    <div className="paragraph-style-body">
                        Pakistan
                        <br />
                        
                    </div>
                    <div className="paragraph-style-body">
                        Workhall, Plot No.32/75, 
                        <br />
                        Tipu Sultan,
                        <br />
                         Karachi
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
        </div>
    );
};
