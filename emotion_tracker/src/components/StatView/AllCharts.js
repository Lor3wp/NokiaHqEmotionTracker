/**
 * This file contains the view to contain chart views.
 * The file fetches data from the backend and processes
 * that data based on given timeUnit
 *
 * uses states:
 *     [chartType]
 *     [hourRange]
 *     [minHour]
 *     [maxHour]
 *     [chartDate]
 *     [timeUnit]
 *     [data, setData]
 *     [dataFetched]
 *     [loading, setLoading]
 *
 * AllCharts()
 *     [dataFetched, setDataFetched]
 *     useEffect(), [chartDate, timeUnit, chartType]
 *     useEffect(), [data]
 *     processData()
 *     async fetchData()
 *     switch {
 *          case "doughnutchart": return()
 *          case "linechart": return()
 *          case "mountainchart": return()
 *          case "barchart": return()
 *          default: return()
 *      }
 * export default AllCharts;
 *
 * */
import Piechart from "./charts/Piechart";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/Linechart";
import BarChart from "./charts/Barchart";
import MountainChart from "./charts/Mountainchart";
import { useEffect, useState } from "react";
import emotionData from "../../data/emotionData";
import backendAddress from "../../data/apiHooks";
import { __esModule } from "react-range-slider-input";
import Loading from "../../views/Loading";
import { endOfWeek, startOfWeek } from "date-fns";
import { dayData, data } from "../EmotionStats";
import "../../css/AllCharts.css";

