
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed w-full top-0 z-50 p-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center rajdhani-font">
        {/* Logo */}
        <img src="img/logo.png" alt="Gym City Logo" className="h-10 w-auto" />

        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-xl gap-6">
          <Link to="/" className="hover:text-yellow-400 text-white">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-yellow-400 text-white">
            About
          </Link>
          <Link to="/Services" className="hover:text-yellow-400 text-white">
            Services
          </Link>
          <Link to="/shop" className="hover:text-yellow-400 text-white">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 text-white">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:text-yellow-400 text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-green-500 text-white">
            Message
          </a>
          <a href="#" className="hover:text-yellow-400 text-white">
            Twitter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-40" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
       <div className="flex justify-between items-center">
  {/* Logo Image */}
  <img src="img/logo.png" alt="Gym City Logo" className="h-10 w-auto" />


          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-8 h-8 text-white ml-28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          <Link
            to="/"
            className="hover:text-yellow-400 text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-yellow-400 text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-400 text-white"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/shop"
            className="hover:text-yellow-400 text-white"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
