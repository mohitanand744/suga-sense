import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Common/Navbars/Nav";
import Sidebar from "./components/Common/Sidebars/Sidebar";

const Layout = () => {
  return (
    <div className="flex justify-between w-full h-screen">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
