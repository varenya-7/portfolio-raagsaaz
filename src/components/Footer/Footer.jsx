import React from "react";
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Raagsaaz</h2>
          <div className="flex space-x-6">
          <a
              href="https://www.youtube.com/@RaagSaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://open.spotify.com/artist/yourartistid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaSpotify size={24} />
            </a>
            <a
              href="https://www.instagram.com/raagsaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2025 Raagsaaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;