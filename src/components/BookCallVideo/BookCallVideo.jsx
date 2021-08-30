import React from 'react';
import { Button, BackButton } from 'components/Button';

function BookCallVideo({
  step = true,
  title = 'Book a Free 30 minute call',
  description = true,
  onClick,
}) {
  return (
    <div className=" 2xl:bg-video-call-desk bg-cover h-602 bg-no-repeat sm:bg-video-call-mbl sm:h-724">
      {/* <div className="sm:hidden flex justify-center mb-20 2xl:pt-120 sm:pt-80">
        <Button
          value="step 2"
          color="green"
          width={92}
          height={46}
          DeWidth="92"
          DeHeight="46"
        />
      </div> */}
      <div className="sm:pt-80">
        {step ? (
          <div className="2xl:hidden sm:flex sm:justify-center sm:mb-10 ">
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
                ? '2xl:text-2xl 2xl:w-50%  sm:text-xl sm:ml-97 sm:mr-76 text-white text-center'
                : '2xl:pt-120 2xl:w-50% 2xl:text-2xl sm:text-xl sm:ml-97 sm:mr-76 text-white text-center'
            }
          >
            Lorem ipsum dolor
          </div>
        </div>
      </div>
      <div className="relative mt-_37">
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
          <div class="2xl:text-16 sm:text-base text-white text-center 2xl:w-44% sm:mx-20">
            If you are interested to learn more you can watch a video explaining
            the programme and who it is deigned for. At this point you can book
            a free, no obligation call with one of our team to talk through your
            unique needs and see whether we can help you make progress with your
            health. We HATE hard sales pitches so this call will simply be a
            chance for you to ask more questions and learn how the programme
            could be tailored to help you.
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
  );
}

export default BookCallVideo;
