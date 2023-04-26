import React, { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

Chart.register(ArcElement);
// Chart.overrides["doughnutpie"].plugins.legend;
// options for Doughnut
// Chart.plugins.register({
//   beforeDraw: function (c) {
//     var legends = c.legend.legendItems;
//     legends.forEach(function (e) {
//       e.fillStyle = "#07C";
//     });
//   },
// });
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: "50%",
};
// TODO to the damn hour slider again....
const DoughnutChart = (props) => {
  // data template for population
  // console.log("did it go?", props.chartContainerDivHeight, props.chartContainerDivWidth)
  const maxDivSize =
    props.chartContainerDivHeight > props.chartContainerDivWidth
      ? props.chartContainerDivWidth
      : props.chartContainerDivHeight;
  // console.log("90%", maxDivSize/100*90)
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
    if (props.data != null && props.data.length > 1) {
      // console.log("stringi");
      processData();
    }
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
    // console.log(emotionData, "aasijanalle");

    switch (props.timeUnit) {
      case "day":
        // TODO make the hour slider work hint: create array and loop thru each count array and only add the ones within index of minmax and then put it into data
        emotionData.map((emotion) => {
          data.labels.push("Total Of " + emotion.label);

          for (let i in emotion.count) {
            if (i >= props.minHour && i <= props.maxHour) {
              console.log(i, props.minHour, props.maxHour);
              data.datasets[1].data.push(emotion.total);
              data.datasets[1].backgroundColor.push(emotion.chartColor);
              data.datasets[0].data.push(0);
              data.datasets[0].backgroundColor.push(0);
            }
          }
        });
        for (let i in emotionData) {
          for (let k in emotionData[i].count) {
            if (k >= props.minHour && k <= props.maxHour) {
              data.labels.push(emotionData[i].label);
              data.datasets[0].data.push(emotionData[i].total_sub);
              data.datasets[0].backgroundColor.push(emotionData[i].chartColor);

              emotionData[i].subEmotions.map((subEmotion) => {
                data.labels.push(subEmotion.label);
                data.datasets[0].data.push(subEmotion.count);
                data.datasets[0].backgroundColor.push(subEmotion.chartColor);
                // console.log(subEmotion.count);
              });
            }
          }
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
          data.datasets[0].data.push(emotionData[i].total_sub);
          data.datasets[0].backgroundColor.push(emotionData[i].chartColor);

          emotionData[i].subEmotions.map((subEmotion) => {
            data.labels.push(subEmotion.label);
            data.datasets[0].data.push(subEmotion.count);
            data.datasets[0].backgroundColor.push(subEmotion.chartColor);
            // console.log(subEmotion.count);
          });
        }

        break;
    }

    // console.log(props.data);
    // console.log(data);
    setDoughnutData(data);
  };

  // maxDivSize
  return (
    <div
      style={{
        position: "relative",
        width: (maxDivSize / 100) * 75,
        height: (maxDivSize / 100) * 75,
        margin: "0px",
      }}
    >
      <Doughnut
        data={doughnutData}
        options={options}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    </div>
  );
};

export default DoughnutChart;
