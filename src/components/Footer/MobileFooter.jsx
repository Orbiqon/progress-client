import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function MobileFooter() {
  const { HOME, OVERVIEW, SUPPORT, LEARN_MORE, FAQ } = LINKS;

  return (
    <>
      <div className="flex items-center flex-col bg-gradient-light-blue pt-80">
        <div className="">
          <Link to={HOME}>
            <img src="images/logo/logo.svg" className="h-66" />
          </Link>
        </div>
        <div className="flex jusitfy-center mt-20">
          <div className="label text-white mr-30 ">
            Lorem ipsum dolor sit amet
          </div>
          <img src="images/facebook/fb-icon.svg" className="mr-10" />
          <img src="images/instagram.svg" />
        </div>
        <div></div>
        <Link to={OVERVIEW} className="footer-label text-center pb-7 pt-40">
          Programme Overview
        </Link>
        <Link to={SUPPORT} className="footer-label text-center pb-7">
          Your Support Team
        </Link>
        <Link to={LEARN_MORE} className="footer-label text-center pb-7">
          Learn More
        </Link>
        <Link to={FAQ} className="footer-label text-center pb-40">
          Testimonials & FAQ
        </Link>
      </div>
      <div className="label text-white text-center bg-gradient-light-blue pt-20 pb-30">
        <div className=" flex justify-center underline pb-10">
          <div className="mr-16">Terms And Conditions </div>
          <div>Privacy Policy</div>
        </div>
        <div>Copyright ©Progress Lorem ipsum dolor sit amet</div>
      </div>
    </>
  );
}

export default MobileFooter;
