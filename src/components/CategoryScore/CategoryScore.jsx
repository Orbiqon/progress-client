import React from 'react';
import { colorLoader, colorText } from 'utils';
import { BubbleLoading } from 'components/Loading';

function CategoryScore({ title, score, description, parentClass, childClass }) {
  return (
    <div>
      <BubbleLoading
        noOfBubbles="20"
        parentClass={parentClass}
        childClass={childClass}
        childHeight="10"
        questionType=""
        value={score / 2}
      >
        <div id={parentClass} className="m-auto relative">
          <div
            className={`text-${colorText(
              score / 2
            )} font-display text-38 flex justify-center items-center h-90% w-95%`}
          >
            {score}
          </div>
        </div>
      </BubbleLoading>
      <div className="font-display text-18 font-medium text-blue text-center">
        {title}
      </div>
      <div className="flex flex-col justify-center items-center">
        {description &&
          description.map((item) => (
            <div className="w-80% font-display text-base text-dark-grey ">
              <b> &#8226;</b> {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryScore;
