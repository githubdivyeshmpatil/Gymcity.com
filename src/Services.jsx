import React from 'react'
import Sectionback from './Animation/Sectionback'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Text from './components/Text'
import HeroSection from './components/HeroSection'

function Services() {
  return (
    <>
    <div className="fixed w-full z-10">
    <Navbar />
  </div>
    <Sectionback imageUrl="img/bestbg.jpg">
    <h1 className="text-white text-6xl font-bold">Services page</h1>
    
    </Sectionback>
    <Text title="GYM CITY GALLERY" />
    <Gallery/>
    <HeroSection/>
    <div className='mt-6'>
    <marquee
      behavior="scroll"
      direction="left"
      className="text-lg sm:text-2xl font-bold text-black sm:py-3 whitespace-nowrap"
    >
      ⭐ weightlifting ⭐ POWERLIFTING ⭐ Squat ⭐ Deadlift ⭐ Bench Press ⭐
      Overhead Press ⭐ Pull-ups ⭐ Rows ⭐ Hypertrophy Training ⭐ Olympic Weightlifting ⭐ Bodyweight Training ⭐ Cardio Exercises
    </marquee>
    </div>
    </>
  )
}

export default Services