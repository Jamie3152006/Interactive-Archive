import { layout } from '../data/layout.js';
import { Link } from 'react-router';
import './FinalPage.css';

export default function FinalPage() {
  if (!layout.url) return (
    <div className="final-empty">
        <p id="helper">No layout yet. Go back to the archive first.</p>
        <Link to="/archive" className="button-link">Enter Archive</Link>
    </div>
);

  return (
    <div className="final-wrap">
      <img src={layout.url} alt="Archive cut-out" className="final-img" />

      <div className="final-text">
        <p>Absence and Distortion of Memories...</p>
        <p>As years pass, there is going to be gaps and blanks in our memories, they blur together and create spaces that longed to remember and be filled, but memories can only be maintained for so long, they are in their very essence temporal and ephemeral.</p>
      </div>

      <Link to="/" id="home-btn">Homepage</Link>
    </div>
  );
}