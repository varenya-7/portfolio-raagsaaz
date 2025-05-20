import React from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here if needed
    navigate("/confirmation");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 min-h-screen">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl bg-zinc-800"
         style={{ scrollbarWidth: "none" }}
      
      >
        <div className="absolute inset-0 bg-opacity-60 rounded-xl"></div>

        <div className="relative z-10 p-6 sm:p-8 bg-black">
          <div className="absolute top-0 left-0 w-full text-white py-4 text-center rounded-t-xl">
            <h1 className="text-3xl font-bold">Booking Form</h1>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl z-20"
          >
            &times;
          </button>

          <div className="mt-20">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Occasion */}
              <label className="block text-white font-bold text-lg ms-2 select-none outline-none">
                I'd like to book this band for a
              </label>
              <select
                className="w-full border border-white bg-transparent text-white p-3  text-base"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select an occasion
                </option>
                <option value="wedding" className="text-black">
                  Wedding Ceremony
                </option>
                <option value="corporate" className="text-black">
                  Corporate Event
                </option>
                <option value="birthday" className="text-black">
                  Birthday Party
                </option>
                <option value="festival" className="text-black">
                  Festival Celebration
                </option>
                <option value="private" className="text-black">
                  Private Party
                </option>
                <option value="concert" className="text-black">
                  Concert
                </option>
                <option value="charity" className="text-black">
                  Charity Event
                </option>
                <option value="school" className="text-black">
                  School Function
                </option>
                <option value="college" className="text-black">
                  College Fest
                </option>
                <option value="other" className="text-black">
                  Other
                </option>
              </select>

              {/* Date and Time */}
              <label className="block text-white font-bold text-lg ms-2">
                Event Date & Time
              </label>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative w-full">
                  <input
                    id="event-date"
                    type="date"
                    className="w-full border border-white bg-transparent text-white p-3 pr-12  text-base appearance-none"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center z-10 px-2"
                    onClick={() =>
                      document.getElementById("event-date").showPicker?.() ||
                      document.getElementById("event-date").focus()
                    }
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative w-full">
                  <input
                    type="time"
                    id="event-time"
                    className="w-full border border-white bg-transparent text-white p-3 pr-12  text-base appearance-none"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center z-10 px-2"
                    onClick={() =>
                      document.getElementById("event-time").showPicker?.() ||
                      document.getElementById("event-time").focus()
                    }
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contact Person */}
              <label className="block text-white font-bold text-lg ms-2">
                Contact Person
              </label>
              <input
                type="text"
                placeholder="Name of Contact Person"
                className="w-full border border-white bg-transparent text-white placeholder-white p-3  text-base"
              />

              {/* Email */}
              <label className="block text-white font-bold text-lg ms-2">
                Email
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12h.01M8 12h.01M12 12h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-white bg-transparent text-white placeholder-white p-3 pl-10  text-base"
                />
              </div>

              {/* Phone Number */}
              <label className="block text-white font-bold text-lg ms-2 mt-4">
                Phone Number
              </label>
              <div className="flex w-full">
                <select
                  className="bg-transparent border border-white text-white  px-3 py-3 appearance-none cursor-pointer max-w-[110px]"
                  defaultValue="+1"
                  aria-label="Country code"
                >
                  <option value="+91" className="text-black">🇮🇳 +91</option>
                  <option value="+44" className="text-black">🇬🇧 +44</option>
                  <option value="+61" className="text-black">🇦🇺 +61</option>
                  <option value="+81" className="text-black">🇯🇵 +81</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="flex-grow border border-white bg-transparent text-white placeholder-white p-3  text-base"
                />
              </div>

              {/* Additional Info */}
              <label className="block text-white font-bold text-lg ms-2 mt-4">
                Additional Information
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-white bg-transparent text-white placeholder-white p-3 rounded-lg text-base"
                rows="4"
              />

              {/* Submit */}
              <button
                type="submit"
                className="bg-white text-black px-6 py-3  hover:opacity-90 transition-all duration-300 w-full font-semibold text-lg tracking-wide shadow-lg"
              >
                🎵 Book Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
