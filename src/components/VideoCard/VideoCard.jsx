import React, { useState } from 'react';
import { HealthVideo } from 'components/Modal';

function VideoCard() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <div className="relative" onClick={() => setVideoOpen(true)}>
        <img src="images/video.svg" className="absolute left-50% transform-x" />
        <img
          src="images/play.svg"
          className="absolute cursor-pointer left-50% transform-xy"
        />
        <div className="absolute left-50% transform-x top-144 font-display text-white opacity-60 uppercase tracking-widest">
          play
        </div>
      </div>
      {/* <HealthVideo open={videoOpen} setOpen={setVideoOpen} /> */}
    </>
  );
}

export default VideoCard;
