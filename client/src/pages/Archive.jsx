import { useState } from 'react';
import { Link } from 'react-router';
import './Archive.css'
import PaperAirplane from '../image_components/PaperAirplane';
import { useEffect } from "react";
import { socket } from "../utils/socket.js";


function Archive(){

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
        <div className='archive-body'>
            <header>
                <p>🟢 {userCount} online</p>
                <h1 className='archive-title title'>Archive of Memories</h1>
                <h2 className='subtext'>How do we try to remember? Trying to latch onto those fleeting momements and catch those memories, seeking to piece together the fragments of our lives. In the end, the process of trying to remember results in a tangled web of memories and stories. A visualization of remembrance.</h2>
                <h3 className='subtext'>This archive of photos are based on my mom's memories, because although I can remember her always being a part of my life, there was a time where I was not a part of hers. Through this archive, I hope to not only help her re-discover these memories of hers, but to also learn more about her past.</h3>
                <Link to="/" id="home" className='subtext'>Homepage</Link>
            </header>
            <section className='main-content'>
                <PaperAirplane />
            </section>
        </div>
        </>
    )
}

export default Archive;