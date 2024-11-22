import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Medical Image */}
        <img
          src="/images/404.webp" // Replace with your medical-related image path
          alt="Page Not Found"
          className="w-64 h-64 p-2 mx-auto mb-8 border-[5px] border-red-500 rounded-full md:w-80 md:h-80"
        />

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-red-600 md:text-4xl">
          404 - Page Not Found!
        </h1>

        {/* Subtitle */}
        <p className="mb-6 font-medium text-gray-600 text-md md:text-lg">
          Oops! The page you're looking for doesn't exist. Check the URL or
          return to the homepage.
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
