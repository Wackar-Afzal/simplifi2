import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../layouts/Navbar'
import { ContactUs } from '../common/ContactUs'
import { Footer } from '../layouts/Footer'
import Ai from './Ai'
import Features from './Features'
import UXSection from './UXSection'


const Product2 = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <UXSection/>
        <Ai/>
        <Features/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Product2