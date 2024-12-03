import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const TäglicheReport = ({ dataset }) => {
  const data = {
    labels: ["04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        label: "Dataset 1",
        data: dataset,
        borderColor: "#007ff7", // Orange
        backgroundColor: "rgba(0, 60, 255, 0.562)", // Semi-transparent orange
        borderWidth: 2, // Standardized line thickness
        tension: 0.4, // Smoothness of the curve
        pointBackgroundColor: "#007ff7", // Point color matches the line
        pointRadius: 4, // Standardized point size
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 24, // Adjust as per your data range
        ticks: {
          stepSize: 4, // Adjust tick intervals
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light gray grid lines
        },
      },
      x: {
        grid: {
          display: false, // Disable grid lines on x-axis
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Show dataset labels
        position: "top", // Position legend at the top
      },
      tooltip: {
        callbacks: {},
      },
    },
  };

  return (
    <div className="w-full  p-3 md:p-5 overflow-hidden bg-white h-[21.2rem] rounded-lg shadow ">
      <h3 className="block font-semibold text-black">
        <span className="w-4 h-4 text-blue-500 bg-blue-500 rounded-full">
          .
        </span>{" "}
        23.05.2024
      </h3>

      <div className="w-[95%] h-full pb-5 flex justify-center items-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TäglicheReport;
