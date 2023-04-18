import "../App.css";
import "../StatWindow.css";
import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "../components/StatView/DatePicker";
import TimeNavigator from "../components/StatView/ TimeNavigator";
import { getWeek } from "date-fns";

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

  useEffect(() => {
    if (currentDate == null) {
      createCurrentDay();
    }
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    }
    fetchData();
  }, [chartDate]);
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
        <p>chartti</p>
        {/*  TODO: chart view here */}
      </div>
      <div id="SliderHourView">
        <p>Slider for hours here</p>
        {/*      TODO: Slider for hours*/}
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
