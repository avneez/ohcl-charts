"use client"
import React, { useEffect, useState } from 'react'
import Charts from './charts/page';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const convertEpochToDateTime = (epoch:any) => {
    const date = new Date(epoch * 1000);
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  const transformData = (data:any) => {
    return data.map((item:any)=> ({
      0: convertEpochToDateTime(item[0]),      // MTS (Millisecond epoch timestamp)
      1: item[1],      // OPEN
      4: item[2],      // CLOSE
      2: item[3],      // HIGH
      3: item[4],      // LOW
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist');
      const result = await response.json();
      // console.log("result", result)

      setData(transformData(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }


    // const formattedData = transformData(data);

    // console.log("formattedData",formattedData);


  };


  return <>
    {loading ? (<div>Loading...</div>) :
      (<Charts chartData={data} />)
    }
  </>

}

export default HomePage;