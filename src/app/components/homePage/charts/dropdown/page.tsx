import React, { useState } from 'react'

const CustomDropdown = ({setTimeframe}:any) => {

    const handleTimeFrameChange = (selectedTimeFrame : any) => {
        setTimeframe(selectedTimeFrame);
      };

    return (
        <div>
          <select onChange={(e) => handleTimeFrameChange(e.target.value)}>
            <option value="5m">5 Minutes</option>
            <option value="15m">15 Minutes</option>
            <option value="30m">30 Minutes</option>
          </select>
        </div>
      );
}

export default CustomDropdown;