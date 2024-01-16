// OrderBook.js

import React, { useEffect, useState } from 'react';
import './styles.css';
import BidAskOrderBook from './bidAskOrder/page';

const OrderBook = () => {
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const newSocket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    newSocket.addEventListener('open', () => {
      console.log('WebSocket connected');
      const msg = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        prec: 'P0',
        freq: 'F0',
      });
      newSocket.send(msg);
    });

    newSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (Array.isArray(data)) {
        const [channelId, orderData] = data;

        if (channelId && orderData) {
          console.log("adda", orderData)
          const [price, count, amount] = orderData;

          setOrderBook((prevOrderBook) => {
            const updatedBids: any = [...prevOrderBook.bids];
            const updatedAsks: any = [...prevOrderBook.asks];

            if (count > 0) {
              if (amount > 0) {
                const existingBidIndex = updatedBids.findIndex((bid: any) => bid[0] === price);
                if (existingBidIndex !== -1) {
                  updatedBids[existingBidIndex] = [price, count, amount];
                } else {
                  updatedBids.push([price, count, amount]);
                }
              } else if (amount < 0) {
                const existingAskIndex = updatedAsks.findIndex((ask: any) => ask[0] === price);
                if (existingAskIndex !== -1) {
                  updatedAsks[existingAskIndex] = [price, count, Math.abs(amount)];
                } else {
                  updatedAsks.push([price, count, Math.abs(amount)]);
                }
              }
            } else if (count === 0) {
              if (amount === 1) {
                const filteredBids = updatedBids.filter((bid: any) => bid[0] !== price);
                updatedBids.length = 0;
                updatedBids.push(...filteredBids);
              } else if (amount === -1) {
                const filteredAsks = updatedAsks.filter((ask: any) => ask[0] !== price);
                updatedAsks.length = 0;
                updatedAsks.push(...filteredAsks);
              }
            }

            return {
              bids: updatedBids,
              asks: updatedAsks,
            };
          });
        }
      }
    });

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);



  return (
    <div className="order-book-container">
        <BidAskOrderBook orderBook={orderBook.bids} orderColor={"rgb(117, 226, 117)"} />
        <BidAskOrderBook orderBook={orderBook.asks} orderColor={"rgb(228, 94, 94)"} />
    </div>
  );
};

export default OrderBook;
