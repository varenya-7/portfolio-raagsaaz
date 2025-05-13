import React from "react";
import { motion } from "framer-motion";

const Discography = () => {
  return (
    <section id="discography" className="py-20 bg-zinc-800">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12 font-sans w-fit mx-auto lg:ml-28 lg:-mt-8 tracking-wider bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent leading-[1.3] overflow-visible text-center lg:text-left pb-2">
        Raagsaaz's Musical Journey
      </h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mb-12 pb-8 sm:pb-10 lg:ml-28">
          {/* Formation Year Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 text-center lg:text-left lg:ms-20">
              Formation Year
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl text-center lg:text-center lg:me-40">
              2015: Raagsaaz formed with a vision to{" "}
              <br className="hidden sm:block" />
              blend soulful melodies and vibrant{" "}
              <br className="hidden sm:block" /> rhythms.
            </p>
          </motion.div>

          {/* Top Festival Appearance Section */}
          <motion.div
            className="lg:w-[45%] mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 text-center lg:text-left lg:ms-10">
              Top Festival Appearance
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl text-center lg:text-center lg:me-[130px]">
              2019: Headlined the City Jazz Festival{" "}
              <br className="hidden sm:block" />
              to rave reviews and growing
              <br className="hidden sm:block" />
              fan base.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center justify-center relative mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-full h-1 bg-gray-600"></div>

          <div className="absolute flex justify-between w-full max-w-[800px] px-4 sm:px-8">
            {["1", "2", "3", "4"].map((num, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 + index * 0.3 }}
              >
                <div
                  className={`w-1 h-8 bg-gray-600 ${
                    index === 0 || index === 2 ? "" : "invisible"
                  }`}
                ></div>
                <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 text-white text-xl sm:text-2xl rounded-md">
                  {num}
                </div>
                <div
                  className={`w-1 h-8 bg-gray-600 ${
                    index === 1 || index === 3 ? "" : "invisible"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mb-12 pb-8 sm:pb-10 lg:ml-28">
          {/* First Album Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 text-center lg:text-center lg:ml-[200px]">
              First Album
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl text-center lg:text-center lg:ml-[150px] ">
              2017: Released debut album "Echoes of
              <br className="hidden sm:block" />
              Raags" making their entry into the music{" "}
              <br className="hidden sm:block" /> scene
            </p>
          </motion.div>

          {/* Recent Milestone Section */}
          <motion.div
            className="lg:w-[45%] mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 text-center lg:text-center lg:ml-[145px]">
              Recent Milestone
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl text-center lg:text-center lg:ml-[150px]">
              2023: Launched an acoustic tour
              <br className="hidden sm:block" />
              connecting deeply with audiences
              <br className="hidden sm:block" /> nationwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discography;