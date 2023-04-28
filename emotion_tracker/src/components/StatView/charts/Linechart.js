import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import emotionData from "../../../data/emotionData";

Chart.defaults.color = "#FFFFFF";

const options = {
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
      },
    },
  },
  type: "line",
  scales: {
    x: {
      ticks: {
        color: "#FFFFFF",
      },
    },
    y: {
      ticks: {
        color: "#FFFFFF",
      },
    },
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
    },
  },
};

const LineChart = (props) => {
  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      // {
      //   label: [],
      //   data: [],
      //   borderColor: "",
      //   backgroundColor: "",
      //   spanGaps: true
      // },
    ],
  });

  useEffect(() => {
    // console.log("lineChart");
    let data = {
      labels: [],
      datasets: [], //new Array(emotionData.length).fill({
    };
    switch (props.timeUnit) {
      case "day":
        data.labels = [...Array(emotionData[0].count.length).keys()];
        break;
      case "week":
        data.labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        break;
      case "month":
        data.labels = [...Array(emotionData[0].count.length).keys()].map(
          (i) => i + 1
        );
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
        break;
      case "years":
        let startingYear = Math.floor(props.chartDate[3] / 10) * 10;
        let decadeYears = [startingYear];
        for (let i = 0; i <= 8; i++) {
          startingYear += 1;
          decadeYears.push(startingYear);
        }
        data.labels = decadeYears;
        // for (let j in emotionData) {
        //   for (let i = 0; i <= 9; i++) {
        //     emotionData[j].count.push(null);
        //   }
        // }
        // for (let i in decadeYears) {
        //   for (let j in props.data) {
        //     for (let k in emotionData) {
        //       if (parseInt(props.data[j].emotion_id) === emotionData[k].id) {
        //         if (decadeYears[i] === parseInt(props.data[j].created_at)) {
        //           emotionData[k].count[i] = parseInt(props.data[j].count);
        //         }
        //       }
        //     }
        //   }
        // }
        break;

      default:
        data.labels = new Array(emotionData[0].count.length).fill(0);

        break;
    }
    // console.log(data.labels.length);
    // console.log(emotionData, "ei ajadf");
    // for (let i in emotionData) {
    //   data.datasets.push({
    //     label: emotionData[i].label,
    //     data: emotionData[i].count,
    //     spanGaps: true,
    //     borderColor: emotionData[i].chartColor,
    //     backgroundColor: emotionData[i].chartColor,
    //   });
    // }
    emotionData.map((emotion) => {
      data.datasets.push({
        label: emotion.label,
        data: emotion.count,
        spanGaps: true,
        borderColor: emotion.chartColor,
        backgroundColor: emotion.chartColor,
      });
    });
    setLineData(data);
  }, [props.dataFetched]);

  return <Line data={lineData} options={options} />;
};

export default LineChart;
