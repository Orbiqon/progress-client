import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { EntryPoint } from 'components/Modal';
import { LINKS } from 'utils';

function DesktopHeader({ questionnaire }) {
  const [open, setOpen] = useState(false);
  const { HOME, OVERVIEW, SUPPORT, LEARN_MORE, FAQ } = LINKS;

  return (
    <>
      <div className="max-w-lg m-auto flex justify-between pt-41 px-100 xl:px-30 ">
        <Link to={HOME}>
          <img src="images/logo/logo-desktop.svg" className="cursor-pointer" />
        </Link>

        {questionnaire ? (
          <Link to={HOME}>
            <div className="flex cursor-pointer">
              <div className="m-10 uppercase text-xs font-semibold font-display flex items-center text-green">
                Back
              </div>
              <img src="images/back.svg" />
            </div>
          </Link>
        ) : (
          <div className="label text-gray-black flex items-center">
            <Link to={OVERVIEW}>
              <div className="mr-24 cursor-pointer">Start Making Progress</div>
            </Link>
            <Link to={SUPPORT}>
              <div className="mr-24 cursor-pointer">Progress With me</div>
            </Link>
            <Link to={LEARN_MORE}>
              <div className="mr-24 cursor-pointer">Learn More</div>
            </Link>
            <Link to={FAQ}>
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
