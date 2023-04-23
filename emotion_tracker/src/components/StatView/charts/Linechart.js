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
      {
        label: [],
        data: [],
        borderColor: "",
        backgroundColor: "",
      },
    ],
  });

  useEffect(() => {
    let data = {
      labels: [],
      datasets: []                              //new Array(emotionData.length).fill({
        // label: [],
        // data: [],
        // borderColor: "",
        // backgroundColor: "",
      //}),
    };
    for (let i in emotionData) {
      data.datasets.push({
        label: emotionData[i].label,
        data: emotionData[i].count,
        borderColor: emotionData[i].rgbColor,
        backgroundColor: emotionData[i].rgbColor
      })
    }
    console.log(data, "here here")
    switch (props.timeUnit) {
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
      default:
        data.labels = new Array(emotionData[0].count.length).fill(0);

        break;
    }

    // emotionData.map((emotion) => {
    //   data.datasets[emotion.id - 1].label = emotion.label;
    //   data.datasets[emotion.id - 1].data = emotion.count;
    //   data.datasets[emotion.id - 1].borderColor = emotion.rgbColor;
    //   data.datasets[emotion.id - 1].backgroundColor = emotion.rgbColor;
    //   // console.log(data.datasets[emotion.id - 1]);
    // });
    // console.log(props.data);
    setLineData(data);
  }, [props.timeUnit, props.data]);

  return <Line data={lineData} options={options} />;
};

export default LineChart;
