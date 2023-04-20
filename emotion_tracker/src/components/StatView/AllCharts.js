// 3. 4. ja 5.
// tekee valinnan mikä chartti näkyy sekä mitä chartissa näkyy.
// maxHour when hourRange == false
import Piechart from "./charts/Piechart";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/Linechart";
import emotionData from "../../data/emotionData";
import { useEffect } from "react";

const AllCharts = (props) => {
  /** props
   * chartType={chartType}
   * hourRange={hourRange}
   * minHour={minHour}
   * maxHour={maxHour}
   * chartDate={chartDate}
   * timeUnit={timeUnit}
   * */

  useEffect(() => {
    // prepDataArray() creates empty arrays filled with 0 depending on timeunit and length of a month [0,0,0,0,0,0,0] this is for week
    prepDataArray();
    // check if json data from backend is empty or not
    if (props.data != null && props.data.length > 1) {
      // loop thru json data
      for (let i in props.data) {
        // we check if the created_at value is zero, if not it means that we need to make it start from zero to fit in our prepeared array (example, our month has 30 indexes (0-29) and month dates are 1-30 this means we cant use date as index for this array, last one will be out of range and first one wont match with index)
        if (props.data[0].created_at > 0) {
          // insertin into emotiondata count values, emotiondata[here we pick emotion_id from json and match it to our emotiondata index to get right emotion].count[we get json created_at - json[first instance].created_at to get right index value (example, datase is 3,4,5,6,7 we do i-3 from all oh them to get 0,1,2,3,4 wich are index balues of our array)] += we make int from string and add it to value
          emotionData[props.data[i].emotion_id - 1].count[
            props.data[i].created_at - props.data[0].created_at
          ] += parseInt(props.data[i].count);
        } else {
          // if the created at starts with 0 dates will match with the index of array
          emotionData[props.data[i].emotion_id - 1].count[
            props.data[i].created_at
          ] += parseInt(props.data[i].count);
        }
      }
    } else {
      // if the json data is empty we do sum here, not show the chart or sum
      console.log("there is no data for this time");
    }

    console.log(emotionData);
  }, [props.timeUnit, props.data]);

  const prepDataArray = () => {
    // create Empty value to set new standart
    let values = [];
    // switch following timeUnit wich is set in TimeNavigator.js and created certain length array filled with 0 values
    switch (props.timeUnit) {
      case "day":
        values = new Array(24).fill(0);
        break;
      case "week":
        values = new Array(7).fill(0);
        break;
      case "month":
        values = new Array(
          new Date(props.chartDate[3], props.chartDate[2], 0).getDate()
        ).fill(0);
        break;
      case "year":
        values = new Array(12).fill(0);
        break;
      case "years":
        values = new Array(10).fill(0);
        break;

      default:
        values = [];
        break;
    }
    // map emotiondata and set values = [...] to each emotion count
    emotionData.map((emotion) => {
      emotion.count = values;
      //   console.log(emotion);
    });
  };

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
            justifyContent: "center",
            alignItems: "center",
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
    case "linechart":
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
