// 3. 4. ja 5.
// tekee valinnan mikä chartti näkyy sekä mitä chartissa näkyy.
// maxHour when hourRange == false
import Piechart from "./charts/Piechart";
import DoughnutChart from "./charts/DoughnutChart";

const AllCharts = (props) => {
  /** props
   * chartType={chartType}
   * hourRange={hourRange}
   * minHour={minHour}
   * maxHour={maxHour}
   * chartDate={chartDate}
   * timeUnit={timeUnit}
   * */
  // console.log("apina", props.data)

  switch (props.chartType) {
    case "doughnutchart":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "blue",
            width: "100%",
            height: "100%",
          }}
        >
          <DoughnutChart
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
          }}
        >
          {/* {console.log(props.data)} */}
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
    default:
      return <text>chartType not found</text>;
  }
}

export default AllCharts;
