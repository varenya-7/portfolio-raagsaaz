import React from "react";
import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { events } from "../../data/events";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-800 p-6 rounded-lg flex items-center justify-between group hover:bg-zinc-700 transition-colors"
            >
              <div className="flex items-center space-x-6">
                <BiCalendar size={24} />
                <div>
                  <h3 className="text-xl font-bold">{event.venue}</h3>
                  <p className="text-gray-400">{event.city}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Get Tickets
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;