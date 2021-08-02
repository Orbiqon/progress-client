import React from 'react';

function DesktopFooter() {
  return (
    <div className="bg-gradient-light-blue pt-80 pb-40">
      <div className="max-w-lg m-auto">
        <div className="flex justify-between">
          <div>
            <img src="images/logo/logo-desktop.svg" />
            <div className="flex pt-20">
              <div className="label text-white pr-30">
                Lorem ipsum dolor sit amet
              </div>
              <div>
                <img src="images/instagram.svg" />
              </div>
              <div className="pl-10">
                <img src="images/facebook/fb-icon.svg" />
              </div>
            </div>
          </div>
          <div className=" pt-14 flex footer-label">
            <div className="pr-24">Programme Overview</div>
            <div className="pr-24">Your Support Team</div>
            <div className="pr-24">Learn More</div>
            <div> Testimonials & FAQ</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex label text-white underline pb-10 pt-17">
            <div className="pr-24">Terms And Conditions</div>
            <div>Privacy Policy</div>
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
