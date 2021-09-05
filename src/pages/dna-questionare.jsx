import React, { useState, useEffect } from 'react';
import { Complete } from 'components/Modal';
import { useFetch } from 'hooks';
import { Questionare } from 'components/Questionaire';
import { getQuestionsService, attemptService } from 'api';
import { usePost } from 'hooks';
import { useParams } from 'react-router-dom';

function DnaQuestionare() {
  const [finalResponse, setFinalResponse] = useState();
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [response, setResponse] = useState([{ category_id: '', answers: [] }]);
  const [complete, setComplete] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);
  const { data, status } = useFetch(getQuestionsService, {
    variables: `?&exam_type_id=2`,
  });
  console.log(data, 'recent');

  const [attempt, { data: dataAttempt, status: statusAttempt }] = usePost(
    attemptService
  );

  useEffect(() => {
    if (dataAttempt) {
      console.log('attempts', dataAttempt);
      setComplete(true);
    }
  }, [dataAttempt]);

  useEffect(() => {
    if (data) {
      setTotalQuestions(data.payload.length);
    }
  }, [data]);

  let { id } = useParams();

  const onComplete = () => {
    attempt({ variables: id });
  };

  return (
    <>
      <Questionare
        response={response}
        setResponse={setResponse}
        setFinalResponse={setFinalResponse}
        index={index}
        setIndex={setIndex}
        // data={data && data}
        type="correction"
        data1={data && data}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        status={status}
        questionType={'dna'}
        totalQuestions={totalQuestions}
        setTotalQuestions={setTotalQuestions}
        onComplete={() => onComplete()}
      />
      {/* <div>Hello Orbiqon</div> */}
      <Complete open={complete} setOpen={setComplete} />
    </>
  );
}

export default DnaQuestionare;
