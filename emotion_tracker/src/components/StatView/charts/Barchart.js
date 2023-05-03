/**
 * This file contains the view for drawing a barchart.
 * The file takes the data from props and spits it to
 * their respective emotions, which in turn is passed
 * on to the actual chart for drawing.
 *
 * uses states:
 *     [chartType]
 *     [hourRange]
 *     [minHour]
 *     [maxHour]
 *     [chartDate]
 *     [timeUnit]
 *     [data]
 *     [dataFetched]
 *
 * options {}
 * BarChart()
 *     [total, setTotal]
 *     [barData, setBarData]
 *     useEffect()
 *     return()
 *
 * export default Barchart;
 *
 * */
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import emotionData from '../../../data/emotionData';
import '../../../css/AllCharts.css'

// options for how the bar chart is drawn
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      maintainAspectRatio: false,
      display: true,
      labels: {
        usePointStyle: true,
      },
    },
  },
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

  const [total, setTotal] = useState(0);
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      // EXAMPLE DATA
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
      datasets: [],
    };
    // set the bottom labels based on timeUnit
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
    // set the data that gets drawn and calculate the total entries
    let totalAmount = 0;
    emotionData.map((emotion) => {
      data.datasets.push({
        label: emotion.label,
        data: emotion.count,
        spanGaps: true,
        borderColor: emotion.chartColor,
        backgroundColor: emotion.chartColor,
      });
      totalAmount += emotion.total;
    });
    setTotal(totalAmount);
    setBarData(data);
  }, [props.dataFetched]);
  // return the visible part of the chart
  return (
  <>
  <p>Total amount {total.toString()}</p>
  <Bar data={barData} options={options} />
  </>);
}

export default BarChart;
