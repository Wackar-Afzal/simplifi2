import React from 'react'

import HeroProduct from './HeroProduct'
import Navbar from '../layouts/Navbar'
import WhatsCookin from './WhatsCookin'
import CaseStudies from './CaseStudies'

export const ProductMain = () => {
  return (
    <div>
      <Navbar />
      <HeroProduct />
      <WhatsCookin/>
      <CaseStudies/>
    </div>
  )
}
