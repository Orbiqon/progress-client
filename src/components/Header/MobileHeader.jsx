import React, { useState, useEffect } from 'react';
import { EntryPoint } from 'components/Modal';
import MobileSidebar from './MobileSidebar';
import { Link } from 'react-router-dom';
import { LINKS, ConditionalLink } from 'utils';

function MobileHeader({ questionaire }) {
  const { HOME } = LINKS;

  const [open, setOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let icon = questionaire ? 'back.svg' : 'menu.svg';

  return (
    <>
      <div className="flex justify-between px-20 py-11 h-border-bottom sticky top-0 z-10000 bg-white">
        <Link to={HOME}>
          <img src="images/logo/logo.svg" />
        </Link>
        <ConditionalLink to={HOME} condition={questionaire}>
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
        </ConditionalLink>
      </div>
      <MobileSidebar
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        setOpen={setOpen}
      />
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default MobileHeader;
