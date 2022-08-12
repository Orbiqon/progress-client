import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useFetch } from 'hooks';
import { getVideoService } from 'api';

function VideoCard() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { data } = useFetch(getVideoService);
  return (
    <>
      <div className="relative">
        {videoOpen ? (
          <div className="absolute left-50% w-87%  pb-20 transform-x">
            <ReactPlayer
              url={data?.data?.video_link}
              style={{ borderRadius: '10px', margin: 'auto' }}
              controls
              width="80%"
              height="250px"
            />

            {/* <video
              id="my-video"
              className="video-js"
              style={{ borderRadius: '10px', margin: 'auto' }}
              // onClick={() => setOpen(false)}
              controls
              preload="auto"
              width="500"
              height="220"
              poster="MY_VIDEO_POSTER.jpg"
              // data-setup="{}"
              data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'
              // src={'https://www.w3schools.com/html/mov_bbb.mp4'}
            ></video> */}
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
    </>
  );
}

export default VideoCard;
