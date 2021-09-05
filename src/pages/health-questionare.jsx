import React, { useState, useEffect } from 'react';
import { InitDataCollect } from 'components/Modal';
import { useFetch, useLazyFetch } from 'hooks';
import { getCategoriesService, getQuestionsService } from 'api';
import { Questionare } from 'components/Questionaire';

function HealthQuestionare({ mcqs = true }) {
  const [finalResponse, setFinalResponse] = useState();
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [response, setResponse] = useState([{ category_id: '', answers: [] }]);
  const [complete, setComplete] = useState(false);
  const { data } = useFetch(getCategoriesService);
  const [getQuestions, { data: data1, status }] = useLazyFetch(
    getQuestionsService
  );

  const [currentCategory, setCurrentCategory] = useState(0);

  const submitResponse = {
    exam_type_id: 1,
    data: response,
  };

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

  return (
    <>
      {data && (
        <Questionare
          response={response}
          setResponse={setResponse}
          setFinalResponse={setFinalResponse}
          index={index}
          setIndex={setIndex}
          data={data && data}
          data1={data1 && data1}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          status={status}
          totalQuestions={totalQuestions}
          setTotalQuestions={setTotalQuestions}
          onComplete={() => setComplete(true)}
        />
      )}
      <InitDataCollect
        open={complete}
        setOpen={setComplete}
        submitResponse={finalResponse}
      />
    </>
  );
}

export default HealthQuestionare;
