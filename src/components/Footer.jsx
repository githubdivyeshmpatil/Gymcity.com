import React from 'react';
import { CgGym } from "react-icons/cg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



function Footer() {
  return (
    <div className="bg-gray-900 bg-cover text-white bg-center text-white bg-no-repeat py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/img/logo.png" alt="Company Logo" className="w-24 h-24" />
            <p className="mt-6 text-md sm:text-base font-semibold text-white-700 rajdhani-font text-justify">
              Your transformation starts here! Join us to reach your fitness goals with expert trainers and top-notch equipment.Your ultimate fitness destination. Join us to achieve your goals with top-notch facilities and expert trainers.  

            </p>
            <div className="flex justify-start space-x-6 p-4">
  <a href="#" className="text-white-600 text-3xl hover:text-blue-800">
    <FaFacebook />
  </a>
  <a href="#" className="text-white-400 text-3xl hover:text-blue-600">
    <FaTwitter />
  </a>
  <a href="#" className="text-white-500 text-3xl hover:text-pink-700">
    <FaInstagram />
  </a>
  <a href="#" className="text-white-700 text-3xl hover:text-green-900">
  <FaWhatsapp />

  </a>
</div>

          </div>

          <div>
          <h2 className="font-semibold text-md mb-4 font-roboto">             Quick Links
            </h2>
            <ul className="space-y-4 rajdhani-font">
              {["Home", "About-Us", "Blog", "Shop", "Contact"].map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <CgGym size={25} className="text-orange-500" />
                  <p className="font-semibold">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
          <h2 className="font-semibold text-xl mb-4 font-roboto">            Follow Us
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <img src="img/foo1.jpg" alt="Instagram Photo" className="w-full h-auto" />
              <img src="img/foo2.jpg" alt="Instagram Photo" className="w-full h-auto" />
              <img src="img/foo3.jpg" alt="Instagram Photo" className="w-full h-auto" />
              <img src="img/foo4.jpg" alt="Instagram Photo" className="w-full h-auto" />
            </div>
          </div>

          <div>
          <h2 className="font-semibold text-xl mb-4 font-roboto">Address</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-red-500 text-2xl" />
          <p className="font-semibold rajdhani-font text-md">
            1st Floor, Near Lal Building, Navagam Udhana Surat. 394210
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <FaEnvelope className="text-orange-500 text-2xl" />
          <p className="font-semibold rajdhani-font text-md">example@example.com</p>
        </li>
        <li className="flex items-center space-x-3">
          <FaPhoneAlt className="text-orange-500 text-2xl" />
          <p className="font-semibold rajdhani-font text-md">+91 74051 44232</p>
        </li>
      </ul>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-white-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:text-left items-center sm:items-start text-center">
            <p className="mt-4 sm:mt-0 text-sm text-white font-semibold ">
            Copyright © 2025 Gymcity | All Rights Reserved Developed by divyeshpatil12
            </p>
            <p className="text-sm text-white font-semibold space-y-2 space-x-5 sm:space-y-0">
              <span className="block sm:inline mb-2 sm:mb-0">Terms & Conditions</span>
              <span className="block sm:inline mb-2 sm:mb-0">Privacy Policy</span>
              <span className="block sm:inline mb-2 sm:mb-0">Contact Us</span>
              <span className="block sm:inline mb-2 sm:mb-0 text-orange-500">9529093349</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
