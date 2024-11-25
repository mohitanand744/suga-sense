import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Common/Navbars/Nav";
import Sidebar from "./components/Common/Sidebars/Sidebar";
import Loading from "./components/Loading/Loading";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex xl:ml-[15rem] flex-col w-full h-screen">
            {/* Navbar */}
            <Nav />

            {/* Outlet for Nested Routes */}

            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
