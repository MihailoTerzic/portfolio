import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    >
      <div className="w-8 h-8 bg-black rounded-full"></div>
    </div>
  );
}
