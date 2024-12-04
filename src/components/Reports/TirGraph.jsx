import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components in ChartJS
ChartJS.register(LinearScale, BarElement, Title, Tooltip, Legend);

const TIRGraph = () => {
  // Define the full data set
  const fullData = {
    labels: [
      "12. Juni 2024",
      "13. Juni 2024",
      "14. Juni 2024",
      "15. Juni 2024",
      "16. Juni 2024",
      "17. Juni 2024",
      "18. Juni 2024",
      "28. Juni 2024",
      "9. Juni 2024",
    ],
    datasets: [
      {
        label: "TAR (PT, >13.9 mmol/l)",
        data: [20, 30, 15, 25, 20, 5, 20, 22, 33, 55, 12], // Example data
        backgroundColor: "#6B21A8", // Purple
        stack: "Stack 1",
      },
      {
        label: "TAR (PT, mmol/l)",
        data: [20, 20, 15, 10, 17, 20, 30, 22, 33, 55, 12], // Example data
        backgroundColor: "#2563EB", // Blue
        stack: "Stack 1",
      },
      {
        label: "TIR (PT, 3.9 mmol/l–10 mmol/l)",
        data: [50, 20, 60, 55, 65, 70, 50, 22, 33, 55, 12], // Example data
        backgroundColor: "#22C55E", // Green
        stack: "Stack 1",
      },
    ],
  };

  // Define the limited data set
  const limitedData = {
    labels: ["12. Juni", "13. Juni", "14. Juni", "15. Juni", "16. Juni"],
    datasets: [
      {
        label: "TAR (PT, >13.9 mmol/l)",
        data: [20, 30, 15, 25, 20], // Corresponding values
        backgroundColor: "#6B21A8",
        stack: "Stack 1",
      },
      {
        label: "TAR (PT, mmol/l)",
        data: [30, 20, 25, 20, 15], // Corresponding values
        backgroundColor: "#2563EB",
        stack: "Stack 1",
      },
      {
        label: "TIR (PT, 3.9 mmol/l–10 mmol/l)",
        data: [50, 50, 60, 55, 65], // Corresponding values
        backgroundColor: "#22C55E",
        stack: "Stack 1",
      },
    ],
  };

  const [chartData, setChartData] = useState(fullData);

  // Update the chart data based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 568) {
        setChartData(limitedData);
      } else {
        setChartData(fullData);
      }
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Run on initial load
    handleResize();

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            color: "#000",
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto md:p-4">
      <h3 className="block mb-2 font-semibold text-black">
        <span className="w-4 h-4 text-blue-500 bg-blue-500 rounded-full">
          .
        </span>{" "}
        TIRGraph
      </h3>
      <div className="h-[28rem] relative">
        <span className="absolute top-8 sm:top-0 left-6"> %</span>
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default TIRGraph;
