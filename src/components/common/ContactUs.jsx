"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // nice arrow icon

export const ContactUs = () => {
    const [selected, setSelected] = useState("Clutch (TOP 20 Best UX agencies)");
    const [open, setOpen] = useState(false);

    const options = [
        "Clutch (TOP 20 Best UX agencies)",
        "Behance",
        "Accelerator",
        "Social media",
        "Friend/Colleague",
        "Other",
    ];

    return (
        <div className="py-16 px-6" style={{
            borderBottom: "1px solid #0000001a"

        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="heading-style-h2_big is-cta-title text-black">
                        SimpliFi is ready <br/> for you
                    </h1>
                </div>

                <div>
                    <div className="form-group">
                        <label className="form-label ">How did you hear about us?</label>
                        <div className="relative w-full mt-3">
                            <button
                                onClick={() => setOpen(!open)}
                                className="w-full flex items-center justify-between custom-select"
                            >
                                <span className="!text-black">{selected}</span>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform !text-black ${open ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {open && (
                                <ul className="absolute z-10 mt-2 w-full custom-option ">
                                    {options.map((opt) => (
                                        <li
                                            key={opt}
                                            onClick={() => {
                                                setSelected(opt);
                                                setOpen(false);
                                            }}
                                            className={`px-4 py-2 cursor-pointer !text-black  link ${selected === opt ? "  " : " link-active text-black"
                                                }`}
                                        >
                                            {opt}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="from-group mt-8">
                        <label htmlFor="" className="form-label">Your email</label>
                        <div className="mt-3">
                            <input type="text" placeholder="Email" className="custom-input w-full" />
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
