// 3. 4. ja 5.
/** Selects the chart based on timeUnit selection.
 *
 * AllCharts(props)
 *     useEffect()
 *     prepDataArray()
 *     switch{
 *         case "doughnutchart": return()
 *         case "linechart": return()
 *         case "barchart": return()
 *         default: return()
 *     }
 *
 *     export default AllCharts
 * */
import Piechart from "./charts/Piechart";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/Linechart";
import BarChart from "./charts/Barchart";
import MountainChart from "./charts/Mountainchart";
import { useEffect, useRef, useState } from "react";
import emotionData from "../../data/emotionData";

import backendAddress from "../../data/apiHooks";
import { __esModule } from "react-range-slider-input";

const AllCharts = (props) => {
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    // props.setLoading(true);
    fetchData();
  }, [props.chartDate, props.timeUnit, props.chartType]);
  useEffect(() => {
    let data = {
      labels: [],
      datasets: [], //new Array(emotionData.length).fill({
    };
    let values = [];
    emotionData.map((emotion) => {
      emotion.total = 0;
    });
    if (props.data != null && props.data.length > 0) {
      switch (props.timeUnit) {
        case "day":
          for (let j in emotionData) {
            emotionData[j].total = 0;
            emotionData[j].total_sub = new Array(24).fill(null);

            emotionData[j].count = new Array(24).fill(null);
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].count = new Array(24).fill(null);
              emotionData[j].subEmotions[i].total = 0;
            }
          }
          props.data.map((json) => {
            for (let k in emotionData) {
              if (parseInt(json.emotion_id) === emotionData[k].id) {
                for (let i in emotionData[k].subEmotions) {
                  if (
                    parseInt(json.sub_emotion_id) ===
                    emotionData[k].subEmotions[i].id
                  ) {
                    emotionData[k].subEmotions[i].total += parseInt(json.count);
                    emotionData[k].subEmotions[i].count[parseInt(json.created_at)] += parseInt(json.count);

                  }
                }
                if (parseInt(json.sub_emotion_id) === 1) {
                  emotionData[k].total_sub[parseInt(json.created_at)] += parseInt(json.count);
                }
                emotionData[k].count[parseInt(json.created_at)] += parseInt(
                  json.count
                );
                emotionData[k].total += parseInt(json.count);
              }
            }
          });
          break;
        case "week":
          // TODO handle data from json for week
          for (let j in emotionData) {
            emotionData[j].count = new Array(7).fill(null);
            emotionData[j].total_sub = new Array(7).fill(null)
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].total = 0;
              emotionData[j].subEmotions[i].count = new Array(7).fill(null);

            }
          }
          props.data.map((json) => {
            for (let k in emotionData) {
              if (parseInt(json.emotion_id) === emotionData[k].id) {
                for (let i in emotionData[k].subEmotions) {
                  if (
                      parseInt(json.sub_emotion_id) ===
                      emotionData[k].subEmotions[i].id
                  ) {
                    emotionData[k].subEmotions[i].count += parseInt(json.count);
                  }
                }
                if (parseInt(json.sub_emotion_id) === 1) {
                  emotionData[k].total_sub += parseInt(json.count);
                }
                emotionData[k].count[parseInt(json.created_at)] += parseInt(
                    json.count
                );
                emotionData[k].total += parseInt(json.count);
              }
            }
          });
          break;
        case "month":
          for (let j in emotionData) {
            emotionData[j].total = 0;
            emotionData[j].total_sub = new Array(
              new Date(props.chartDate[3], props.chartDate[2], 0).getDate()
            ).fill(null);
            emotionData[j].count = new Array(
              new Date(props.chartDate[3], props.chartDate[2], 0).getDate()
            ).fill(null);
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].count = new Array(
                new Date(props.chartDate[3], props.chartDate[2], 0).getDate()
              ).fill(null);
              emotionData[j].subEmotions[i].total = 0;
            }
          }
          props.data.map((json) => {
            for (let k in emotionData) {
              if (parseInt(json.emotion_id) === emotionData[k].id) {
                for (let i in emotionData[k].subEmotions) {
                  if (
                    parseInt(json.sub_emotion_id) ===
                    emotionData[k].subEmotions[i].id
                  ) {
                    emotionData[k].subEmotions[i].total += parseInt(json.count);
                    emotionData[k].subEmotions[i].count[
                      parseInt(json.created_at) - 1
                    ] += parseInt(json.count);
                  }
                }
                if (parseInt(json.sub_emotion_id) === 1) {
                  emotionData[k].total_sub[parseInt(json.created_at) - 1] +=
                    parseInt(json.count);
                }
                emotionData[k].count[parseInt(json.created_at) - 1] += parseInt(
                  json.count
                );
                emotionData[k].total += parseInt(json.count);
              }
            }
          });
          break;
        case "year":
          for (let j in emotionData) {
            emotionData[j].total = 0;
            emotionData[j].total_sub = new Array(12).fill(null);

            emotionData[j].count = new Array(12).fill(null);
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].count= new Array(12).fill(null);
              emotionData[j].subEmotions[i].total = 0;
            }
          }
          props.data.map((json) => {
            for (let k in emotionData) {
              if (parseInt(json.emotion_id) === emotionData[k].id) {
                for (let i in emotionData[k].subEmotions) {
                  if (
                    parseInt(json.sub_emotion_id) ===
                    emotionData[k].subEmotions[i].id
                  ) {
                    emotionData[k].subEmotions[i].total += parseInt(json.count);
                    emotionData[k].subEmotions[i].count[parseInt(json.created_at) - 1] += parseInt(
                      json.count
                    );
                  }
                }
                if (parseInt(json.sub_emotion_id) === 1) {
                  emotionData[k].total_sub[parseInt(json.created_at) -1] +=
                    parseInt(json.count);
                }
                emotionData[k].count[parseInt(json.created_at) - 1] += parseInt(
                  json.count
                );
                emotionData[k].total += parseInt(json.count);
              }
            }
          });
          break;
        case "years":
          emotionData.map((emotion) => {
            emotion.count = new Array(10).fill(null);
            emotion.total_sub = new Array(10).fill(null);
            emotion.total = 0;
            for (let i in emotion.subEmotions) {
              emotion.subEmotions[i].count = new Array(10).fill(null);
              emotion.subEmotions[i].total = 0;
            }
          });
          const firstYear = Math.floor(props.chartDate[3] / 10) * 10;
          props.data.map((json) => {
            for (let k in emotionData) {
              if (parseInt(json.emotion_id) === emotionData[k].id) {
                for (let i in emotionData[k].subEmotions) {
                  if (
                    parseInt(json.sub_emotion_id) ===
                    emotionData[k].subEmotions[i].id
                  ) {
                    emotionData[k].subEmotions[i].total += parseInt(json.count);
                    emotionData[k].subEmotions[i].count[
                      parseInt(json.created_at) - firstYear
                    ] += parseInt(json.count);
                  }
                }
                if (parseInt(json.sub_emotion_id) === 1) {
                  emotionData[k].total_sub[
                    parseInt(json.created_at) - firstYear
                  ] += parseInt(json.count);
                }
                emotionData[k].count[parseInt(json.created_at) - firstYear] +=
                  parseInt(json.count);
                emotionData[k].total += parseInt(json.count);
              }
            }
          });
          break;
        default:
          break;
      }
    } else {
      emotionData.map((emotion) => {
        emotion.count = [];
        emotion.total = 0;
        emotion.total_sub = []
        for (let i in emotion.subEmotions) {
          emotion.subEmotions[i].total = 0
          emotion.subEmotions[i].count = []
        }
        return emotion;
      });
    }
    console.log(props.data, "moi");

    console.log(emotionData, "aasijanalle");
    setDataFetched(!dataFetched);
  }, [props.data]);

  async function fetchData() {
    switch (props.chartType) {
      case "doughnutchart":
        switch (props.timeUnit) {
          case "day":
            const responseDay = await fetch(
              backendAddress +
                `emotions/getday/${props.chartDate[3]}/${props.chartDate[2]}/${props.chartDate[0]}`
            );
            const jsonDataDay = await responseDay.json();
            props.setData(jsonDataDay);
            props.setLoading(!props.loading);
            break;
          case "week":
            const date = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            );
            const dayOfWeek = date.getDay();
            const diff =
              date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            const date1 = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            ); // April 22, 2022
            const firstDayOfWeek = new Date(
              date1.getFullYear(),
              date1.getMonth(),
              date1.getDate() - date1.getDay() + 1
            );
            const lastDayOfWeek = new Date(firstDayOfWeek);
            lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
            // console.log(monday.getDate(), lastDayOfWeek.getDate())

            const responseWeek = await fetch(
              backendAddress +
                `emotions/getweek/${props.chartDate[3]}-${
                  props.chartDate[2]
                }-${monday.getDate()}/${props.chartDate[3]}-${
                  props.chartDate[2]
                }-${lastDayOfWeek.getDate()}`
            );
            const jsonDataWeek = await responseWeek.json();
            jsonDataWeek.map ((dayData) => {
              const dayDataDate = new Date(dayData.full_date)
              dayData.created_at = (((dayDataDate.getDay() - 1) % 7 + 7 ) % 7)
                });
            console.log("koikkeli", jsonDataWeek)
            props.setData(jsonDataWeek);
            props.setLoading(!props.loading);
            break;
          case "month":
            const responseMonth = await fetch(
              backendAddress +
                `emotions/getmonth/${props.chartDate[3]}/${props.chartDate[2]}`
            );
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            props.setLoading(!props.loading);
            break;
          case "year":
            const responseYear = await fetch(
              backendAddress + `emotions/getyear/${props.chartDate[3]}`
            );
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
            props.setLoading(!props.loading);
            break;
          case "years":
            const responseYears = await fetch(
              backendAddress +
                `emotions/getyears/${
                  Math.floor(props.chartDate[3] / 10) * 10
                }/${Math.floor(props.chartDate[3] / 10) * 10 + 9}`
            );
            const jsonDataYears = await responseYears.json();
            props.setData(jsonDataYears);
            props.setLoading(!props.loading);
            break;
          default:
            break;
        }
        // console.log(props.data);
        break;
      default:
        switch (props.timeUnit) {
          case "day":
            const responseDay = await fetch(
              backendAddress +
                `emotions/getday/primary/${props.chartDate[3]}/${props.chartDate[2]}/${props.chartDate[0]}`
            );
            const jsonDataDay = await responseDay.json();
            props.setData(jsonDataDay);
            props.setLoading(!props.loading);
            break;
          case "week":
            const date = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            );
            const dayOfWeek = date.getDay();
            const diff =
              date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            const date1 = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            ); // April 22, 2022
            const firstDayOfWeek = new Date(
              date1.getFullYear(),
              date1.getMonth(),
              date1.getDate() - date1.getDay() + 1
            );
            const lastDayOfWeek = new Date(firstDayOfWeek);
            lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
            // console.log(monday.getDate(), lastDayOfWeek.getDate())

            const responseWeek = await fetch(
              backendAddress +
                `emotions/getweek/primary/${props.chartDate[3]}-${
                  props.chartDate[2]
                }-${monday.getDate()}/${props.chartDate[3]}-${
                  props.chartDate[2]
                }-${lastDayOfWeek.getDate()}`
            );
            const jsonDataWeek = await responseWeek.json();
            jsonDataWeek.map ((dayData) => {
              const dayDataDate = new Date(dayData.full_date)
              dayData.created_at = (((dayDataDate.getDay() - 1) % 7 + 7 ) % 7)
            });
            console.log("koikkeli", jsonDataWeek)
            props.setData(jsonDataWeek);
            props.setLoading(!props.loading);
            break;
          case "month":
            const responseMonth = await fetch(
              backendAddress +
                `emotions/getmonth/primary/${props.chartDate[3]}/${props.chartDate[2]}`
            );
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            props.setLoading(!props.loading);
            break;
          case "year":
            const responseYear = await fetch(
              backendAddress + `emotions/getyear/primary/${props.chartDate[3]}`
            );
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
            props.setLoading(!props.loading);
            break;
          case "years":
            const responseYears = await fetch(
              backendAddress +
                `emotions/getyears/primary/${
                  Math.floor(props.chartDate[3] / 10) * 10
                }/${Math.floor(props.chartDate[3] / 10) * 10 + 9}`
            );
            const jsonDataYears = await responseYears.json();
            props.setData(jsonDataYears);
            props.setLoading(!props.loading);
            break;
          default:
            break;
        }

        break;
    }
  }

  switch (props.chartType) {
    case "doughnutchart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DoughnutChart
            chartContainerDivHeight={
              props.chartContainerDiv.current?.offsetHeight
            }
            chartContainerDivWidth={
              props.chartContainerDiv.current?.offsetWidth
            }
            chartType={props.chartType}
            hourRange={props.hourRange}
            minHour={props.minHour}
            maxHour={props.maxHour}
            chartDate={props.chartDate}
            timeUnit={props.timeUnit}
            data={props.data}
            dataFetched={dataFetched}
          />
        </div>
      );
    case "linechart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineChart
            chartType={props.chartType}
            hourRange={props.hourRange}
            minHour={props.minHour}
            maxHour={props.maxHour}
            chartDate={props.chartDate}
            timeUnit={props.timeUnit}
            data={props.data}
            loading={props.loading}
            dataFetched={dataFetched}
          />
        </div>
      );
    case "mountainchart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "blue",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MountainChart
            chartType={props.chartType}
            hourRange={props.hourRange}
            minHour={props.minHour}
            maxHour={props.maxHour}
            chartDate={props.chartDate}
            timeUnit={props.timeUnit}
            data={props.data}
            dataFetched={dataFetched}
          />
        </div>
      );
    case "piechart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "blue",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Piechart
            chartType={props.chartType}
            hourRange={props.hourRange}
            minHour={props.minHour}
            maxHour={props.maxHour}
            chartDate={props.chartDate}
            timeUnit={props.timeUnit}
            data={props.data}
          />
        </div>
      );
    case "barchart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "blue",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarChart
            chartType={props.chartType}
            hourRange={props.hourRange}
            minHour={props.minHour}
            maxHour={props.maxHour}
            chartDate={props.chartDate}
            timeUnit={props.timeUnit}
            data={props.data}
            dataFetched={dataFetched}
          />
        </div>
      );
    default:
      return <text>chartType not found</text>;
  }
};

export default AllCharts;
