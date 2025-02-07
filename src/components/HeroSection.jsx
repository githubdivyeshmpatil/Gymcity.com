import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-orange-600 min-h-[37vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 mt-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side Content */}
        <div className="text-white text-center md:text-left md:w-1/2">
 
          <button className="mt-6 px-6 py-3 text-lg font-bold border-2 border-white rounded-full bg-white text-orange-600 hover:bg-gray-600 hover:text-white transition-all">
 CONTACT WITH 
</button>

        </div>

        {/* Right Side Images */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
          <img
            src="img/le.png"
            alt="Female Athlete"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto relative z-10 -mt-8 md:-mt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;