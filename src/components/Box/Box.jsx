import React from 'react';

function Box({ heading, detail }) {
  return (
    <div
      className={
        detail ? 'rounded-sm shadow-sm p-20 mb-20' : 'rounded-sm p-20 mb-20'
      }
    >
      <div className="flex">
        <div className="w-40% mt-2">
          <img src="images/questionmark.svg" />
        </div>
        <div className=" ml-20 mr-39">
          <div className="content font-medium pb-10">{heading}</div>
          {detail ? <div className="label">{detail}</div> : null}
        </div>
        <div className="w-20% mt-6">
          <img src={detail ? 'images/up-arrow.svg' : 'images/down-arrow.svg'} />
        </div>
      </div>
    </div>
  );
}

export default Box;
