import React from "react";

const SearchFilterBar = () => {
  return (
    <div className="flex flex-wrap justify-end items-center p-3 sm:p-4 gap-2 bg-[#81BFE4] my-5 rounded-lg">
      {/* First Input */}
      <div className="flex  items-center px-3 bg-white rounded-md shadow w-full sm:w-[45%] mx-auto md:mx-0 md:w-[30%]">
        <input
          type="text"
          placeholder="Patientennamen"
          className="w-full p-2 bg-transparent outline-none"
        />
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Second Input */}
      <div className="flex items-center px-3 bg-white rounded-md shadow w-full sm:w-[45%] mx-auto md:mx-0 md:w-[30%]">
        <input
          type="text"
          placeholder="Geben Sie das Monitorkonto ein"
          className="w-full p-2 bg-transparent outline-none"
        />
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Filter Button */}
      <button className="flex items-center text-sm md:text-lg  mx-auto hover:scale-105 transition-all duration-200 ease-in md:mx-0 px-2 md:px-4 py-1 md:py-2 font-semibold text-[#0480CA] bg-white rounded-md shadow active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 mt-1 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-1.447.894l-3-1.5A1 1 0 019 17.586V12.414a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z"
          />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default SearchFilterBar;