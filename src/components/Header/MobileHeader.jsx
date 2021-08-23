import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Button } from 'components/Button';
import EntryPoint from 'pages/entry-point';
import { Link } from 'react-router-dom';

function MobileHeader({ questionaire }) {
  const [open, setOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let icon = questionaire ? 'back.svg' : 'menu.svg';

  return (
    <>
      <div className="flex justify-between px-20 py-11 h-border-bottom sticky top-0 z-3 bg-white">
        <Link to="/">
          <img src="images/logo/logo.svg" />
        </Link>
        <div
          className="flex"
          onClick={() => {
            if (questionaire) {
            } else {
              setIsOpenMenu(!isOpenMenu);
            }
          }}
        >
          <div className="m-10 uppercase text-xs font-semibold font-display flex items-center text-green">
            {questionaire ? 'Back' : ' Menu'}
          </div>
          <img src={`images/${icon}`} />
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
          <div className="text-18 py-40 font-white font-medium font-display text-white">
            <Link to="/overview">
              <div className="mb-10">Programme Overview</div>
            </Link>
            <Link to="/precautions">
              <div className="mb-10">Your Support Team</div>
            </Link>
            <Link to="/learn-more">
              <div className="mb-10">Learn More </div>
            </Link>
            <Link to="/information">
              <div>Testimonials & FAQ</div>
            </Link>
          </div>
          <Button
            value="Start making progress"
            color="blue"
            width="200"
            height="66"
            onClick={() => {
              setOpen(true);
              setIsOpenMenu(false);
            }}
          />
        </div>
      </Menu>
      {/* </Modal> */}
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default MobileHeader;
