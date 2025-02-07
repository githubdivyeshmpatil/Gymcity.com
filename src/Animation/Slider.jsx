import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/img/Rec.png",
    name: "Welcome to Gym Fitness",
    description: "Relax and unwind as you watch the beautiful sunset.",
  },
  {
    image: "/img/2-1.jpg",
    name: "Mountain View",
    description: "Feel the fresh air and enjoy the scenic mountain views.",
  },
  {
    image: "/img/Home.png",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.name}
            className="w-full h-full object-cover"
          />
          {i === index && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 flex flex-col items-center justify-center text-[#FF3D00] text-5xl font-extrabold px-4 py-2 text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="mb-4 text-6xl"
              >
                {slide.name}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                className="text-xl font-semibold"
              >
                {slide.description}
              </motion.div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
