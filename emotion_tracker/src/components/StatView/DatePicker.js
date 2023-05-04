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
 * export default DatePicker;
 *
 * */
import {getWeek} from "date-fns";
import monthsNamed from "../../data/monthsNamed";
import "../../css/DatePicker.css";

const DatePicker = (props) => {
    const options = {weekStartsOn: 1};

    // set the changed time to chartDate
    const setNewDate = (currentDay) => {
        const weekNumber = getWeek(currentDay, options);

        props.setChartDate([
            (props.chartDate[0] = currentDay.getDate()),
            (props.chartDate[1] = weekNumber),
            (props.chartDate[2] = currentDay.getMonth() + 1),
            (props.chartDate[3] = currentDay.getFullYear()),
        ]);
    };

    // increase the time based on timeUnit
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
        setNewDate(currentDay);
    };

    // decrease the time based on timeUnit
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
        setNewDate(currentDay);
    };

    // set the visible part of UI based on timeUnit
    switch (props.timeUnit) {
        case "day":
            return (
                <div className="datePickerMainDiv">
                    <div className="timeUnit-arrow">
                        <span onClick={timeDown} className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        <p>
                            {props.chartDate[0]}. {monthsNamed[props.chartDate[2]]}{" "}
                            {props.chartDate[3]}
                        </p>
                        <span onClick={timeUp} className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            );
        case "week":
            return (
                <div className="datePickerMainDiv">
                    <div className="timeUnit-arrow">
                        <span onClick={timeDown} className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        <p>
                            Week {props.chartDate[1]}, {props.chartDate[3]}
                        </p>
                        <span onClick={timeUp} className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            );
        case "month":
            return (
                <div className="datePickerMainDiv">
                    <div className="timeUnit-arrow">
                        <span onClick={timeDown} className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        <p>
                            {monthsNamed[props.chartDate[2]]} {props.chartDate[3]}
                        </p>
                        <span onClick={timeUp} className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            );
        case "year":
            return (
                <div className="datePickerMainDiv">
                    <div className="timeUnit-arrow">
                        <span onClick={timeDown} className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        <p>{props.chartDate[3]}</p>
                        <span onClick={timeUp} className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            );
        case "years":
            return (
                <div className="datePickerMainDiv">
                    <div className="timeUnit-arrow">
                        <span onClick={timeDown} className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        <p>{Math.floor(props.chartDate[3] / 10) * 10}'s</p>
                        <span onClick={timeUp} className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <p>Somehow you are out of range.</p>
                </div>
            );
    }
};
export default DatePicker;
