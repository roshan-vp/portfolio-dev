import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;

      cursorRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
      let hover = document.querySelectorAll('.nav-links, #nav-logo, .button');
      hover.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current.style.width = '18px';
          cursorRef.current.style.height = '18px';
          cursorRef.current.style.background = 'var(--accent2)';
          cursorRef.current.style.transition = 'width 0.3s ease, height 0.3s ease, background 0.3s ease';
          cursorRef.current.style.zIndex = '20';
        })
        el.addEventListener('mouseleave', () => {
          cursorRef.current.style.width = '12px';
          cursorRef.current.style.height = '12px';
          cursorRef.current.style.background = 'var(--accent)';
        })
      })
  }, [])

  return (
    <div>
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none w-3 h-3 bg-(--accent) rounded-full z-50"
      ></div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-50 h-9.5 w-9.5 border border-(--accent) opacity-60 rounded-full"
      ></div>
    </div>
  );
}
