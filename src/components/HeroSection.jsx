import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-orange-600 h-72 flex items-center justify-center px-6 md:px-20 mt-40">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side Content */}
        <div className="text-white text-center md:text-left md:w-1/2">
          
          <p className="mt-4 text-lg">
          Gym city
          </p>
          <button className="mt-6 px-6 py-3 text-lg font-bold border-2 border-white rounded-full hover:bg-white hover:text-orange-600 transition-all">
            JOIN WITH US
          </button>
        </div>

        {/* Right Side Images */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
        <img
  src="img/le.png"
  alt="Female Athlete"
  className="w-96 md:w-80 lg:w-96 h-auto relative z-10 mt-[-55px]"
/>

         
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
