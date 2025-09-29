import React from "react";

export default function DownloadPage() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <section className=" flex gap-10 justify-between items-center max-[600px]:items-start pt-[30px] pb-[30px] max-[500px]:flex-col max-[500px]:items-start">
        <div className="w-full md:w-[59%] pl-4 ">
          <h1 className="h1 hero-heading  mb-5">
            Take Control on the Go
          </h1>
          <p className=" mb-[35px]">
            Track loads, approve requests, and manage your<br />
            card securely with the SimpliFi Go App.
          </p>
          <div className="flex">
            <a 
              href="https://apps.apple.com/pk/app/simplifi-go/id6739935320" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{textDecoration: 'none'}}
            >
              <img 
                src="download/app_store.svg" 
                alt="Download on the App Store" 
                width="150" 
                style={{display: 'block', border: '0', height: 'auto'}}
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.simplifi.app&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{textDecoration: 'none'}}
            >
              <img 
                src="download/play_store.svg" 
                alt="Get it on Google Play" 
                width="150" 
                style={{display: 'block', border: '0', height: 'auto'}}
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-center ">
          <img src="download/footer_phone_2.png" className="w-full sm:hidden" alt="SimpliFi Go App" />
          <img src="download/footer_phone.svg" className="hidden sm:w-3/5 sm:block" alt="SimpliFi Go App" />
        </div>
      </section>
    </div>
  );
}
