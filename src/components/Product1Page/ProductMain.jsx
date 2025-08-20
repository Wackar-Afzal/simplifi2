import React from 'react'

import HeroProduct from './HeroProduct'
import Navbar from '../layouts/Navbar'
import WhatsCookin from './WhatsCookin'
import CaseStudies from './CaseStudies'
import Brags from './Brags'
import ClientSays from './ClientSays'
import { ContactUs } from '../common/ContactUs'
import { Footer } from '../layouts/Footer'

export const ProductMain = () => {
  return (
    <div>
      <Navbar />
      <HeroProduct />
      <WhatsCookin/>
      <CaseStudies/>
      <Brags/>
      <ClientSays/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
