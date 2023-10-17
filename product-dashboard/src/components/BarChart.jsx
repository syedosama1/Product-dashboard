import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // Import LinearScale
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale); // Register both CategoryScale and LinearScale

export const BarChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
        maintainAspectRatio: false,
      },
      title: {
        display: false,
        text: "Outpatient vs. Inpatient trends",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "monthly earning",
        data: [
          8,
          8,
          7,
          9,
          10,
          7,
          7,
          12, // "Aug" - 1 to indicate the blue column
          9,
          8,
          6,
          5,
        ],
        backgroundColor: [
          "white",
          "white",
          "white",
          "white",
          "white",
          "white",
          "white",
          "#0000FF", // "Aug" - Blue color
          "white",
          "white",
          "white",
          "white",
        ],
        borderWidth: 3,
        barPercentage: 1,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="w-[75%] h-[15rem] sm:w-full">
      <p className="mb-4 font-bold">Overview</p>
      <p>Monthly Earning</p>

      <div className="w-full h-full">
        <Bar data={barChartData} options={options} width={550} height={200} />
      </div>
    </div>
  );
};
