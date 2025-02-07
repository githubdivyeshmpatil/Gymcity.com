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

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
              src="img/2.png"
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
              src="img/3.png"
              alt="Yoga"
              className="h-[250px] md:h-[320px] w-full object-cover rounded-tl-[50px] md:rounded-tl-[80px]"
            />
            <h2 className="text-xl md:text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">Exercise</h2>
            <p className="mt-2 text-gray-600 font-roboto text-sm md:text-md">
              Find your balance and peace with our yoga sessions.
            </p>
          </div>
        </div>

        <Text title="WHY CHOOSE US" />
        <FeaturesSection />
        <Text title="Transform Your Body" />
        
        <div className="flex items-center w-full">
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
</div>

    </>
  );
}

export default Home;