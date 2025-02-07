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

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
      easing: 'ease-in-out', // Set easing function
      once: true, // Animation will happen only once
    });
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,  // This will trigger animation only once when it comes into view
    threshold: 0.2,     // Trigger when 20% of the element is in view
  });

  return (
    <>
      <div className="bg-black text-white"> {/* Set background to black and text to white */}
        <Navbar />
      </div>

      <div className="overflow-hidden flex items-center justify-center h-screen w-full">
        <Slider />
      </div>
      {/* state----------------------counter------------------------------ */}
      <StatsCounter/>

      <div className=" ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-4 lg:px-6">
        <Text title="FIND WHAT MOVES YOU" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gym Section */}
            <div className="rounded-tl-lg p-6 lg:col-span-2 relative" data-aos="zoom-out-right">
              <img
                src="img/6.png"
                alt="Gym"
                className="h-[320px] w-full object-cover rounded-tl-[110px] "
              />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black-900 via-transparent to-transparent"></div>
              <h2 className="text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">GYM CITY...</h2>
              <p className="mt-2 text-gray-600 font-roboto text-md">
                Expect a heart-pumping workout that will leave you feeling energized and accomplished.
              </p>
            </div>

            {/* Zumba Section */}
            <div className="p-6" data-aos="zoom-out-up">
              <img
                src="img/2.png"
                alt="Zumba"
                className="h-[625px] w-full object-cover rounded-tl-[80px]"
              />
              <h2 className="text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">Zumba</h2>
              <p className="mt-2 text-gray-600 font-roboto text-md">
                Join the dance party and get fit with Zumba!
              </p>
            </div>

            {/* Yoga Section */}
            <div className="p-6" data-aos="fade-up">
              <img
                src="img/3.png"
                alt="Yoga"
                className="h-[625px] w-full object-cover rounded-tl-[80px]"
              />
              <h2 className="text-3xl font-bold mt-4 text-[#0A192F] rajdhani-font">Exercise</h2>
              <p className="mt-2 text-gray-600 font-roboto text-md">
                Find your balance and peace with our yoga sessions.
              </p>
            </div>
          </div>
        
          <Text title="WHY CHOOSE US" />
          
         
        <FeaturesSection/>
        <Text title="Transform Your Body" />
        <div className="flex items-center w-full">
  <p className="text-3xl font-semibold whitespace-nowrap rajdhani-font">FEATURED CLASSES</p>
  <div className="flex-1 h-[2px] bg-gray-500 ml-4"></div>
</div>


      
<FeatureS/>

      
   



 
        </div>
      </div>
    </>
  );
}

export default Home;
