"use client"
import React, { useState, useRef, useEffect } from 'react'
import { createChart, ColorType } from 'lightweight-charts';
import type { ChartOptions, DeepPartial } from 'lightweight-charts';
import styles from './page.module.css'
import useWebSocketComponent from '@/app/websocket/pages';

const Charts = ({ chartData }: any) => {
    // const { message, sendMessage } = useWebSocketComponent();

    const chartContainerRef: any = useRef<string>('');
    // const chartRef: any = useRef<any>();
    const [message]:any = useWebSocketComponent();
    console.log("message",message)
    // const {time, open, close, high ,low} = message;


    useEffect(() => {
        // sendMessage(message);

        const chartOptions: DeepPartial<ChartOptions> = {
            layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'black' } },
            width: 800,
            height: 400,
            timeScale: {
                rightOffset: 12,
                barSpacing: 3,
            },
        };

        const chart = createChart(chartContainerRef.current, chartOptions);

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
        // console.log(chartData)
        candlestickSeries.setData(chartData);
        // if(message){
        //     candlestickSeries.update(
        //         {time:time, open:open, high:close, low:high, close:low}
        //     );
        // }


        chart.timeScale().fitContent();

        return () => { chart.remove() }
    }, [chartData, message])


    // console.log("chartData",chartData)
    return (
        <div ref={chartContainerRef} id={styles.charts}>Charts</div>
    )
}

export default Charts