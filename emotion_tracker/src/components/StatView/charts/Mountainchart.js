import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

const options = {
  type: "Line",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      stacked: true,
      min: 0,
      max: 100,
    },
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  },
};

const MountainChart = (props) => {
  const [mountainData, setMountainData] = useState({
    labels: [],
    datasets: [
      // {
      //   label: "Happy",
      //   data: [90, 20, 70, 10, 90, 50],
      //   borderColor: "rgb(61, 148, 42)",
      //   backgroundColor: "rgb(61, 148, 42)",
      //   fill: true,
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
    let avg = [...Array(emotionData[0].count.length).fill(0)];
    // console.log(avg);
    emotionData.map((emotion) => {
      for (let i in emotion.count) {
        avg[i] += emotion.count[i] ? emotion.count[i] : 0;
      }
      // console.log(emotion.count);
    });
    // console.log(avg);
    emotionData.map((emotion) => {
      let values = [];
      for (let i in emotion.count) {
        values[i] = (emotion.count[i] / avg[i]) * 100;
      }
      data.datasets.push({
        label: emotion.label,
        data: values,
        borderColor: emotion.chartColor,
        backgroundColor: emotion.chartColor,
        // fill: true,
      });
    });
    setMountainData(data);
  }, [props.dataFetched]);

  return <Line data={mountainData} options={options} />;
};

  export default MountainChart;