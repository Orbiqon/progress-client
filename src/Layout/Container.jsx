import React, { useState } from 'react';
import { MobileHeader, DesktopHeader } from 'components/Header';
import { MobileFooter, DesktopFooter } from 'components/Footer';

function Container({ children }) {
  const [width, setWidth] = useState();
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleWindowResize);

  return (
    <>
      {window.innerWidth > 1024 ? (
        <div className="sm:hidden ">
          <DesktopHeader />
          <div className="">{children}</div>

          <DesktopFooter />
        </div>
      ) : (
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <MobileHeader />
          {children}
          <MobileFooter />
        </div>
      )}
    </>
  );
}

export default Container;
