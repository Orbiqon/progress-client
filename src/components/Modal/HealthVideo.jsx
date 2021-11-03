import React, { useState } from 'react';
import { Modal } from 'components/Modal';
import { VideoCard } from 'components/VideoCard';
import { Button, BackButton } from 'components/Button';
import { Link } from 'react-router-dom';

function HealthVideo({ open, setOpen, onClick, display = 'hidden' }) {
  return (
    <Modal open={open} setOpen={setOpen} height="auto" display="contents">
      <div className="sm:max-w-sm w-100% sm:m-auto sm:mt-100 sm:w-100% bg-backBlack">
        <video
          id="my-video"
          class="video-js"
          controls
          preload="auto"
          width="700"
          height="500"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
          src={'https://www.w3schools.com/html/mov_bbb.mp4'}
        ></video>
        <div className={`pb-20 justify-center mt-20 ${display}`}>
          <div className="flex items-center mr-20">
            <BackButton value="Back" />
          </div>
          <Link to="/booking">
            <Button
              value="Next"
              color="green"
              width={70}
              height={32}
              DeWidth="120"
              DeHeight="66"
              onClick={onClick}
            />
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default HealthVideo;
