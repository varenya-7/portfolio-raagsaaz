import React from "react";

const BookingConfirmation = () => {
  return (
    <div className="fixed inset-0 bg-black text-white z-50">
      {/* Top Logo - responsive top spacing */}
      <div className="absolute top-20 sm:top-28 md:top-32 lg:top-40 left-0 right-0 flex justify-center">
        <img
          src="https://ik.imagekit.io/3wtfzxgon/Raagsaaz-Logo.png?updatedAt=1746356381576"
          alt="Raagsaaz Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
        />
      </div>

      {/* Centered Thank You Message */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
          Thank you for contacting us! 😊
        </h1>
      </div>
    </div>
  );
};

export default BookingConfirmation;
