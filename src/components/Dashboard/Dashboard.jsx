import React from "react";
import SearchFilterBar from "../SearchBars/SearchFilterBar";
import PatientenTable from "../TableDatas/TableDataChart";

const Dashboard = () => {
  return (
    <div className="px-3 py-8 bg-white xl:px-8 dashboard">
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

      <SearchFilterBar />

      <PatientenTable />
    </div>
  );
};

export default Dashboard;
