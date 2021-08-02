import React from 'react';

function Button({ value, onClick, color, width, height }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-${color} cursor-pointer uppercase text-sm font-display text-white font-bold rounded-sm w-${width} h-${height}`}
    >
      {value}
    </button>
  );
}

export default Button;
