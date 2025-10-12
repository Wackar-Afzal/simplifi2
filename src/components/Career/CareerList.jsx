import React from "react";


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
