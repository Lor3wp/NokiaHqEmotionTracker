import React, {useState, useEffect} from "react";
import {Chart, ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

Chart.register(ArcElement);
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  cutout: "50%",
};
const DoughnutChart = (props) => {
  const [total, setTotal] = useState(0);

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
      {
        label: "Total emotions in DoughnutChart",
        data: [],
        backgroundColor: [],
        borderRadius: 0,
        spacing: 0,
      },
    ],
  });
  useEffect(() => {
    processData();
  }, [props.dataFetched, props.maxHour, props.minHour, props.hourRange]);

  const processData = () => {
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
        {
          label: "Total emotions in piechart",
          data: [],
          backgroundColor: [],
          borderRadius: 0,
          spacing: 0,
        },
      ],
    };

    switch (props.timeUnit) {
      case "day":
        emotionData.map((emotion) => {
          let collected = 0;
          for (let k in emotion.count) {
            if (k >= props.minHour && k <= props.maxHour) {
              collected += emotion.count[k];
            }
          }

          data.labels.push("Total Of " + emotion.label);
          data.datasets[1].data.push(collected);
          data.datasets[1].backgroundColor.push(emotion.chartColor);
          data.datasets[0].data.push(0);
          data.datasets[0].backgroundColor.push(0);
        });
        for (let i in emotionData) {
          let collected_sub = 0;
          for (let k in emotionData[i].count) {
            if (k >= props.minHour && k <= props.maxHour) {
              collected_sub += emotionData[i].total_sub[k];
            }
          }
          data.labels.push(emotionData[i].label);
          data.datasets[0].data.push(collected_sub);
          data.datasets[0].backgroundColor.push(emotionData[i].chartColor);

          emotionData[i].subEmotions.map((subEmotion) => {
            let collected_sub_sub = 0;
            for (let k in subEmotion.count) {
              if (k >= props.minHour && k <= props.maxHour) {
                collected_sub_sub += subEmotion.count[k];
              }
            }
            data.labels.push(subEmotion.label);
            data.datasets[0].data.push(collected_sub_sub);
            data.datasets[0].backgroundColor.push(subEmotion.chartColor);
          });
        }
        break;

      default:
        emotionData.map((emotion) => {
          data.labels.push("Total Of " + emotion.label);

          data.datasets[1].data.push(emotion.total);
          data.datasets[1].backgroundColor.push(emotion.chartColor);
          data.datasets[0].data.push(0);
          data.datasets[0].backgroundColor.push(0);
        });
        for (let i in emotionData) {
          data.labels.push(emotionData[i].label);
          data.datasets[0].data.push(
            emotionData[i].total_sub.reduce((acc, val) => acc + (val || 0), 0)
          );
          data.datasets[0].backgroundColor.push(emotionData[i].chartColor);

          emotionData[i].subEmotions.map((subEmotion) => {
            data.labels.push(subEmotion.label);
            data.datasets[0].data.push(subEmotion.total);
            data.datasets[0].backgroundColor.push(subEmotion.chartColor);
          });
        }

        break;
    }
    setDoughnutData(data);
  };
  function add(accumulator, a) {
    return accumulator + a;
  }
  // maxDivSize
  return (
    <>
      <Doughnut data={doughnutData} options={options}/>
    </>
  );
};

export default DoughnutChart;
