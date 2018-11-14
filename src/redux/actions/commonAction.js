import { GET_LOADING, GET_ERRORS, GET_ARROW_TODAY, GET_ARROW_YESTERDAY } from './types';


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

//Set Arrow Data for today
export const get_Arrow_Today = data => dispatch => {
  dispatch({
    type: GET_ARROW_TODAY,
    payload: data
  });
};

//Set Arrow Data for yesterday
export const get_Arrow_Yesterday = data => dispatch => {
  dispatch({
    type: GET_ARROW_YESTERDAY,
    payload: data
  });
};