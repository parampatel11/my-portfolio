"use client";

import { useState } from "react";
import { FaGithub, FaPaw } from "react-icons/fa";

// Tight paths that strictly encircle the 48px logo
const pawPaths: Array<Array<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  rotate: string;
}>> = [
  // Hugging the right edge
  [
    { right: "-8px", top: "18px", rotate: "80deg" },
    { right: "-14px", top: "2px", rotate: "60deg" },
    { right: "-8px", top: "-14px", rotate: "40deg" },
    { right: "4px", top: "-24px", rotate: "20deg" },
  ],
  // Hugging the left edge
  [
    { left: "-8px", top: "18px", rotate: "-80deg" },
    { left: "-14px", top: "2px", rotate: "-60deg" },
    { left: "-8px", top: "-14px", rotate: "-40deg" },
    { left: "4px", top: "-24px", rotate: "-20deg" },
  ],
  // Jumping directly over the top
  [
    { left: "0px", top: "-10px", rotate: "-40deg" },
    { left: "14px", top: "-20px", rotate: "-15deg" },
    { right: "14px", top: "-20px", rotate: "15deg" },
    { right: "0px", top: "-10px", rotate: "40deg" },
  ]
];

export default function AnimatedCatLogo() {
  const [pathIndex, setPathIndex] = useState(0);

  const handleHover = () => {
    let nextIndex = Math.floor(Math.random() * pawPaths.length);
    if (nextIndex === pathIndex) {
      nextIndex = (nextIndex + 1) % pawPaths.length;
    }
    setPathIndex(nextIndex);
  };

  const currentPath = pawPaths[pathIndex];

  return (
    <div 
      className="cat-container relative mb-2 flex cursor-pointer items-center justify-center p-2 md:mb-4"
      onMouseEnter={handleHover}
    >
      {/* The Cat */}
      <div className="cat-icon z-10 text-green-400 opacity-90 transition-all duration-300 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">
        <FaGithub size={48} />
      </div>
      
      {/* The Dynamic Footprints strictly around the logo */}
      {currentPath.map((pos, index) => (
        <div 
          key={`${pathIndex}-${index}`}
          className={`paw paw-${index + 1} absolute opacity-0`} 
          style={{ 
            right: pos.right, left: pos.left, top: pos.top, bottom: pos.bottom,
            transform: `rotate(${pos.rotate})` 
          }}
        >
          <FaPaw size={12} className="text-green-400 md:text-sm" />
        </div>
      ))}
    </div>
  );
}