import Link from "next/link";
import React from "react";

export default function PageFooter({ data }) {
  return (
    <section className={`section_services  mx-auto text-white ${data["bg-dark"] ? "" : "!bg-white"}`}>
      <div className="mx-auto max-w-6xl flex flex-col justify-center items-center gap-8 py-20">
      
            <h2 className={`heading-style-h2_fintech w-full !text-center mx-auto ${data["bg-dark"]?"":"!text-black"} `}>{data.heading}</h2>
            <p className={`paragraph-style-body ${data["bg-dark"]?"":"!text-black"}`}>{data.subheading}</p>
            {data?.buttonLink?<Link href={data.buttonLink} className="contained-button !max-w-[max-content ]">{data.buttonText}</Link>:null}
      </div>
    </section>
  );
}
