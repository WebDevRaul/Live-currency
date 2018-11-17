import { GET_LOADING, GET_ERRORS, GET_CLEAR_ERROR } from './types';


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

//Clear error(s)
export const get_Clear_Error = () => {
  return {
    type: GET_CLEAR_ERROR,
  };
};