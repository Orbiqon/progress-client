import React, { useState, useEffect } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { BubbleLoading } from 'components/Loading';
import { Questions } from 'components/Questions';
import Complete from './complete';
import InitDataCollect from './init-data-collect';
import { UseFetch, UseLazyFetch } from 'hooks';
import { getCategoriesService, getQuestionsService } from 'api';

function DnaQuestionare({ mcqs = true }) {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState([]);
  const [complete, setComplete] = useState(false);
  const { data } = UseFetch(getCategoriesService);
  const [getQuestions, { data: data1, status }] = UseLazyFetch(
    getQuestionsService
  );

  useEffect(() => {
    if (data1) {
      console.log(data1, 'hshs', status);
    }
  }, [data1]);

  return (
    <Container questionaire={true}>
      <div className="sm:hidden">
        <BubbleLoading
          noOfBubbles="20"
          parentClass="parentdiv"
          childClass="child_div"
          childHeight="22"
          value={35}
        >
          <div id="parentdiv">
            <div className="centerText text-center flex flex-col justify-center h-100%">
              {data &&
                data.payload.map((item) => (
                  <div
                    onClick={() =>
                      getQuestions({
                        variables: `?category_id=${item.id}&exam_type_id=1`,
                      })
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
          <>
            <Questions
              question={data1.payload[index + 1]}
              prevQuestion={data1.payload[index]}
              type="mcqs"
              finalresponse={response}
              setFinalResponse={setResponse}
              index={index}
              setIndex={setIndex}
              totalQuestionLength={data1.payload.length}
            />
            <div className="mt-16  mb-53 flex flex-col items-center">
              <Button
                width="70"
                height="32"
                color="blue"
                value={index + 1 == data1.payload.length ? 'Submit' : 'Back'}
                onClick={() => setComplete(true)}
              />
            </div>
          </>
        )}
      </div>
      <InitDataCollect open={complete} setOpen={setComplete} />
    </Container>
  );
}

export default DnaQuestionare;
