import React from 'react';
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement);

const data = {
  labels: ['Scared', 'Angry', 'Happy', 'Sad', 'Inspired', 'Surprised'],
  datasets: [
    {
      label: 'Total emotions in piechart',
      data: [300, 50, 100, 100, 100, 100],
      backgroundColor: [
        '#FFBD65', 
        '#FF8989', 
        '#88FF75', 
        '#A3FFFF',
        '#E2B3DB',
        '#FFFA73'],
    },
  ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
  maintainAspectRatio: false,
};

function Piechart() {
  return (<Pie data={data} options={options} style={{width:"300px", height:"300px"}}/>);
}

export default Piechart;