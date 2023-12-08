"use client"
import React, { useEffect, useState } from 'react'
import Charts from './charts/page';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const transformData = (data:any) => {
    return data.map((item:any)=> ({
      time: item[0],
      open: item[1],
      close: item[2],
      high: item[3],
      low: item[4],
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist');
      const result = await response.json();
      const sortedData = result.sort((a: any, b:any) => a[0] - b[0]);
      // console.log("sortedData",sortedData)
      setData(transformData(sortedData));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };


  return <>
    {loading ? (<div>Loading...</div>) :
      (<Charts chartData={data} />)
    }
  </>

}

export default HomePage;