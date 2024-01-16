import React from "react";

const BidAskOrderBook: any = ({ orderBook, orderColor }: any) => {
    // const bids = orderBook.bids || []
    // const asks = orderBook.asks || []

    return (
        <div className="orderItems">
            <div className="header-flex">
                <span>PRICE (USD)</span>
                <span>COUNT</span>
                <span>AMOUNT</span>
                <span>TOTAL</span>
            </div>
            {orderBook.map(([price, count, amount]: any) => {
        const total = amount * count;
        // const widthPercentage = (total / 1000) * 100;

        // const rowStyle = {
        //   width: `${widthPercentage}%`,
        //   background: `${orderColor}`
        // };

        return (
          <div key={price} className="row-flex" >
            <span>{price}</span>
            <span>{count}</span>
            <span>{amount.toFixed(4)}</span>
            <span>{total.toFixed(4)}</span>
          </div>
        );
      })}
        </div>
    );
};

export default BidAskOrderBook;
