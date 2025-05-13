import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingForm from "./BookingForm";


const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/3wtfzxgon/IMG_20231106_210051_933.HEIC?updatedAt=1746523937880"
          alt="Band Hero"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative text-center"
      >
             <h1
          className="text-6xl md:text-8xl font-bold mb-6 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Raagsaaz
        </h1>
        <p className="text-xl md:text-2xl mb-8 transition-transform duration-300 ease-in-out hover:scale-105
          ">Experience the Sound of Fusion</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          onClick={() => setShowForm(true)}
        >
          Book Now
        </motion.button>
      </motion.div>
      {/* {showForm && <BookingForm onClose={() => setShowForm(false)} />} */}
    </section>
  );
};

export default Hero;



