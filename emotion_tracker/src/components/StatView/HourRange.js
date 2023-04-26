import React from "react";
import "../../css/HourRange.css";

const HourRange = ({ hourRange, setHourRange }) => {

  return (
    <div className="hourRange-singleHour"> 
    {!hourRange ? (
      <p className="range-text">Hour range</p>
    ) : <p className="range-text">Single hour</p>}
    <label class="switch">
    <input type="checkbox" checked={hourRange} data-testid="toggle-switch" onChange={(e) => setHourRange(e.target.checked)}
 />
    <span class="slider round"></span>
    </label>
  </div>
  );
};
export default HourRange;
