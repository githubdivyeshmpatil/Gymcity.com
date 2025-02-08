import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 p-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Left */}
        <h1 className="text-2xl font-bold text-white">GYM</h1>

        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-xl gap-6">
          {["Home", "About", "Blog", "Shop", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right-side Social Icons */}
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:text-yellow-400 text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400 text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-green-500 text-white">
            <MessageCircle size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400 text-white">
            <Twitter size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden w-full justify-between ml-48">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">MENU</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          {["Home", "About", "Blog", "Shop", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
