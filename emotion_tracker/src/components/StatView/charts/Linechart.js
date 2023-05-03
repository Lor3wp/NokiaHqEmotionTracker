import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

Chart.defaults.color = "#FFFFFF";

const options = {
  plugins: {
    legend: {
      display: true,
      // align: "start",
      position: "right",
      maxWidth: 120,
      textDirection: "ltr",
      labels: {
        // textAlign: "right",
        usePointStyle: true,
        // poinStyleWidth: 200,
      },
    },
  },
  type: "line",
  scales: {
    x: {
      ticks: {
        color: "#FFFFFF",
      },
    },
    y: {
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
      // EXAMPLE DATA
      // {
      //   label: [],
      //   data: [],
      //   borderColor: "",
      //   backgroundColor: "",
      //   spanGaps: true
      // },
    ],
  });

  useEffect(() => {
    let data = {
      labels: [],
      datasets: [], //new Array(emotionData.length).fill({
    };
    switch (props.timeUnit) {
      case "day":
        data.labels = [...Array(emotionData[0].count.length).keys()];
        break;
      case "week":
        data.labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        break;
      case "month":
        data.labels = [...Array(emotionData[0].count.length).keys()].map(
          (i) => i + 1
        );
        break;
      case "year":
        data.labels = [
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
        ];
        break;
      case "years":
        let startingYear = Math.floor(props.chartDate[3] / 10) * 10;
        let decadeYears = [startingYear];
        for (let i = 0; i <= 8; i++) {
          startingYear += 1;
          decadeYears.push(startingYear);
        }
        data.labels = decadeYears;
        break;

      default:
        data.labels = new Array(emotionData[0].count.length).fill(0);

        break;
    }

    let longestLabel = 0;
    emotionData.map((emotion) => {
      if (emotion.label.length > longestLabel) {
        longestLabel = emotion.label.length;
      }
    });
    emotionData.map((emotion) => {
      if (emotion.label.length < longestLabel) {
        data.datasets.push({
          label:
            emotion.label + " ".repeat(longestLabel - emotion.label.length),
          data: emotion.count,
          spanGaps: true,
          borderColor: emotion.chartColor,
          backgroundColor: emotion.chartColor,
        });

      } else {
        data.datasets.push({
          label: emotion.label,
          data: emotion.count,
          spanGaps: true,
          borderColor: emotion.chartColor,
          backgroundColor: emotion.chartColor,
        });
      }
    });

    setLineData(data);
  }, [props.dataFetched]);

  return <Line data={lineData} options={options} />;
};

export default LineChart;
