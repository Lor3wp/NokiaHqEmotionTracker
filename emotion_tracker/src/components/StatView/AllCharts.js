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

const AllCharts = (props) => {

  useEffect(() => {
    // prepDataArray() creates empty arrays filled with 0 depending on timeunit and length of a month [0,0,0,0,0,0,0] this is for week

    prepDataArray();
    // check if json data from backend is empty or not
    //   if (props.data != null && props.data.length > 1) {
    //     // loop thru json data
    //     // we check if the created_at value is zero, if not it means that we need to make it start from zero to fit in our prepeared array (example, our month has 30 indexes (0-29) and month dates are 1-30 this means we cant use date as index for this array, last one will be out of range and first one wont match with index)
    //     if (props.data[0].created_at > 0) {
    //       for (let i in props.data) {
    //         // console.log(emotionData[props.data[i].emotion_id - 1].label);
    //         // console.log(emotionData[props.data[i].emotion_id - 1].count);
    //         // emotionData.map((emotion) => {
    //         //   console.log(emotion.count);
    //         // });
    //         // console.log(
    //         //   (emotionData[props.data[i].emotion_id - 1].count[
    //         //     props.data[i].created_at - props.data[0].created_at
    //         //   ] += +props.data[i].count)
    //         // );
    //
    //         emotionData.map((emotion) => {
    //           if (emotion.id == props.data[i].emotion_id) {
    //             console.log("nuuuuuuu");
    //             emotion.count[
    //             props.data[i].created_at - props.data[0].created_at
    //                 ] += +props.data[i].count;
    //           }
    //         });
    //
    //         // insertin into emotiondata count values, emotiondata[here we pick emotion_id from json and match it to our emotiondata index to get right emotion].count[we get json created_at - json[first instance].created_at to get right index value (example, datase is 3,4,5,6,7 we do i-3 from all oh them to get 0,1,2,3,4 wich are index balues of our array)] += we make int from string and add it to value
    //         // emotionData[props.data[i].emotion_id - 1].count[
    //         //   props.data[i].created_at - props.data[0].created_at
    //         // ] += parseInt(props.data[i].count);
    //         // console.log(emotionData[props.data[i].emotion_id - 1].label);
    //         // console.log(
    //         //   emotionData[props.data[i].emotion_id - 1].count[
    //         //     props.data[i].created_at - props.data[0].created_at
    //         //   ]
    //         // );
    //       }
    //     } else {
    //       for (let i in props.data) {
    //         // if the created at starts with 0 dates will match with the index of array
    //         // emotionData.map((emotion) => {
    //         //   if (emotion.id == props.data[i].emotion_id) {
    //         //     emotion.count[props.data[i].created_at] += +props.data[i].count;
    //         //   }
    //         // });
    //       }
    //     }
    //   } else {
    //     // if the json data is empty we do sum here, not show the chart or sum
    //     console.log("there is no data for this time");
    //   }



  }, [props.timeUnit, props.chartDate]);


  const prepDataArray = () => {
    // create Empty value to set new standard
    let values = [];
    // switch following timeUnit which is set in TimeNavigator.js and created certain length array filled with 0 values
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
    for (let i in emotionData) {
      console.log(values, "lumiaura")
      emotionData[i].count = values
      console.log(emotionData[i].count, "aslakinpoika")
    }

    for (let i in emotionData) {
      for (let j in emotionData[i].count) {
        emotionData[i].count[j] = 0
      }
    }

    console.log(emotionData, "kissakoira");
    for (let i in props.data) {
      for (let j in emotionData) {
        if (parseInt(props.data[i].emotion_id) === emotionData[j].id) {
          emotionData[j].count[parseInt(props.data[i].created_at) - 1] += parseInt(props.data[i].count)
        }
      }
    }
    console.log(emotionData[1])

  };

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
