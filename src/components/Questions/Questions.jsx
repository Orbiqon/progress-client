import React, { useState, useEffect } from 'react';

function Questions({
  prevQuestion,
  question,
  type,
  index,
  setIndex,
  totalQuestionLength,
  finalResponse,
  bubbleValue,
  setFinalResponse,
  currentCategory,
  setAnimationValue,
}) {
  const { id, answers, highest_point, question_text,result_text } = question;

  const [answer, setAnswer] = useState();

  
  useEffect(() => {
    const questionCheck = finalResponse.findIndex((x) => x.question_id == id);

    if (questionCheck !== -1) {
      setAnswer(finalResponse[questionCheck].answer_text);
    } else {
      setAnswer();
    }
  }, [index]);

  const questionResponse = (item) => {
    const { answer_text, point } = item;
    setAnswer(item.answer_text);

    setTimeout(() => {
      setAnimationValue(-50);
      if (index + 1 < totalQuestionLength) {
        setIndex(index + 1);
      }
    }, 500);

    setTimeout(() => {
      setAnimationValue(0);
    }, 1000);

    const copyResponse = [...finalResponse];
    const indexCheck = copyResponse.findIndex((x) => x.question_id == id);
    const selectedAnswer = {
      answer_text: answer_text,
      question_id: id,
      points: point,
      total_points: highest_point,
      result_text:point==0||point==1?result_text:null
    };

    if (indexCheck !== -1) {
      copyResponse[indexCheck] = selectedAnswer;
    } else {
      bubbleValue((prev) => prev + 1);
      copyResponse.push(selectedAnswer);
    }

    setFinalResponse((prev) =>
      prev.map((row, index) =>
        index === currentCategory
          ? { ...prev[index], answers: copyResponse }
          : row
      )
    );
  };

  return (
    <div className="">
      {index > 0 ? (
        <div
          className="content opacity-10 mx-20 mb-20"
          onClick={() => {
            setTimeout(() => {
              setAnimationValue(50);
              setIndex(index - 1);
            }, 500);
            setTimeout(() => {
              setAnimationValue(0);
            }, 1000);
          }}
        >
          {`${index}.`}
          {prevQuestion.question_text}
        </div>
      ) : null}
      <div className="mx-20 content font-bold 2xl:mb-20 sm:mb-10 ">
        {`${index + 1}. `}
        {question_text}
      </div>
      {answers && (
        <div
          className={
            type == 'mcqs'
              ? '2xl:mb-40 mx-20 cursor-pointer '
              : 'flex 2xl:mb-40 mx-20 cursor-pointer '
          }
        >
          {answers.map((item, i) => (
            <div
              className="flex  mr-40 label text-dark-grey mb-10"
              onClick={() => {
                questionResponse(item);
              }}
            >
              <input
                name="radio"
                value={item.answer_text}
                checked={answer == item.answer_text}
                type="radio"
                className="mt-4 mr-10"
              />
              <div>{item.answer_text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Questions;
