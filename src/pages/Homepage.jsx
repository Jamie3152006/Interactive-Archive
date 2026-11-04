import noScroll from '../utils/noScroll'
import { Link } from 'react-router';
import ImageScrolling from '../image_components/ImageScrolling.jsx'
import '../pages/Homepage.css'
function Homepage(){

    noScroll();

    return(
        <>
        <div className='body'>
            <div className='photo-layer'>
                <ImageScrolling />
            </div>
                <img src='/images/Manila_Folder_PS.png' className='folder-layer' alt='' />
            <div className = 'button'>
                <Link to="/archive" className="button-link">Enter Archive</Link>
            </div>
            <img src="../images/Sticky-Note.png" className='sticky-note'alt="sticky note clip image with title of 'Recollection of Memories Through Photos by Jamie Zheng" />
        </div>
        </>
    )
}

export default Homepage;