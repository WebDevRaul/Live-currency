import axios from 'axios';
import { GET_TODAY, GET_YESTERDAY, GET_LAST_YEAR, GET_ERRORS, GET_EXCHANGE_YESTERDAY, GET_EXCHANGE_LAST_YEAR, GET_EXCHANGE_TODAY } from './types';

//import Loading action
import { setRateLoading } from './commonAction';
import isEmpty from '../../components/common/isEmpty';

export const get_Rates = (base, date, symbols) => dispatch => {
  dispatch(setRateLoading());
  //GET_TODAY Rates
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .then(res => {
      //To FIX Later
      if (isEmpty(res.data.rates)) {
        dispatch({
          GET_EXCHANGE_TODAY,
          payload: 'Exchange Rate Closed'
        })
      } else {
        dispatch({
          type: GET_TODAY,
          payload: res.data.rates
        })
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
  //GET_YESTERDAY Rates
  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
    .then(res => {
      //If_Empty YESTERDAY Rates
      if (isEmpty(res.data.rates)) {
        dispatch({
          type: GET_EXCHANGE_YESTERDAY,
          payload: 'Exchange Rate Closed'
        })
      } else {
        dispatch({
          type: GET_YESTERDAY,
          payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
        })
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
  //GET_LAST_YEAR Rates
  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${date.lastYear}&end_at=${date.lastYear}&symbols=${symbols}&base=${base}`)
    .then(res => {
      //If_EMPTY LAST_YEAR Rates
      if (isEmpty(res.data.rates)) {
        dispatch({
          type: GET_EXCHANGE_LAST_YEAR,
          payload: 'Exchange Rate Closed'
        })
      } else {
        dispatch({
          type: GET_LAST_YEAR,
          payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
        })
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};