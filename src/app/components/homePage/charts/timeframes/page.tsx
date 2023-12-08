import React, { useEffect, useState } from "react";
import { createChart } from "lightweight-charts";

const ChartComponent = ({ data }:any) => {

const [chart, setChart] = useState(null);
  const [timeFrame, setTimeFrame] = useState("5min"); // Initial time frame

  useEffect(() => {
    if (!chart) {
      // Create a new chart
      const newChart = createChart("chart-container", {
        width: 800,
        height: 400,
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#333",
        },
        timeScale: {
          rightOffset: 12,
          barSpacing: 3,
        },
      });

      // Save the chart instance in state
      setChart(newChart);
    } else {
      // Update chart data when data changes
      const formattedData = data.map((item) => ({
        time: item[0],
        open: item[1],
        close: item[2],
        high: item[3],
        low: item[4],
        volume: item[5],
      }));

      const candlestickSeries = chart.addCandlestickSeries();
      candlestickSeries.setData(formattedData);

      // Update visible time range based on the selected time frame
      updateVisibleRange();
    }
  }, [chart, data, timeFrame]);

  const updateVisibleRange = () => {
    const currentTime = new Date().getTime();
    let from;

    // Calculate 'from' time based on the selected time frame
    switch (timeFrame) {
      case "5min":
        from = currentTime - 5 * 60 * 1000;
        break;
      case "15min":
        from = currentTime - 15 * 60 * 1000;
        break;
      case "30min":
        from = currentTime - 30 * 60 * 1000;
        break;
      // Add more cases for other time frames if needed
      default:
        from = currentTime - 5 * 60 * 1000;
    }

    // Set the visible time range
    chart.timeScale().setVisibleRange({
      from,
      to: currentTime,
    });
  };



  return (
    <div>
      {/* Dropdown for selecting time frame */}
      <select onChange={(e) => handleTimeFrameChange(e.target.value)}>
        <option value="5min">5 Minutes</option>
        <option value="15min">15 Minutes</option>
        <option value="30min">30 Minutes</option>
        {/* Add more options as needed */}
          <select onChange={(e) => handleTimeFrameChange(e.target.value)}>
            <option value="5min">5 Minutes</option>
            <option value="15min">15 Minutes</option>
            <option value="30min">30 Minutes</option>
          </select>
        </div>
      </select>

      {/* Container for the chart */}
      <div id="chart-container"></div>
    </div>
  );
};

export default ChartComponent;