import React from 'react';

function Button({
  value,
  onClick,
  color,
  width,
  height,
  DeHeight = 66,
  DeWidth = 200,
  disabled = false ,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-${color} cursor-pointer uppercase text-sm font-display text-white font-bold rounded-sm sm:w-${width} sm:h-${height} w-${DeWidth} h-${DeHeight}`}
    disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Button;
