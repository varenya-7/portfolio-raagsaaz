// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes, FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";
// import { BiCalendar } from "react-icons/bi";

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const bandMembers = [
//     {
//       name: "John Doe",
//       instrument: "Lead Vocals",
//       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
//     },
//     {
//       name: "Jane Smith",
//       instrument: "Lead Guitar",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
//     },
//     {
//       name: "Mike Johnson",
//       instrument: "Drums",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
//     },
//   ];

//   const albums = [
//     {
//       title: "Midnight Echoes",
//       year: "2023",
//       cover: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb"
//     },
//     {
//       title: "Urban Symphony",
//       year: "2022",
//       cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
//     }
//   ];

//   const events = [
//     {
//       date: "2024-02-15",
//       venue: "The Grand Arena",
//       city: "New York",
//       tickets: "#"
//     },
//     {
//       date: "2024-03-01",
//       venue: "Music Haven",
//       city: "Los Angeles",
//       tickets: "#"
//     }
//   ];

//   const performanceImages = [
//     "https://images.unsplash.com/photo-1501612780327-45045538702b",
//     "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee",
//     "https://images.unsplash.com/photo-1511735111819-9a3f7709049c"
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const scrollPosition = window.scrollY;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Header */}
//       <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
//         <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-2xl font-bold"
//           >
//             Raagsaaz
//           </motion.h1>

//           <div className="hidden md:flex space-x-6">
//             {["home", "about", "media", "discography", "events"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className={`capitalize ${activeSection === item ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </nav>

//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="md:hidden bg-black"
//             >
//               <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//                 {["home", "about", "media", "discography", "events"].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item}`}
//                     className={`capitalize ${activeSection === item ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen relative flex items-center justify-center">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1501612780327-45045538702b"
//             alt="Band Hero"
//             className="w-full h-full object-cover grayscale"
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/50" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative text-center"
//         >
//           <h1 className="text-6xl md:text-8xl font-bold mb-6">Raagsaaz</h1>
//           <p className="text-xl md:text-2xl mb-8">Experience the Sound of Fusion</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
//           >
//             Book Now
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12 text-center"
//           >
//             Meet the Band
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {bandMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative group"
//               >
//                 <div className="overflow-hidden rounded-lg">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-[400px] object-cover grayscale group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
//                   <h3 className="text-2xl font-bold">{member.name}</h3>
//                   <p className="text-gray-300">{member.instrument}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Media Gallery */}
//       <section id="media" className="py-20 bg-black">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12 text-center"
//           >
//             Performance Gallery
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {performanceImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="relative group"
//               >
//                 <img
//                   src={image}
//                   alt={`Performance ${index + 1}`}
//                   className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Discography */}
//       <section id="discography" className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12 text-center"
//           >
//             Discography
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {albums.map((album, index) => (
//               <motion.div
//                 key={album.title}
//                 initial={{ opacity: 0, rotate: -5 }}
//                 whileInView={{ opacity: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-lg">
//                   <img
//                     src={album.cover}
//                     alt={album.title}
//                     className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-2xl font-bold">{album.title}</h3>
//                     <p className="text-gray-300">{album.year}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events */}
//       <section id="events" className="py-20 bg-black">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12 text-center"
//           >
//             Upcoming Events
//           </motion.h2>
//           <div className="space-y-6">
//             {events.map((event, index) => (
//               <motion.div
//                 key={event.date}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-gray-900 p-6 rounded-lg flex items-center justify-between group hover:bg-gray-800 transition-colors"
//               >
//                 <div className="flex items-center space-x-6">
//                   <BiCalendar size={24} />
//                   <div>
//                     <h3 className="text-xl font-bold">{event.venue}</h3>
//                     <p className="text-gray-400">{event.city}</p>
//                   </div>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
//                 >
//                   Get Tickets
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <h2 className="text-2xl font-bold mb-4 md:mb-0">Raagsaaz</h2>
//             <div className="flex space-x-6">
//               <FaYoutube size={24} className="hover:text-gray-400 cursor-pointer" />
//               <FaSpotify size={24} className="hover:text-gray-400 cursor-pointer" />
//               <FaInstagram size={24} className="hover:text-gray-400 cursor-pointer" />
//             </div>
//           </div>
//           <div className="mt-8 text-center text-gray-400">
//             <p>© 2024 Raagsaaz. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useActiveSection } from "./hooks/useActiveSection";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Media from "./components/Media/Media";
// import Discography from "./components/Discography/Discography";
import Timeline from "./components/Timeline/Timeline";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import BookingForm from "./components/Hero/BookingForm";
import BookingConfirmation from "./components/Hero/BookingConfirmation";

// Extract your homepage as a separate component
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
      />
      <Hero />
      <About />
      <Media />
      <Timeline />
      <Events />
      <Footer />
    </div>
  );
};

// Single valid App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
