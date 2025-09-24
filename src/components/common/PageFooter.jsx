import Link from "next/link";
import React from "react";
import { ContactUs } from "./ContactUs";

export default function PageFooter({ data }) {
  return (
    <section className={`section_services  mx-auto  !bg-white`}>
      <div className={`mx-auto max-w-6xl flex flex-col justify-center items-center gap-8 ${data?.heading?"py-20":""}`}>
      
            {data?.heading?<h2 className={`heading-style-h2_fintech w-full !text-center mx-auto !text-black`}>{data.heading}</h2>:null}
            {data?.subheading?<p className={`paragraph-style-body !text-black`}>{data.subheading}</p>:null}
            {/* {data?.buttonLink?<Link href={data.buttonLink} className="contained-button !max-w-[max-content ]">{data.buttonText}</Link>:null} */}
            <ContactUs/>
      </div>
    </section>
  );
}
