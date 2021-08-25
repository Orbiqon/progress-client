import React from 'react';

function Questions({
  prevQuestion,
  question,
  type,
  index,
  setIndex,
  totalQuestionLength,
  finalResponse,
  setFinalResponse,
}) {
  const {
    id,
    answers,
    category_id,
    exam_type_id,
    highest_point,
    is_published,
    question_text,
  } = question;
  const { question_text: prevQuestionText } = prevQuestion;

  const questionResponse = () => {
    const copyResponse = [...finalResponse];
    let indexCheck = copyResponse.findIndex((x) => x.question_id == id);
    let finalArray = [];

    answers.forEach((item, i) => {
      finalArray.push({ answer: item.answer, response: `s` });
    });

    const selectedAnswer = {
      answer_text: 'lorem ipsum',
      question_id: id,
      points: 3,
      total_points: 1,
    };

    if (indexCheck !== -1) {
      copyResponse[indexCheck] = selectedAnswer;
    } else {
      copyResponse.push(selectedAnswer);
    }

    setFinalResponse(copyResponse);
  };
  return (
    <div className="flex flex-col items-center">
      <div>
        {index > 0 ? (
          <div
            className="content opacity-10 mx-20 mb-20"
            onClick={() => setIndex(index - 1)}
          >
            {`${index}.`}
            {prevQuestionText}
          </div>
        ) : null}
        <div className="mx-20 content font-bold 2xl:mb-20 sm:mb-10">
          {`${index + 1}. `}
          {question_text}
        </div>
        {type === 'mcqs' && answers && (
          <div className="2xl:mb-40 mx-20 cursor-pointer">
            {answers.map((item, i) => (
              <div
                className="flex  mr-40 label text-dark-grey mb-10"
                onClick={() => {
                  if (index + 1 < totalQuestionLength) {
                    setIndex(index + 1);
                  } else {
                  }
                }}
              >
                <input type="radio" className="mt-4 mr-10" />
                <div>{item.answer_text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
