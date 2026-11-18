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
        <header>
            <h1 className='title'>Journal Entries from Others</h1>
            <p>🟢 {userCount} online</p>
        </header>
        <section className='gallery-grid-container'>
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
        </section>
        </>
    )
}

export default Journal;