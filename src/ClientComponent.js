import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

const ClientComponent = () => {
    const [response, setResponse] = useState({});

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("status", data => {
            setResponse(data);
        });

    }, []);

    return (
        <p>
            <pre>{JSON.stringify(response, null, 4)}</pre>
        </p>
    );
}

export default ClientComponent;