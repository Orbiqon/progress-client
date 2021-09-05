import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function DesktopFooter() {
  const { HOME, OVERVIEW, SUPPORT, LEARN_MORE, FAQ } = LINKS;

  return (
    <div className="bg-gradient-light-blue pt-80 pb-40">
      <div className="max-w-lg m-auto px-100">
        <div className="flex justify-between">
          <div>
            <Link to={HOME}>
              <img src="images/logo/logo-desktop.svg" />
            </Link>
            <div className="flex mt-20">
              <div className="label text-white pr-30">
                Lorem ipsum dolor sit amet
              </div>
              <div>
                <img src="images/instagram.svg" className="cursor-pointer" />
              </div>
              <div className="ml-10 cursor-pointer">
                <img src="images/facebook/fb-icon.svg" />
              </div>
            </div>
          </div>
          <div className=" mt-14 flex footer-label">
            <Link to={OVERVIEW} className="mr-24 cursor-pointer">
              Programme Overview
            </Link>
            <Link to={SUPPORT} className="mr-24 cursor-pointer">
              Your Support Team
            </Link>
            <Link to={LEARN_MORE} className="mr-24 cursor-pointer">
              Learn More
            </Link>
            <Link to={FAQ} className="cursor-pointer">
              Testimonials & FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex label text-white underline pb-10 pt-17">
            <div className="pr-24 cursor-pointer">Terms And Conditions</div>
            <div className="cursor-pointer">Privacy Policy</div>
          </div>
          <div className="label text-white">
            Copyright ©Progress Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
