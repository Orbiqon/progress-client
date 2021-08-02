import React from 'react';

function VideoCard() {
  return (
    <div className="relative">
      <img src="images/video.svg" className="absolute left-50% transform-x" />
      <img
        src="images/play.svg"
        className="absolute cursor-pointer left-50% transform-xy"
      />
      <div className="absolute left-50% transform-x top-144 font-display text-white opacity-60 uppercase tracking-widest">
        play
      </div>
    </div>
  );
}

export default VideoCard;
