import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

Chart.defaults.color = "#FFFFFF";

const options = {
    type: 'line',
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF"
        }
      },
      y: {
        ticks: {
          color: "#FFFFFF"
        }
      }
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
            display: true,
        },
        title: {
          display: false,
        },
      }
    },
  };

const LineChart = (props) => {
    const [label, setLabel] = useState([]);
    const [lineData, setLineData] = useState({
        labels: label,
        datasets: [
          {
            label: [],
            data: [1,5,3,4,4],
            borderColor: "rgb(61, 148, 42)",
            backgroundColor: "rgb(61, 148, 42)",
          },
          {
            label: [],
            data: [2,6,4,5,5],
            borderColor: "rgb(225, 85, 85)",
            backgroundColor: "rgb(225, 85, 85)",
          },
          {
            label: [],
            data: [10,6,2,15,1],
            borderColor: "rgb(127, 62, 159)",
            backgroundColor: "rgb(127, 62, 159)",
          },
          {
            label: [],
            data: [15,2,9,24,13],
            borderColor: "rgb(254, 225, 53)",
            backgroundColor: "rgb(254, 225, 53)",
          },
          {
            label: [],
            data: [1,24,26,3,12],
            borderColor: "rgb(63, 103, 179)",
            backgroundColor: "rgb(63, 103, 179)",
          },
          {
            label: [],
            data: [1,1,1,1,1],
            borderColor: "rgb(160, 129, 108)",
            backgroundColor: "rgb(160, 129, 108)",
          }
        ]
});

useEffect(() => {
        switch (props.timeUnit) {
            case "day":
                setLineData({
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                    datasets: [
                      {
                        label: ["Happy"],
                        data: [1,5,3,4,4],
                        borderColor: "rgb(61, 148, 42)",
                        backgroundColor: "rgb(61, 148, 42)",
                      },
                      {
                        label: ['Angry'],
                        data: [2,6,4,5,5],
                        borderColor: "rgb(225, 85, 85)",
                        backgroundColor: "rgb(225, 85, 85)",
                      },
                      {
                        label: ['Scared'],
                        data: [10,6,2,15,1],
                        borderColor: "rgb(127, 62, 159)",
                        backgroundColor: "rgb(127, 62, 159)",
                      },
                      {
                        label: ['Excited'],
                        data: [15,2,9,24,13],
                        borderColor: "rgb(254, 225, 53)",
                        backgroundColor: "rgb(254, 225, 53)",
                      },
                      {
                        label: ['Sad'],
                        data: [1,24,26,3,12],
                        borderColor: "rgb(63, 103, 179)",
                        backgroundColor: "rgb(63, 103, 179)",
                      },
                      {
                        label: ['Neutral'],
                        data: [1,1,1,1,1],
                        borderColor: "rgb(160, 129, 108)",
                        backgroundColor: "rgb(160, 129, 108)",
                      }
                    ]
            })
                break;
            case "week":
                setLineData(
                    {
                        labels: [1,2,3,4,5,6,7],
                        datasets: [
                          {
                            label: ["Happy"],
                            data: [1,5,3,4,4],
                            borderColor: "rgb(61, 148, 42)",
                            backgroundColor: "rgb(61, 148, 42)",
                          },
                          {
                            label: ['Angry'],
                            data: [2,6,4,5,5],
                            borderColor: "rgb(225, 85, 85)",
                            backgroundColor: "rgb(225, 85, 85)",
                          },
                          {
                            label: ['Scared'],
                            data: [10,6,2,15,1],
                            borderColor: "rgb(127, 62, 159)",
                            backgroundColor: "rgb(127, 62, 159)",
                          },
                          {
                            label: ['Excited'],
                            data: [15,2,9,24,13],
                            borderColor: "rgb(254, 225, 53)",
                            backgroundColor: "rgb(254, 225, 53)",
                          },
                          {
                            label: ['Sad'],
                            data: [1,24,26,3,12],
                            borderColor: "rgb(63, 103, 179)",
                            backgroundColor: "rgb(63, 103, 179)",
                          },
                          {
                            label: ['Neutral'],
                            data: [1,1,1,1,1],
                            borderColor: "rgb(160, 129, 108)",
                            backgroundColor: "rgb(160, 129, 108)",
                          }
                        ]
                }
                )
                break;
            case "month":
                setLineData(
                    {
                        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                        datasets: [
                          {
                            label: ["Happy"],
                            data: [1,5,3,4,4],
                            borderColor: "rgb(61, 148, 42)",
                            backgroundColor: "rgb(61, 148, 42)",
                          },
                          {
                            label: ['Angry'],
                            data: [2,6,4,5,5],
                            borderColor: "rgb(225, 85, 85)",
                            backgroundColor: "rgb(225, 85, 85)",
                          },
                          {
                            label: ['Scared'],
                            data: [10,6,2,15,1],
                            borderColor: "rgb(127, 62, 159)",
                            backgroundColor: "rgb(127, 62, 159)",
                          },
                          {
                            label: ['Excited'],
                            data: [15,2,9,24,13],
                            borderColor: "rgb(254, 225, 53)",
                            backgroundColor: "rgb(254, 225, 53)",
                          },
                          {
                            label: ['Sad'],
                            data: [1,24,26,3,12],
                            borderColor: "rgb(63, 103, 179)",
                            backgroundColor: "rgb(63, 103, 179)",
                          },
                          {
                            label: ['Neutral'],
                            data: [1,1,1,1,1],
                            borderColor: "rgb(160, 129, 108)",
                            backgroundColor: "rgb(160, 129, 108)",
                          }
                        ]
                }
                )
                break;
            case "year":
                setLineData(
                    {
                        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                        datasets: [
                          {
                            label: ["Happy"],
                            data: [1,5,3,4,4],
                            borderColor: "rgb(61, 148, 42)",
                            backgroundColor: "rgb(61, 148, 42)",
                          },
                          {
                            label: ['Angry'],
                            data: [2,6,4,5,5],
                            borderColor: "rgb(225, 85, 85)",
                            backgroundColor: "rgb(225, 85, 85)",
                          },
                          {
                            label: ['Scared'],
                            data: [10,6,2,15,1],
                            borderColor: "rgb(127, 62, 159)",
                            backgroundColor: "rgb(127, 62, 159)",
                          },
                          {
                            label: ['Excited'],
                            data: [15,2,9,24,13],
                            borderColor: "rgb(254, 225, 53)",
                            backgroundColor: "rgb(254, 225, 53)",
                          },
                          {
                            label: ['Sad'],
                            data: [1,24,26,3,12],
                            borderColor: "rgb(63, 103, 179)",
                            backgroundColor: "rgb(63, 103, 179)",
                          },
                          {
                            label: ['Neutral'],
                            data: [1,1,1,1,1],
                            borderColor: "rgb(160, 129, 108)",
                            backgroundColor: "rgb(160, 129, 108)",
                          }
                        ]
                }
                )
                break;
            case "years":
                setLineData(
                    {
                        labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                        datasets: [
                          {
                            label: ["Happy"],
                            data: [1,5,3,4,4],
                            borderColor: "rgb(61, 148, 42)",
                            backgroundColor: "rgb(61, 148, 42)",
                          },
                          {
                            label: ['Angry'],
                            data: [2,6,4,5,5],
                            borderColor: "rgb(225, 85, 85)",
                            backgroundColor: "rgb(225, 85, 85)",
                          },
                          {
                            label: ['Scared'],
                            data: [10,6,2,15,1],
                            borderColor: "rgb(127, 62, 159)",
                            backgroundColor: "rgb(127, 62, 159)",
                          },
                          {
                            label: ['Excited'],
                            data: [15,2,9,24,13],
                            borderColor: "rgb(254, 225, 53)",
                            backgroundColor: "rgb(254, 225, 53)",
                          },
                          {
                            label: ['Sad'],
                            data: [1,24,26,3,12],
                            borderColor: "rgb(63, 103, 179)",
                            backgroundColor: "rgb(63, 103, 179)",
                          },
                          {
                            label: ['Neutral'],
                            data: [1,1,1,1,1],
                            borderColor: "rgb(160, 129, 108)",
                            backgroundColor: "rgb(160, 129, 108)",
                          }
                        ]
                }
                )
                break;
            default:

                break;
        
    }
}, [props.timeUnit]);

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