import '../App.css';
import '../StatWindow.css';
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
        <div className="Stats-header" >
            <button style={{ borderStyle: "none", backgroundColor: "transparent", alignSelf: "start"}}
              onClick = {backButtonClicked}>
            <span class="material-symbols-outlined" style={{ color: "white" }}>
              arrow_back
            </span>
            </button>
            <p>Top navbar here</p>
          </div>
        <div id='ChartView'>
          <p>Chart here</p>
          {/*  TODO: chart view here */}
        </div>
        <div id='SliderHourView'>
          <p>Slider for hours here</p>
          {/*      TODO: Slider for hours*/}
        </div>
        <div id='ChosenTimeUnitNavView' >
          <p>Navigation for chosen time unit here</p>
          {/*      TODO: Navigation for chosen time unit*/}
        </div>
        <div id='TimeUnitSelectorView' >
          <p>Time Unit Selector here</p>
          {/*      TODO: Time Unit Selector*/}
        </div>
        <div id='VilisVelvetyElementView' >
          <p style={{fontSize: '11px'}}>#SamettisetElementit</p>
        </div>
    </div>
  );
}

export default StatWindow;
