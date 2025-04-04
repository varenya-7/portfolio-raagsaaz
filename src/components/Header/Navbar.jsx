import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Raagsaaz</h1>

      <div className="hidden md:flex space-x-6">
        {["home", "about", "media", "discography", "events"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`capitalize ${activeSection === item ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
          >
            {item}
          </a>
        ))}
      </div>

      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;