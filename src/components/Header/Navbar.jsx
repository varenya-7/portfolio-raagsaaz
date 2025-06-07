import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#home">
        <img
          src="https://ik.imagekit.io/3wtfzxgon/Raagsaaz-Logo.png?updatedAt=1746356381576"
          alt="Raagsaaz Logo"
          className="h-16 w-auto object-contain md:pl-12 pl-2" // Responsive padding
        />
      </a>

      {/* Desktop Menu */}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 bg-black text-white p-2 rounded focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
