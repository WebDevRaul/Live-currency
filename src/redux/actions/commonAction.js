import { GET_LOADING, GET_ERRORS } from './types';


//Set loading state
export const setLoading = () => {
  return {
    type: GET_LOADING
  };
};

//Set custom error
export const setError = data => {
  return {
    type: GET_ERRORS,
    payload: data
  };
};