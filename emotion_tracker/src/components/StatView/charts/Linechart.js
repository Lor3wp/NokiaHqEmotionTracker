import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

Chart.defaults.color = "#FFFFFF";

const options = {
  type: "line",
  scales: {
    x: {
      ticks: {
        color: "#FFFFFF",
      },
      grid: {
        color: "#FFFFFF",
      },
    },
    y: {
      grid: {
        color: "#FFFFFF",
      },
      ticks: {
        color: "#FFFFFF",
      },
    },
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
      },
    },
  },
};

const LineChart = (props) => {
  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    let data = {
      labels: [],
      datasets: []
    };
    for (let i in emotionData) {
      emotionData[i].count = []
    }

    switch (props.timeUnit) {
      case "day":
        data.labels = [
          "0", "1", "2", "3", "5", "6", "7", "8", "9",
          "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
          "20", "21", "22", "23",
        ]
        for (let j in emotionData) {
          for (let i = 0; i <= 23; i++) {
            emotionData[j].count.push(null)
          }
        }

        for (let j in props.data) {
          for (let k in emotionData) {
            if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
              emotionData[k].count[parseInt(props.data[j].created_at)] = parseInt(props.data[j].count)
            }
          }
        }
        break;
      case "week":
        data.labels = [
          "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
        ]
        break;
      case "month":
        switch (props.chartDate[2]) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            data.labels = [
              "0", "1", "2", "3", "5", "6", "7", "8", "9",
              "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
              "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
              "30", "31",
            ]
            for (let j in emotionData) {
              for (let i = 0; i <= 30; i++) {
                emotionData[j].count.push(null)
              }
            }

            for (let j in props.data) {
              for (let k in emotionData) {
                if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                  emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
                }
              }
            }
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            data.labels = [
              "0", "1", "2", "3", "5", "6", "7", "8", "9",
              "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
              "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
              "30",
            ]
            for (let j in emotionData) {
              for (let i = 0; i <= 29; i++) {
                emotionData[j].count.push(null)
              }
            }

            for (let j in props.data) {
              for (let k in emotionData) {
                if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                  emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
                }
              }
            }
            break;
          case 2:
            if ((props.chartDate[3] % 400 === 0) && (props.chartDate[3] % 100 === 0)) {
              data.labels = [
                "0", "1", "2", "3", "5", "6", "7", "8", "9",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
              ]
              for (let j in emotionData) {
                for (let i = 0; i <= 28; i++) {
                  emotionData[j].count.push(null)
                }
              }

              for (let j in props.data) {
                for (let k in emotionData) {
                  if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                    emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
                  }
                }
              }
            } else if ((props.chartDate[3] % 4 === 0) && (props.chartDate[3] % 100 !== 0)) {
              data.labels = [
                "0", "1", "2", "3", "5", "6", "7", "8", "9",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
              ]
              for (let j in emotionData) {
                for (let i = 0; i <= 28; i++) {
                  emotionData[j].count.push(null)
                }
              }

              for (let j in props.data) {
                for (let k in emotionData) {
                  if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                    emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
                  }
                }
              }
            } else {
              data.labels = [
                "0", "1", "2", "3", "5", "6", "7", "8", "9",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24", "25", "26", "27", "28",
              ]
              for (let j in emotionData) {
                for (let i = 0; i <= 27; i++) {
                  emotionData[j].count.push(null)
                }
              }

              for (let j in props.data) {
                for (let k in emotionData) {
                  if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                    emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
                  }
                }
              }
            }
            break;
          default:
        }
        break;
      case "year":
        data.labels = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
          for (let j in emotionData) {
            for (let i = 0; i <= 11; i++) {
              emotionData[j].count.push(null)
            }
          }

          for (let j in props.data) {
            for (let k in emotionData) {
              if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                emotionData[k].count[parseInt(props.data[j].created_at) - 1] = parseInt(props.data[j].count)
              }
            }
          }
        break;
      case "years":
        let startingYear = Math.floor(props.chartDate[3] / 10) * 10
        let decadeYears = [startingYear]
          for (let i = 0; i <= 8; i++) {
            startingYear += 1;
            decadeYears.push(startingYear)
          }
          data.labels = decadeYears;
        for (let j in emotionData) {
          for (let i = 0; i <= 9; i++) {
            emotionData[j].count.push(null)
          }
        }
        for (let i in decadeYears) {
          for (let j in props.data) {
            for (let k in emotionData) {
              if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
                if (decadeYears[i] === parseInt(props.data[j].created_at)) {
                  emotionData[k].count[i] = parseInt(props.data[j].count)
                }
              }
            }
          }
        }
        break;
      default:
        data.labels = new Array(emotionData[0].count.length).fill(0);
        break;
    }

    for (let i in emotionData) {
      data.datasets.push({
        label: emotionData[i].label,
        data: emotionData[i].count,
        spanGaps: true,
        borderColor: emotionData[i].chartColor,
        backgroundColor: emotionData[i].chartColor
      })
    }
    setLineData(data);
  }, [props.timeUnit, props.data, props.chartDate]);

  return <Line data={lineData} options={options}/>;
};

export default LineChart;
