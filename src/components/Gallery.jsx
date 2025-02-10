import React, { useState } from "react";

const images = [
  "/images/gym1.jpg", "/images/gym2.jpg", "/images/gym3.jpg", "/images/gym4.jpg",
  "/images/gym5.jpg", "/images/gym6.jpg", "/images/gym7.jpg", "/images/gym8.jpg",
  "/images/gym9.jpg", "/images/gym10.jpg", "/images/gym11.jpg", "/images/gym12.jpg",
  "/images/gym13.jpg", "/images/gym14.jpg", "/images/gym15.jpg", "/images/gym16.jpg",
  "/images/gym17.jpg", "/images/gym18.jpg", "/images/gym19.jpg", "/images/gym20.jpg"
];

const hoverImages = [
  "/images/gym2.jpg", "/images/gym3.jpg", "/images/gym4.jpg", "/images/gym5.jpg",
  "/images/gym6.jpg", "/images/gym7.jpg", "/images/gym8.jpg", "/images/gym9.jpg",
  "/images/gym10.jpg", "/images/gym11.jpg", "/images/gym12.jpg", "/images/gym13.jpg",
  "/images/gym14.jpg", "/images/gym15.jpg", "/images/gym16.jpg", "/images/gym17.jpg",
  "/images/gym18.jpg", "/images/gym19.jpg", "/images/gym20.jpg", "/images/gym1.jpg"
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 py-10">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={hoveredIndex === index ? hoverImages[index] : src}
              alt={`Gym ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;