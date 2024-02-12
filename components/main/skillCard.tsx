"use client";

import React, { useEffect, useRef } from 'react';
import './CardStyles.css';

const Cards = () => {
  const preRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      if (preRef.current) {
        preRef.current.style.setProperty("--rotateX", `${offsetX}deg`);
        preRef.current.style.setProperty("--rotateY", `${-1 * offsetY}deg`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cards-container flex justify-center gap-4">
      {/* Individual cards */}
      <div className="card">
        Software Engineering
      </div>
      <div className="card">
        Machine Learning
      </div>
      <div className="card">
        Full-Stack Development
      </div>
      {/* The pre tag is kept for the mouse move effect; ensure it's styled or positioned appropriately */}
      <pre ref={preRef}></pre>
    </div>
  );
};

export default Cards;
