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

  const [barData, setBarData] =useState ({
    labels: [],
    datasets: [
      {
        label: 'Happy',
        data: [50,50,50,50,50,50],
        backgroundColor: "rgb(61, 148, 42)",
      },
      {
        label: 'Angry',
        data: [50,50,50,50,50,50],
        backgroundColor: "rgb(225, 85, 85)",
      },
      {
        label: 'Scared',
        data: [50,50,50,50,50,50],
        backgroundColor: "rgb(127, 62, 159)",
      },
      {
          label: 'Excited',
          data: [50,50,50,50,50,50],
          backgroundColor: "rgb(254, 225, 53)",
        },
        {
          label: 'Sad',
          data: [50,50,50,50,50,50],
          backgroundColor: "rgb(63, 103, 179)",
        },
        {
          label: 'Neutral',
          data: [50,50,50,50,50,50],
          backgroundColor: "rgb(160, 129, 108)",
        },
    ]
  });

  useEffect(() => {
    switch (props.timeUnit) {
      case "day":
          setBarData({
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            datasets: [
              {
                label: 'Happy',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(61, 148, 42)",
              },
              {
                label: 'Angry',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(225, 85, 85)",
              },
              {
                label: 'Scared',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(127, 62, 159)",
              },
              {
                  label: 'Excited',
                  data: [50,50,50,50,50,50],
                  backgroundColor: "rgb(254, 225, 53)",
                },
                {
                  label: 'Sad',
                  data: [50,50,50,50,50,50],
                  backgroundColor: "rgb(63, 103, 179)",
                },
                {
                  label: 'Neutral',
                  data: [50,50,50,50,50,50],
                  backgroundColor: "rgb(160, 129, 108)",
                },
            ]
          })
      break;
      case "week":
        setBarData({
          labels: [1,2,3,4,5,6,7],
          datasets: [
            {
              label: 'Happy',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(61, 148, 42)",
            },
            {
              label: 'Angry',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(225, 85, 85)",
            },
            {
              label: 'Scared',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(127, 62, 159)",
            },
            {
                label: 'Excited',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(254, 225, 53)",
              },
              {
                label: 'Sad',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(63, 103, 179)",
              },
              {
                label: 'Neutral',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(160, 129, 108)",
              },
          ]
        })
      break;
      case "month":
        setBarData({
          labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          datasets: [
            {
              label: 'Happy',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(61, 148, 42)",
            },
            {
              label: 'Angry',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(225, 85, 85)",
            },
            {
              label: 'Scared',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(127, 62, 159)",
            },
            {
                label: 'Excited',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(254, 225, 53)",
              },
              {
                label: 'Sad',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(63, 103, 179)",
              },
              {
                label: 'Neutral',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(160, 129, 108)",
              },
          ]
        })
      break;
      case "year":
        setBarData({
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [
            {
              label: 'Happy',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(61, 148, 42)",
            },
            {
              label: 'Angry',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(225, 85, 85)",
            },
            {
              label: 'Scared',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(127, 62, 159)",
            },
            {
                label: 'Excited',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(254, 225, 53)",
              },
              {
                label: 'Sad',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(63, 103, 179)",
              },
              {
                label: 'Neutral',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(160, 129, 108)",
              },
          ]
        })
      break;
      case "years":
        setBarData({
          labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
          datasets: [
            {
              label: 'Happy',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(61, 148, 42)",
            },
            {
              label: 'Angry',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(225, 85, 85)",
            },
            {
              label: 'Scared',
              data: [50,50,50,50,50,50],
              backgroundColor: "rgb(127, 62, 159)",
            },
            {
                label: 'Excited',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(254, 225, 53)",
              },
              {
                label: 'Sad',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(63, 103, 179)",
              },
              {
                label: 'Neutral',
                data: [50,50,50,50,50,50],
                backgroundColor: "rgb(160, 129, 108)",
              },
          ]
        })
      break;
      default:

      break;
    }
  }, [props.timeUnit]);

  useEffect(() => {
    if(props.data != null && props.data.lenght > 1) {
    processData(props.data);
    }

  }, [props.data]);

  // process response json and populate data into BarData template
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

      setBarData(data);
    };

    return (<Bar data={barData} options={options} />);
  }
  
  export default BarChart;