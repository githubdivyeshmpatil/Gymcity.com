import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureS = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 4 items per slide
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-10">
        {"<"}
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-10">
        {">"}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // 1 image per row on mobile
        },
      },
    ],
  };

  const items = [
    { img: 'img/f1.jpg', name: 'One-on-One Training' },
    { img: 'img/g1.jpg', name: 'Group Personal Training' },
    { img: 'img/z1.jpg', name: 'Zumba' },
    { img: 'img/c1.jpg', name: 'Spin/Cycling' },
    { img: 'img/st1.jpg', name: 'Strength Training' },
    { img: 'img/gh.jpg', name: 'Fitness Challenges' },
    { img: 'img/st1.jpg', name: 'Monthly Fitness Events' },
    { img: 'img/c2.jpg', name: 'Cardio Classes' },
    { img: 'img/yu.jpg', name: 'Fat-Loss Recipes' },
    { img: 'img/10.jpg', name: 'Supplementation Advice' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-box  p-4 rounded-lg  text-center">
            {/* Responsive Image */}
            <img 
              src={item.img} 
              alt={`Box ${index + 1}`} 
              className="w-full h-48 md:h-56 lg:h-72 object-cover rounded-md mb-4" 
            />
            {/* Responsive Text */}
            <p className="text-[#0A192F] rajdhani-font font-semibold text-sm md:text-base lg:text-lg">
              {item.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureS;