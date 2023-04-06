import React, { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';
import emotionData from "./data/emotionData";

Chart.register(ArcElement);
// options for piechart
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

function Piechart() {
  // data template for population
  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total emotions in piechart",
        data: [],
        backgroundColor: [],
      },
    ],
  });

  // fetching all emotions from backend response type [ {"emotion_id: "1", count:"14""}, ...]
  useEffect(() => {
    async function fetchData() {
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

      processData(jsonData);
    }
    fetchData();
  }, []);

  // process response json and populate data into pieData template
  function processData(json) {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in piechart",
          data: [],
          backgroundColor: [],
        },
      ],
    };
    for (let i in json) {
      data.labels.push(emotionData[i].label);
      data.datasets[0].data.push(json[i].count);
      data.datasets[0].backgroundColor.push(emotionData[i].rgbColor);
    }
    setPieData(data);
  }

  return (
    <Pie
      data={pieData}
      options={options}
      style={{ width: "300px", height: "300px" }}
    />
  );
}

export default Piechart;