import React from "react";
import { Phone, Mail, MessageSquareText } from "lucide-react";

const BookingConfirmation = () => {
  return (
    <div className="fixed inset-0 bg-black text-white z-50 select-none outline-none">
      {/* Top Logo */}
      <div className="absolute top-20 sm:top-28 md:top-32 lg:top-40 left-0 right-0 flex justify-center">
        <img
          src="https://ik.imagekit.io/3wtfzxgon/Raagsaaz-Logo.png?updatedAt=1746356381576"
          alt="Raagsaaz Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain animate-fade-in"
        />
      </div>

      {/* Message + Contact */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 space-y-8 animate-fade-in-slow">
        {/* Thank You */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          Thank you for contacting us! <span className="animate-wave">😊</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-base max-w-md">
          We appreciate your interest. We'll be in touch soon! Meanwhile, feel free to connect with us:
        </p>

        {/* Contact Icons */}
        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center justify-center gap-3">
            <MessageSquareText className="text-green-400 w-5 h-5 drop-shadow-glow" />
            <a
              href="https://wa.me/917985751087"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp: +91 7985751087
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-red-400 w-5 h-5 drop-shadow-glow" />
            <a href="mailto:raagsaazband@gmail.com" className="hover:underline">
              Email: raagsaazband@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="text-blue-400 w-5 h-5 drop-shadow-glow" />
            <span>Call: +91 7985751087</span>
          </div>
        </div>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-fade-in-slow {
            animation: fadeIn 1.6s ease-out forwards;
          }
          .drop-shadow-glow {
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.3));
          }
          .animate-wave {
            display: inline-block;
            animation: wave 2s infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            45% { transform: rotate(14deg); }
            60% { transform: rotate(-4deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

export default BookingConfirmation;
