import React from 'react';

function Arrow(props) {
  const { className, onClick, dir } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={`/images/slick/${dir}-arrow.svg`} className="max-w-xl" />
    </div>
  );
}

export default Arrow;
