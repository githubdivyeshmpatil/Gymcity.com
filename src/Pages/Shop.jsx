import React from 'react'
import Navbar from '../components/Navbar'
import Sectionback from '../Animation/Sectionback'
import BrandCards from '../components/BrandCards'
import FeatureS2 from '../components/FeatureS2'
import Text from '../components/Text'

function Shop() {
  return (
    <>
    <div className="fixed w-full z-10">
    <Navbar />
  </div>
   <Sectionback imageUrl="img/po2.png">
   <h1 className="text-white text-6xl font-bold"></h1>
   
   </Sectionback>
   
   <BrandCards/>
   <Text title="BEST SELLER GYM CITY" />
   <div className="flex items-center w-full mt-6">
          <p className="text-xl md:text-3xl font-semibold whitespace-nowrap rajdhani-font">Proteins</p>
          <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
        </div>
   <FeatureS2/>
   </>
  )
}

export default Shop