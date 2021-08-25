import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import EntryPoint from 'pages/entry-point';

function DesktopHeader({ questionaire }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="max-w-lg m-auto flex justify-between pt-41 px-100">
        <Link to="/">
          <img src="images/logo/logo-desktop.svg" className="cursor-pointer" />
        </Link>

        {questionaire ? (
          <Link to="/">
            <div className="flex cursor-pointer">
              <div className="m-10 uppercase text-xs font-semibold font-display flex items-center text-green">
                Back
              </div>
              <img src="images/back.svg" />
            </div>
          </Link>
        ) : (
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
                DeWidth="200"
                DeHeight="66"
                color="blue"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        )}
      </div>
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default DesktopHeader;
