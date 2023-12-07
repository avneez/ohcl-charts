// import React, { useState } from 'next'

// const Api = async () => {
//     const [data, setData] = useState(null);

//     const options = { method: 'GET', headers: { accept: 'application/json' } };

//     const response = await fetch("https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist", options);
//     const candleData = await response.json();
//     // console.log(candleData);
//     setData(candleData);
//     return data;

// }

// export const getStaticProps = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     return {
//       props: {
//         people: data,
//       },
//     };
//   };

// export default Api;



"use client";

import React, { useState, useEffect } from 'react';

// const fetchData = async () => {
//   const response = await fetch('https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist');
//   const result = await response.json();
//   return result;
// };



const GetData = () => {

  return (
    <div>
      {/* {console.log(d)} */}
    </div>
  );
};

export default GetData;
