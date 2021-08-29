import { doGet, doPost } from './httpRequests';
import { BASE_URL } from 'configure';
import { END_POINTS } from 'utils';

const { GET_QUESTIONS, GET_CATEGORIES, SIGN_IN, ATTEMPT } = END_POINTS;

export const getCategoriesService = () => {
  return doGet(`${BASE_URL}${GET_CATEGORIES}`);
};

export const getQuestionsService = (data) => {
  return doGet(`${BASE_URL}${GET_QUESTIONS}${data}`);
};

export const signInService = (data) => {
  return doPost(`${BASE_URL}${SIGN_IN}`, data);
};

export const attemptService = (data) => {
  return doPost(`${BASE_URL}${ATTEMPT}`, data);
};
