const rand = (min, max) => Math.random() * (max - min) + min;

//logic for the speed and position of the planes
export const makePlane = (id) => ({
  id,
  duration: rand(15, 45),
  delay: -rand(0, 30),
  points: Array.from({ length: 5 }, (_, i) => ({
    x: i === 2 ? rand(105, 130) : rand(-10, 110),
    y: rand(-10, 110),
  })),
});

//rendering of individual plane
export default function IndividualPlane({ plane, onClick }) {
  const style = { '--dur': `${plane.duration}s`, '--delay': `${plane.delay}s` };

  plane.points.forEach((pt, i) => {
    style[`--x${i}`] = `${pt.x}vw`;
    style[`--y${i}`] = `${pt.y}vh`;
  });

  return (
    <img
      src="/images/paperAirplane.png"
      className="plane"
      onClick={onClick}
      alt="paper airplane"
      style={style}
    />
  );
}