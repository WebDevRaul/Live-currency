import axios from 'axios';
import { GET_SELECT_RATE, GET_DATE, GET_BASE, GET_SYMBOLS, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Collect_Data = symbols => dispatch => {
  dispatch(setLoading());
  axios
    .get('https://api.exchangeratesapi.io/latest?base=GBP')
    .then(res => dispatch({
      type: GET_SELECT_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
  axios
    .get('https://api.exchangeratesapi.io/latest?base=GBP')
    .then(res => dispatch({
      type: GET_BASE,
      payload: res.data.base
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
  axios
    .get('https://api.exchangeratesapi.io/latest?base=GBP')
    .then(res => dispatch({
      type: GET_DATE,
      payload: res.data.date
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR,USD,CAD,CHF,AUD`)
    .then(res => dispatch({
      type: GET_SYMBOLS,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}