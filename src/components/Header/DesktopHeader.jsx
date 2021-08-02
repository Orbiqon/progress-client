import React from 'react';
import { Button } from 'components/Button';

function DesktopHeader() {
  return (
    <div className="max-w-lg m-auto flex justify-between pt-41">
      <div>
        <img src="images/logo/logo-desktop.svg" />
      </div>
      <div className="label text-gray-black flex items-center">
        <div className="pr-24">Programme Overview </div>
        <div className="pr-24">Your Support Team</div>
        <div className="pr-24">Learn More</div>
        <div className="pr-40">Testimonials & FAQ</div>
        <div>
          <Button
            value="Start making progress"
            width="200"
            height="66"
            color="blue"
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
