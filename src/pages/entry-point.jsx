import React from 'react';
import { VideoCard } from 'components/VideoCard';
import { Button } from 'components/Button';

function EntryPoint() {
  return (
    <>
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
      <div className="flex justify-center">
        <Button
          value=" Start making progress"
          color="green"
          width="200"
          height="66"
        />
      </div>
    </>
  );
}

export default EntryPoint;
