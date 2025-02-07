import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";

const Navbar = ({ cartItemCount, onCartClick, onEmailClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40 overflow-x-hidden">
      <div className="purple-header flex items-center justify-center">
          <marquee>   
            <p className="text-white">RAKHI SALE - GET 20% OFF ON WOMEN'S ETHNIC & CO-ORD SETS COLLECTION</p>
          </marquee>
        </div>

        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-lg">
              <img
                src="https://colorsofearth.in/cdn/shop/files/logo_d484c921-74d4-4f81-bf75-fd6b02462dc4.png?v=1719297066&width=300"
                alt="Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
<Link to="/women" className="nav-link">Women</Link>
<Link to="/mens" className="nav-link">Mens</Link>
<Link to="/kids" className="nav-link">Kids</Link>
<Link  className="nav-link">Bestseller</Link>


          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-purple-900">Search</a>
            <a href="#" className="text-gray-700 hover:text-purple-900" onClick={onEmailClick}><CiMail size={22}/></a>
            <a href="#" className="text-gray-700 hover:text-purple-900"><RiUserLine size={21}/></a>
            <div className="relative">
              <button onClick={onCartClick} className="text-gray-700 hover:text-purple-900 focus:outline-none" id='cart-new'>
                <BsBagCheck size={21}/>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative-in-the">
              <button onClick={onCartClick} className="text-gray-700 focus:outline-none">
                <BsBagCheck size={24}/>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`} >
        <div className="w-64 bg-white h-full shadow-md">
          <div className="p-4 flex justify-between items-center">
            <span className="text-lg font-bold text-purple-900">Colors of Earth</span>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="mt-4">
            <Link to="/" className="block px-4 py-2 text-black-900">Home</Link>
            <Link to="/women" className="block px-4 py-2 text-black-900">Women</Link>
            <Link to="/mens" className="block px-4 py-2 text-black-900">Mens</Link>
            <Link to="/kids" className="block px-4 py-2 text-black-900">Kids</Link>
            <div className="mt-4 border-t border-gray-200">
              <a href="#" className="block px-4 py-2 text-black-900">Search</a>
              <a href="#" className="block px-4 py-2 text-black-900"><CiMail size={22}/></a>
              <a href="#" className="block px-4 py-2 text-black-900"><RiUserLine size={21}/></a>
              <a href="#" className="block px-4 py-2 text-black-900"><BsBagCheck size={21}/></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
