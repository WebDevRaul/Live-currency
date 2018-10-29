import axios from 'axios';
import { GET_NEW_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getNewRates = (base, newRates) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${newRates}`)
    .then(res => dispatch({
      type: GET_NEW_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};