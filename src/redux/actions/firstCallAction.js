import axios from 'axios';
import { GET_FIRST_CALL, GET_ERRORS } from './types';

//common
import { setLoading } from './commonAction';

//Make request to fixer.io for first 5 base rates
export const firstCall  = calldata => dispatch => {
  dispatch(setLoading());
  axios
    .get('https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR,CAD,CHF,JPY')
    .then(res => dispatch({
      type: GET_FIRST_CALL,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err
    }));
};