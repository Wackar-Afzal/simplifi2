import React from 'react'
import Navbar from '../layouts/Navbar'
import { ContactUs } from '../common/ContactUs'
import { Footer } from '../layouts/Footer'
import CareerList from './CareerList'



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

      <CareerList/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
