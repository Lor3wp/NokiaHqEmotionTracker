import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

Chart.defaults.color = "#FFFFFF";

const options = {
  type: "line",
  scales: {
    x: {
      ticks: {
        color: "#FFFFFF",
      },
      grid: {
        color: "#FFFFFF",
      },
    },
    y: {
      grid: {
        color: "#FFFFFF",
      },
      ticks: {
        color: "#FFFFFF",
      },
    },
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
      },
    },
  },
};

const LineChart = (props) => {
  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      // {
      //   label: [],
      //   data: [],
      //   borderColor: "",
      //   backgroundColor: "",
      //   spanGaps: true
      // },
    ],
  });

  return <Line data={lineData} options={options} />;
};

export default LineChart;
