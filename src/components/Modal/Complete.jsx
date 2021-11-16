import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { Modal } from 'components/Modal';
import { LINKS } from 'utils';

function Complete({ open, setOpen }) {
  const { LEARN_MORE } = LINKS;

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex flex-col items-center mt-80 sm:pt-120 ">
        <img src="images/logo/logo-icon.svg" className="h-217 pb-40" />
        <div className="sub-heading text-blue pb-20">Thank you</div>
      </div>
      <div className="content text-center pb-30 mx-75 sm:mx-20">
        You can go ahead and close this window or learn more on our website, we
        look forward to catching up with you on the discovery call.
      </div>
      <div className="flex justify-center pb-80 sm:pb-144">
        <Link to={LEARN_MORE}>
          <Button color="green" value="Learn more" width="108" height="32" />
        </Link>
      </div>
    </Modal>
  );
}

export default Complete;
