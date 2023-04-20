import React, { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
import { Line } from 'react-chartjs-2';
import emotionData from "../../../data/emotionData";

const options = {
    type: 'line',
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
        },
      },
      
    }
  };

  const MountainChart = (props) => {
    const [mountainData, setMountainData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Happy',
            data: [90,20,70,10,90,50],
            backgroundColor: '#88FF75',
            borderColor: '#88FF75',
            fill: true,
          },
          {
            label: 'Angry',
            data: [80,30,60,20,80,50],
            backgroundColor: '#FF8989',
            borderColor: '#FF8989',
            fill: true,
          },
          {
            label: 'Scared',
            data: [70,40,50,30,70,40],
            backgroundColor: '#FFBD65',
            borderColor: '#FFBD65',
            fill: true,
          },
          {
              label: 'Sad',
              data: [60,50,40,40,60,30],
              backgroundColor: '#A3FFFF',
              borderColor: '#A3FFFF',
              fill: true,
            },
            {
              label: 'Inspired',
              data: [50,60,30,50,50,20],
              backgroundColor: '#E2B3DB',
              borderColor: '#E2B3DB',
              fill: true,
            },
            {
              label: 'Surprised',
              data: [40,70,20,60,40,10],
              backgroundColor: '#FFFA73',
              borderColor: '#FFFA73',
              fill: true,
            },
        ]
          });

          useEffect(() => {
            switch (props.timeUnit) {
              case "day":
                  setMountainData({
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                    datasets: [
                        {
                          label: 'Happy',
                          data: [90,20,70,10,90,50],
                          backgroundColor: '#88FF75',
                          borderColor: '#88FF75',
                          fill: true,
                        },
                        {
                          label: 'Angry',
                          data: [80,30,60,20,80,50],
                          backgroundColor: '#FF8989',
                          borderColor: '#FF8989',
                          fill: true,
                        },
                        {
                          label: 'Scared',
                          data: [70,40,50,30,70,40],
                          backgroundColor: '#FFBD65',
                          borderColor: '#FFBD65',
                          fill: true,
                        },
                        {
                            label: 'Sad',
                            data: [60,50,40,40,60,30],
                            backgroundColor: '#A3FFFF',
                            borderColor: '#A3FFFF',
                            fill: true,
                          },
                          {
                            label: 'Inspired',
                            data: [50,60,30,50,50,20],
                            backgroundColor: '#E2B3DB',
                            borderColor: '#E2B3DB',
                            fill: true,
                          },
                          {
                            label: 'Surprised',
                            data: [40,70,20,60,40,10],
                            backgroundColor: '#FFFA73',
                            borderColor: '#FFFA73',
                            fill: true,
                          },
                      ]
                  })
              break;
              case "week":
                setMountainData({
                  labels: [1,2,3,4,5,6,7],
                  datasets: [
                    {
                      label: 'Happy',
                      data: [90,20,70,10,90,50],
                      backgroundColor: '#88FF75',
                      borderColor: '#88FF75',
                      fill: true,
                    },
                    {
                      label: 'Angry',
                      data: [80,30,60,20,80,50],
                      backgroundColor: '#FF8989',
                      borderColor: '#FF8989',
                      fill: true,
                    },
                    {
                      label: 'Scared',
                      data: [70,40,50,30,70,40],
                      backgroundColor: '#FFBD65',
                      borderColor: '#FFBD65',
                      fill: true,
                    },
                    {
                        label: 'Sad',
                        data: [60,50,40,40,60,30],
                        backgroundColor: '#A3FFFF',
                        borderColor: '#A3FFFF',
                        fill: true,
                      },
                      {
                        label: 'Inspired',
                        data: [50,60,30,50,50,20],
                        backgroundColor: '#E2B3DB',
                        borderColor: '#E2B3DB',
                        fill: true,
                      },
                      {
                        label: 'Surprised',
                        data: [40,70,20,60,40,10],
                        backgroundColor: '#FFFA73',
                        borderColor: '#FFFA73',
                        fill: true,
                      },
                  ]
                })
              break;
              case "month":
                setMountainData({
                  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                  datasets: [
                    {
                      label: 'Happy',
                      data: [90,20,70,10,90,50],
                      backgroundColor: '#88FF75',
                      borderColor: '#88FF75',
                      fill: true,
                    },
                    {
                      label: 'Angry',
                      data: [80,30,60,20,80,50],
                      backgroundColor: '#FF8989',
                      borderColor: '#FF8989',
                      fill: true,
                    },
                    {
                      label: 'Scared',
                      data: [70,40,50,30,70,40],
                      backgroundColor: '#FFBD65',
                      borderColor: '#FFBD65',
                      fill: true,
                    },
                    {
                        label: 'Sad',
                        data: [60,50,40,40,60,30],
                        backgroundColor: '#A3FFFF',
                        borderColor: '#A3FFFF',
                        fill: true,
                      },
                      {
                        label: 'Inspired',
                        data: [50,60,30,50,50,20],
                        backgroundColor: '#E2B3DB',
                        borderColor: '#E2B3DB',
                        fill: true,
                      },
                      {
                        label: 'Surprised',
                        data: [40,70,20,60,40,10],
                        backgroundColor: '#FFFA73',
                        borderColor: '#FFFA73',
                        fill: true,
                      },
                  ]
                })
              break;
              case "year":
                setMountainData({
                  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                  datasets: [
                    {
                      label: 'Happy',
                      data: [90,20,70,10,90,50],
                      backgroundColor: '#88FF75',
                      borderColor: '#88FF75',
                      fill: true,
                    },
                    {
                      label: 'Angry',
                      data: [80,30,60,20,80,50],
                      backgroundColor: '#FF8989',
                      borderColor: '#FF8989',
                      fill: true,
                    },
                    {
                      label: 'Scared',
                      data: [70,40,50,30,70,40],
                      backgroundColor: '#FFBD65',
                      borderColor: '#FFBD65',
                      fill: true,
                    },
                    {
                        label: 'Sad',
                        data: [60,50,40,40,60,30],
                        backgroundColor: '#A3FFFF',
                        borderColor: '#A3FFFF',
                        fill: true,
                      },
                      {
                        label: 'Inspired',
                        data: [50,60,30,50,50,20],
                        backgroundColor: '#E2B3DB',
                        borderColor: '#E2B3DB',
                        fill: true,
                      },
                      {
                        label: 'Surprised',
                        data: [40,70,20,60,40,10],
                        backgroundColor: '#FFFA73',
                        borderColor: '#FFFA73',
                        fill: true,
                      },
                  ]
                })
              break;
              case "years":
                setMountainData({
                  labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                  datasets: [
                    {
                      label: 'Happy',
                      data: [90,20,70,10,90,50],
                      backgroundColor: '#88FF75',
                      borderColor: '#88FF75',
                      fill: true,
                    },
                    {
                      label: 'Angry',
                      data: [80,30,60,20,80,50],
                      backgroundColor: '#FF8989',
                      borderColor: '#FF8989',
                      fill: true,
                    },
                    {
                      label: 'Scared',
                      data: [70,40,50,30,70,40],
                      backgroundColor: '#FFBD65',
                      borderColor: '#FFBD65',
                      fill: true,
                    },
                    {
                        label: 'Sad',
                        data: [60,50,40,40,60,30],
                        backgroundColor: '#A3FFFF',
                        borderColor: '#A3FFFF',
                        fill: true,
                      },
                      {
                        label: 'Inspired',
                        data: [50,60,30,50,50,20],
                        backgroundColor: '#E2B3DB',
                        borderColor: '#E2B3DB',
                        fill: true,
                      },
                      {
                        label: 'Surprised',
                        data: [40,70,20,60,40,10],
                        backgroundColor: '#FFFA73',
                        borderColor: '#FFFA73',
                        fill: true,
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
        
              setMountainData(data);
            };
    
    return <Line data={mountainData} options={options} />;
  }

  export default MountainChart;