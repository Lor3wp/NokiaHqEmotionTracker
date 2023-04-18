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
    {!useSingleThumb ? (
      <p className="range-text">Hour range</p>
    ) : <p className="range-text">Single hour</p>}
    <label class="switch">
    <input type="checkbox" checked={useSingleThumb} onChange={(e) => setUseSingleThumb(e.target.checked)}
 />
    <span class="slider round"></span>
    </label>
  </div>
  );
};
export default HourRange;
