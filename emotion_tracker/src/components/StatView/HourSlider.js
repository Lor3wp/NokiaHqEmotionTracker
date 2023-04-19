import { useEffect, useState } from "react";
import "../../css/HourSlider.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import HourRange from "./HourRange";

const SingleThumbSlider = ({onChange, maxHour }) => {
    const [value, setValue] = useState([0,23]);

    const onSingleThumbChange = (newValue) => {
    
        setValue(newValue);
        if(onChange) {
            onChange(value)
        }
      };

  return (
    <div>
    <p className="hour-text">{value.slice("0")[1]}:00</p>
     <RangeSlider
        className="single-thumb"
        value={value}
        max={23}
        onInput={onSingleThumbChange}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      />
    </div>
  );
};

const HourSlider = ({
  minHour,
  setMinHour,
  maxHour,
  setMaxHour,
  hourRange,
  timeUnit,
  onChange,
}) => {
  const [useSingleThumb, setUseSingleThumb] = useState(false);

  const onHourChange = (values) => {
    setMinHour(values[0]);
    setMaxHour(values[1]);
    if (onChange) {
      onChange(values);
    }
  };

  const [value, setValue] = useState([0,23]);

  const onSingleThumbChange = (newValue) => {
  
      setValue(newValue);
      if(onChange) {
          onChange(value)
      }
    };

  return (
    <div className="hourRange-Slider">
    <div className="range-hour">

    {useSingleThumb ? (
        <p className="hour-text">{value.slice("0")[1]}:00</p>
    ) : (
        <p className="hour-text">
            {minHour}:00-{maxHour}:00
          </p>
    )}
    <HourRange
        useSingleThumb={useSingleThumb}
        setUseSingleThumb={setUseSingleThumb}
      />
</div>
      {useSingleThumb ? (
        <div className="margin-lg">
       <RangeSlider
      className="single-thumb"
      value={value}
      max={23}
      onInput={onSingleThumbChange}
      thumbsDisabled={[true, false]}
      rangeSlideDisabled={true}
    />
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
};

export default HourSlider;
