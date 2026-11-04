import { useState, useEffect, useRef } from 'react';
import './PaperAirplane.css';
import { useNavigate } from 'react-router';
import { layout } from '../data/layout.js';
import { images, getExcerpt } from '../data/photos.js';


//this decides the speed and postition of paper planes
const rand = (min, max) => Math.random() * (max - min) + min;
const makePlane = (id) => ({
    id,
    duration: rand(15, 45),     
    delay: -rand(0, 30),        
    points: Array.from({ length: 5 }, (_,i) => ({
        x: i === 2 ? rand(105, 130) : rand(-10, 110),
        y: rand(-10, 110),            
    })),
});


export default function PaperAirplane() {
  const navigate = useNavigate();
  const skyRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [placed, setPlaced] = useState([]);
  const [open, setOpen] = useState(null);
  const count = 8;
  const [planes] = useState(() => Array.from({ length: count }, (_, i) => makePlane(i)));

  // restarts the countdown every time a photo is placed
  useEffect(() => {
    setShowButton(false);
    if (placed.length === 0) return;

    const timer = setTimeout(() => setShowButton(true), 15000);  // 3000 while testing
    return () => clearTimeout(timer);
  }, [placed]);

  //placement of photos
  const placePhoto = (e) => {
    const plane = e.currentTarget.getBoundingClientRect();
    const sky = skyRef.current.getBoundingClientRect();

    const x = plane.left - sky.left + plane.width / 2;
    const y = plane.top - sky.top + plane.height / 2;

    //filters for which photos have or have not been placed
    const unused = images.filter((src) => !placed.some((p) => p.src === src));
    const pool = unused.length ? unused : images;
    const src = pool[Math.floor(Math.random() * pool.length)];

    setPlaced([...placed, { id: Date.now(), src, x, y }]);
  };   

  //this extracts the final layout of photo placements to be used in next page
  const makeCutout = () => {
    const sky = skyRef.current;
    const skyRect = sky.getBoundingClientRect();

    const canvas = document.createElement('canvas');
    canvas.width = skyRect.width;
    canvas.height = skyRect.height;
    const ctx = canvas.getContext('2d');

    const bg = new Image();
    bg.src = '/images/background.jpeg';

    bg.onload = () => {
        // covering, fills the canvas without stretching the image
        const scale = Math.max(canvas.width / bg.width, canvas.height / bg.height);
        const w = bg.width * scale;
        const h = bg.height * scale;
        ctx.drawImage(bg, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);

        // cuts out the image space
        sky.querySelectorAll('.pinned').forEach((img) => {
        const r = img.getBoundingClientRect();
        ctx.clearRect(r.left - skyRect.left, r.top - skyRect.top, r.width, r.height);
        });

        canvas.toBlob((blob) => {
        layout.url = URL.createObjectURL(blob);
        navigate('/final_page');
        }, 'image/png');
    };
  };

    return (
    <>
    <div className="plane-layer" ref={skyRef}>
        {/* the lines between images */}
        <svg className="connections">
            {placed.slice(1).map((p, i) => (
            <line
                key={p.id}
                x1={placed[i].x}
                y1={placed[i].y}
                x2={p.x}
                y2={p.y}
            />
            ))}
        </svg>

        {/* photos stay */}
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

        {/* the area the planes and photos are in*/}
        <div className='sky-box'>
            {planes.map((p) => (
                <img
                    key={p.id}
                    src="/images/paperAirplane.png"
                    className="plane"
                    onClick={placePhoto}
                    alt="paper airplane"
                    style={{
                    '--dur': `${p.duration}s`,
                    '--delay': `${p.delay}s`,
                    '--x0': `${p.points[0].x}vw`, '--y0': `${p.points[0].y}vh`,
                    '--x1': `${p.points[1].x}vw`, '--y1': `${p.points[1].y}vh`,
                    '--x2': `${p.points[2].x}vw`, '--y2': `${p.points[2].y}vh`,
                    '--x3': `${p.points[3].x}vw`, '--y3': `${p.points[3].y}vh`,
                    '--x4': `${p.points[4].x}vw`, '--y4': `${p.points[4].y}vh`,
                    }}
                />
            ))}
        </div>

        {/* opens images as pop with text */}
        {open && (
            <div className="lightbox" onClick={() => setOpen(null)}>
                <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
                    <img src={open} alt="" />
                    <p className="excerpt">{getExcerpt(open)}</p>
                </div>
            </div>
        )}

        {/* button for final page */}
        {showButton && (
            <button className="cutout-btn" onClick={makeCutout}>
                Final Page
            </button>
        )}
    </div>
    </>
  );
}
