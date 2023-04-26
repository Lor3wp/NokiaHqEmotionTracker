import React, {useEffect, useState} from 'react';
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import emotionData from '../../../data/emotionData';

const options = {
    plugins: {
        legend: {
            display: true,
        },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

const BarChart = (props) => {

  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      // {
      //   label: 'Happy',
      //   data: [50,50,50,50,50,50],
      //   backgroundColor: "rgb(61, 148, 42)",
      // }
    ],
  });

  useEffect(() => {
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

        break;

      default:
        data.labels = new Array(emotionData[0].count.length).fill(0);

        break;
    }
    emotionData.map((emotion) => {
      data.datasets.push({
        label: emotion.label,
        data: emotion.count,
        spanGaps: true,
        borderColor: emotion.chartColor,
        backgroundColor: emotion.chartColor,
      });
    });
    setBarData(data);
  }, [props.dataFetched]);




    return (<Bar data={barData} options={options} />);
  }
  
  export default BarChart;