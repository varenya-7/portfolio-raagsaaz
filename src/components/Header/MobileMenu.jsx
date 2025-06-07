import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-black"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["home", "about", "media", "discography", "events"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize ${activeSection === item ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

