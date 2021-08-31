import React, { useState, useEffect } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { BubbleLoading } from 'components/Loading';
import { Questions } from 'components/Questions';
import Complete from './complete';
import InitDataCollect from './init-data-collect';
import { useFetch, useLazyFetch } from 'hooks';
import { getCategoriesService, getQuestionsService } from 'api';
import { colorLoader } from 'utils';
import { motion } from 'framer-motion';

function DnaQuestionare({ mcqs = true }) {
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [response, setResponse] = useState([{ category_id: '', answers: [] }]);
  const [complete, setComplete] = useState(false);
  const { data } = useFetch(getCategoriesService);
  const [getQuestions, { data: data1, status }] = useLazyFetch(
    getQuestionsService
  );
  const [bubbleValue, setBubbleValue] = useState(20);
  const [animationValue, setAnimationValue] = useState(0);

  const [currentCategory, setCurrentCategory] = useState(0);

  const submitResponse = {
    exam_type_id: 1,
    data: response,
  };

  console.log('response', response);

  useEffect(() => {
    if (data) {
      getQuestions({
        variables: `?category_id=${data.payload[currentCategory].id}&exam_type_id=1`,
      });
      let category_id = data.payload[currentCategory].id;
      setResponse((prev) =>
        prev.map((row, index) =>
          index === currentCategory
            ? { ...prev[index], category_id: data.payload[currentCategory].id }
            : row
        )
      );
    }
  }, [data, currentCategory]);

  useEffect(() => {
    if (data1) {
      setTotalQuestions(data1.payload.length);
    }
  }, [data1]);

  const submit = () => {
    console.log('abc', submitResponse);
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
    setBubbleValue((prev) => prev + 20);
    // setComplete(true);
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
        {data && (
          <>
            <div className="mt-40 sub-heading text-blue text-center 2xl:mb-40 sm:pb-20">
              {data.payload[0].name}
            </div>
            <div className="2xl:flex 2xl:justify-center">
              <div className="2xl:w-50% content 2xl:text-center mx-30 pb-40">
                {data.payload[0].description}
              </div>
            </div>
          </>
        )}
        {data1 && status == 200 && (
          <div className="flex justify-center overflow-hidden relative h-217">
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
                type="mcqs"
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
                  index + 1 == data1.payload.length &&
                  data.payload.length == currentCategory + 1
                    ? 'Get My Result'
                    : 'Next'
                }
                onClick={() => {
                  if (
                    index + 1 == data1.payload.length &&
                    data.payload.length == currentCategory + 1
                  ) {
                    setComplete(true);
                  } else {
                    submit();
                  }
                }}
              />
            </div>
          )}
      </div>

      <InitDataCollect
        open={complete}
        setOpen={setComplete}
        submitResponse={submitResponse}
      />
    </Container>
  );
}

export default DnaQuestionare;
