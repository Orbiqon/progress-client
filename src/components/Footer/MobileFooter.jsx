import { Private } from 'pages';
import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function MobileFooter() {
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
    <>
      <div className="flex items-center flex-col bg-gradient-light-blue pt-80">
        <div className="">
          <Link to={HOME}>
            <img src="images/logo/logo-footer.svg" className="h-66" />
          </Link>
        </div>
        <div className="flex jusitfy-center mt-20">
          <div className="label text-white mr-30 ">Follow us:</div>
          <a href={FACEBOOK} target="_blank">
            <img src="images/facebook/fb-icon.svg" className="mr-10" />
          </a>
          <a href={INSTA} target="_blank">
            <img src="images/instagram.svg" />
          </a>
        </div>
        <div></div>
        <Link to={OVERVIEW} className="footer-label text-center pb-7 pt-40">
          Start Making Progress
        </Link>
        <Link to={SUPPORT} className="footer-label text-center pb-7">
          Progress With me
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
          <Link to={TERMS} className="mr-16">
            Terms And Conditions{' '}
          </Link>
          <Link to={PRIVATE}>Privacy Policy</Link>
        </div>
        <div>Copyright ©Progress Health and Wellness LTD 2023</div>
      </div>
    </>
  );
}

export default MobileFooter;
