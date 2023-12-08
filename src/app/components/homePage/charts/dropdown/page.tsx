import React, { useState } from 'react'

const CustomDropdown = () => {
    const handleTimeFrameChange = (selectedTimeFrame) => {
        setTimeFrame(selectedTimeFrame);
      };

    return (
        <div>
          <select onChange={(e) => handleTimeFrameChange(e.target.value)}>
            <option value="5min">5 Minutes</option>
            <option value="15min">15 Minutes</option>
            <option value="30min">30 Minutes</option>
          </select>
        </div>
      );
}

export default CustomDropdown;