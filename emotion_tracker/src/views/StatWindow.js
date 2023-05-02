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

const StatWindow = ({ backButtonClicked }) => {

  const [chartType, setChartType] = useState("linechart");
  const [hourRange, setHourRange] = useState(false);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(23);
  const [chartDate, setChartDate] = useState(null);
  const [timeUnit, setTimeUnit] = useState("month");
  const [currentDate, setCurrentDate] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartContainerDiv = useRef(null);

  useEffect(() => {
    if (currentDate == null) {
      createCurrentDay();
    }
  }, [chartDate, timeUnit]);

  const createCurrentDay = () => {
    const options = { weekStartsOn: 1 };

    const today = new Date();
    let dateFormat = [];
    dateFormat.push(today.getDate());
    dateFormat.push(getWeek(today, options));
    dateFormat.push(today.getMonth() + 1);
    dateFormat.push(today.getFullYear());

    setCurrentDate(dateFormat);
    setChartDate(dateFormat);
  };

  // []: this is somethid
  if (chartDate != null) {
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
            <span
              className="material-symbols-outlined"
              style={{ color: "white" }}
            >
              arrow_back
            </span>
          </button>
          <NavigationBar setChartType={setChartType} chartType={chartType} />
        </div>
        <div ref={chartContainerDiv} id="ChartView">
          <AllCharts
            chartType={chartType}
            hourRange={hourRange}
            minHour={minHour}
            maxHour={maxHour}
            chartDate={chartDate}
            timeUnit={timeUnit}
            data={data}
            setData={setData}
            setLoading={setLoading}
            loading={loading}
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
            hourRange={hourRange}
            setHourRange={setHourRange}
            timeUnit={timeUnit}
            chartType={chartType}
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
      </div>
    );
  }
};

export default StatWindow;
