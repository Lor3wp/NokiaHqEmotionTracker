import {useState} from "react";
import "../../TimeNavigator.css";
import timeNavigatorData from "../../data/timeNavigatorData";
import TimeNavigatorButton from "./TimeNavigatorButton.js";



const TimeNavigator = ({timeUnit, setTimeUnit}) => {
  return (
    <>
      {timeNavigatorData.map((button) => (
        <TimeNavigatorButton
          key={button.id}
          buttonLabel={button.label}
          buttonLabelLowerCase={button.label.toLowerCase()}
          buttonClass={
            timeUnit === button.label.toLowerCase()
              ? "SelectedTimeButton"
              : "TimeButton"
          }
          groupClass={
            timeUnit === button.label.toLowerCase()
              ? "SelectedTimeViewButtonGroup"
              : "TimeViewButtonGroup"
          }
          setTimeUnit={setTimeUnit}
          lineFactor={
            button.id < timeNavigatorData.length ? "TimeViewButtonLine" : ""
          }
        />
      ))}
    </>
  );
};
export default TimeNavigator;