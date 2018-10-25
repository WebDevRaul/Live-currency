import axios from 'axios';
import { GET_SUBMIT_RATE, GET_ERRORS } from './types';

//common
import { setLoading } from './commonAction';

//Make request to Fixer.io with specific rate
export const submitRate = rateData => dispatch => {
  dispatch(setLoading());
  axios
    .get(`http://data.fixer.io/api/latest?access_key=b0ab4945712b358052a8fc54d02e7b3d&base=EUR&symbols=${rateData}`)
    .then(res => dispatch({
      type: GET_SUBMIT_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err
    }))
};