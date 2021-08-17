import React from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';

function DesktopHeader() {
  return (
    <div className="max-w-lg m-auto flex justify-between pt-41 px-100">
      <Link to="/">
        <img src="images/logo/logo-desktop.svg" className="cursor-pointer" />
      </Link>
      <div className="label text-gray-black flex items-center">
        <Link to="/overview">
          <div className="mr-24 cursor-pointer">Programme Overview </div>
        </Link>
        <Link to="/precautions">
          <div className="mr-24 cursor-pointer">Your Support Team</div>
        </Link>
        <Link to="/learn-more">
          <div className="mr-24 cursor-pointer">Learn More</div>
        </Link>
        <Link to="/information">
          <div className="mr-40 cursor-pointer">Testimonials & FAQ</div>
        </Link>
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
