import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home">
          <img
            src="https://ik.imagekit.io/3wtfzxgon/Raagsaaz-Logo.png?updatedAt=1746356381576"
            alt="Raagsaaz Logo"
            className="h-16 w-auto object-contain md:pl-12 pl-2"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "media", "journey", "events"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize ${
                activeSection === item ? "text-white" : "text-gray-400"
              } hover:text-white transition-colors`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white bg-black p-2 rounded z-50"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
