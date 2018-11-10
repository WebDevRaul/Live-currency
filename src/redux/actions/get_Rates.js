import axios from 'axios';
import { GET_TODAY, GET_YESTERDAY, GET_LAST_YEAR, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Rates = (base, symbols, date) => dispatch => {
  dispatch(setLoading());
  const today = new Date(date).toISOString().slice(0,10);
  const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toISOString().slice(0, 10);
  const LastYear = new Date(date).getFullYear() - 1
  const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(date)).toISOString().slice(0, 10)
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .then(res => dispatch({
      type: GET_TODAY,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${yesterday}&end_at=${yesterday}&symbols=${symbols}&base=${base}`)
    .then(res => dispatch({
      type: GET_YESTERDAY,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${lastYear}&end_at=${lastYear}&symbols=${symbols}&base=${base}`)
    .then(res => dispatch({
      type: GET_LAST_YEAR,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};