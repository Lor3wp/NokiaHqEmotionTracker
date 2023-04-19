import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";


const options = {
    type: 'line',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };

const LineChart = (props) => {
    const [lineData, setLineData] = useState({
        labels: [],
        datasets: [
          {
            label: [],
            data: [],
            borderColor: [],
            backgroundColor: [],
          }
        ]
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
    if(props.data != null && props.data.lenght > 1) {
    processData(props.data);
    }

  }, [props.data]);

  // process response json and populate data into LineData template
  const processData = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in doughnutchart",
          data: [],
          backgroundColor: [],
        },
      ],
    };

    for (let i in json) {
        emotionData[json[i].emotion_id - 1].count = json[i].count;
      }
      emotionData.map((emotion) => {
        data.labels.push(emotion.label);
        data.datasets[0].data.push(emotion.count);
        data.datasets[0].backgroundColor.push(emotion.rgbColor);
      });

      setLineData(data);
    };

  return <Line data={lineData} options={options} />;
};

export default LineChart;