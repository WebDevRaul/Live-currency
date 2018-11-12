import axios from 'axios';
import { GET_NEW_RATE_TODAY, GET_ERRORS, GET_NEW_RATE_YESTERDAY, GET_NEW_RATE_LAST_YEAR } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_New_Rate = (base, date, newSymbols) => dispatch => {
  dispatch(setLoading());
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${newSymbols}`)
      .then(res => dispatch({
        type: GET_NEW_RATE_TODAY,
        payload: res.data.rates
      }))
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
    axios
      .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${newSymbols}&base=${base}`)
      .then(res => dispatch({
        type: GET_NEW_RATE_YESTERDAY,
        payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
      }))
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
    axios
      .get(`https://api.exchangeratesapi.io/history?start_at=${date.lastYear}&end_at=${date.lastYear}&symbols=${newSymbols}&base=${base}`)
      .then(res => dispatch({
        type: GET_NEW_RATE_LAST_YEAR,
        payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
      }))
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
};