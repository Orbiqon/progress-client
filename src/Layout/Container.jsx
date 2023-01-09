import React, { useState } from 'react';
import { MobileHeader, DesktopHeader } from 'components/Header';
import { MobileFooter, DesktopFooter } from 'components/Footer';

function Container({ children, questionnaire = false }) {
  const [width, setWidth] = useState();
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleWindowResize);

  return (
    <>
      {window.innerWidth > 1150 ? (
        <div className=" sm:hidden ">
          <DesktopHeader questionnaire={questionnaire} />
          <div className="">{children}</div>
          <DesktopFooter />
        </div>
      ) : (
        <div className="">
          <MobileHeader questionnaire={questionnaire} />
          {children}
          <MobileFooter />
        </div>
      )}
    </>
  );
}

export default Container;
