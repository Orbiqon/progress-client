import React, { useState } from 'react';
import { Modal } from 'components/Modal';
import { VideoCard } from 'components/VideoCard';
import { Button, BackButton } from 'components/Button';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useFetch } from 'hooks';
import { getVideoService } from 'api';

function HealthVideo({ open, setOpen, onClick, display = 'hidden' }) {
  const { data } = useFetch(getVideoService);

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      height="auto"
      display="contents"
      width="100%"
      content="conten"
    >
      <div
        className="sm:max-w-sm w-100% sm:m-auto sm:mt-100 sm:w-80% bg-backBlack"
        onClick={() => setOpen(false)}
      >
        <ReactPlayer
          url={data?.data?.video_link}
          style={{ borderRadius: '10px', margin: 'auto' }}
          controls
          width="100%"
          height="400px"
        />
        {/* <video
          id="my-video"
          class="video-js"
          onClick={() => setOpen(false)}
          controls
          preload="auto"
          width="700"
          height="500"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
          src={'https://www.w3schools.com/html/mov_bbb.mp4'}
        ></video> */}
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
