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
    // console.log("stringi");
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
          // [0,1,2,0]
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
          // TODO make the sub emotions into array
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
            // console.log(subEmotion.count);
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
            // console.log(subEmotion.count);
          });
        }

        break;
    }

    // console.log(props.data);
    // console.log(data);
    setDoughnutData(data);
  };
  function add(accumulator, a) {
    return accumulator + a;
  }
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
