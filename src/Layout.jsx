import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Common/Navbars/Nav";
import Sidebar from "./components/Common/Sidebars/Sidebar";

const Layout = () => {
  return (
    <div className="relative flex justify-between w-full h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:ml-[17rem]  transition-all duration-200 ease-in-out">
        {/* Navbar */}
        <Nav />

        {/* Outlet for Nested Routes */}
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
