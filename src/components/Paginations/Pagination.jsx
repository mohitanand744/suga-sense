import React, { useState } from "react";

const Pagination = ({ totalResults = 368, resultsPerPage = 10, active }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 px-4 py-2 my-5 ${
        active !== "Ereignisaufzeichnung" && "bg-white rounded-md "
      } sm:justify-between`}
    >
      {active !== "Ereignisaufzeichnung" && (
        <div className="relative flex flex-wrap items-center justify-center sm:justify-start w-full sm:w-[50%] gap-5">
          <select
            className="block px-3 py-2 text-sm text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue={resultsPerPage}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

          <div className="text-sm font-bold text-gray-600">
            Resultat: {resultsPerPage * (currentPage - 1) + 1}-
            {Math.min(resultsPerPage * currentPage, totalResults)} von{" "}
            {totalResults}
          </div>
        </div>
      )}

      {/* Pagination */}
      <div
        className={`flex items-center justify-end gap-1 ${
          active === "Ereignisaufzeichnung" && "w-full"
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`flex items-center justify-center w-8 h-8 border rounded-lg ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          disabled={currentPage === 1}
        >
          <img className="w-[30%]" src="/images/aerro.png" alt="" />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center w-8 h-8 border rounded-lg active:scale-90 hover:scale-105 ${
                    currentPage === page
                      ? "bg-[#0480CA] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              );
            }
            if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <button
                  key={page}
                  onClick={
                    () =>
                      page < currentPage
                        ? handlePageChange(currentPage - 5) // Jump backward
                        : handlePageChange(currentPage + 5) // Jump forward
                  }
                  className="w-8 h-8 px-2 text-gray-700 transition-all duration-200 ease-in-out border rounded-md active:scale-90 hover:scale-105 hover:bg-gray-100"
                >
                  ...
                </button>
              );
            }
            return null;
          }
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`flex items-center justify-center w-8 h-8 border rounded-lg ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          disabled={currentPage === totalPages}
        >
          <img className="w-[30%] rotate-180" src="/images/aerro.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
