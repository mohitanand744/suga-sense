import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

const PatientenTable = React.lazy(() => import("../TableDatas/TableDataChart"));
import SearchFilterBar from "./../SearchBars/SearchFilterBar";
import CGMReport from "../Reports/CGMReport";
import HilfeSupport from "../Support/HilfeSupport";

const Dashboard = () => {
  const location = useLocation();
  const pathname = location.pathname.replaceAll("/", "");

  return (
    <div
      className={`${pathname === "dashboard" && "p-8"} dashboard ${
        pathname === "dashboardcgmreport" ? "bg-gray-100 " : "bg-white"
      }`}
    >
      {pathname === "dashboard" ||
      pathname === "dashboardpatienten" ||
      pathname === "dashboardsupport" ? (
        <>
          {pathname === "dashboard" ? (
            <div className="flex flex-wrap justify-between w-auto gap-5 dashboardSection1">
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[48%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg2.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Aktive Sensoren</h2>
                  <h1 className="text-2xl font-semibold text-black">1265</h1>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[48%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg1.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Patienten</h2>
                  <h1 className="text-2xl font-semibold text-black">26</h1>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <SearchFilterBar pathname={pathname} />

          {pathname === "dashboard" || pathname === "dashboardpatienten" ? (
            <Suspense
              fallback={
                <center className="flex items-center justify-center w-full h-[30vh]">
                  <img src="/images/Logo.svg" alt="" />
                </center>
              }
            >
              <PatientenTable pathname={pathname} />
            </Suspense>
          ) : (
            ""
          )}
        </>
      ) : pathname === "dashboardcgmreport" ? (
        <>
          <SearchFilterBar pathname={pathname} />

          <CGMReport />
        </>
      ) : (
        ""
      )}

      {pathname === "dashboardsupport" && (
        <>
          <HilfeSupport />
        </>
      )}
    </div>
  );
};

export default Dashboard;
