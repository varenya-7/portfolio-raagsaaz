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
        className="fixed inset-0 bg-zinc-800 bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-black rounded-2xl overflow-y-auto w-full max-w-lg p-4 sm:p-6 relative max-h-screen"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          {/* <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-black hover:bg-gray-100 transition"
          >
            &times;
          </button> */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-red-500 text-3xl hover:text-red-300 transition"
          >
            &times;
          </button>

          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
          <p className="text-gray-300 mb-2">{member.instrument}</p>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            {member.bio}
          </p>

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
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                >
                  {Icon && <Icon size={20} />}
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
