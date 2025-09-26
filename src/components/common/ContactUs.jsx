"use client";
import React, { useState } from "react";

export const ContactUs = () => {
    const [hearAboutUs, setHearAboutUs] = useState("");

    return (
        <div className="py-16 px-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="heading-style-h2_big is-cta-title text-black">
                        SimpliFi is ready <br/> for you
                    </h1>
                </div>

                <div>
                    <div className="form-group">
                        <label className="form-label">How did you hear about us?</label>
                        <div className="mt-3">
                            <input 
                                type="text" 
                                placeholder="Tell us how you heard about us" 
                                className="custom-input w-full" 
                                value={hearAboutUs}
                                onChange={(e) => setHearAboutUs(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="from-group mt-8">
                        <label htmlFor="" className="form-label">Your email</label>
                        <div className="mt-3">
                            <input type="text" placeholder="Email" className="custom-input w-full" />
                        </div>
                    </div>
                    <div className="from-group mt-8">
                        <label htmlFor="" className="form-label">Your contact number</label>
                        <div className="mt-3">
                            <input type="tel" placeholder="Contact number" className="custom-input w-full" />
                        </div>
                    </div>
                    <div className="from-group mt-8">
                        <label htmlFor="" className="form-label">Tell us about your business
                        </label>
                        <div className="mt-3">
                            <textarea type="text" maxLength="5000" placeholder="Your Text" className="custom-input is-textarea  w-full" />
                        </div>
                    </div>
                    <div className="from-group py-8">
                        <label htmlFor="" className="form-label">We’ll respond within 24 hours with the right card solution for your needs, a cost estimate, and a clear timeline.</label>
                    </div>
                    <button className="button-submit w-full mb-8">Get in Touch</button>
                    {/* <div className="form-info">Prefer email? Reach out at <a href="mailto:hi@humbleteam.com" className="is-link_alt text-color-accent">hi@humbleteam.com</a></div> */}
                </div>
            </div>
        </div>
    );
};
