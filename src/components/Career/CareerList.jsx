import React from 'react'
// JSON data for careers
const careerPositions = [
  {
    title: "KYC and AML pre-integrated",
    href: "/careers/communication-designer",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "PCI-DSS ready",
    href: "/careers/senior-designer-product",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "No licensing or approvals needed",
    href: "/careers/design-lead-product",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "3DS and fraud management built-in",
    href: "/careers/creative-director-product",
    location: "Prague or remote",
    type: "full-time"
  },
//   {
//     title: "Project manager",
//     href: "/careers/project-manager",
//     location: "Remote",
//     type: "full-time"
//   }
]
const CareerList = () => {
  return (
        <section className="section slider-section is-careers-list">
        <div className="">
          <div className="careers-grid">
            <div className="body-large">
                <h2>Built-in security and compliance</h2>
                <p>We do the heavy lifting</p>
                </div>
            <div className="w-dyn-list">
              <div role="list" className="careers-list w-dyn-items">
                {careerPositions.map((position, index) => (
                  <div key={index} role="listitem" className="w-dyn-item">
                    <a href={position.href} className="careers-link w-inline-block">
                      <h2 className='h2 pb-5'>{position.title}</h2>
                      {/* <div className="careers-location-wrapper">
                        <div className="body-medium">{position.location}</div>
                        <div className="body-small">•</div>
                        <div className="body-medium">{position.type}</div>
                      </div> */}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default CareerList