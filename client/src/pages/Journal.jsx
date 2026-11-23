import { Link } from 'react-router';
import './Journal.css';
import { useEffect } from "react";
import { useState, useRef, Fragment } from 'react';
import { socket, sendEntry, deleteEntry, clientId } from "../utils/socket.js";

function Journal(){
    const [userCount, setUserCount] = useState(0); 
    const [entries, setEntries] = useState([]);
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {

        const onInit = (data) => setEntries(data);
        const onNew = (entry) => setEntries((prev) => [...prev, entry]);
        const onDelete = (id) => setEntries((prev) => prev.filter((e) => e.id !== id));
        const onEntryError = (msg) => alert(msg);

        //client telling server we joined
        socket.on("users", setUserCount);
        socket.on("init", onInit);
        socket.on("new_entry", onNew);
        socket.on("delete_entry", onDelete);
        socket.on("entry_error", onEntryError)
        //checking the server to see if others have joined
        socket.emit("getUsers");
        return() => {
            socket.off("users", setUserCount);
            socket.off("init", onInit);
            socket.off("new_entry", onNew);
            socket.off("delete_entry", onDelete);
            socket.off("entry_error", onEntryError);
        }

    }, []);


    function handleSubmit(e){
        console.log("file:", file);
        e.preventDefault();
        if(!author.trim() || !body.trim()) return;
        sendEntry(author, body, file);
        setBody("");
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    return(
        <>
        <header>
            <div className='header-grid'>
                <h1 className='title'>Journal Entries from Others —</h1>
                <h2 id='title-description'>Share Your Own Personal Memories</h2>
                <Link to="/archive" id='archive'>Archive</Link>
            </div>
            <p>🟢 {userCount} online</p>
            <p className='disclaimer'>*All Fields Must be Filled to Post</p>
            <p className='disclaimer'>*Only Allows Photos that are Under 5MB</p>
        </header>
        <form className='entry-form' onSubmit={handleSubmit}>
            <input 
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder='name'
            />
            <label htmlFor="photo-upload" className='file-btn'>Upload a Photo</label>
            <input
                id='photo-upload'
                type='file'
                accept='image/*'
                ref={fileInputRef}
                onChange={(e) => setFile(e.target.files[0] || null)}
                hidden
            />
            {file && <span className="file-name">{file.name}</span>}
            <textarea 
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                placeholder="Write your story here..."
            />
            <button type="submit">Post</button>
        </form>
        <section className='gallery-grid-container'>
            {entries.map((entry, i) => {
                //alternates the grid
                const alternate = Math.floor(i/2) % 2 === 1;
                const photo = (
                    <div className='cell photo-cell' key={`${entry.id}-photo`}>
                        {entry.image_url && <img src={entry.image_url} alt="" />}
                    </div>
                );

                const text = (
                    <div className="cell text-cell" key={`${entry.id}-text`}>
                        <p className="entry-author">{entry.author}</p>
                        <p className="entry-body">{entry.body}</p>
                        {entry.client_id === clientId && (
                            <button className="delete-btn" onClick={() => deleteEntry(entry.id)}>Delete</button>
                        )}
                    </div>
                );

                return(
                    <Fragment key={entry.id}>
                        {alternate ? text : photo}
                        {alternate ? photo : text}
                    </Fragment>
                );

            })}
        </section>
        </>
    );
}

export default Journal;