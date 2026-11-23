import { Link } from 'react-router';
import PaperAirplane from '../image_components/PaperAirplane';
import './Interaction.css'

function Interaction(){
    return(
        <>
        <section className='main-content'>
            <PaperAirplane />
        </section>
        <header>
            <Link to="/archive" className="archive-btn">Back to Archive</Link>
        </header>
        </>
    )
}

export default Interaction