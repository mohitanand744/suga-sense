import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Common/Navbars/Nav";
import Sidebar from "./components/Common/Sidebars/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex xl:ml-[17rem] flex-col w-full h-screen">
        {/* Navbar */}
        <Nav />

        {/* Outlet for Nested Routes */}

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
