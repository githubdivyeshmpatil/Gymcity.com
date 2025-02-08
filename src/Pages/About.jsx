import React from "react";
import Navbar from "../components/Navbar";
import BackgroundWrapper from "../Animation/BackgroundWrapper";
import TestimonialSlider from "../components/Testimonials";

function About() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar Fixed */}
      <div className="fixed w-full z-10">
        <Navbar />
      </div>

      {/* Background Wrapper */}
      <BackgroundWrapper backgroundImage="/img/Hero.png">
 
</BackgroundWrapper>
<TestimonialSlider/>
iiiii
    </div>
  );
}

export default About;
