"use client"
import React, { useEffect, useState } from 'react';

const useWebSocketComponent = () => {
    const [message, setMessage]: any = useState();
    const [socket, setSocket]: any = useState();

    useEffect(() => {
        connectWebSocket();
    }, []);

    const connectWebSocket = () => {
        const newSocket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

        newSocket.addEventListener('open', () => {
            let msg = JSON.stringify({
                event: 'subscribe',
                channel: 'candles',
                key: 'trade:1m:tBTCUSD'
            });
            newSocket.send(msg);
            console.log('WebSocket connected');
        });

        newSocket.addEventListener('message', (event) => {
            const result: any = JSON.parse(event.data);
            if (Array.isArray(result[1])) {
                console.log('Received data:', result);
                const candle: any = result[1]?.map((newCandledata: any) => ({
                    time: newCandledata[0],
                    open: newCandledata[1],
                    close: newCandledata[2],
                    high: newCandledata[3],
                    low: newCandledata[4],
                }))
                console.log("candle", candle)
                setMessage(candle)
            }
        });

        newSocket.addEventListener('close', (event) => {
            console.log('WebSocket closed:', event);

            setTimeout(() => {
                connectWebSocket();
            }, 1000);
        });
        setSocket(newSocket);

        return () => {
            if (socket) {
                socket.close();
            }
        };
    };
    // return (
    //     <div>
    //         <div>
    //             <h3>WebSocket Data:</h3>
    //             <pre>{JSON.stringify(message, null, 2)}</pre>
    //         </div>
    //     </div>
    // );
    // console.log("messagemessagemessagemessage",message)
    return [message]
    // const newC = message.map((candle:any) => {
    //     time: { candle.time }, open: { candle.open }, close: { candle.close }, high: { candle.high }, low: { candle.low }
    // })
}

export default useWebSocketComponent;
