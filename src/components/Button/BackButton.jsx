import React from 'react';

function BackButton({ value, onClick, color, width, height }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-${color} cursor-pointer uppercase text-sm font-display text-white font-bold rounded-sm w-${width} h-${height}`}
    >
      <div className="flex justify-center">
        <img src="images/left-arrow.svg" className="pr-8" />

        {value}
      </div>
    </button>
  );
}

export default BackButton;
