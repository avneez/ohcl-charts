"use client"
import React, { useEffect, useState } from 'react'
import Charts from './charts/page';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist');
      const result = await response.json();
      // console.log("result", result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return <>
    {loading ? (<div>Loading...</div>) :
      (<div><Charts chartData={data}/></div>)
    }
  </>

}

export default HomePage;