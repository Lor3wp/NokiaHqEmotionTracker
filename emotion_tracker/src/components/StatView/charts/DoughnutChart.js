import React, { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

Chart.register(ArcElement);
// options for Doughnut
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: 110,
};

const options2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: 80,
};

const DoughnutChart = () => {
  // data template for population
  const [doughnutData, setDoughnutData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total emotions in DoughnutChart",
        data: [],
        backgroundColor: [],
        borderRadius: 0,
        spacing: 0,
      },
    ],
  });
  const [doughnut2Data, setDoughnut2Data] = useState({
    labels: [],
    datasets: [
      {
        label: "Total emotions in DoughnutChart",
        data: [],
        backgroundColor: [],
        borderRadius: 0,
        spacing: 0,
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
      process2Data(jsonData)
    }
    fetchData();
  }, []);

  // process response json and populate data into doughnutData template
  const processData = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in doughnutchart",
          data: [],
          backgroundColor: [],
          borderRadius: 0,
          spacing: 0,
        },
      ],
    };
    for (let i in json) {
      data.labels.push(emotionData[i].label);
      data.datasets[0].data.push(json[i].count);
      data.datasets[0].backgroundColor.push(emotionData[i].rgbColor);
    }
    setDoughnutData(data);
  }

  const process2Data = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in doughnutchart",
          data: [4, 2, 1, 2, 7, 2, 3, 2, 5, 2, 4, 2, 1, 2, 9, 2],
          backgroundColor: [],
          borderRadius: 0,
          spacing: 0,
        },
      ],
    };
    for (let i in json) {
      data.labels.push(emotionData[i].label);
      data.datasets[0].data.push(json[i].count);
      data.datasets[0].backgroundColor.push(emotionData[i].rgbColor);
    }
    setDoughnut2Data(data);
  }

  return (
    <div style={{position: "relative", width: "290px", height: "290px", margin: "0px"}}>
      <div>
      <Doughnut
      data={doughnutData}
      options={options}
      style={{width: "275px", height: "275px", position: "absolute"}}
    />
    </div>
    <div style={{top: "0px", left: "0px"}}>
      <Doughnut
      data={doughnut2Data}
      options={options2}
      style={{maxWidth: "220px", maxHeight: "220px", position: "absolute", top: "35px", left: "35px"}}
      />
    </div>
    </div>
    
    
  );
}

export default DoughnutChart;
