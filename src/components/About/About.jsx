import React, { useState } from "react";
import { motion } from "framer-motion";
import { bandMembers } from "../../data/bandMembers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BandMemberModal from "./BandMemberModel";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Meet the Band
        </motion.h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {bandMembers.map((member, index) => (
            <SwiperSlide key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-gray-300">{member.instrument}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Expanded Modal */}
        <BandMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </div>
      {/* on smaller or mobile screen there is left and right arrow to navigate changes his default blue color to white. */}
      <style>
        {`
    .swiper-button-next,
    .swiper-button-prev {
      color: white !important;
    }
  `}
      </style>
    </section>
  );
};

export default About;

// Below is the code that fetches band members from the backend API.


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import BandMemberModal from "./BandMemberModel";

// const About = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [bandMembers, setBandMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBandMembers = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/bandmembers/getbandmembers");
//         const data = await res.json();
//         console.log("Band Members fetched Successfully", data.bandMembers);
//         if (res.ok) {
//           setBandMembers(data.bandMembers);
//         } else {
//           console.error("Error fetching band members:", data.message);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBandMembers();
//   }, []);

//   if (loading) {
//     return (
//       <section id="about" className="py-20 bg-zinc-800 text-white text-center">
//         <p>Loading band members...</p>
//       </section>
//     );
//   }

//   return (
//     <section id="about" className="py-20 bg-zinc-800">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold mb-12 text-center text-white"
//         >
//           Meet the Band
//         </motion.h2>

//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {bandMembers.map((member, index) => (
//             <SwiperSlide key={member.name}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative group cursor-pointer"
//                 onClick={() => setSelectedMember(member)}
//               >
//                 <div className="overflow-hidden rounded-lg">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
//                   <h3 className="text-2xl font-bold">{member.name}</h3>
//                   <p className="text-gray-300">{member.instrument}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Modal for member details */}
//         <BandMemberModal
//           member={selectedMember}
//           onClose={() => setSelectedMember(null)}
//         />
//       </div>

//       <style>
//         {`
//           .swiper-button-next,
//           .swiper-button-prev {
//             color: white !important;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default About;

