import HourRange from "../components/StatView/HourRange";
import HourSlider from "../components/StatView/HourSlider";
import "../css/App.css";
import "../css/StatWindow.css"
import React, {useEffect, useRef} from "react";
import { useState } from "react";
import NavigationBar from '../components/StatView/NavigationBar';
import DatePicker from "../components/StatView/DatePicker";
import TimeNavigator from "../components/StatView/ TimeNavigator";
import { getWeek } from "date-fns";

import AllCharts from "../components/StatView/AllCharts";
import backendAddress from "../data/apiHooks";
// import {viewCondition, setViewCondition} from "./EmotionButtonView";

const StatWindow = ({ backButtonClicked }) => {
  // TODO: charts and general view data here
  //   TODO: that includes navigation states within this view
  const [chartType, setChartType] = useState("lineChart");
  const [hourRange, setHourRange] = useState(false);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(23);
  const [chartDate, setChartDate] = useState([31, 52, 12, 2023]);
  const [timeUnit, setTimeUnit] = useState("month");
  const [currentDate, setCurrentDate] = useState(null);
  // values for data fetching
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartContainerDiv = useRef(null);

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
                const date = new Date(chartDate[3], chartDate[2] - 1, chartDate[0]);
                const dayOfWeek = date.getDay();
                const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
                const monday = new Date(date.setDate(diff));
                const date1 = new Date(chartDate[3], chartDate[2] - 1, chartDate[0]); // April 22, 2022
                const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay() + 1);
                const lastDayOfWeek = new Date(firstDayOfWeek);
                lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
                // console.log(monday.getDate(), lastDayOfWeek.getDate())

                const responseWeek = await fetch(backendAddress + `emotions/getweek/${chartDate[3]}-${chartDate[2]}-${monday.getDate()}/${chartDate[3]}-${chartDate[2]}-${lastDayOfWeek.getDate()}`);
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
          <span className="material-symbols-outlined" style={{ color: "white" }}>
            arrow_back
          </span>
        </button>
        <NavigationBar setChartType={setChartType} chartType={chartType} />
      </div>
      <div ref={chartContainerDiv}id="ChartView">
        <AllCharts
            chartType={chartType}
            hourRange={hourRange}
            minHour={minHour}
            maxHour={maxHour}
            chartDate={chartDate}
            timeUnit={timeUnit}
            data={data}
            chartContainerDiv={chartContainerDiv}
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
          hourRange={hourRange}
          setHourRange={setHourRange}
          timeUnit={timeUnit}
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



// viimeksi korjasin ja paransin aikav'lin navigointinapit, sekä lähdin tekemään datan käsittelyä linecharttia varten
// tänään jatkan datan käsittelyä, valmistelen esitelmää sekä osallistuin opettajapalaveriin 
