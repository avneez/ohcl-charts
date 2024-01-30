import React from "react";
import SingleOrder from "./singleOrder/page";
import Header from "./header/page";
import './style.css'
import { addTotal } from "@/app/constants";
import useOrderBook from '@/app/components/homePage/orderbook/useOrderBook';

const OrderBook = () => {
    const { orderBook } = useOrderBook()

    const bidData = ["count", "amount", "total", "price"];
    const askData = ["price", "total", "amount", "count"];


    const { asks, bids } = orderBook || {};
    const negative = addTotal({ orderBook: asks });
    const positive = addTotal({ orderBook: bids });
    
    return (
        <div className="container">
            <div className="head">
                <Header orderData={bidData} />
                <Header orderData={askData} />
            </div>
            <div className="card">
                <div>
                    <SingleOrder
                        orderBook={positive}
                        orderData={bidData}
                        name="bidColor"
                    />
                </div>
                <div>
                    <SingleOrder
                        orderBook={negative}
                        orderData={askData}
                        name="askColor"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
