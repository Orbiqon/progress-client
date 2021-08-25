import React, { useState } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { BubbleLoading } from 'components/Loading';
import Complete from './complete';
import InitDataCollect from './init-data-collect';

function DnaQuestionare({ mcqs = true }) {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  const questions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  ];
  return (
    <Container questionaire={true}>
      {/* <div className="sm:hidden">
          <BubbleLoading
            radius="108"
            noOfBubbles="20"
            parentDiv="parentdiv"
            childDiv="div1"
            value={14}
          >
            <div id="parentdiv"></div>
          </BubbleLoading>
        </div> */}
      <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
        <div className="mt-40 sub-heading text-blue text-center 2xl:mb-40 sm:pb-20">
          DNA Questionnaire
        </div>
        <div className="2xl:flex 2xl:justify-center">
          <div className="2xl:w-50% content 2xl:text-center mx-30 pb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies sem orci, ac pellentesque nunc viverra sed. Curabitur
            luctus ligula quam, ut accumsan lectus efficitur eu. Cras ut odio a
            neque imperdiet scelerisque
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            {index > 0 ? (
              <div
                className="content opacity-10 mx-20 mb-20"
                onClick={() => setIndex(index - 1)}
              >
                {`${index}.`} {questions[index]}
              </div>
            ) : null}

            <div className="mx-20 content font-bold 2xl:mb-20 sm:mb-10">
              {`${index + 1}.`} {questions[index]}
            </div>
            {mcqs ? (
              <div className="2xl:mb-40 mx-20 ">
                <div className="flex  mr-40 label text-dark-grey">
                  <input type="radio" className="mt-4 mr-10" />
                  <div>True</div>
                </div>
                <div
                  className="flex label text-dark-grey mt-9"
                  onClick={() => {
                    if (index + 1 < questions.length) {
                      setIndex(index + 1);
                    } else {
                    }
                  }}
                >
                  <input type="radio" className="mt-4 mr-10" />
                  <div>False</div>
                </div>
              </div>
            ) : (
              <div className="2xl:mb-40 mx-20 flex">
                <div className="flex  mr-40 label text-dark-grey">
                  <input type="radio" className="mt-4 mr-10" />
                  <div>True</div>
                </div>
                <div
                  className="flex label text-dark-grey"
                  onClick={() => {
                    if (index + 1 < questions.length) {
                      setIndex(index + 1);
                    } else {
                    }
                  }}
                >
                  <input type="radio" className="mt-4 mr-10" />
                  <div>False</div>
                </div>
              </div>
            )}
            <div className="mt-16 mx-20 mb-53">
              <Button
                width="70"
                height="32"
                color="blue"
                value={index + 1 == questions.length ? 'Submit' : 'Back'}
                onClick={() => setComplete(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <InitDataCollect open={complete} setOpen={setComplete} />
    </Container>
  );
}

export default DnaQuestionare;
