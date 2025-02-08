import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Slider from '../Animation/Slider';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Home.css'
import StatsCounter from '../components/StatsCounter';
import FeaturesSection from '../components/FeaturesSection';
import FeatureS from '../components/FeatureS';
import Text from '../components/Text';
import Testimonials from '../components/Testimonials';
import MembershipPlans from '../components/MembershipPlans';
import HeroSection from '../components/HeroSection';
import WhatsAppPopup from '../Animation/WhatsAppPopup';


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <div className="bg-black text-white w-full">
        <Navbar />
      </div>

      <div className="overflow-hidden flex items-center justify-center h-screen w-full">
        <Slider />
      </div>
      
      <StatsCounter />

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-10 ">
        <Text title="FIND WHAT MOVES YOU" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gym Section */}
          <div className="p-4 relative" data-aos="fade-up">
            <img
              src="img/6.png"
              alt="Gym"
              className="h-[250px] md:h-[320px] w-full object-cover rounded-tl-[50px] md:rounded-tl-[110px]"
            />
            <h2 className="text-xl md:text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">GYM CITY...</h2>
            <p className="mt-2 text-gray-600 font-roboto text-sm md:text-md">
              Expect a heart-pumping workout that will leave you feeling energized and accomplished.
            </p>
          </div>

          {/* Zumba Section */}
          <div className="p-4" data-aos="fade-up">
            <img
              src="img/12.jpg"
              alt="Zumba"
              className="h-[250px] md:h-[320px] w-full object-cover rounded-tl-[50px] md:rounded-tl-[80px]"
            />
            <h2 className="text-xl md:text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">Zumba</h2>
            <p className="mt-2 text-gray-600 font-roboto text-sm md:text-md">
              Join the dance party and get fit with Zumba!
            </p>
          </div>

          {/* Yoga Section */}
          <div className="p-4" data-aos="fade-up">
            <img
              src="img/13.jpg"
              alt="Yoga"
              className="h-[250px] md:h-[320px] w-full object-cover rounded-tl-[50px] md:rounded-tl-[80px]"
            />
            <h2 className="text-xl md:text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">Exercise</h2>
            <p className="mt-2 text-gray-600 font-roboto text-sm md:text-md">
              Find your balance and peace with our yoga sessions.
            </p>
          </div>
        </div>
          <div className='mt-10'>
        <Text title="WHY CHOOSE US" />
        <FeaturesSection />
        </div>
        <div className=' mt-16'>
        <Text title="Transform Your Body" />
        </div>
        <div className="flex items-center w-full mt-6">
          <p className="text-xl md:text-3xl font-semibold whitespace-nowrap rajdhani-font">FEATURED CLASSES</p>
          <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
        </div>
        
        <FeatureS />
       
       </div>
       <div
  className="relative w-full min-h-screen bg-fixed"
  style={{
    backgroundImage: 'url("/img/Hero.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
 
  </div>
</div>

<div className="w-full p-6 md:p-10 text-center">

</div>

<Text title="WHAT CLIENT'S SAY" />
<div
  className="container-fluid bg-cover bg-center min-h-screen"
  style={{ backgroundImage: 'url("img/Mask.png")' }}
>
<Testimonials/>
 <div className='mt-16'>
<Text title="Membership Packages" />
<MembershipPlans/><br></br>
</div>
<div className='mt-16'>
<Text title="Get Training Today" />
<HeroSection/>
</div>
</div><div className="relative w-full h-72 overflow-hidden mt-56 sm:mt-40 md:mt-32 lg:mt-24 rajdhani-font">
  {/* White Strip (Diagonal) */}
  <div className="absolute w-[120%] -rotate-6 left-[-10%] top-10 sm:top-14 bg-white border-t-4 border-b-4 border-orange-500 shadow-lg">
    <marquee
      behavior="scroll"
      direction="left"
      className="text-lg sm:text-2xl font-bold text-black py-2 sm:py-3 whitespace-nowrap"
    >
      ⭐ weightlifting ⭐ POWERLIFTING ⭐ Squat ⭐ Deadlift ⭐ Bench Press ⭐
      Overhead Press ⭐ Pull-ups ⭐ Rows ⭐ Hypertrophy Training ⭐ Olympic Weightlifting ⭐ Bodyweight Training ⭐ Cardio Exercises
    </marquee>
  </div>

  {/* Black Strip (Diagonal) */}
  <div className="absolute w-[120%] rotate-6 left-[-10%] top-20 sm:top-28 bg-[#343434] border-t-4 border-b-4 border-[#343434] shadow-lg">
    <marquee
      behavior="scroll"
      direction="right"
      className="text-lg sm:text-2xl font-bold text-white py-2 sm:py-3 whitespace-nowrap"
    >
      ⭐ weightlifting ⭐ POWERLIFTING ⭐ Squat ⭐ Deadlift ⭐ Bench Press ⭐
      Overhead Press ⭐ Pull-ups ⭐ Rows ⭐ Hypertrophy Training ⭐ Olympic Weightlifting ⭐ Bodyweight Training ⭐ Cardio Exercises
    </marquee>
  </div>
</div>
<WhatsAppPopup/>


    </>
  );
}

export default Home;