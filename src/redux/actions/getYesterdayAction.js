import axios from 'axios';
import { GET_YESTERDAY_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getYesterday = (base, newRates, yesterday, today) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${newRates}&history?start_at=${today}&end_at=${yesterday}`)
    .then(res => dispatch({
      type: GET_YESTERDAY_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};