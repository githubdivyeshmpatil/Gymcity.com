import { useState, useEffect } from "react";

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
            <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-center text-[#FF3D00] text-5xl font-extrabold px-4 py-2 text-center">
              <div className="mb-4 text-6xl">{slide.name}</div>
              <div className="text-xl font-semibold">{slide.description}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
