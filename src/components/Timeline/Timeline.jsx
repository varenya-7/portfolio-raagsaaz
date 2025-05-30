import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaGuitar, FaAward, FaCompactDisc, FaStar, FaTrophy, FaGlobe } from "react-icons/fa";

const Timeline = () => {
  const milestones = [
    {
      id: 1,
      year: "2023",
      title: "Band Formation",
      description: "Raagsaaz was formed by four musicians with a shared passion for blending soulful melodies and vibrant rhythms.",
      icon: FaGuitar
    },
    {
      id: 2, 
      year: "2023",
      title: "3rd Position Battle of Bands , IIT Roorkee",
      description: "Marked entry into music scene by winning the first national-level Battle of the Bands competition.",
      icon: FaCompactDisc
    },
    {
      id: 3,
      year: "2024",
      title: "Top Festival Appearance",
      description: "Performed at one of Lucknow’s biggest cultural festivals La Flea Affair organized by Knocksense, earning significant recognition.",
      icon: FaGlobe
    },
    {
      id: 4,
      year: "2025",
      title: "Recent Milestone",
      description: "Won 'Best New Alternative Band' at Xenium'25 , LPCPS Lucknow",
      icon: FaAward
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Our Journey</h1>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-fuchsia-500 to-indigo-500
" />

          {/* Timeline Items */}
          <div className="relative">
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={milestone.id}
                milestone={milestone}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ milestone, isLeft, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  const IconComponent = milestone.icon;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`
        flex flex-col items-center text-center md:text-left
        md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
        justify-between mb-12
      `}
    >
      {/* Text Container */}
      <div className={`w-full md:w-5/12 px-4`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <span className="text-fuchsia-400 text-sm font-semibold">{milestone.year}</span>
          <h3 className="text-white text-xl font-bold mt-2">{milestone.title}</h3>
          <p className="text-gray-300 mt-2">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Icon */}
      <div className="relative flex items-center justify-center my-4 md:my-0 w-20 h-20">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 bg-gradient-to-b from-fuchsia-500 to-indigo-500
 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <IconComponent className="text-white text-xl" />
        </motion.div>
      </div>

      {/* Spacer to balance alignment */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};


export default Timeline;