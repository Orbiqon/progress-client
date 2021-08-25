import { doGet } from './httpRequests';
import { BASE_URL } from 'configure';
import { END_POINTS } from 'utils';

const { GET_QUESTIONS, GET_CATEGORIES } = END_POINTS;

console.log('');
export const getCategoriesService = () => {
  return doGet(`${BASE_URL}${GET_CATEGORIES}`);
};

export const getQuestionsService = (data) => {
  return doGet(`${BASE_URL}${GET_QUESTIONS}${data}`);
};
