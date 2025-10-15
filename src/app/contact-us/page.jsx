import { ContactUs } from '@/components/common/ContactUs'
import PageFooter from '@/components/common/PageFooter'
import DemoForm from '@/components/ContactUs/DemoForm'
// Navbar and Footer provided by root layout
import React from 'react'
import data from '@/utils/contact/contact.json'
import ClientsMarquee from '@/components/Product2/ClientsMargquee'
import { API_ENDPOINTS } from "@/varConstant";

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[clientMarquee][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.CONTACT}${queryParams}`, {
      next: { revalidate: 2 },
    });

    if (!response.ok) {
      console.error("Strapi API fetch failed:", response.status);
      return null;
    }

    const jsonResponse = await response.json();
    return jsonResponse?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    return null;
  }
}

export default async function page() {
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.hero?.heading || data.contact.hero.heading,
    descrip: strapiData?.hero?.descrip || data.contact.hero.descrip,
    bckgroundImage: strapiData?.hero?.bckgroundImage?.url || data.contact.hero.bckgroundImage,
  };

  // Merge clientMarquee data with fallback
  const clientMarqueeData = {
    heading: strapiData?.clientMarquee?.heading || data.contact.clientMarquee.heading,
    clientLogos: strapiData?.clientMarquee?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Partner",
      logo: client.url || client.logo,
    })) || data.contact.clientMarquee.clientLogos,
  };

  const mergedData = {
    contact: {
      hero: heroData,
      clientMarquee: clientMarqueeData,
    }
  };

  return (
  <>
    {/* <ContactUs/> */}
      <div className="h-auto flex items-center justify-center w-full my-10 p-4">
        <div
    
          className="w-full gap-[1rem] bg-white overflow-hidden flex flex-col md:flex-row-reverse justify-center h-full md:h-[80vh] overflow-y-scroll !snap-y no-scrollbar"
        >
          <div className="static md:sticky top-0 w-[100%] md:w-[40%] text-white rounded-2xl overflow-hidden">
            <img className="m-auto rounded-2xl" src={mergedData.contact.hero.bckgroundImage} alt="" />
          </div>

          <div className="w-[100%] md:w-[50%] p-0 md:p-10 gap-[3rem]">
            <div className='flex flex-col gap-8 items-start justify-start mb-[2rem]'>
              <h1 className="h1 !text-[3rem] font-bold w-full md:w-[75%] mb-[1rem]">
              {mergedData.contact.hero.heading}

              </h1>
              <p className="p  !text-[24px] w-full md:w-[85%] mb-[1rem] !text-gray-600">
                {mergedData.contact.hero.descrip}
              </p>
            </div>
            <DemoForm/>
          </div>
        </div>
      </div>
      <div className='p-4 lg:p-0 my-10 md:my-30'>
      <ClientsMarquee data={mergedData.contact.clientMarquee}/>
      </div>
      {/* <PageFooter data={data.contact.footer}/> */}
      {/* Footer provided by root layout */}
    </> 
    
  )
}