import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Button } from 'components/Button';
import { Modal } from 'portal';

function MobileHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between px-20 py-11 h-border-bottom sticky top-0 z-3 bg-white">
        <div>
          <img src="images/logo/logo.svg" />
        </div>
        <div className="flex" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <div className="m-10 uppercase text-xs font-semibold font-display flex items-center text-green">
            Menu
          </div>
          <img src="images/menu.svg" />
        </div>
      </div>
      {/* <Modal> */}
      <Menu
        width={'100%'}
        height={'100%'}
        id="mbl-menu"
        className="mbl-menu"
        overlayClassName="mbl-menu-overlay"
        isOpen={isOpenMenu}
        onClose={() => {
          setIsOpenMenu(false);
        }}
      >
        {/* <a onClick={() => setIsOpenMenu(false)}>Home</a> */}
        <div className="bg-green pl-20 h-100% ">
          <div className="text-18 py-40 font-white font-medium text-white">
            <div className="mb-10">Programme Overview</div>
            <div className="mb-10">Your Support Team</div>
            <div className="mb-10">Learn More </div>
            <div>Testimonials & FAQ</div>
          </div>
          <Button
            value="Start making progress"
            color="blue"
            width="200"
            height="66"
          />
        </div>
      </Menu>
      {/* </Modal> */}
    </>
  );
}

export default MobileHeader;
