/**
 * This file contains the view for changing current time
 * based on used time unit.
 *
 * DatePicker()
 *     setNewDate(currentDay)
 *     timeUp()
 *     timeDown()
 *     switch {
 *         case "years": return()
 *         default: return()
 *     }
 * default export DatePicker;
 *
 * */
import {getWeek} from "date-fns";

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

                break;
            default:
                break;
        }
        setNewDate(currentDay)
    };
    // visible part
    switch (props.timeUnit) {
        case "years":
            return (
                <div>
                    <p>{props.timeUnit}</p>
                </div>
            )
        default:
            return (
                <div>
                    <div style={{flexDirection: "row"}}>
                        <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                        <text>{props.chartDate}</text>
                        <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>
            );
    }

}
export default DatePicker;
