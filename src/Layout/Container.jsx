import React, { useState } from 'react';
import { MobileHeader, DesktopHeader } from 'components/Header';
import { MobileFooter, DesktopFooter } from 'components/Footer';

function Container({ children, questionaire = false }) {
  const [width, setWidth] = useState();
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleWindowResize);

  return (
    <>
      {window.innerWidth > 959 ? (
        <div className="sm:hidden ">
          <DesktopHeader questionaire={questionaire} />
          <div className="">{children}</div>

          <DesktopFooter />
        </div>
      ) : (
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <MobileHeader questionaire={questionaire} />
          {children}
          <MobileFooter />
        </div>
      )}
    </>
  );
}

export default Container;
