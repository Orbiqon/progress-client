import React, { useEffect } from 'react';
import { bubblesCircle } from 'utils';

function BubbleLoading({
  children,
  noOfBubbles,
  childClass,
  childHeight,
  parentClass,
  questionType,
  value,
}) {
  useEffect(() => {
    if (value || value == 0) {
      bubblesCircle({
        noOfBubbles,
        childClass,
        childHeight,
        parentClass,
        questionType,
        value,
      });
    }
  }, [value]);

  return <>{children}</>;
  // <div className="relative mt-60 ml-50% pb-50%">
  //   <img src="images/bubble-loading/grey-bubble.svg" className="absolute" />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-9 left-29"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-54 top-27"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-72 top-52"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-82 top-81"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-113 left-82"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-72 top-143"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-54 top-168"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-29 top-186"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-195 left-_1"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-195 left-_31"
  //   />
  //   {/* left */}
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_31"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-9 left-_61"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_86 top-27"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_104 top-52"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_113 top-81"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_113 top-113"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute left-_104 top-143"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-168 left-_86"
  //   />
  //   <img
  //     src="images/bubble-loading/grey-bubble.svg"
  //     className="absolute top-186 left-_61"
  //   />
  // </div>
}

export default BubbleLoading;
