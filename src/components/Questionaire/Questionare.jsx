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
  const [bubbleValue, setBubbleValue] = useState(0);
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

    setCurrentCategory((prev) => prev + 1);
  };

  return (
    <Container questionaire={true}>
      <div className="sm:hidden tab:block max-w-lg m-auto px-100 lg:pt-60">
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
                        ? `text-black-grey text-18 font-display font-bold`
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
      <div className="hidden sm:block sm:pt-60 ">
        <BubbleLoading
          noOfBubbles="20"
          parentClass="maindiv"
          childClass="div2"
          childHeight="15"
          value={bubbleValue}
        >
          <div id="maindiv">
            <div className="mr-10 centerText text-center flex flex-col justify-center h-100%">
              {data &&
                data.payload.map((item, i) => (
                  <div
                    className={
                      i == currentCategory
                        ? `text-black-grey text-10 font-display font-bold bold`
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
      <div className="max-w-lg m-auto px-100 sm:px-20 sm:pt-20">
        {
          <>
            <div className="mt-40 sub-heading text-blue text-center mb-40 sm:mt-20 sm:mb-0 sm:pb-20">
              {(data && data.payload[currentCategory].name) || 'DNA'}
            </div>
            <div className="flex justify-center">
              <div className="w-50% content text-center mx-30 pb-40">
                {questionType === 'dna'
                  ? 'To help us prepare for your 20 minute consultation please take this quick questionnaire to give us an insight into your genetic code'
                  : (response[currentCategory] &&
                      response[currentCategory].answers.length ==
                        totalQuestions &&
                      data &&
                      data.payload[currentCategory].description) ||
                    ''}
              </div>
            </div>
          </>
        }
        {data1 && status == 200 && (
          <div className="flex justify-center overflow-hidden relative h-100% sm: mb-40">
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
                bubbleValue={setBubbleValue}
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
            width="129"
            height="32"
            color="blue"
            value={data && data.payload[currentCategory - 1].name}
            onClick={() => {
              setCurrentCategory((prev) => prev - 1);
            }}
          />
        )}
        {data1 &&
          response[currentCategory] &&
          response[currentCategory].answers.length == totalQuestions && (
            <div className="pl-60">
              <Button
                width="129"
                height="32"
                color="blue"
                value={
                  questionType === 'dna'
                    ? 'Submit'
                    : index + 1 == data1.payload.length &&
                      data.payload.length == currentCategory + 1
                    ? 'Get My Result'
                    : data && data.payload[currentCategory + 1].name
                }
                onClick={() => {
                  if (
                    index + 1 == data1.payload.length &&
                    data &&
                    data.payload.length == currentCategory + 1
                  ) {
                    onComplete();
                    setFinalResponse({
                      exam_type_id: 1,
                      data: response,
                    });
                  } else if (questionType == 'dna') {
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
