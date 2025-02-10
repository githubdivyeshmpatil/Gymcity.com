import React from "react";
import Navbar from "../components/Navbar";

import TestimonialSlider from "../components/Testimonials";
import Sectionback from "../Animation/Sectionback";
import Gym from "../components/Gym";
import Trainers from "../components/Trainers";
import Text from "../components/Text";

function About() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar Fixed */}
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
<Sectionback imageUrl="img/Hero.png">
<h1 className="text-white text-6xl font-bold">ABOUT-US</h1>

</Sectionback>
 

<Gym/>
<div className="mt-10">
<Text title="OUR TRAINERS" />
</div>
<Trainers/>

<div className="relative w-full h-72 overflow-hidden mt-56 sm:mt-40 md:mt-32 lg:mt-24 rajdhani-font">
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
    </div>
  );
}

export default About;