const AllCharts = (props) => {
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    props.setLoading(true);
    fetchData();
  }, [props.chartDate, props.timeUnit, props.chartType]);
  useEffect(() => {
    let data = {
      labels: [],
      datasets: [],
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
          processData(0);
          break;
        case "week":
          for (let j in emotionData) {
            emotionData[j].total = 0;
            emotionData[j].count = new Array(7).fill(null);
            emotionData[j].total_sub = new Array(7).fill(null);
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].total = 0;
              emotionData[j].subEmotions[i].count = new Array(7).fill(null);
            }
          }
          processData(0);
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
          processData(1);
          break;
        case "year":
          for (let j in emotionData) {
            emotionData[j].total = 0;
            emotionData[j].total_sub = new Array(12).fill(null);

            emotionData[j].count = new Array(12).fill(null);
            for (let i in emotionData[j].subEmotions) {
              emotionData[j].subEmotions[i].count = new Array(12).fill(null);
              emotionData[j].subEmotions[i].total = 0;
            }
          }
          processData(1);
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
          processData(firstYear);
          break;
        default:
          break;
      }
    } else {
      emotionData.map((emotion) => {
        emotion.count = [];
        emotion.total = 0;
        emotion.total_sub = [];
        for (let i in emotion.subEmotions) {
          emotion.subEmotions[i].total = 0;
          emotion.subEmotions[i].count = [];
        }
        return emotion;
      });
    }
    props.setLoading(false);
    console.log(props.data);
    setDataFetched(!dataFetched);
    console.log(props.data);
  }, [props.data]);

  function processData(subtract) {
    props.data.map((json) => {
      for (let k in emotionData) {
        if (parseInt(json.emotion_id) === emotionData[k].id) {
          for (let i in emotionData[k].subEmotions) {
            if (
              parseInt(json.sub_emotion_id) === emotionData[k].subEmotions[i].id
            ) {
              emotionData[k].subEmotions[i].total += parseInt(json.count);
              emotionData[k].subEmotions[i].count[
                parseInt(json.created_at) - subtract
              ] += parseInt(json.count);
            }
          }
          if (parseInt(json.sub_emotion_id) === 1) {
            emotionData[k].total_sub[parseInt(json.created_at) - subtract] +=
              parseInt(json.count);
          }
          emotionData[k].count[parseInt(json.created_at) - subtract] +=
            parseInt(json.count);
          emotionData[k].total += parseInt(json.count);
        }
      }
    });
  }
  // data is fetched here based on chartType and timeUnit
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
            break;
          case "week":
            const date = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            );
            const firstDayOfWeek = startOfWeek(date, { weekStartsOn: 1 });
            const lastDayOfWeek = endOfWeek(date, { weekStartsOn: 1 });

            const responseWeek = await fetch(
              backendAddress +
                `emotions/getweek/${[
                  firstDayOfWeek.getFullYear(),
                  String(firstDayOfWeek.getMonth() + 1).padStart(2, "0"),
                  String(firstDayOfWeek.getDate()).padStart(2, "0"),
                ].join("-")}/${[
                  lastDayOfWeek.getFullYear(),
                  String(lastDayOfWeek.getMonth() + 1).padStart(2, "0"),
                  String(lastDayOfWeek.getDate()).padStart(2, "0"),
                ].join("-")}`
            );
            const jsonDataWeek = await responseWeek.json();
            jsonDataWeek.map((dayData) => {
              const dayDataDate = new Date(dayData.full_date);
              dayData.created_at = (
                (((dayDataDate.getDay() - 1) % 7) + 7) %
                7
              ).toString();
            });
            props.setData(jsonDataWeek);
            break;
          case "month":
            const responseMonth = await fetch(
              backendAddress +
                `emotions/getmonth/${props.chartDate[3]}/${props.chartDate[2]}`
            );
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            break;
          case "year":
            const responseYear = await fetch(
              backendAddress + `emotions/getyear/${props.chartDate[3]}`
            );
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
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
            break;
          default:
            break;
        }
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
            break;
          case "week":
            const date = new Date(
              props.chartDate[3],
              props.chartDate[2] - 1,
              props.chartDate[0]
            );
            // sqlite gets date with leading zeroes
            // therefore the dates are formatted to have leading zeroes
            const firstDayOfWeek = startOfWeek(date, { weekStartsOn: 1 });
            const lastDayOfWeek = endOfWeek(date, { weekStartsOn: 1 });

            const responseWeek = await fetch(
              backendAddress +
                `emotions/getweek/${[
                  firstDayOfWeek.getFullYear(),
                  String(firstDayOfWeek.getMonth() + 1).padStart(2, "0"),
                  String(firstDayOfWeek.getDate()).padStart(2, "0"),
                ].join("-")}/${[
                  lastDayOfWeek.getFullYear(),
                  String(lastDayOfWeek.getMonth() + 1).padStart(2, "0"),
                  String(lastDayOfWeek.getDate()).padStart(2, "0"),
                ].join("-")}`
            );
            const jsonDataWeek = await responseWeek.json();
            jsonDataWeek.map((dayData) => {
              const dayDataDate = new Date(dayData.full_date);
              dayData.created_at = (
                (((dayDataDate.getDay() - 1) % 7) + 7) %
                7
              ).toString();
            });
            props.setData(jsonDataWeek);
            break;
          case "month":
            const responseMonth = await fetch(
              backendAddress +
                `emotions/getmonth/primary/${props.chartDate[3]}/${props.chartDate[2]}`
            );
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            break;
          case "year":
            const responseYear = await fetch(
              backendAddress + `emotions/getyear/primary/${props.chartDate[3]}`
            );
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
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
            break;
          default:
            break;
        }
        break;
    }
  }

  // this chooses what chart gets drawn based on chartType
  switch (props.chartType) {
    case "doughnutchart":
      if (props.loading) {
        return <Loading />;
      } else
        return (
          <div
            className="doughnutchart"
            style={{
              opacity: props.data == null || props.data.length <= 0 ? 0.5 : 1,
            }}
          >
            <h4
              className="nodata"
              style={{
                visibility:
                  props.data == null || props.data.length <= 0
                    ? "visible"
                    : "hidden",
                zIndex: 2,
              }}
            >
              No data
            </h4>
            <DoughnutChart
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
      if (props.loading) {
        <Loading />;
      } else
        return (
          <div
            className="linechart"
            style={{
              opacity: props.data == null || props.data.length <= 0 ? 0.5 : 1,
            }}
          >
            <h4
              className="nodata"
              style={{
                visibility:
                  props.data == null || props.data.length <= 0
                    ? "visible"
                    : "hidden",
                zIndex: 2,
              }}
            >
              No data
            </h4>
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
      if (props.loading) {
        return <Loading />;
      } else
        return (
          <div
            className="mountainchart"
            style={{
              opacity: props.data == null || props.data.length <= 0 ? 0.5 : 1,
            }}
          >
            <h4
              className="nodata"
              style={{
                visibility:
                  props.data == null || props.data.length <= 0
                    ? "visible"
                    : "hidden",
                zIndex: 2,
              }}
            >
              No data
            </h4>
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
    // IF NEEDED HERE IS A PIE CHART
    // case "piechart":
    //   if (props.loading) {
    //     return <Loading />;
    //   } else
    //     return (
    //       <>
    //       <h1>Pie chart</h1>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: 1,
    //           width: "100%",
    //           height: "100%",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           opacity: props.data == null || props.data.length <= 0 ? 0.5 : 1,
    //         }}
    //       >
    //         <h4
    //           className="nodata"
    //           style={{
    //             visibility:
    //               props.data == null || props.data.length <= 0
    //                 ? "visible"
    //                 : "hidden",
    //             zIndex: 2,
    //           }}
    //         >
    //           No data
    //         </h4>
    //         <Piechart
    //           chartType={props.chartType}
    //           hourRange={props.hourRange}
    //           minHour={props.minHour}
    //           maxHour={props.maxHour}
    //           chartDate={props.chartDate}
    //           timeUnit={props.timeUnit}
    //           data={props.data}
    //         />
    //       </div>
    //       </>
    //     );
    case "barchart":
      if (props.loading) {
        return <Loading />;
      } else
        return (
          <div
            className="barchart"
            style={{
              opacity: props.data == null || props.data.length <= 0 ? 0.5 : 1,
            }}
          >
            <h4
              className="nodata"
              style={{
                visibility:
                  props.data == null || props.data.length <= 0
                    ? "visible"
                    : "hidden",
                zIndex: 2,
              }}
            >
              No data
            </h4>
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
      return <p>chartType not found</p>;
  }
};

export default AllCharts;
