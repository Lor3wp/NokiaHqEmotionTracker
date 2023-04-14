import '../App.css';
import React from 'react';
import Piechart from '../components/charts/Piechart';
import Barchart from '../components/charts/Barchart'
import { useState } from "react";
// import {viewCondition, setViewCondition} from "./EmotionButtonView";

const StatWindow = ({backButtonClicked}) => {
  // TODO: charts and general view data here
  //   TODO: that includes navigation states within this view
  const [chartType, setChartType] = useState("piechart");
  const [hourRange, setHourRange] = useState(false);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(23);
  const [chartDate, setChartDate] = useState([31, 52, 12, 2023]);
  const [timeUnit, setTimeUnit] = useState("day");

  return (
    // TODO: redo the stats view layout
    <div className="StatWindow">
        {/*    TODO: Header back button and burger menu*/}
        <div className="App-header">
      <button style={{ borderStyle: "none", backgroundColor: "transparent", alignSelf: "start"}}
      onClick = {backButtonClicked}
      >
        <span class="material-symbols-outlined" style={{ color: "white" }}>
          arrow_back
        </span>
      </button>
      <h1>Statistics</h1>

        <div>
          {/*  TODO: chart view here */}
          <Piechart />
        </div>
      {/*      TODO: Slider for hours*/}
      {/*      TODO: Navigation for chosen time unit*/}
      {/*      TODO: Time Unit Selector*/}
      </div>
    </div>
  );
}

export default StatWindow;
