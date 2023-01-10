import React, { useState, useEffect } from 'react';
import { Complete } from 'components/Modal';
import { useFetch, usePost } from 'hooks';
import { Questionnaire } from 'components/Questionnaire';
import { getQuestionsService, attemptService } from 'api';
import { useParams } from 'react-router-dom';

function DnaQuestionnaire() {
  const [finalResponse, setFinalResponse] = useState();
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [response, setResponse] = useState([{ category_id: '', answers: [] }]);
  const [complete, setComplete] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const { data, status } = useFetch(getQuestionsService, {
    variables: `?&exam_type_id=2`,
  });

  const [attempt, { data: dataAttempt, status: statusAttempt }] = usePost(
    attemptService
  );

  useEffect(() => {
    if (dataAttempt && dataAttempt.payload) {
      setComplete(true);
    } else if (dataAttempt && dataAttempt.error && dataAttempt.error.detail) {
      alert(dataAttempt.error.detail);
    }
  }, [dataAttempt]);

  useEffect(() => {
    if (data) {
      setTotalQuestions(data.payload.length);
    }
  }, [data]);

  let { id } = useParams();

  const onComplete = (response) => {
    attempt({ variables: { exam_type_id: 2, data: response, user_id: id } });
  };

  return (
    <>
      <Questionnaire
        response={response}
        setResponse={setResponse}
        setFinalResponse={setFinalResponse}
        index={index}
        setIndex={setIndex}
        type="correction"
        data1={data && data}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        status={status}
        questionType={'dna'}
        totalQuestions={totalQuestions}
        setTotalQuestions={setTotalQuestions}
        onComplete={onComplete}
      />
      <Complete open={complete} setOpen={setComplete} />
    </>
  );
}

export default DnaQuestionnaire;