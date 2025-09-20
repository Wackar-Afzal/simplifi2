import { Linkedin, Mail, MessageCircleMore, MessageCircleMoreIcon, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
    return (
        <div className="footer-wrapper py-10 px-5 max-w-7xl mx-auto mt-20">
            <div className="flex justify-between items-center">
                <div>
                     <img
                            src="/logo.svg"
                            loading="lazy"
                            alt=""
                            className="w-[7rem]"
                        />
                
                </div>
                <div
                    id="w-node-_5ab5dc9a-cdec-672b-b43e-39b097ff44e3-2da5785d"
                    className="footer-grid-social"
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
            <div
                id="w-node-b6552f31-5db0-5f65-fbf0-ba9c2ec5a579-2da5785d"
                className="divider my-10"
            ></div>
            <div className="footer-grid">
                <div className="footer-location-wrapper">
                    <div className="paragraph-style-body">
                        UAE OFFICE
                        <br />
                        <p className="is-link">
                           Unit 208, Level 1,<br/>Gate Avenue – South Zone, DIFC, Dubai,<br/> UAE-P.O. Box 507211
                        </p>
                    </div>
                </div>
                <div className="footer-location-wrapper">
                    <div className="paragraph-style-body">
                        KSA OFFICE:
                        <br />
                        <p className="is-link">
                           Al Rabi District,<br/>Riyadh 13316,<br/>P.O. Box 12389
                        </p>
                    </div>
                    
                </div>
                <div className="footer-location-wrapper">
                    <div className="paragraph-style-body">
                        Middle East
                        <br />
                        <a href="mailto:middle.east@humbleteam.com" className="is-link">
                            middle.east@humbleteam.com
                            <br />
                        </a>
                    </div>
                    <div className="paragraph-style-body">
                        Voyager FZ LLC
                        <br />
                        Office 377, Ground floor,
                        <br />
                        DMC Building 5, Dubai 72201, UAE
                    </div>
                </div>
                <div className="footer-grid-card">
                    <img
                        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660ab991b4522a7e4bd62b9f_footer-banner-label.svg"
                        loading="lazy"
                        id="w-node-_5b144210-9a2b-712f-0ba2-5940534911d6-2da5785d"
                        alt=""
                        className="margin_top--035rem"
                    />
                    <div
                        id="w-node-d48fe428-e64b-1aa8-c2fc-d1ed84b7a195-2da5785d"
                        className="paragraph-style-body is-bold"
                    >
                        Tune in to our podcast
                        <br />
                        <a
                            href="https://podcast.humbleteam.com/?utm_source=humbleteam-website&amp;utm_medium=website&amp;utm_content=footer-link"
                            className="is-link"
                        >
                            CTRL SHIFT ↗
                        </a>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/660582dbf65d24242da5782d/660ab79e0b6882c961ae5447_footer-banner-mic.svg"
                        loading="lazy"
                        id="w-node-_9383bbfb-449d-7fe5-6d91-1c3d6760ebdc-2da5785d"
                        alt=""
                        className="image"
                    />
                </div>
            </div>
        </div>
    );
};
