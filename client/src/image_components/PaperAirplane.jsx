import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import './PaperAirplane.css';
import { images, getExcerpt } from '../data/photos.js';
import IndividualPlane, { makePlane } from './IndividualPlane.jsx';
import { makeCutout } from '../utils/makeCutout.js';

const plane_count = 8;

export default function PaperAirplane() {
  const navigate = useNavigate();
  const skyRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [placed, setPlaced] = useState([]);
  const [open, setOpen] = useState(null);
  const [planes] = useState(() =>
    Array.from({ length: plane_count }, (_, i) => makePlane(i))
  );

  // restarts the timer for whether or not button shows
  useEffect(() => {
    setShowButton(false);
    if (placed.length === 0) return;
    const timer = setTimeout(() => setShowButton(true), 15000);
    return () => clearTimeout(timer);
  }, [placed]);

//logic for the placement of the photos
  const placePhoto = (e) => {
    const plane = e.currentTarget.getBoundingClientRect();
    const sky = skyRef.current.getBoundingClientRect();
    const x = plane.left - sky.left + plane.width / 2;
    const y = plane.top - sky.top + plane.height / 2;

//cycles through the photos and filter for whether or not a photo has been placed already
    const unused = images.filter((src) => !placed.some((p) => p.src === src));
    const pool = unused.length ? unused : images;
    const src = pool[Math.floor(Math.random() * pool.length)];

    setPlaced([...placed, { id: Date.now(), src, x, y }]);
  };

  return (
    //rendering the connection lines
    <div className="plane-layer" ref={skyRef}>
      <svg className="connections">
        {placed.slice(1).map((p, i) => (
          <line key={p.id} x1={placed[i].x} y1={placed[i].y} x2={p.x} y2={p.y} />
        ))}
      </svg>

    {/* pinning the photos */}
      {placed.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt=""
          className="pinned"
          style={{ left: p.x, top: p.y }}
          onClick={() => setOpen(p.src)}
        />
      ))}

    {/* area where the planes fly */}
      <div className="sky-box">
        {planes.map((p) => (
          <IndividualPlane key={p.id} plane={p} onClick={placePhoto} />
        ))}
      </div>
    
    {/* clicking open the photo */}
      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <img src={open} alt="" />
            <p className="excerpt">{getExcerpt(open)}</p>
          </div>
        </div>
      )}

    {/* button leading to final page */}
      {showButton && (
        <button className="cutout-btn" onClick={() => makeCutout(skyRef.current, navigate)}>
          Final Page
        </button>
      )}
    </div>
  );
}
