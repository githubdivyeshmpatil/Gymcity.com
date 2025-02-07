import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // To track if the user has scrolled

  // Handle scrolling behavior for showing/hiding navbar and applying background color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      // Add background color when scrolled down
      if (currentScrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
    <div
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } ${hasScrolled ? "bg-[#0A192F] shadow-md" : "bg-gradient-to-r from-transparent via-transparent to-transparent"}`} // Add gradient for transparent sides
>

        <div className="lg:mx-10">
          <div className="w-full p-5 rounded-lg    z-50">
            <div className="flex justify-between items-center w-full font-rajdhani">
              {/* Logo */}
              <div className="lg:w-1/5">
                <img src="/img/logo.png" className="h-16" alt="Logo" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center justify-between lg:w-3/5">
                <Link
                  to="/services"
                  className="text-white  text-xl hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-white  text-xl hover:text-blue-500"
                >
                  About-us
                </Link>
                <Link
                  to="/services"
                  className="text-white  text-xl hover:text-blue-500"
                >
                  Branch
                </Link>
                <Link
                  to="/services"
                  className="text-white  text-xl hover:text-blue-500"
                >
                  Membership
                </Link>

                <div
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    className="text-white  text-xl hover:text-blue-500"
                  >
                    shop
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute bg-white border shadow-lg rounded-lg p-2 w-40">
                      <span className="block text-black text-sm hover:text-blue-500 px-4 py-2">
                        Portfolio
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Toggle Button for Mobile */}
              <button
                className="lg:hidden text-black text-2xl focus:outline-none"
                onClick={toggleMenu}
              >
                ☰
              </button>

              {/* CTA Button */}
              <div className="hidden lg:w-1/5 lg:flex justify-end items-center">
              <a
  href="/consultation"
  className="text-white bg-[#FF6201] font-medium px-6 py-3 rounded-md  flex items-center gap-2"

>
                  Contact now
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.956939 13.0412C0.86409 12.9484 0.790434 12.8382 0.740181 12.7169C0.689928 12.5957 0.664062 12.4657 0.664063 12.3344C0.664063 12.2031 0.689928 12.0732 0.740181 11.9519C0.790434 11.8306 0.86409 11.7204 0.956939 11.6277L12.2809 0.303715C12.373 0.208241 12.4832 0.132071 12.6051 0.079649C12.727 0.0272274 12.8581 -0.000397682 12.9907 -0.00161266C13.1234 -0.00282764 13.255 0.0223913 13.3778 0.0725727C13.5006 0.122754 13.6122 0.196894 13.7061 0.290664C13.7999 0.384434 13.8742 0.495957 13.9245 0.618728C13.9748 0.741498 14.0001 0.873056 13.999 1.00573C13.9979 1.1384 13.9704 1.26952 13.9181 1.39145C13.8658 1.51337 13.7898 1.62366 13.6944 1.71588L2.37043 13.0398C2.18309 13.2269 1.92913 13.332 1.66435 13.332C1.39957 13.332 1.14562 13.2269 0.958271 13.0398L0.956939 13.0412Z"
                      fill="white"
                    />
                    <path
                      d="M0 1.01077C0 0.745774 0.105269 0.49163 0.29265 0.304249C0.480031 0.116868 0.734175 0.0115986 0.999171 0.0115986H12.9892C13.2542 0.0115986 13.5084 0.116868 13.6958 0.304249C13.8831 0.49163 13.9884 0.745774 13.9884 1.01077V13.0008C13.9884 13.2658 13.8831 13.52 13.6958 13.7073C13.5084 13.8947 13.2542 14 12.9892 14C12.7242 14 12.4701 13.8947 12.2827 13.7073C12.0953 13.52 11.9901 13.2658 11.9901 13.0008V2.00994H0.999171C0.734175 2.00994 0.480031 1.90467 0.29265 1.71729C0.105269 1.52991 0 1.27577 0 1.01077Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden mt-3 flex flex-col space-y-4">
                <Link
                  to="/services"
                  className="text-black text-xl hover:text-blue-500"
                >
                  Services
                </Link>

                <div>
                  <button
                    onClick={toggleDropdown}
                    className="text-black text-lg hover:text-blue-500 flex items-center"
                  >
                    Page
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 flex flex-col space-y-2">
                      <span className="block text-black text-sm hover:text-blue-500 px-4 py-2">
                        Portfolio
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href="/consultation"
                  className="text-[#0F76B9] font-medium px-6 py-3 rounded-md border-2 border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #5D56F1, #1599A6, #0F76B9) 1",
                  }}
                >
                  Get in Touch
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
