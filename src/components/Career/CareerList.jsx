import React from "react";
// JSON data for careers
// const careerList={
//     heading:"Why build with SimpliFi",
//     descrip:"",
//      careerPositions:[
//   {
//     title: "Modular by design",
//     href: "/careers/communication-designer",
//     location: "Prague or remote",
//     descrip: "Pick the layers you need and skip what you don’t. Build faster without compromising on your vision."
//   },
//   {
//     title: "Made to scale",
//     href: "/careers/senior-designer-product",
//     location: "Prague or remote",
//     descrip: "Handle millions of transactions, complex approval flows, and real-time controls without friction."
//   },
//   {
//     title: "Fully white-label",
//     href: "/careers/design-lead-product",
//     location: "Prague or remote",
//     descrip: "Your branding. Your workflows. We stay invisible so your brand stays front and center."
//   },
//   {
//     title: "Built for compliance",
//     href: "/careers/creative-director-product",
//     location: "Prague or remote",
//     descrip: "We handle KYC, AML, 3DS, PCI-DSS, and more so you can focus on your product."
//   }
// ]
// }

const CareerList = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="">
        <h2 className="heading-style-h2_fintech !text-center mb-6">
          {data.heading}
        </h2>
        <p className="paragraph-style-body !text-center mb-12">
          {data.descrip}
        </p>
      </div>

      <div className="careers-grid">
        <div className="w-dyn-list">
          <div role="list" className="careers-list w-dyn-items">
            {data.careerPositions.map((position, index) => (
              <div key={index} role="listitem" className="w-dyn-item">
                <div className="careers-link w-inline-block">
                  <div className="flex items-center justify-start gap-2 mb-5">
                    {position?.icon?
                    <div className="w-10 flex items-center">
                      <img src={position.icon}/>
                    </div>:null}
                    <h2 className="features-title !text-left ">
                      {position.title}
                    </h2>
                  </div>
                  <div className="careers-location-wrapper">
                    {/* <div className="body-medium">{position.location}</div> */}
                    <div className="body-medium">{position.descrip}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerList;
