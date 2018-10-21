import axios from 'axios';
import { GET_FIRST_CALL, GET_ERRORS, GET_LOADING } from './types';

//Make request to fixer.io for first 5 base rates
export const firstCall  = calldata => dispatch => {
  dispatch(setLoading());
  axios
    .get('http://data.fixer.io/api/latest?access_key=b0ab4945712b358052a8fc54d02e7b3d&base=EUR&symbols=USD,CAD')
    .then(res => dispatch({
      type: GET_FIRST_CALL,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err
    }));
};

//Set loading state
export const setLoading = () => {
  return {
    type: GET_LOADING
  };
};