import React from "react";
import "../../css/HourRange.css";

const HourRange = ({ hourRange, setHourRange, onChange, useSingleThumb, setUseSingleThumb }) => {
    
    const handleChange = () => {
        setHourRange(!hourRange)
        if (onChange) {
            onChange(hourRange);
          }
    }

  return (
    <div className="hourRange-singleHour"> 
    <p className="range-text">Hour range</p>
    <label class="switch">
    <input type="checkbox" checked={useSingleThumb} onChange={(e) => setUseSingleThumb(e.target.checked)}
 />
    <span class="slider round"></span>
    </label>
  <p className="range-text">Single hour</p>
  </div>
  );
};
export default HourRange;
