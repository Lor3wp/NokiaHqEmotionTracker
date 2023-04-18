import HourRange from "../components/StatView/HourRange";
import HourSlider from "../components/StatView/HourSlider";
import "../css/App.css";
import "../css/StatWindow.css"
import React, {useEffect} from "react";
import { useState } from "react";
import DatePicker from "../components/StatView/DatePicker";
import TimeNavigator from "../components/StatView/ TimeNavigator";
import { getWeek } from "date-fns";

import AllCharts from "../components/StatView/AllCharts";
import backendAddress from "../data/apiHooks";
// import {viewCondition, setViewCondition} from "./EmotionButtonView";

const StatWindow = ({ backButtonClicked }) => {
  // TODO: charts and general view data here
  //   TODO: that includes navigation states within this view
  const [chartType, setChartType] = useState("piechart");
  const [hourRange, setHourRange] = useState(false);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(23);
  const [chartDate, setChartDate] = useState([31, 52, 12, 2023]);
  const [timeUnit, setTimeUnit] = useState("month");
  const [currentDate, setCurrentDate] = useState(null);
  // values for data fetching
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  function handleToggleSwitch() {
    console.log(`hourRange muutos ${hourRange}`);
  }

  function handleHourChange(values) {
    console.log(values); // replace with your code to send the values to the database
  }

  useEffect(() => {
    if (currentDate == null) {
      createCurrentDay();

    }
    async function fetchData() {
        switch (timeUnit) {
            case "day":
                const responseDay = await fetch(backendAddress + `emotions/getday/${chartDate[3]}/${chartDate[2]}/${chartDate[0]}`);
                const jsonDataDay = await responseDay.json();
                setData(jsonDataDay);
                setLoading(false);
                break;
            case "week":
                const responseWeek = await fetch(backendAddress + `emotions/getweek/${chartDate[3]}-${chartDate[2]}-${chartDate[0]}/${chartDate[3]}-${chartDate[2]}-${chartDate[0]}`);
                const jsonDataWeek = await responseWeek.json();
                setData(jsonDataWeek);
                setLoading(false);
                break;
            case "month":
                const responseMonth = await fetch(backendAddress + `emotions/getmonth/${chartDate[3]}/${chartDate[2]}`);
                const jsonDataMonth = await responseMonth.json();
                setData(jsonDataMonth);
                setLoading(false);
                break;
            case "year":
                const responseYear = await fetch(backendAddress + `emotions/getyear/${chartDate[3]}`);
                const jsonDataYear = await responseYear.json();
                setData(jsonDataYear);
                setLoading(false);
                break;
            case "years":
                const responseYears = await fetch(backendAddress + `emotions/getyears/${Math.floor(chartDate[3]/10)*10}/${Math.floor(chartDate[3]/10)*10+9}`);
                const jsonDataYears = await responseYears.json();
                setData(jsonDataYears);
                setLoading(false);
                break;
            default:

                break;
        }
    }
    fetchData();
  }, [chartDate, timeUnit]);
  const createCurrentDay = () => {
    const options = { weekStartsOn: 1 };

    const today = new Date();
    let dateFormat = [];
    dateFormat.push(today.getDate());
    dateFormat.push(getWeek(today.getDate(), options));
    dateFormat.push(today.getMonth() + 1);
    dateFormat.push(today.getFullYear());
    setCurrentDate(dateFormat);
    setChartDate(dateFormat);
  };

  // []: this is somethid
  return (
    // TODO: redo the stats view layout
    <div className="StatWindow">
      {/*    TODO: Header back button and burger menu*/}
      <div className="Stats-header">
        <button
          style={{
            borderStyle: "none",
            backgroundColor: "transparent",
            alignSelf: "start",
          }}
          onClick={backButtonClicked}
        >
          <span class="material-symbols-outlined" style={{ color: "white" }}>
            arrow_back
          </span>
        </button>
        <p>Top navbar here</p>
      </div>
      <div id="ChartView">
        <AllCharts
            chartType={chartType}
            hourRange={hourRange}
            minHour={minHour}
            maxHour={maxHour}
            chartDate={chartDate}
            timeUnit={timeUnit}
            data={data}
        />
        {/*  TODO: chart view here */}
      </div>
      <div id="SliderHourView">
        <HourSlider
          minHour={minHour}
          maxHour={maxHour}
          setMaxHour={setMaxHour}
          setMinHour={setMinHour}
          onChange={handleHourChange}
        ></HourSlider>
      </div>
      <div id="ChosenTimeUnitNavView">
        <DatePicker
          timeUnit={timeUnit}
          chartDate={chartDate}
          setChartDate={setChartDate}
        />
      </div>
      <div id="TimeUnitSelectorView">
        <TimeNavigator timeUnit={timeUnit} setTimeUnit={setTimeUnit} />
      </div>
      <div id="VilisVelvetyElementView">
        <p style={{ fontSize: "11px" }}>#SamettisetElementit</p>
      </div>
    </div>
  );
};

export default StatWindow;
