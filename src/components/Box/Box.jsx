import React from 'react';

function Box({ heading, detail, onClick }) {
  return (
    <div
      className={
        detail ? 'rounded-sm shadow-sm p-20 mb-20' : 'rounded-sm p-20 mb-20'
      }
      onClick={onClick}
    >
      <div className="flex">
        <img src="images/questionmark.svg" className="mt-2" />
        <div className=" ml-20 mr-39 w-80%">
          <div className="content font-medium pb-10">{heading}</div>
          {detail ? <div className="label">{detail}</div> : null}
        </div>
        <div className="w-20% mt-6 cursor-pointer">
          <img src={detail ? 'images/up-arrow.svg' : 'images/down-arrow.svg'} />
        </div>
      </div>
    </div>
  );
}

export default Box;
