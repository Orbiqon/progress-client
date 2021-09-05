import React, { useState } from 'react';
import { VideoCard } from 'components/VideoCard';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function EntryPoint({ open, setOpen }) {
  const { QUESTIONARE } = LINKS;

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="pt-33 pb-270 ">
        <VideoCard />
      </div>
      <div className=" mx-40 sub-heading text-center text-blue">
        Lorem ipsum derset dolor sit amet
      </div>
      <div className="content text-center mx-20 mt-20 mb-40">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="flex justify-center mb-40">
        <Link to={QUESTIONARE}>
          <Button
            value=" Start making progress"
            color="green"
            width="200"
            height="66"
          />
        </Link>
      </div>
    </Modal>
  );
}

export default EntryPoint;