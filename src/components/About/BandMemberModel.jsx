
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
const iconMap = {
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    Facebook: FaFacebook,
    YouTube: FaYoutube,
  };
const BandMemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-zinc-800 bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
        >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-black rounded-2xl overflow-hidden max-w-lg w-full p-6 relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-black hover:bg-gray-100 transition"
          >
            &times;
          </button>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
          <p className="text-gray-700 mb-2">{member.instrument}</p>
          <p className="text-gray-600 mb-4">{member.bio}</p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">          
              {member.socials?.map((social) => {
              const Icon = iconMap[social.platform];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {Icon && <Icon size={24} />}
                  <span className="font-medium">{social.platform}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BandMemberModal;