import React from 'react'

function Gym() {
  return (
    <section className="  py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] rajdhani-font mb-6">Our Story</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Founded in 2025, our gym started as a small passion project and grew into a
          community of fitness enthusiasts. We believe in strength, discipline, and dedication.
          Our mission is to transform lives through fitness, providing top-notch facilities,
          expert trainers, and a supportive environment.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="img/me.jpg"
          alt="Gym Story"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Gym