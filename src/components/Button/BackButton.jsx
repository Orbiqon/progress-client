import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton({
  value,
  // onClick={},
  backgroundColor = 'white',
  color = 'white',
  width,
  height,
}) {
  const history = useHistory();
  return (
    <button
      onClick={() => history.goBack()}
      className={`bg-gradient-${backgroundColor} cursor-pointer uppercase text-sm font-display text-${color} font-bold rounded-sm w-${width} h-${height}`}
    >
      <div className="flex justify-center ">
        <img src={`images/left-arrow-${color}.svg`} className="pr-8" />
        {value}
      </div>
    </button>
  );
}

export default BackButton;
