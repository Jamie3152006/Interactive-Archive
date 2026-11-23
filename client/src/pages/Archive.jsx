import { useState } from 'react';
import { Link } from 'react-router';
import './Archive.css'
import PaperAirplane from '../image_components/PaperAirplane';


function Archive(){

    return(
        <>
        <div className='archive-main'>
            <div className='image-container'>
                <img src="/images/Blue-photograph.png" alt="a blurry blue toned photo of a woman and a flower" />
                <img src="/images/Shadow-head.png" alt="Figure of a woman's head that is covered in shadow" id='head'/>
                <div className='archive-body'>
                    <div className='archive-content'>
                        <h1 className='archive-title title'>Archive of Memories</h1>
                        <h2 className='subtext'>How do we try to remember? Trying to latch onto those fleeting momements and catch those memories, seeking to piece together the fragments of our lives. In the end, the process of trying to remember results in a tangled web of memories and stories. A visualization of remembrance.</h2>
                        <h3 className='subtext'>This archive of photos are based on my mom's memories, because although I can remember her always being a part of my life, there was a time where I was not a part of hers. Through this archive, I hope to not only help her re-discover these memories of hers, but to also learn more about her past.</h3>
                        <h3 className='subtext'>Paper Airplanes takes you to the page where the images exist with user interaction. The Journal page exist as a way for others to share their memories in this space, creating a collective experience where we can all partake in remembering and seeing.</h3>
                        <Link to="/" id="home" className='subtext'>Homepage</Link>
                        <Link to="/journal" id="journal" className='subtext'>Journal</Link>
                        <Link to="/paper_airplanes" id='interaction' className='subtext'>Paper Airplanes</Link>
                    </div>
                </div>
                <div className='archive-body archive-body-duplicate' aria-hidden="true">
                    <div className='archive-content'>
                        <h1 className='archive-title title'>Archive of Memories</h1>
                        <h2 className='subtext'>How do we try to remember? Trying to latch onto those fleeting momements and catch those memories, seeking to piece together the fragments of our lives. In the end, the process of trying to remember results in a tangled web of memories and stories. A visualization of remembrance.</h2>
                        <h3 className='subtext'>This archive of photos are based on my mom's memories, because although I can remember her always being a part of my life, there was a time where I was not a part of hers. Through this archive, I hope to not only help her re-discover these memories of hers, but to also learn more about her past.</h3>
                        <h3 className='subtext'>Paper Airplanes takes you to the page where the images exist with user interaction. The Journal page exist as a way for others to share their memories in this space, creating a collective experience where we can all partake in remembering and seeing.</h3>
                        <Link to="/" id="home" className='subtext'>Homepage</Link>
                        <Link to="/journal" id="journal" className='subtext'>Journal</Link>
                        <Link to="/paper_airplanes" id='interaction' className='subtext'>Paper Airplanes</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Archive;