import React, { useState, useEffect } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { BubbleLoading } from 'components/Loading';
import { Questions } from 'components/Questions';
import { colorLoader } from 'utils';
import { motion } from 'framer-motion';

function Questionare({
  onComplete,
  setFinalResponse,
  data,
  type = 'mcqs',
  data1,
  questionType,
  status,
  index,
  setIndex,
  setResponse,
  response,
  totalQuestions,
  currentCategory,
  setCurrentCategory,
}) {
  const [bubbleValue, setBubbleValue] = useState(20);
  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    if (data) {
      let category_id = data.payload[currentCategory].id;
      setResponse((prev) =>
        prev.map((row, index) =>
          index === currentCategory
            ? {
                ...prev[index],
                category_id: data.payload[currentCategory].id,
              }
            : row
        )
      );
    }
  }, [data, currentCategory]);

  const submit = () => {
    setCurrentCategory((prev) => prev + 1);
    setIndex(0);
    let copyResponse = [...response];
    const indexCheck = copyResponse.findIndex(
      (x) => x.category_id == data.payload[currentCategory + 1].id
    );
    if (indexCheck !== -1) {
      copyResponse[indexCheck] = {
        category_id: currentCategory + 1,
        answers: [],
      };
    } else {
      copyResponse.push({
        category_id: currentCategory + 1,
        answers: [],
      });
    }

    setResponse(copyResponse);
    setFinalResponse({
      exam_type_id: 1,
      data: response,
    });
    setBubbleValue((prev) => prev + 20);
  };

  return (
    <Container questionaire={true}>
      <div className="sm:hidden 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
        <BubbleLoading
          noOfBubbles="20"
          parentClass="parentdiv"
          childClass="child_div"
          childHeight="22"
          value={bubbleValue}
        >
          <div id="parentdiv">
            <div className="mr-10 centerText text-center flex flex-col justify-center h-100%">
              {data &&
                data.payload.map((item, i) => (
                  <div
                    className={
                      i == currentCategory
                        ? `text-${colorLoader(
                            bubbleValue
                          )} text-18 font-display font-medium`
                        : 'text-primary-grey font-display text-sm'
                    }
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        </BubbleLoading>
      </div>
      <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
        {
          <>
            <div className="mt-40 sub-heading text-blue text-center 2xl:mb-40 sm:pb-20">
              {(data && data.payload[0].name) || 'Environmental'}
            </div>
            <div className="2xl:flex 2xl:justify-center">
              <div className="2xl:w-50% content 2xl:text-center mx-30 pb-40">
                {(data && data.payload[0].description) ||
                  'Lorem Ipsum seckt venum istrum'}
              </div>
            </div>
          </>
        }
        {data1 && status == 200 && (
          <div className="flex justify-center 2xl:overflow-hidden relative h-217 sm: mb-40">
            <motion.div
              animate={{
                x: 0,
                y: animationValue,
                scale: 1,
                rotate: 0,
              }}
            >
              <Questions
                question={data1.payload[index]}
                prevQuestion={index > 0 && data1.payload[index]}
                type={type}
                finalResponse={
                  response[currentCategory] && response[currentCategory].answers
                }
                setAnimationValue={setAnimationValue}
                currentCategory={currentCategory}
                setFinalResponse={setResponse}
                index={index}
                setIndex={setIndex}
                totalQuestionLength={data1.payload.length}
              />
            </motion.div>
          </div>
        )}
      </div>
      <div className="mt-16  mb-53 flex flex-row justify-center items-center">
        {currentCategory > 0 && (
          <Button
            width="70"
            height="32"
            color="blue"
            value="Back"
            onClick={() => {
              setCurrentCategory((prev) => prev - 1);
              setBubbleValue((prev) => prev - 20);
            }}
          />
        )}
        {data1 &&
          response[currentCategory] &&
          response[currentCategory].answers.length == totalQuestions && (
            <div className="pl-60">
              <Button
                width="70"
                height="32"
                color="blue"
                value={
                  questionType === 'dna'
                    ? 'Submit'
                    : index + 1 == data1.payload.length &&
                      data.payload.length == currentCategory + 1
                    ? 'Get My Result'
                    : 'Next'
                }
                onClick={() => {
                  if (
                    index + 1 == data1.payload.length &&
                    data &&
                    data.payload.length == currentCategory + 1
                  ) {
                    onComplete();
                  } else if (index + 1 == data1.payload.length) {
                    onComplete(response);
                  } else {
                    submit();
                  }
                }}
              />
            </div>
          )}
      </div>
    </Container>
  );
}

export default Questionare;
