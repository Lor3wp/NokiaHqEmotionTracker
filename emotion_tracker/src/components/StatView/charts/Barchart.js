import React from 'react';
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const DATA_COUNT = 6;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 1000};

const data ={
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Happy',
      data: [50,50,50,50,50,50],
      backgroundColor: '#88FF75',
    },
    {
      label: 'Angry',
      data: [50,50,50,50,50,50],
      backgroundColor: '#FF8989',
    },
    {
      label: 'Scared',
      data: [50,50,50,50,50,50],
      backgroundColor: '#FFBD65',
    },
    {
        label: 'Sad',
        data: [50,50,50,50,50,50],
        backgroundColor: '#A3FFFF',
      },
      {
        label: 'Inspired',
        data: [50,50,50,50,50,50],
        backgroundColor: '#E2B3DB',
      },
      {
        label: 'Surprised',
        data: [50,50,50,50,50,50],
        backgroundColor: '#FFFA73',
      },
  ]
};

const options = {
    plugins: {
        legend: {
            display: false,
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

const BarChart = () => {
    return (<Bar data={data} options={options} />);
  }
  
  export default BarChart;