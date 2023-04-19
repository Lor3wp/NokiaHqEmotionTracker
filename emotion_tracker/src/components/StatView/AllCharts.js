// 3. 4. ja 5.
// tekee valinnan mikä chartti näkyy sekä mitä chartissa näkyy.
// maxHour when hourRange == false
import Piechart from "./charts/Piechart";
import DoughnutChart from "./charts/DoughnutChart";
import {useEffect, useRef} from "react";

const AllCharts = (props) => {
    /** props
     * chartType={chartType}
     * hourRange={hourRange}
     * minHour={minHour}
     * maxHour={maxHour}
     * chartDate={chartDate}
     * timeUnit={timeUnit}
     * */
    console.log(props.data)
    const chartContainerDiv = useRef(0);
    useEffect(() => {
        const divHeight = chartContainerDiv.current.offsetHeight;
        const divWidth = chartContainerDiv.current.offsetWidth;
        console.log("the height", divHeight, divWidth);
    }, []);

    switch (props.chartType) {
        case "doughnutchart":
            return (
                <div ref={chartContainerDiv} style={{
                    display: "flex",
                    flexDirection:"column",
                    flex: 1,
                    // backgroundColor: "blue",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <DoughnutChart
                        chartContainerDivHeight={chartContainerDiv.current.offsetHeight}
                        chartContainerDivWidth={chartContainerDiv.current.offsetWidth}
                    />
                </div>
            )
        case "barchart":
            return (
                <div>

                </div>
            )
        default:
            return (
            <text>chartType not found</text>
        )
    }

}

export default AllCharts;
