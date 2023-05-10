import React, {useState} from "react";
import "../../css/HourSlider.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import HourRange from "./HourRange";

const HourSlider = ({
  minHour,
  setMinHour,
  maxHour,
  setMaxHour,
  hourRange,
  setHourRange,
  onChange,
  timeUnit,
  chartType,
}) => {
  const onHourChange = (values) => {
    setMinHour(values[0]);
    setMaxHour(values[1]);
    if (onChange) {
      onChange(values);
    }
  };

  const [value, setValue] = useState([0, 23]);

  const onSingleThumbChange = (newValue) => {
    setValue(newValue);

    setMaxHour(newValue[1]);
    setMinHour(newValue[1]);
    if (onChange) {
      onChange(newValue);
    }
  };
  if (timeUnit === "day" && chartType === "doughnutchart") {
    return (
      <div className="hourRange-Slider">
        <div className="range-hour">
          {hourRange ? (
            <p className="hour-text">{value.slice("0")[1]}:00</p>
          ) : (
            <p className="hour-text">
              {minHour}:00-{maxHour}:00
            </p>
          )}
          <HourRange hourRange={hourRange} setHourRange={setHourRange} />
        </div>
        {hourRange ? (
          <div className="margin-lg">
            <label style={{fontSize: "0em", color: "transparent"}}>
              SingleHour
              <RangeSlider
                className="single-thumb"
                alt="single-thumb"
                value={value}
                max={23}
                onInput={onSingleThumbChange}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
              />
            </label>
          </div>
        ) : (
          <div className="margin-lg">
            <RangeSlider
              min={0}
              max={23}
              step={1}
              value={[minHour, maxHour]}
              onInput={onHourChange}
            />
          </div>
        )}
      </div>
    );
  }
};

export default HourSlider;
