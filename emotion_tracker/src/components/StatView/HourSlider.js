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
     <RangeSlider
        className="single-thumb"
        value={value}
        max={23}
        onInput={onSingleThumbChange}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      />
      <p>{value.slice("0")[1]}:00</p>
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



  return (
    <div>
      <HourRange
        useSingleThumb={useSingleThumb}
        setUseSingleThumb={setUseSingleThumb}
      />
      {useSingleThumb ? (
        <SingleThumbSlider
        />
      ) : (
        <div className="margin-lg">
          <RangeSlider
            min={0}
            max={23}
            step={1}
            value={[minHour, maxHour]}
            onInput={onHourChange}
          />
          <p>
            {minHour}:00-{maxHour}:00
          </p>
        </div>
      )}
    </div>
  );
};

export default HourSlider;
