import '../App.css';
import '../StatWindow.css';
import React from 'react';
import { useState } from "react";
import DatePicker from "../components/StatView/DatePicker";
import TimeNavigator from "../components/StatView/ TimeNavigator";
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
  // TODO: state for today in the same form as chartDate [d, w, m, y]
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
        <p>Chart here</p>
        {/*  TODO: chart view here */}
      </div>
      <div id="SliderHourView">
        <p>Slider for hours here</p>
        {/*      TODO: Slider for hours*/}
      </div>
      <div id="ChosenTimeUnitNavView">
          {/*      TODO: Navigation for chosen time unit*/}
          <div>
              <DatePicker timeUnit={timeUnit} chartDate={chartDate} setChartDate={setChartDate}/>
          </div>
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
