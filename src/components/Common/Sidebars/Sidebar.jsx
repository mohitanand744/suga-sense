import React, { useState } from "react";
import UseContextData from "../../../Hooks/UseContextData";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const { toggleNav, setToggleNav } = UseContextData();

  return (
    <div
      className={`w-[17rem] absolute ${
        toggleNav ? "left-[0%] " : "left-[-100%] "
      }  md:left-0 top-0 bottom-0 min-h-[100vh] flex flex-col justify-between items-center p-5 bg-white border-r transition-all duration-200 ease-in-out`}
    >
      <img
        onClick={() => setToggleNav((prev) => !prev)}
        className="absolute right-2 top-1 w-[2rem] cursor-pointer"
        src="https://img.icons8.com/carbon-copy/100/cancel.png"
        alt=""
      />
      <div className="w-full logo">
        <img className="mx-auto" src="/images/Logo.svg" alt="" />
      </div>

      <div class="w-64 bg-gray-50 h-screen p-4">
        <ul class="space-y-4">
          <li onClick={() => setActive("dashboard")}>
            <a
              href="#"
              class={`flex items-center space-x-4  p-2 ${
                active === "dashboard"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear"
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/dashboardIcon.svg" alt="" />
              <span>Dashboard</span>
            </a>
          </li>
          <li onClick={() => setActive("Patienten")}>
            <a
              href="#"
              class={`flex items-center space-x-4  p-2 ${
                active === "Patienten"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/user-icon.png" alt="" />
              <span>Patienten</span>
            </a>
          </li>
          <li onClick={() => setActive("Support")}>
            <a
              href="#"
              class={`flex items-center space-x-4  p-2 ${
                active === "Support"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/infoIcon.png" alt="" />
              <span>Hilfe und Support</span>
            </a>
          </li>
          <li onClick={() => setActive("Einstellungen")}>
            <a
              href="#"
              class={`flex items-center space-x-4  p-2 ${
                active === "Einstellungen"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <span class="w-5 h-5 flex items-center justify-center text-gray-600">
                ⚙️
              </span>
              <span>Einstellungen</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <button class="flex text-lg items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-100 w-full">
          <img src="/images/signIcon.png" alt="exit" />
          <span> Abmelden</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
