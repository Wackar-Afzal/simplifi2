import Link from "next/link";
import React from "react";
import { ContactUs } from "./ContactUs";

export default function PageFooter({ data }) {
  return (
    <section className={`mx-auto  !bg-white`}>
      <div className={`mx-auto max-w-7xl flex flex-col justify-center items-center gap-8 `}>

        {data?.heading ? <h2 className={`heading-style-h2_fintech w-full !text-center mx-auto !text-black`}>{data.heading}</h2> : null}
        {data?.subheading ? <p className={`paragraph-style-body !text-center !text-black mb-10`}>{data.subheading}</p> : null}
        {/* {data?.buttonLink?<Link href={data.buttonLink} className="contained-button !max-w-[max-content ]">{data.buttonText}</Link>:null} */}
      
      </div>
      <div className="px-2 mt-7 md:mt-15 mx-auto max-w-7xl">
          <ContactUs />
        </div>
    </section>
  );
}
