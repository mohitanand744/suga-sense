import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Left Section */}
      <div className="flex items-center justify-center w-full h-screen p-3 md:p-8 md:w-1/2 bg-gray-50">
        <div className="w-full max-w-md p-5  border-b-2 border-[#0480CA] shadow-[#0480CA] shadow-md md:border-none md:p-0 rounded-2xl md:shadow-none">
          {/* Logo */}
          <div className="mb-6 ">
            <img
              src="/images/Logo.svg" // Replace with the actual path
              alt="SugaSense Logo"
              className="h-20 mx-auto md:mx-0"
            />
          </div>

          {/* Welcome Text */}
          <h2 className="mb-2 text-2xl md:text-4xl font-bold text-[#0480CA]">
            Willkommen zurück
          </h2>
          <p className="mb-6 text-lg text-gray-400 md:text-xl">
            Bitte melden Sie sich bei Ihrem Konto an
          </p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-600"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="DoctorJohn@Email.com"
                className="w-full px-4 py-2 text-black bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-gray-600"
              >
                Passwort
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-4 py-2 text-black bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 flex items-center text-gray-500 right-3"
                >
                  👁️
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="relative flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 bg-transparent border-2 border-gray-300 rounded-md appearance-none focus:ring-[#0480CA] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:top-[6%] md:checked:after:top-[4%] checked:after:left-[3%] checked:after:text-xs focus:ring-2 checked:bg-[#0480CA]"
                />

                <span className="text-sm text-gray-600">
                  angemeldet bleiben
                </span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Passwort vergessen?
              </a>
            </div>

            <Link to="/dashboard">
              <button
                type="button"
                className="w-full py-2 transition-all duration-100 ease-linear text-white bg-[#0480CA] rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden w-1/2 h-screen bg-blue-100 md:relative md:block">
        <img
          src="/images/loginImg.png" // Replace with the actual path
          alt="Medical Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
