import { GET_LOADING, GET_ERRORS, GET_CLEAR_ERROR, GET_RATE_LOADING, GET_NEW_RATE_LOADING } from '../actions/types';


//Set loading state
export const setLoading = () => {
  return {
    type: GET_LOADING
  };
};

export const setRateLoading = () => {
  return {
    type: GET_RATE_LOADING
  };
};

export const setNewRateLoading = () => {
  return {
    type: GET_NEW_RATE_LOADING
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
    type: GET_CLEAR_ERROR
  };
};