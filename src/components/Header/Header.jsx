import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
      />
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
      />
    </header>
  );
};

export default Header;