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

const KontinuierlicherGraph = ({ graphName }) => {
  const data = {
    labels: [
      "12. Juni 2024",
      "13. Juni 2024",
      "14. Juni 2024",
      "15. Juni 2024",
      "16. Juni 2024",
      "18. Juni 2024",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [6, 8, 12, 20, 18, 7.3, 5, 6],
        borderColor: "#eb9902", // Orange
        backgroundColor: "rgba(235, 153, 2, 0.2)", // Semi-transparent orange
        borderWidth: 2, // Standardized line thickness
        tension: 0.4, // Smoothness of the curve
        pointBackgroundColor: "#eb9902", // Point color matches the line
        pointRadius: 4, // Standardized point size
        fill: true,
      },
      {
        label: "Dataset 2",
        data: [2, 13, 1, 20, 8, 7.3, 9, 11],
        borderColor: "#ff4949", // Red
        backgroundColor: "rgba(255, 73, 73, 0.2)", // Semi-transparent red
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#ff4949",
        pointRadius: 4,
        fill: true,
      },
      {
        label: "Dataset 3",
        data: [9, 15, 2, 10, 8, 17.3, 15, 6],
        borderColor: "#22aa00", // Green
        backgroundColor: "rgba(34, 170, 0, 0.2)", // Semi-transparent green
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#22aa00",
        pointRadius: 4,
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
          callback: (value) => `${value} mmol/L`, // Add units to axis labels
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
        callbacks: {
          label: (context) => `${context.raw} mmol/L`, // Show unit in tooltip
        },
      },
    },
  };

  return (
    <div className="w-full p-3 md:p-5 overflow-hidden bg-white h-[29rem] rounded-lg shadow ">
      <h3 className="block font-semibold text-black">
        <span className="w-4 h-4 text-blue-500 bg-blue-500 rounded-full">
          .
        </span>{" "}
        {graphName}
      </h3>
      <div className="relative flex items-center w-full gap-2">
        <div className="flex-col hidden w-12 md:flex">
          <button className="w-full p-3 px-3 text-white bg-[#0480CA] rounded-t-full">
            12
          </button>
          <div className="flex items-center justify-center w-full h-24 border">
            <p className="rotate-90">Zielbereich</p>
          </div>
          <button className="w-full p-3 px-3 text-white bg-[#0480CA] rounded-b-full">
            4
          </button>
        </div>

        <div className="w-[95%] h-[25rem] flex justify-center items-center">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default KontinuierlicherGraph;
