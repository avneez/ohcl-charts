import React from "react";

const BidAskOrderBook: any = ({ orderBook, orderColor }: any) => {
    // const bids = orderBook.bids || []
    // const asks = orderBook.asks || []

    // const colorWidth = orderBook.map(
    //     ([count, amount]: any) => (count * amount) / 1000
    // );
    // console.log("colorWidth", colorWidth);

    return (
        <div className="orderItems">
            {/* <table> */}
            {/* <thead> */}
            <div className="header-flex">
                <div>
                    <span>PRICE (USD)</span>
                </div>
                <div>
                    <span>COUNT</span>
                </div>
                <div>
                    <span>AMOUNT</span>
                </div>
                <div>
                    <span>TOTAL</span>
                </div>
            </div>
            {/* <tr className="header">
                            <th></th>
                            <th></th>{orderColor}`}}>
      {/* <tbody> */}
            {/* <div style={{width: "100%"}}> */}
                {orderBook.map(([price, count, amount]: any) => (
                    // <div key={price}
                    // style={{width: `${colorWidth}%`, background: `${orderColor}`}}
                    // >
                    // <tr key={price} style={{width: `${colorWidth}%`, background: `${orderColor}`}}>
                    //     <td>{price}</td>
                    //     <td>{count}</td>
                    //     <td>{amount.toFixed(4)}</td>
                    //     <td>{(amount * count).toFixed(4)}</td>
                    // </tr>

                    <div key={price} className="row-flex" style={{ width: `${amount*10}%`, background: `${orderColor}` }}>
                        <div>
                            <span>{price}</span>
                        </div>
                        <div>
                            <span>{count}</span>
                        </div>
                        <div>
                            <span>{amount.toFixed(4)}</span>
                        </div>
                        <div>
                            <span>{(amount * count).toFixed(4)}</span>
                        </div>
                    </div>
                ))}
            {/* </div> */}

            {/* </tbody> */}
            {/* </table> */}
        </div>
    );
};

export default BidAskOrderBook;
