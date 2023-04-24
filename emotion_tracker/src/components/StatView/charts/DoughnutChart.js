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
  cutout: "50%",
};

const options2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: true,
  cutout: "70%",
};

const DoughnutChart = (props) => {
  // data template for population
  // console.log("did it go?", props.chartContainerDivHeight, props.chartContainerDivWidth)
  const maxDivSize = props.chartContainerDivHeight > props.chartContainerDivWidth ? props.chartContainerDivWidth : props.chartContainerDivHeight;
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

  useEffect(() => {
      if (props.data != null && props.data.length > 1) {
        // console.log("stringi");
        processData(props.data);
        process2Data(props.data);
    }
  }, [props.data, props.maxHour, props.minHour, props.hourRange]);

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
        switch (props.hourRange) {
          case false:
          for (let i in emotionData) {
            emotionData[i].total = 0
          }
          for (let i in json) {
            const parsedTime = parseInt(json[i].created_at);
            for (let j in emotionData) {
              if (emotionData[j].id === parseInt(json[i].emotion_id)) {
                if (
                    props.maxHour >= parsedTime &&
                    props.minHour <= parsedTime
                ) {
                  emotionData[j].total += parseInt(json[i].count)
                }
              }
            }
          }
            for (let i in emotionData) {
              for (let j in emotionData[i].subEmotions) {
                emotionData[i].subEmotions[j].count = 0
              }
            }
            for (let i in json) {
              const parsedTime = parseInt(json[i].created_at);
              for (let j in emotionData) {
                for (let k in emotionData[j].subEmotions) {
                  if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                    if (
                        props.maxHour >= parsedTime &&
                        props.minHour <= parsedTime
                    ) {
                      emotionData[j].subEmotions[k].count += parseInt(json[i].count)
                    }
                  }
                }
              }
            }
          break;
          case true:
          for (let i in emotionData) {
            emotionData[i].total = 0
          }
          for (let i in json) {
            const parsedTime = parseInt(json[i].created_at);
            for (let j in emotionData) {
              if (emotionData[j].id === parseInt(json[i].emotion_id)) {
                if (parseInt(props.maxHour) === parsedTime) {
                  emotionData[j].total += parseInt(json[i].count)
                }
              }
            }
          }
            for (let i in emotionData) {
              for (let j in emotionData[i].subEmotions) {
                emotionData[i].subEmotions[j].count = 0
              }
            }
            for (let i in json) {
              const parsedTime = parseInt(json[i].created_at);
              for (let j in emotionData) {
                for (let k in emotionData[j].subEmotions) {
                  if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                    if (parseInt(props.maxHour) === parsedTime) {
                      emotionData[j].subEmotions[k].count += parseInt(json[i].count)
                    }
                  }
                }
              }
            }
          break;
          default:

        }

        break;
      case "week":
        for (let i in emotionData) {
          emotionData[i].total = 0
        }
        for (let i in json) {
          for (let j in emotionData) {
            if (emotionData[j].id === parseInt(json[i].emotion_id)) {
              emotionData[j].total += parseInt(json[i].count)
            }
          }
        }
        for (let i in emotionData) {
          for (let j in emotionData[i].subEmotions) {
            emotionData[i].subEmotions[j].count = 0
          }
        }
        for (let i in json) {
          for (let j in emotionData) {
            for (let k in emotionData[j].subEmotions) {
              if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                emotionData[j].subEmotions[k].count += parseInt(json[i].count)
              }
            }
          }
        }
        break;
      case "month":
        for (let i in emotionData) {
          emotionData[i].total = 0
        }
        for (let i in json) {
          for (let j in emotionData) {
            if (emotionData[j].id === parseInt(json[i].emotion_id)) {
              emotionData[j].total += parseInt(json[i].count)
            }
          }
        }
        for (let i in emotionData) {
          for (let j in emotionData[i].subEmotions) {
            emotionData[i].subEmotions[j].count = 0
          }
        }
        for (let i in json) {
          for (let j in emotionData) {
            for (let k in emotionData[j].subEmotions) {
              if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                emotionData[j].subEmotions[k].count += parseInt(json[i].count)
              }
            }
          }
        }
        break;
      case "year":
        for (let i in emotionData) {
          emotionData[i].total = 0
        }
        for (let i in json) {
          for (let j in emotionData) {
            if (emotionData[j].id === parseInt(json[i].emotion_id)) {
              emotionData[j].total += parseInt(json[i].count)
            }
          }
        }
        for (let i in emotionData) {
          for (let j in emotionData[i].subEmotions) {
            emotionData[i].subEmotions[j].count = 0
          }
        }
        for (let i in json) {
          for (let j in emotionData) {
            for (let k in emotionData[j].subEmotions) {
              if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                emotionData[j].subEmotions[k].count += parseInt(json[i].count)
              }
            }
          }
        }
        break;
      case "years":
        for (let i in emotionData) {
          emotionData[i].total = 0
        }
        for (let i in json) {
          for (let j in emotionData) {
            if (emotionData[j].id === parseInt(json[i].emotion_id)) {
              emotionData[j].total += parseInt(json[i].count)
            }
          }
        }
        for (let i in emotionData) {
          for (let j in emotionData[i].subEmotions) {
            emotionData[i].subEmotions[j].count = 0
          }
        }
        for (let i in json) {
          for (let j in emotionData) {
            for (let k in emotionData[j].subEmotions) {
              if (emotionData[j].subEmotions[k].id === parseInt(json[i].sub_emotion_id)) {
                emotionData[j].subEmotions[k].count += parseInt(json[i].count)
              }
            }
          }
        }
        break;
      default:
        break;
    }

    console.log(json)
    for (let i in emotionData) {
      console.log(emotionData[i], "hi")
    }
    // for (let i in json) {
    //   emotionData[json[i].emotion_id - 1].total = json[i].count;
    // }
    emotionData.map((emotion) => {
      data.labels.push(emotion.label);
      data.datasets[0].data.push(emotion.total);
      data.datasets[0].backgroundColor.push(emotion.chartColor);

    });
    for (let i in emotionData) {
      emotionData[i].subEmotions.map((subEmotion) => {
        data.labels.push(subEmotion.label)
        data.datasets[1].data.push(subEmotion.count);
        data.datasets[1].backgroundColor.push(subEmotion.chartColor);
      });
    }

    // console.log(emotionData);
    setDoughnutData(data);
  };

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

    emotionData.map((emotion) => {
      data.labels.push(emotion.label);
      data.datasets[0].data.push(emotion.total);
      data.datasets[0].backgroundColor.push(emotion.rgbColor);
    });

    // console.log(emotionData);
    setDoughnut2Data(data);
  };
  // maxDivSize
  return (
    <div style={{position: "relative", width: (maxDivSize/100*75), height: (maxDivSize/100*75), margin: "0px"}}>
        <Doughnut
          data={doughnutData}
          options={options}
          style={{width: "100%", height: "100%", position: "absolute", }}
        />

    </div>
  );
}

export default DoughnutChart;
