import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureS2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default: 4 images per row
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
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3, // Show 3 images per row
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 image per row
        },
      },
    ],
  };

  const items = [
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-NUT-1061-05-01.jpg', name: 'One-on-One Training', discount: 'Upto 37% OFF', price: '₹1,229', oldPrice: '₹1,849' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/10/NB-NUT-1011-01-01.jpg', name: 'Group Personal Training', discount: 'Upto 34% OFF', price: '₹1,595', oldPrice: '₹2,399' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/12/NB-ATH-1000-02-01.jpg', name: 'Zumba', discount: 'Upto 43% OFF', price: '₹1,424', oldPrice: '₹2,499' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-01x.jpg', name: 'Spin/Cycling', discount: 'Upto 19% OFF', price: '₹792', oldPrice: '₹980' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2022/01/NB-MUT-1015-32-01x.jpg', name: 'Strength Training', discount: 'Upto 29% OFF', price: '₹1,599', oldPrice: '₹2,099' },
    { img: 'https://cdn.nutrabay.com/wp-content/uploads/2023/11/NB-NUT-1054-04-01.jpg', name: 'Fitness Challenges', discount: 'Upto 36% OFF', price: '₹862', oldPrice: '₹1,249' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-box p-4 rounded-lg text-center relative">
            {/* Green Discount Label */}
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              {item.discount}
            </div>
            {/* Fully Responsive Image */}
            <img 
              src={item.img} 
              alt={`Box ${index + 1}`} 
              className="w-full h-auto max-w-full object-cover rounded-md mb-4" 
            />
            {/* Responsive Text */}
            <p className="text-[#0A192F] rajdhani-font font-semibold text-sm md:text-base lg:text-lg">
              {item.name}
            </p>
            {/* Price Section */}
            <p className="text-black font-bold text-lg">
              From <span className="text-black font-extrabold">{item.price}</span> 
              <span className="text-gray-400 line-through">{item.oldPrice}</span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureS2;
