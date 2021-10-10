import React from 'react';

function Arrow(props) {
  const { className, onClick, dir, icon = 'Arrowblack' } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={`/images/arrow/${icon}${dir}.svg`} className="max-w-xl" />
    </div>
  );
}

export default Arrow;
