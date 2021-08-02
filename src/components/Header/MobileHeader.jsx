import React from 'react';

function MobileHeader() {
  return (
    <div className="flex justify-between px-20 py-11 h-border-bottom">
      <div>
        <img src="images/logo/logo.svg" />
      </div>
      <div className="flex">
        <div className="m-10 uppercase text-xs font-semibold font-display flex items-center text-green">
          Menu
        </div>
        <img src="images/menu.svg" />
      </div>
    </div>
  );
}

export default MobileHeader;
