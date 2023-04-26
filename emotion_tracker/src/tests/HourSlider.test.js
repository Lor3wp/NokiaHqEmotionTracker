import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HourSlider from '../components/StatView/HourSlider';

describe('HourSlider', () => {
  it('updates min and max hours when dragging range slider', () => {
    const setMinHour = jest.fn();
    const setMaxHour = jest.fn();
    const { getByTestId } = render(
      <HourSlider
        minHour={0}
        maxHour={23}
        setMinHour={setMinHour}
        setMaxHour={setMaxHour}
        timeUnit="day"
      />
    );
    const rangeSlider = getByTestId('range-slider');
    fireEvent.change(rangeSlider, { target: { value: '10,15' } });
    expect(setMinHour).toHaveBeenCalledWith(10);
    expect(setMaxHour).toHaveBeenCalledWith(15);
  });

  it('toggles hour range view when toggle switch is clicked', () => {
    const setHourRange = jest.fn();
    const { getByTestId } = render(
      <HourSlider
        minHour={0}
        maxHour={23}
        setHourRange={setHourRange}
        timeUnit="day"
      />
    );
    const toggleSwitch = getByTestId('toggle-switch');
    fireEvent.click(toggleSwitch);
    expect(setHourRange).toHaveBeenCalledWith(true);
    fireEvent.click(toggleSwitch);
    expect(setHourRange).toHaveBeenCalledWith(false);
  });
});
