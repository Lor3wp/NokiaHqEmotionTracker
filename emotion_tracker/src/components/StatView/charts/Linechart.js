import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";
import { withTheme } from "styled-components";

const options = {
  type: "line",
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  },
};

const LineChart = (props) => {
  const [lineData, setLineData] = useState({
    labels: ["ma", "ti", "ke", "to", "pe"],
    datasets: [],
  });

  useEffect(() => {
    /*async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/getstats/getemotions/`
      );
      const jsonData = await response.json();
      // check if ammount of emotions is same as in emotionData.js
      if (jsonData.length !== emotionData.length) {
        console.error(
          "emmount of emotions dose not match from database and emotionData.js"
        );
      }

    }*/
    if (props.data != null && props.data.length > 1) {
      processData(props.data);
    }
  }, [props.data]);

  // process response json and populate data into LineData template
  const processData = (json) => {
    const data = {
      labels: ["ma", "ma", "ma", "ma", "ma"],
      datasets: [
        {
          label: [],
          data: [1, 4, 2, 4, 1, 6],
          borderColor: "white ",
          backgroundColor: [],
        },
        {
          label: [],
          data: [2, 4, 7, 3, 4, 1],
          borderColor: "red ",
          backgroundColor: [],
        },
        {
          label: [],
          data: [1, 7, 2, 2, 7, 8],
          borderColor: "blue ",
          backgroundColor: [],
        },
      ],
    };

    // for (let i in json) {
    //   if (json[0].created_at > 0) {
    //     console.log(json[i].created_at - json[0].created_at);
    //   } else {
    //     console.log(json[i].created_at);
    //   }
    //   emotionData[json[i].emotion_id - 1].count = json[i].count;
    // }
    // emotionData.map((emotion) => {
    //   data.labels.push(emotion.label);
    //   data.datasets[0].data.push(emotion.count);
    //   data.datasets[0].backgroundColor.push(emotion.rgbColor);
    // });
    // for (let i in json) {
    // }
    // console.log(data.datasets[0]);
    setLineData(data);
  };

  return <Line data={lineData} options={options} />;
};

export default LineChart;