import { Link } from 'react-router';
import './Journal.css';
import { useEffect } from "react";
import { useState } from 'react';
import { socket } from "../utils/socket.js";

function Journal(){
    const [userCount, setUserCount] = useState(0); 

    useEffect(() => {
        //client telling server we joined
        socket.on("users", setUserCount);
        //checking the server to see if others have joined
        socket.emit("getUsers");
        return() => socket.off("users", setUserCount);
    }, []);


    return(
        <>
        <p>🟢 {userCount} online</p>
        </>
    )
}

export default Journal;