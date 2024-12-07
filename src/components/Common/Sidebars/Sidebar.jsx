import React, { useEffect, useState } from "react";
import UseContextData from "../../../Hooks/UseContextData";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replaceAll("/", "") || "dashboard"
  );

  console.log(active);

  const { toggleNav, setToggleNav } = UseContextData();

  return (
    <div
      className={`w-[15rem] fixed z-40 ${
        toggleNav ? "left-[0%] " : "left-[-100%] "
      }  xl:left-0 top-0 bottom-0 min-h-[100vh] flex flex-col justify-between items-center p-5 bg-white border-r transition-all duration-200 ease-in-out`}
    >
      <img
        onClick={() => setToggleNav((prev) => !prev)}
        className="absolute block xl:hidden right-2 top-1 w-[2rem] cursor-pointer"
        src="https://img.icons8.com/carbon-copy/100/cancel.png"
        alt=""
      />
      <div className="w-full logo">
        <img className="mx-auto" src="/images/Logo.svg" alt="" />
      </div>

      <div className="w-full h-screen p-1 mt-5">
        <ul className="space-y-4">
          <li onClick={() => setActive("dashboard")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard"}
              className={`flex items-center space-x-4  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboard"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear"
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/dashboardIcon.svg" alt="" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardpatienten")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/patienten"}
              className={`flex items-center space-x-4  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardpatienten"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/user-icon.png" alt="" />
              <span>Patienten</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardsupport")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/support"}
              className={`flex items-center space-x-4  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardsupport"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/infoIcon.png" alt="" />
              <span>Hilfe und Support</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardeinstellungen")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/einstellungen"}
              className={`flex items-center space-x-4  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardeinstellungen"
                  ? "text-blue-600 bg-blue-100 scale-[1.1] transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <span className="w-5 h-5 flex items-center justify-center text-gray-600">
                ⚙️
              </span>
              <span>Einstellungen</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Link to={"/"}>
          <button className="flex text-lg items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-100 w-full">
            <img src="/images/signIcon.png" alt="exit" />
            <span> Abmelden</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
