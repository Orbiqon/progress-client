import React, { useState } from 'react';
import { VideoCard } from 'components/VideoCard';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function EntryPoint({ open, setOpen }) {
  const { QUESTIONARE, BOOKING } = LINKS;

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="pb-1">
          <div className="pt-33 pb-270 ">
            <VideoCard />
          </div>
          <div className=" mx-40 sub-heading text-center text-blue">
            Lorem ipsum derset dolor sit amet
          </div>
          <div className="content text-center mx-20 mt-20 mb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="flex justify-center mb-40 px-20">
            <Link to={QUESTIONARE} className="mr-10">
              <Button
                value="Take Questionaire"
                color="green"
                width="173"
                height="66"
                DeWidth="200"
              />
            </Link>
            <Link to={BOOKING}>
              <Button
                value="Book a Call"
                color="blue"
                width="173"
                height="66"
                DeWidth="200"
              />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EntryPoint;
