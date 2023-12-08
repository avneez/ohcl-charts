"use client"
import React, { useRef, useEffect } from 'react'
import { createChart ,ColorType} from 'lightweight-charts';
import type { ChartOptions, DeepPartial } from 'lightweight-charts';
import styles from './page.module.css'

const Charts = ({ chartData } : any) => {
    const chartContainerRef : any = useRef<string>('');


    useEffect(() => {
        const chartOptions: DeepPartial<ChartOptions>  = {
            layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'black' } },
            width: 500,
            height: 500,
        };

        const chart = createChart(chartContainerRef.current, chartOptions);


        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
        console.log(chartData)
        candlestickSeries.setData(chartData);
        chart.timeScale().fitContent();
    })

    console.log("chartData",chartData)
    return (
        <div ref={chartContainerRef}  id={styles.charts}>Charts</div>
    )
}

export default Charts