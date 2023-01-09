import React, { useState } from 'react';
import { Button, BackButton } from 'components/Button';
import { HealthVideo } from 'components/Modal';

function BookCallVideo({
  step = true,
  text,
  heading,
  title = 'Book a Free 30 minute call',
  description = true,
  onClick,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-video-call-desk bg-cover h-602 bg-no-repeat sm:bg-video-call-mbl sm:h-724">
        <div className="sm:pt-80 pt-50">
          {step ? (
            <div className="flex justify-center mb-10 ">
              <Button
                value="step 2"
                color="green"
                width={70}
                height={32}
                DeWidth="92"
                DeHeight="46"
              />
            </div>
          ) : null}
          <div className="flex justify-center">
            <div
              className={
                step
                  ? 'text-2xl w-50% sm:w-100%  sm:text-xl sm:ml-97 sm:mr-76 text-white text-center'
                  : 'pt-120 w-50% sm:w-100% text-2xl sm:text-xl sm:ml-97 sm:mr-76 text-white text-center'
              }
            >
              {heading}
            </div>
          </div>
        </div>
        <div className="relative mt-_37" onClick={() => setOpen(true)}>
          <img
            src="images/play.svg"
            className="absolute cursor-pointer left-50% transform-xy"
          />
          <div className="absolute left-50% transform-x top-144 font-display text-white opacity-60 uppercase tracking-widest">
            play
          </div>
        </div>
        <div className="flex justify-center pt-196">
          {description ? (
            <div class="text-16 sm:text-base text-white text-center w-44% sm:w-100% sm:mx-20">
              {text}
            </div>
          ) : (
            <div className="flex pb-40">
              <div className="flex items-center mr-20%">
                <BackButton value="Back" />
              </div>
              <div>
                <Button
                  value="watch Video"
                  color="green"
                  width={120}
                  height={50}
                  DeWidth="120"
                  DeHeight="66"
                  onClick={onClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <HealthVideo
        open={open}
        setOpen={setOpen}
        display={description ? 'hidden' : 'flex'}
      />
    </>
  );
}

export default BookCallVideo;
