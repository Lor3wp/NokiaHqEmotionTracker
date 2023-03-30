import React, { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement);

function EmootionStatsi() {
  const [emotionData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/getstats/getallstats/`
      );
      const jsonData = await response.json();
      setData(jsonData.feelings);
      console.log(jsonData.feelings);
      setLoading(false);
    }
    fetchData();
  }, []);


const data = {
  labels: ['Happy', 'Angry', 'Scared', 'Sad', 'Excited', 'Neutral'],
  datasets: [
    {
      label: 'Total emotions in piechart',
      data: emotionData.slice(0, 6),
      backgroundColor: [
        "rgb(206 255 195)", 
        "rgb(255 190 190)", 
        "rgb(243, 189, 255)", 
        "rgb(184, 204, 244)",
        "rgb(255, 239, 153)",
        "rgb(255, 227, 202)",],
    },
  ],
};
return data
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
  maintainAspectRatio: false,
};

function Piechart() {
  return (<Pie data={EmootionStatsi()} options={options} style={{width:"300px", height:"300px"}}/>);
}

export default Piechart;