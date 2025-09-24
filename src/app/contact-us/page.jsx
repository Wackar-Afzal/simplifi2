import { ContactUs } from '@/components/common/ContactUs'
import PageFooter from '@/components/common/PageFooter'
import DemoForm from '@/components/ContactUs/DemoForm'
import { Footer } from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import React from 'react'
import data from '@/utils/contact/contact.json'
const page = () => {
  return (
    <>
    <Navbar/>
    {/* <ContactUs/> */}
      <div className="h-auto flex items-center justify-center w-full my-20">
        <div
    
          className="w-full gap-[1rem] bg-white overflow-hidden flex flex-col md:flex-row-reverse justify-center h-full md:h-[80vh] overflow-y-scroll !snap-y no-scrollbar"
        >
          <div className="static md:sticky top-0 w-[100%] md:w-[40%] text-white rounded-2xl overflow-hidden">
            <img className="m-auto rounded-2xl" src="/01.png" alt="" />
          </div>

          <div className="w-[100%] md:w-[50%] p-0 md:p-10 gap-[3rem]">
            <div className='flex flex-col gap-8 items-start justify-start mb-[2rem]'>
              <h1 className="h1 !text-[3rem] font-bold w-full md:w-[75%] mb-[1rem]">
                Need assistance?

              </h1>
              <p className="p  !text-[24px] w-full md:w-[85%] mb-[1rem] !text-gray-600">
                Our team is ready to help you with any questions or requests.
              </p>
            </div>
            <DemoForm/>
          </div>
        </div>
      </div>
      {/* <PageFooter data={data.contact.footer}/> */}
      <Footer/>
    </> 
    
  )
}

export default page