// timeUnit // "day", "week", "month", "year", "years"

//[day, week, month, year]
import React, {useState} from "react";

const DatePicker = (props) => {

    const dayUp = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setDate(currentDay.getDate() + 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const dayDown = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setDate(currentDay.getDate() - 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const weekUp = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setDate(currentDay.getDate() + 7);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const weekDown = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setDate(currentDay.getDate() - 7);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const monthUp = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setMonth(currentDay.getMonth() + 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const monthDown = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setMonth(currentDay.getMonth() - 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const yearUp = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setFullYear(currentDay.getFullYear() + 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const yearDown = () => {
        const currentDay = new Date(
            props.chartDate[3],
            props.chartDate[2] - 1,
            props.chartDate[0]
        );
        currentDay.setFullYear(currentDay.getFullYear() - 1);
        const options = {weekStartsOn: 1};
        const weekNumber = require('date-fns').getWeek(currentDay, options);

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

    const timeDown = () => {
        switch (props.timeUnit) {
            case "day":
                dayDown()
                break;
            case "week":
                weekDown()
                break;
            case "month":
                monthDown()
                break;
            case "year":
                yearDown()
                break;
            case "years":

                break;
            default:
                break;
        }
    }

    const timeUp = () => {
        switch (props.timeUnit) {
            case "day":
                dayUp()
                break;
            case "week":
                weekUp()
                break;
            case "month":
                monthUp()
                break;
            case "year":
                yearUp()
                break;
            case "years":

                break;
            default:
                break;
        }
    }

    // visible part
        return (
            <div>
                <p>Navigation for time "{props.timeUnit}"</p>
                <div style={{flexDirection: "row"}}>
                    <span onClick={timeDown} className="material-symbols-outlined">arrow_back_ios</span>
                    <text>"{props.chartDate}" </text>
                    <span onClick={timeUp} className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        )
}
export default DatePicker;
