import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { LINKS } from 'utils';

function MobileSidebar({ isOpenMenu, setIsOpenMenu, setOpen }) {
  const { OVERVIEW, SUPPORT, LEARN_MORE, FAQ } = LINKS;

  return (
    <Menu
      width={'100%'}
      //   height={'100%'}
      id="mbl-menu"
      className="mbl-menu"
      overlayClassName="mbl-menu-overlay"
      isOpen={isOpenMenu}
      onClose={() => {
        setIsOpenMenu(false);
      }}
    >
      <div className="bg-green pl-20 h-100%">
        <div className="text-18 py-40 font-white font-medium font-display text-white">
          <Link to={OVERVIEW}>
            <div className="mb-10">Programme Overview</div>
          </Link>
          <Link to={SUPPORT}>
            <div className="mb-10">Your Support Team</div>
          </Link>
          <Link to={LEARN_MORE}>
            <div className="mb-10">Learn More </div>
          </Link>
          <Link to={FAQ}>
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
  );
}

export default MobileSidebar;
