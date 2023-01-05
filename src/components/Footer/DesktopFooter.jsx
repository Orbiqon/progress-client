import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function DesktopFooter() {
  const {
    HOME,
    OVERVIEW,
    SUPPORT,
    LEARN_MORE,
    FAQ,
    PRIVATE,
    TERMS,
    INSTA,
    FACEBOOK,
  } = LINKS;

  return (
    <div className="bg-gradient-light-blue pt-80 pb-40">
      <div className="max-w-lg m-auto px-100">
        <div className="flex justify-between">
          <div>
            <Link to={HOME}>
              <img src="images/logo/logo-footer.svg" />
            </Link>
            <div className="flex mt-20">
              <div className="label text-white pr-30">Follow us:</div>
              <a href={INSTA} target="_blank">
                <img src="images/instagram.svg" className="cursor-pointer" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                className="ml-10 cursor-pointer"
              >
                <img src="images/facebook/fb-icon.svg" />
              </a>
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
            <Link to={TERMS} className="pr-24 cursor-pointer">
              Terms And Conditions
            </Link>
            <Link to={PRIVATE} className="cursor-pointer">
              Privacy Policy
            </Link>
          </div>
          <div className="label text-white">
            Copyright ©Progress
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
