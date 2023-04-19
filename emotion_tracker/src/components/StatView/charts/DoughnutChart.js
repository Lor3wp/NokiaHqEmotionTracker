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
  cutout: "90%",
};

const options2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: "90%",
};

const DoughnutChart = (props) => {
  // data template for population
  console.log("did it go?", props.chartContainerDivHeight, props.chartContainerDivWidth)
  const maxDivSize = props.chartContainerDivHeight > props.chartContainerDivWidth ? props.chartContainerDivWidth : props.chartContainerDivHeight;
  console.log("90%", maxDivSize/100*90)
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
    // async function fetchData() {
      // const response = await fetch(
      //   `http://localhost:3001/getstats/getemotions/`
      // );
      // const jsonData = await response.json();
      // // check if ammount of emotions is same as in emotionData.js
      // if (jsonData.length !== emotionData.length) {
      //   console.error(
      //     "emmount of emotions dose not match from database and emotionData.js"
      //   );
      // }

      if (props.data != null && props.data.length > 1) {
        // console.log("stringi");
        processData(props.data);
        process2Data(props.data);
    }
    // fetchData();
  }, [props.data]);

  // process response json and populate data into doughnutData template
  const processData = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in piechart",
          data: [],
          backgroundColor: [],
          borderRadius: 0,
          spacing: 0,
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

    console.log(emotionData);
    setDoughnutData(data);
  }

  const process2Data = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in piechart",
          data: [],
          backgroundColor: [],
          borderRadius: 0,
          spacing: 0,
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

    console.log(emotionData);
    setDoughnut2Data(data);
  }
  // maxDivSize
  return (
    <div style={{position: "relative", width: (maxDivSize/100*90), height: (maxDivSize/100*90), margin: "0px"}}>
      <div style={{ }}>
        <Doughnut
          data={doughnutData}
          options={options}
          style={{width: "100%", height: "100%", position: "absolute", }}
        />
        <Doughnut
            data={doughnut2Data}
            options={options2}
            style={{
              width: (maxDivSize/100*80),
              height: (maxDivSize/100*80),
              position: "absolute",
              padding: "5%"}}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
