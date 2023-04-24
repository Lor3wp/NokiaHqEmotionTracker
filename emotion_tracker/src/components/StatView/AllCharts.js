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
import emotionData from "../../data/emotionData";
import { useEffect } from "react";
import backendAddress from "../../data/apiHooks";

const AllCharts = (props) => {

  useEffect(() => {
    fetchData();

  }, [props.chartDate, props.timeUnit, props.chartType]);

  async function fetchData() {
    switch (props.chartType) {
      case "doughnutchart":
        switch (props.timeUnit) {
          case "day":
            const responseDay = await fetch(backendAddress + `emotions/getday/${props.chartDate[3]}/${props.chartDate[2]}/${props.chartDate[0]}`);
            const jsonDataDay = await responseDay.json();
            props.setData(jsonDataDay);
            props.setLoading(false);
            break;
          case "week":
            const date = new Date(props.chartDate[3], props.chartDate[2] - 1, props.chartDate[0]);
            const dayOfWeek = date.getDay();
            const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            const date1 = new Date(props.chartDate[3], props.chartDate[2] - 1, props.chartDate[0]); // April 22, 2022
            const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay() + 1);
            const lastDayOfWeek = new Date(firstDayOfWeek);
            lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
            // console.log(monday.getDate(), lastDayOfWeek.getDate())

            const responseWeek = await fetch(backendAddress + `emotions/getweek/${props.chartDate[3]}-${props.chartDate[2]}-${monday.getDate()}/${props.chartDate[3]}-${props.chartDate[2]}-${lastDayOfWeek.getDate()}`);
            const jsonDataWeek = await responseWeek.json();
            props.setData(jsonDataWeek);
            props.setLoading(false);
            break;
          case "month":
            const responseMonth = await fetch(backendAddress + `emotions/getmonth/${props.chartDate[3]}/${props.chartDate[2]}`);
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            props.setLoading(false);
            break;
          case "year":
            const responseYear = await fetch(backendAddress + `emotions/getyear/${props.chartDate[3]}`);
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
            props.setLoading(false);
            break;
          case "years":
            const responseYears = await fetch(backendAddress + `emotions/getyears/${Math.floor(props.chartDate[3]/10)*10}/${Math.floor(props.chartDate[3]/10)*10+9}`);
            const jsonDataYears = await responseYears.json();
            props.setData(jsonDataYears);
            props.setLoading(false);
            break;
          default:

            break;
        }
        console.log(props.data)
        break;
      default:
        switch (props.timeUnit) {
          case "day":
            const responseDay = await fetch(backendAddress + `emotions/getday/primary/${props.chartDate[3]}/${props.chartDate[2]}/${props.chartDate[0]}`);
            const jsonDataDay = await responseDay.json();
            props.setData(jsonDataDay);
            props.setLoading(false);
            break;
          case "week":
            const date = new Date(props.chartDate[3], props.chartDate[2] - 1, props.chartDate[0]);
            const dayOfWeek = date.getDay();
            const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            const date1 = new Date(props.chartDate[3], props.chartDate[2] - 1, props.chartDate[0]); // April 22, 2022
            const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay() + 1);
            const lastDayOfWeek = new Date(firstDayOfWeek);
            lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
            // console.log(monday.getDate(), lastDayOfWeek.getDate())

            const responseWeek = await fetch(backendAddress + `emotions/getweek/primary/${props.chartDate[3]}-${props.chartDate[2]}-${monday.getDate()}/${props.chartDate[3]}-${props.chartDate[2]}-${lastDayOfWeek.getDate()}`);
            const jsonDataWeek = await responseWeek.json();
            props.setData(jsonDataWeek);
            props.setLoading(false);
            break;
          case "month":
            const responseMonth = await fetch(backendAddress + `emotions/getmonth/primary/${props.chartDate[3]}/${props.chartDate[2]}`);
            const jsonDataMonth = await responseMonth.json();
            props.setData(jsonDataMonth);
            props.setLoading(false);
            break;
          case "year":
            const responseYear = await fetch(backendAddress + `emotions/getyear/primary/${props.chartDate[3]}`);
            const jsonDataYear = await responseYear.json();
            props.setData(jsonDataYear);
            props.setLoading(false);
            break;
          case "years":
            const responseYears = await fetch(backendAddress + `emotions/getyears/primary/${Math.floor(props.chartDate[3]/10)*10}/${Math.floor(props.chartDate[3]/10)*10+9}`);
            const jsonDataYears = await responseYears.json();
            props.setData(jsonDataYears);
            props.setLoading(false);
            break;
          default:

            break;
        }
        console.log(props.data)
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
            chartContainerDivHeight={props.chartContainerDiv.current?.offsetHeight}
            chartContainerDivWidth={props.chartContainerDiv.current?.offsetWidth}
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
          />
        </div>
      );
    case "barchart":
      return <div></div>;
    default:
      return <text>chartType not found</text>;
  }
};

export default AllCharts;
