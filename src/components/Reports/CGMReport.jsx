import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import KontinuierlicherGraph from "./KontinuierlicherGraph";
import TäglicheReport from "./TäglicheReport";
import TIRGraph from "./TirGraph";
import Druckoption from "./Druckoption";
import Pagination from "../Paginations/Pagination";

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const CGMReport = () => {
  const [responsiveChart, setResponsiveChart] = useState("left");
  const [active, setActive] = useState("Überblick");

  const chartData = {
    labels: ["Higher than 12", "Normal Range (4-12)", "Lower than 4"],
    datasets: [
      {
        data: [50.19, 49.81, 0],
        backgroundColor: ["#EF5350", "#42A5F5", "#FFB74D"],
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: responsiveChart,
        labels: {
          font: {
            size: 14,
          },
          boxWidth: 20, // Adjust the width of the legend color box
          padding: 10, // Add padding between legend items
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    if (window.innerWidth <= 548) {
      setResponsiveChart("bottom");
    } else {
      setResponsiveChart("left");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 548) {
        setResponsiveChart("bottom");
      } else {
        setResponsiveChart("left");
      }
    });
  }, []);

  return (
    <div className="px-3 xl:py-3 xl:px-5">
      <div className="mb-4 rounded-lg">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex w-full overflow-auto hideScrollBar">
            <button
              onClick={() => setActive("Überblick")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "Überblick"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } rounded-s-full`}
            >
              Überblick
            </button>
            <button
              onClick={() => setActive("24-Stunden-Überlappungsdiagramm")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "24-Stunden-Überlappungsdiagramm"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } `}
            >
              24-Stunden-Überlappungsdiagramm
            </button>
            <button
              onClick={() => setActive("Tägliche Zusammenfassung")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "Tägliche Zusammenfassung"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } `}
            >
              Tägliche Zusammenfassung
            </button>
            <button
              onClick={() => setActive("TIRGraph")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "TIRGraph"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } `}
            >
              TIRGraph
            </button>
            <button
              onClick={() => setActive("Druckoption")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "Druckoption"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } `}
            >
              Druckoption
            </button>
            <button
              onClick={() => setActive("Datentabelle")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "Datentabelle"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } `}
            >
              Datentabelle
            </button>
            <button
              onClick={() => setActive("Ereignisaufzeichnung")}
              className={`w-full py-2 px-3 text-sm font-semibold  ${
                active === "Ereignisaufzeichnung"
                  ? "bg-[#0480CA] text-white"
                  : "bg-white text-black"
              } rounded-e-full`}
            >
              Ereignisaufzeichnung
            </button>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex flex-wrap items-center justify-between mb-4 space-y-2 md:mb-0 md:space-x-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="date"
                className="w-full px-2 py-2 text-sm text-gray-500 bg-white rounded-md appearance-none sm:px-4 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Geben Sie den Namen ein"
              />
              <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-[0.8rem] font-medium text-gray-900  sm:text-sm">
              bis
            </span>
            <div className="relative">
              <input
                type="date"
                className="w-full px-2 py-2 text-sm text-gray-500 bg-white rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Geben Sie den Namen ein"
              />
              <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-sm font-bold text-gray-900">
            Insgesamt 0 Tage
          </div>
        </div>
      </div>

      {active === "Überblick" && (
        <>
          <div className="py-4 md:py-6 ">
            <div className="grid grid-cols-1 gap-4 md:gap-5 xl:grid-cols-12">
              {/* Left Section */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:col-span-5">
                {/* Cards */}
                {[
                  {
                    value: "9.16",
                    unit: "mmol/L",
                    label: "Durchschnitts-wert",
                  },
                  { value: "1.72", unit: "SD", label: "Standard Abweichung" },
                  {
                    value: "15.7",
                    unit: "mmol/L",
                    label: "Durchschnitts-wert",
                  },
                  { value: "2.62", unit: "", label: "Effektive Amplitude" },
                  { value: "71.7", unit: "%", label: "TIR" },
                  { value: "6.2", unit: "mmol/L", label: "Niedrigster Wert" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 text-center bg-white rounded-lg shadow h-[8rem] md:h-[10rem]"
                  >
                    <h2 className="text-base font-bold text-gray-800 sm:text-lg md:text-2xl">
                      {item.value}{" "}
                      <span className="block text-sm text-gray-500 sm:text-md md:text-lg">
                        {item.unit}
                      </span>
                    </h2>
                    <p className="text-sm text-gray-500 sm:text-md">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-center xl:col-span-5">
                <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow">
                  <h3 className="mb-4 text-base font-semibold text-gray-700 md:text-lg">
                    Blutzuckerverhältnis
                  </h3>
                  <div
                    className={`w-full`}
                    style={{ maxWidth: "400px", height: "220px" }}
                  >
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Hyperglykämie: 7.19% Hypoglykämie: 0%
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 bg-white rounded-lg shadow xl:col-span-2">
                <h4 className="mb-2 font-semibold text-gray-700">Details:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Sender-ID: 022309348</li>
                  <li>Sensor-ID: 6NSOX4</li>
                  <li>APP: CGM</li>
                  <li>Mobil: Redmi 23012RAA2Y 13 2022</li>
                  <li>System:</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mb-6">
            <KontinuierlicherGraph graphName={"Kontinuierlicher Graph"} />
          </div>
        </>
      )}

      {active === "24-Stunden-Überlappungsdiagramm" && (
        <>
          <div className="flex items-center justify-center w-full mb-6">
            <KontinuierlicherGraph
              graphName={"24-Stunden-Überlappungsdiagramm"}
            />
          </div>
        </>
      )}

      {active === "Tägliche Zusammenfassung" && (
        <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-12">
          <div className="col-span-6 mr-4 space-y-4">
            <TäglicheReport dataset={[6, 18, 2, 20, 8, 17.3]} />
            <TäglicheReport dataset={[16, 8, 12, 6, 8, 7.3]} />
            <TäglicheReport dataset={[9, 18, 2, 10, 18, 17.3]} />
          </div>

          <div className="col-span-6 space-y-4">
            <div className="grid grid-cols-12 gap-4">
              {[
                {
                  value: "9.16",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                { value: "1.72", unit: "SD", label: "Standard Abweichung" },
                {
                  value: "15.7",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                {
                  value: "2.62",
                  unit: "%",
                  label: "Hyperglykämie Prozentsatz",
                },
                { value: "71.7", unit: "%", label: "Hypoglykämie Prozent" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 text-center ${
                    index === 0 || index === 1 || index === 2
                      ? "col-span-6 sm:col-span-4"
                      : index === 4
                      ? "col-span-12 md:col-span-6"
                      : "col-span-6"
                  } bg-white rounded-lg shadow h-[8rem] md:h-[10rem]`}
                >
                  <h2 className="text-base font-bold text-gray-800 sm:text-lg md:text-2xl">
                    {item.value}{" "}
                    <span className="block text-sm text-gray-500 sm:text-md md:text-lg">
                      {item.unit}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500 xl:text-lg">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-4">
              {[
                {
                  value: "9.16",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                { value: "1.72", unit: "SD", label: "Standard Abweichung" },
                {
                  value: "15.7",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                {
                  value: "2.62",
                  unit: "%",
                  label: "Hyperglykämie Prozentsatz",
                },
                { value: "71.7", unit: "%", label: "Hypoglykämie Prozent" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 text-center ${
                    index === 0 || index === 1 || index === 2
                      ? "col-span-6 sm:col-span-4"
                      : index === 4
                      ? "col-span-12 md:col-span-6"
                      : "col-span-6"
                  } bg-white rounded-lg shadow h-[8rem] md:h-[10rem]`}
                >
                  <h2 className="text-base font-bold text-gray-800 sm:text-lg md:text-2xl">
                    {item.value}{" "}
                    <span className="block text-sm text-gray-500 sm:text-md md:text-lg">
                      {item.unit}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500 xl:text-lg">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-4">
              {[
                {
                  value: "9.16",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                { value: "1.72", unit: "SD", label: "Standard Abweichung" },
                {
                  value: "15.7",
                  unit: "mmol/L",
                  label: "Durchschnitts-wert",
                },
                {
                  value: "2.62",
                  unit: "%",
                  label: "Hyperglykämie Prozentsatz",
                },
                { value: "71.7", unit: "%", label: "Hypoglykämie Prozent" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 text-center ${
                    index === 0 || index === 1 || index === 2
                      ? "col-span-6 sm:col-span-4"
                      : index === 4
                      ? "col-span-12 md:col-span-6"
                      : "col-span-6"
                  } bg-white rounded-lg shadow h-[8rem] md:h-[10rem]`}
                >
                  <h2 className="text-base font-bold text-gray-800 sm:text-lg md:text-2xl">
                    {item.value}{" "}
                    <span className="block text-sm text-gray-500 sm:text-md md:text-lg">
                      {item.unit}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500 xl:text-lg">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {active === "TIRGraph" && <TIRGraph />}

      {active === "Druckoption" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-lg font-semibold text-black">
              <span className="w-4 h-4 text-blue-500 bg-blue-500 rounded-full">
                .
              </span>{" "}
              Zum Drucken auswählen
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 ">
              <button className="px-4 py-2 text-white bg-blue-400 rounded">
                Bericht
              </button>
              <button className="px-4 py-2 text-black bg-white rounded">
                Drucken 🖨️
              </button>
              <button className="px-4 py-2 text-black bg-white rounded">
                Als PDF speichern📥
              </button>
            </div>
          </div>

          <Druckoption />
        </>
      )}

      {active === "Datentabelle" && (
        <>
          <Druckoption />
        </>
      )}
      {active === "Ereignisaufzeichnung" && (
        <>
          <Druckoption />
          <Pagination active={active} />
        </>
      )}
    </div>
  );
};

export default CGMReport;
