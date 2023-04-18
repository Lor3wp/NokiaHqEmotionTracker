// 3. 4. ja 5.
// tekee valinnan mikä chartti näkyy sekä mitä chartissa näkyy.
// maxHour when hourRange == false
import Piechart from "./charts/Piechart";

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

    switch (props.chartType) {
        case "piechart":
            return (
                <div style={{
                    display: "flex",
                    flexDirection:"column",
                    flex: 1,
                    // backgroundColor: "blue",
                    width: "100%",
                    height: "100%"
                }}>

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
