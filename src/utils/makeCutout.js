import { layout } from '../data/layout.js';

//taking the layout from archive and turing it into cutout in final page function
export function makeCutout(sky, navigate) {
  const skyRect = sky.getBoundingClientRect();

  const canvas = document.createElement('canvas');
  canvas.width = skyRect.width;
  canvas.height = skyRect.height;
  const ctx = canvas.getContext('2d');

  const bg = new Image();
  bg.src = '/images/background.jpeg';

  bg.onload = () => {
    const scale = Math.max(canvas.width / bg.width, canvas.height / bg.height);
    const w = bg.width * scale;
    const h = bg.height * scale;
    ctx.drawImage(bg, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);

    sky.querySelectorAll('.pinned').forEach((img) => {
      const r = img.getBoundingClientRect();
      ctx.clearRect(r.left - skyRect.left, r.top - skyRect.top, r.width, r.height);
    });

    canvas.toBlob((blob) => {
      layout.url = URL.createObjectURL(blob);
      navigate('/final_page');
    }, 'image/png');
  };
}