// HoverOverlay.js
import React from "react";

function HoverOverlay() {
  return (
    <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center">
      <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
        <span className="text-white text-2xl font-bold">+</span>
      </div>
    </div>
  );
}

export default HoverOverlay;
