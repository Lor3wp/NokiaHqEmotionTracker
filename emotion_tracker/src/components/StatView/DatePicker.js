/**
 * This file contains the view for changing current time
 * based on used time unit.
 * uses states:
 *     [chartDate, setChartDate]
 *     [timeUnit]
 *
 * DatePicker()
 *     setNewDate(currentDay)
 *     timeUp()
 *     timeDown()
 *     switch {
 *         case "day": return()
 *         case "week": return()
 *         case "month": return()
 *         case "year": return()
 *         case "years": return()
 *         default: return()
 *     }
 * default export DatePicker;
 *
 * */
import {getWeek} from "date-fns";
import monthsNamed from "../../data/monthsNamed";

const DatePicker = (props) => {
    const options = {weekStartsOn: 1};

    const setNewDate = (currentDay) => {
        const weekNumber = getWeek(currentDay, options);

        props.setChartDate(
            [
                props.chartDate[0] = currentDay.getDate(),
                props.chartDate[1] = weekNumber,
                props.chartDate[2] = currentDay.getMonth() + 1,
                props.chartDate[3] = currentDay.getFullYear(),
            ]
        )
        console.log(`${props.chartDate}`)
    }
    const timeUp = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        switch (props.timeUnit) {
            case "day":
                currentDay.setDate(currentDay.getDate() + 1);
                break;
            case "week":
                currentDay.setDate(currentDay.getDate() + 7);
                break;
            case "month":
                currentDay.setMonth(currentDay.getMonth() + 1);
                break;
            case "year":
                currentDay.setFullYear(currentDay.getFullYear() + 1);
                break;
            case "years":
                currentDay.setFullYear(currentDay.getFullYear() + 10);
                break;
            default:
                break;
        }
        setNewDate(currentDay)
    };

    const timeDown = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        switch (props.timeUnit) {
            case "day":
                currentDay.setDate(currentDay.getDate() - 1);
                break;
            case "week":
                currentDay.setDate(currentDay.getDate() - 7);
                break;
            case "month":
                currentDay.setMonth(currentDay.getMonth() - 1);
                break;
            case "year":
                currentDay.setFullYear(currentDay.getFullYear() - 1);
                break;
            case "years":
                currentDay.setFullYear(currentDay.getFullYear() - 10);
                break;
            default:
                break;
        }
        setNewDate(currentDay)
    };
    // visible part
    switch (props.timeUnit) {
        case "day":
            return (
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", flex: 1, height: "inherit", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row" ,width: "100%", justifyContent: "space-between"}}>
                        <span style={{alignSelf: "flex-start"}} onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                            <text>{props.chartDate[0]}. {monthsNamed[props.chartDate[2]]} {props.chartDate[3]}</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
        case "week":
            return (
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", flex: 1, height: "inherit", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row" ,width: "100%", justifyContent: "space-between"}}>
                        <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                            <text>Week {props.chartDate[1]}, {props.chartDate[3]}</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
        case "month":
            return (
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", flex: 1, height: "inherit", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row" ,width: "100%", justifyContent: "space-between"}}>
                        <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                            <text>{monthsNamed[props.chartDate[2]]} {props.chartDate[3]}</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
        case "year":
            return (
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", flex: 1, height: "inherit", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row" ,width: "100%", justifyContent: "space-between"}}>
                        <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                            <text>{props.chartDate[3]}</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
        case "years":
            return (
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", flex: 1, height: "inherit", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row" ,width: "100%", justifyContent: "space-between"}}>
                        <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                            <text>{Math.floor(props.chartDate[3] / 10) * 10}'s</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <text>Somehow you are out of range.</text>
                </div>
            );
    }

}
export default DatePicker;
