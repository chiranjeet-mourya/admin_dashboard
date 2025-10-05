import { useEffect, useRef, useState } from 'react';

export default function SmoothFollower({
  dotSize = 8,
  borderSize = 28,
  hoverSize = 44,
  dotSmooth = 0.18,
  borderSmooth = 0.09,
}) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef({ x: 0, y: 0 });
  const borderRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [pos, setPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHover, setIsHover] = useState(false);
  const [enabled, setEnabled] = useState(true); // disable on touch devices

  useEffect(() => {
    // Disable on touch / coarse pointer devices to prevent weird behaviour on mobile
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(hover: none), (pointer: coarse)');
      if (mq.matches) {
        setEnabled(false);
        return;
      }
    }

    const onPointerMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Use event delegation so dynamically added elements are also detected
    const onDocOver = (e) => {
      if (
        e.target &&
        e.target.closest &&
        e.target.closest('a, button, input, textarea, select, img, [data-cursor-interactive]')
      ) {
        setIsHover(true);
      }
    };

    const onDocOut = (e) => {
      // if relatedTarget is still an interactive element, do nothing
      const rela = e.relatedTarget;
      if (rela && rela.closest && rela.closest('a, button, input, textarea, select, img, [data-cursor-interactive]')) {
        return;
      }
      setIsHover(false);
    };

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      dotRef.current.x = lerp(dotRef.current.x, mouseRef.current.x, dotSmooth);
      dotRef.current.y = lerp(dotRef.current.y, mouseRef.current.y, dotSmooth);
      borderRef.current.x = lerp(borderRef.current.x, mouseRef.current.x, borderSmooth);
      borderRef.current.y = lerp(borderRef.current.y, mouseRef.current.y, borderSmooth);

      setPos({
        dot: { x: dotRef.current.x, y: dotRef.current.y },
        border: { x: borderRef.current.x, y: borderRef.current.y },
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseover', onDocOver);
    document.addEventListener('mouseout', onDocOut);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseover', onDocOver);
      document.removeEventListener('mouseout', onDocOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [dotSmooth, borderSmooth]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* center dot */}
      <div
        aria-hidden
        className="absolute rounded-full bg-black dark:bg-white pointer-events-none"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          transform: 'translate(-50%, -50%)',
          left: `${pos.dot.x}px`,
          top: `${pos.dot.y}px`,
          transition: 'opacity 0.12s linear',
        }}
      />

      {/* border / ring */}
      <div
        aria-hidden
        className="absolute rounded-full border border-black dark:border-white pointer-events-none transition-[width,height] duration-300"
        style={{
          width: isHover ? `${hoverSize}px` : `${borderSize}px`,
          height: isHover ? `${hoverSize}px` : `${borderSize}px`,
          transform: 'translate(-50%, -50%)',
          left: `${pos.border.x}px`,
          top: `${pos.border.y}px`,
        }}
      />
    </div>
  );
}
