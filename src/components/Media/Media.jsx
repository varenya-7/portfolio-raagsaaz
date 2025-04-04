import React from "react";
import { motion } from "framer-motion";
import { performanceImages } from "../../data/performanceImages";

const Media = () => {
  return (
    <section id="media" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Performance Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {performanceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src={image}
                alt={`Performance ${index + 1}`}
                className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;