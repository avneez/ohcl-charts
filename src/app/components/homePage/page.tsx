"use client"
import React, { useEffect, useState } from 'react'
import Charts from './charts/page';
import OrderBook from './orderbook/page';
import CustomDropdown from './charts/dropdown/page';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("15m")

  // console.log(timeframe);

  const transformData = (data: any) => {
    return data.map((item: any) => ({
      time: item[0],
      open: item[1],
      close: item[2],
      high: item[3],
      low: item[4],
    }));
  };

  useEffect(() => {
    fetchData();
  }, [timeframe]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api-pub.bitfinex.com/v2/candles/trade:${timeframe}:tBTCUSD/hist`);
      const result = await response.json();
      const sortedData = transformData(result.sort((a: any, b: any) => a[0] - b[0]));
      // console.log("sortedData",sortedData)
      setData((prevData): any => [...prevData, ...sortedData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading || data.length == 0 ? (<div>Loading...</div>) :
        (<Charts chartData={data} />)
      }
      <CustomDropdown setTimeframe={setTimeframe} />
      <OrderBook />
    </>
  )
}

export default HomePage;