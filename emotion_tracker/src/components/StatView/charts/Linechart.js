import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

const DATA_COUNT = 7;

const labels = ['Ma', 'Ti', 'Ke', 'To', 'Pe'];


const options = {
    type: 'line',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };

const LineChart = () => {
    const [lineData, setLineData] = useState({
        labels: [],
        datasets: [
          {
            label: [],
            data: [],
            borderColor: [],
            backgroundColor: [],
          },
          {
              label: [],
              data: [],
              borderColor: [],
              backgroundColor: [],
            },
            {
              label: [],
              data: [],
              borderColor: [],
              backgroundColor: [],
            },
            {
              label: [],
              data: [],
              borderColor: [],
              backgroundColor: [],
            },
            {
              label: [],
              data: [],
              borderColor: [],
              backgroundColor: [],
            },
        ]
});

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

  // process response json and populate data into LineData template
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
    setLineData(data);
  }

  return <Line data={lineData} options={options} />;
};

export default LineChart;