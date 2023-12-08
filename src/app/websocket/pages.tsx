"use client"
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [message, setMessage] = useState(null);
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
            const result = JSON.parse(event.data);
            if (Array.isArray(result[1])) {
                console.log('Received data:', result);
                setMessage(result);
            }
        });

        newSocket.addEventListener('close', (event) => {
            console.log('WebSocket closed:', event);
            // Implement your reconnection logic here
            setTimeout(() => {
                connectWebSocket();
            }, 1000); // Reconnect after a delay (adjust as needed)
        });
        setSocket(newSocket);

        return () => {
            if (socket) {
                socket.close();
            }
        };
    }; // Reconnect when the socket changes

    return (
        <div>
            <div>
                <h3>WebSocket Data:</h3>
                <pre>{JSON.stringify(message, null, 2)}</pre>
            </div>
        </div>
    );
}

export default WebSocketComponent;
