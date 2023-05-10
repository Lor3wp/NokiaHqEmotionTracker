import React, {useState, useEffect} from "react";
import {Chart, ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

Chart.register(ArcElement);
// options for piechart
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: 110,
};

const Piechart = (props) => {
  // data template for population
  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total emotions in DoughnutChart",
        data: [],
        backgroundColor: [],
        borderRadius: 10,
        spacing: 20,
      },
    ],
  });
  // fetching all emotions from backend response type [ {"emotion_id: "1", count:"14""}, ...]
  useEffect(() => {
    if (props.data != null && props.data.length > 1) {
    }
  }, [props.data]);

  // process response json and populate data into pieData template
  const processData = (json) => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "Total emotions in piechart",
          data: [],
          backgroundColor: [],
          borderRadius: 15,
          spacing: 20,
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
    setPieData(data);
  };

  return (
    <div>
      <Doughnut
        data={pieData}
        options={options}
        style={{width: "275px", height: "275px"}}
      />
    </div>
  );
}

export default Piechart;
