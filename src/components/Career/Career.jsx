import React from 'react'
import Navbar from '../layouts/Navbar'
import { ContactUs } from '../common/ContactUs'
import { Footer } from '../layouts/Footer'

// JSON data for careers
const careerPositions = [
  {
    title: "Communication designer",
    href: "/careers/communication-designer",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "Senior designer, product",
    href: "/careers/senior-designer-product",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "Design lead, product",
    href: "/careers/design-lead-product",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "Creative director, product",
    href: "/careers/creative-director-product",
    location: "Prague or remote",
    type: "full-time"
  },
  {
    title: "Project manager",
    href: "/careers/project-manager",
    location: "Remote",
    type: "full-time"
  }
]

export default function Career() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="section slider-section is-careers-hero">
        <div className="container">
          <div className="careers-grid">
            <div
              id="w-node-a1858a9d-4769-a235-9986-a642b0426717-838ded47"
              className="careers-hero-wrapper"
            >
              <h1 className="careers-hero-heading h1">
                There you are.{" "}
                <span className="text-color-accent">
                  We’ve been waiting for you
                </span>
                <span className="careers-hero-dot"> </span>
              </h1>
              <ul role="list">
                <li>
                  <div>Want to do the best work of your career?</div>
                </li>
                <li>
                  <div>Tackle challenging projects for great clients?</div>
                </li>
                <li>
                  <div>
                    With a team that’s nimble, close-knit and sort of humble?
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>

        <div className="careers-img-wrapper mt-10">
          <img
            src="https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/6793be47a49dceffc01eedde_Illustration.svg"
            loading="lazy"
            alt=""
            className="careers-img"
          />
        </div>

      {/* Careers List Section */}
      <section className="section slider-section is-careers-list">
        <div className="">
          <div className="careers-grid">
            <div className="body-large">{careerPositions.length} open positions</div>

            <div className="w-dyn-list">
              <div role="list" className="careers-list w-dyn-items">
                {careerPositions.map((position, index) => (
                  <div key={index} role="listitem" className="w-dyn-item">
                    <a href={position.href} className="careers-link w-inline-block">
                      <h2 className='h2 pb-5'>{position.title}</h2>
                      <div className="careers-location-wrapper">
                        <div className="body-medium">{position.location}</div>
                        <div className="body-small">•</div>
                        <div className="body-medium">{position.type}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
