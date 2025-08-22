import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../layouts/Navbar'
import { ContactUs } from '../common/ContactUs'
import { Footer } from '../layouts/Footer'
import Services from './Services'
import Ai from './Ai'
import Features from './Features'

const Product2 = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Ai/>
        <Features/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Product2