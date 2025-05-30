import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.eventoccasion)
      newErrors.eventoccasion = "Please select an occasion";
    if (!data.eventdate) newErrors.eventdate = "Please select a date";
    if (!data.name || data.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email))
      newErrors.email = "Please enter a valid email address";

    const phoneRegex = /^[0-9]{10}$/;
    if (!data.phonenumber || !phoneRegex.test(data.phonenumber))
      newErrors.phonenumber = "Enter a valid 10-digit phone number";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rawPhone = formData.get("phonenumber").replace(/\D/g, "");

    const data = {
      eventoccasion: formData.get("eventoccasion"),
      eventdate: formData.get("eventdate"),
      name: formData.get("name"),
      email: formData.get("email"),
      phonenumber: rawPhone,
      additionalinformation: formData.get("additionalinformation"),
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please enter the required details.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking/submitform",
        {
          ...data,
          phonenumber: formData.get("countrycode") + " " + rawPhone,
        }
      );
      console.log("Response from server:", response.data);

      // Redirect to confirmation page with state
      navigate("/confirmation", { state: { fromBooking: true } });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const inputClass = (field) =>
    `w-full border ${
      errors[field] ? "border-red-500" : "border-white"
    } bg-transparent text-white p-3 text-base rounded-lg`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 min-h-screen">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl bg-zinc-800"
        style={{ scrollbarWidth: "none" }}
      >
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
              <label className="block text-white font-bold text-lg ms-2">
                I'd like to book this band for a
              </label>
              <select
                name="eventoccasion"
                className={inputClass("eventoccasion")}
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
              {errors.eventoccasion && (
                <p className="text-red-500 text-sm ms-2">
                  {errors.eventoccasion}
                </p>
              )}

              <label className="block text-white font-bold text-lg ms-2">
                Event Date
              </label>
              <input
                name="eventdate"
                type="date"
                className={inputClass("eventdate")}
              />
              {errors.eventdate && (
                <p className="text-red-500 text-sm ms-2">{errors.eventdate}</p>
              )}

              <label className="block text-white font-bold text-lg ms-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm ms-2">{errors.name}</p>
              )}

              <label className="block text-white font-bold text-lg ms-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm ms-2">{errors.email}</p>
              )}

              <label className="block text-white font-bold text-lg ms-2">
                Phone Number
              </label>
              <div className="flex w-full">
                <select
                  className="bg-transparent border border-white text-white px-3 py-3 appearance-none cursor-pointer max-w-[110px] rounded"
                  defaultValue="+91"
                  name="countrycode"
                >
                  <option value="+91" className="text-black">
                    🇮🇳 +91
                  </option>
                </select>
                <input
                  name="phonenumber"
                  type="tel"
                  placeholder="Enter phone number"
                  className={`flex-grow ${
                    errors.phonenumber ? "border-red-500" : "border-white"
                  } border bg-transparent text-white placeholder-white p-3 text-base rounded`}
                />
              </div>
              {errors.phonenumber && (
                <p className="text-red-500 text-sm ms-2">
                  {errors.phonenumber}
                </p>
              )}

              <label className="block text-white font-bold text-lg ms-2 mt-4">
                Additional Information
              </label>
              <textarea
                name="additionalinformation"
                placeholder="Your Message"
                className="w-full border border-white bg-transparent text-white placeholder-white p-3 rounded-lg text-base"
                rows="4"
              />

              <button
                type="submit"
                className="bg-white text-black px-6 py-3 hover:opacity-90 transition-all duration-300 w-full font-semibold text-lg tracking-wide shadow-lg rounded-lg"
              >
                🎵 Book Now!
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <style>
        {`
    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1) brightness(2);
    }
  `}
      </style>
    </div>
  );
};

export default BookingForm;
