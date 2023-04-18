// tänne tulee day, week, month, year ja years valikko
// FIXME: this is not fixed
// TODO this is todo
// COMMENT
//  BUG
// [ ] this is open todo
//  [x] this is done todo

import {useEffect, useState} from "react";
import "../../TimeNavigator.css";
import timeNavigatorData from "../../data/timeNavigatorData";
import TimeNavigatorButton from "./TimeNavigatorButton.js";



const TimeNavigator = ({timeUnit, setTimeUnit}) => {
    const [selectedButton, setSelectedButton] = useState("month")
    


    return (
      <>
        <div className="TimeView">
          {/* <hr className="TimeViewButtonLine" /> */}
          {/* <div className="TimeViewButtonLine"></div> */}
          {timeNavigatorData.map((button) => (
            <TimeNavigatorButton
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
        </div>
      </>
    );
};
export default TimeNavigator;