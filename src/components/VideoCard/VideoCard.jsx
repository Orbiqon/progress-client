import React, { useState } from 'react';
import { HealthVideo } from 'components/Modal';

function VideoCard() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <div className="relative">
        {videoOpen ? (
          <div className="absolute left-50% w-87% transform-x">
            <video
              id="my-video"
              class="video-js"
              style={{ borderRadius: '10px' }}
              // onClick={() => setOpen(false)}
              controls
              preload="auto"
              width="500"
              height="220"
              poster="MY_VIDEO_POSTER.jpg"
              data-setup="{}"
              src={'https://www.w3schools.com/html/mov_bbb.mp4'}
            ></video>
          </div>
        ) : (
          <>
            <img
              src="images/video.svg"
              className="absolute left-50% transform-x"
            />
            <img
              src="images/play.svg"
              className="absolute cursor-pointer left-50% transform-xy"
              onClick={() => setVideoOpen(true)}
            />
            <div
              onClick={() => setVideoOpen(true)}
              className="absolute left-50% transform-x top-144 font-display text-white opacity-60 uppercase tracking-widest"
            >
              play
            </div>
          </>
        )}
      </div>
      {/* <HealthVideo open={videoOpen} setOpen={setVideoOpen} /> */}
    </>
  );
}

export default VideoCard;
