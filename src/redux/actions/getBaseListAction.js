import axios from 'axios';
import { GET_BASE_LIST, GET_ERRORS, GET_YESTERDAY_RATE } from './types';

//import Loading action
import { setLoading } from './commonAction';

//Make request to exchangeratesapi.io for list base
export const getBaseList = (base, newRates) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}`)
    .then(res => dispatch({
      type: GET_BASE_LIST,
      payload: res.data
    }))
    .then(res => {
      let date = res.payload.date;
      let today = new Date(date).toISOString().slice(0, 10);
      let yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toISOString().slice(0, 10);
      axios
        .get(`https://api.exchangeratesapi.io/history?start_at=${yesterday}&end_at=${yesterday}&symbols=${newRates}&base=${base}`)
        .then(res => dispatch({
          type: GET_YESTERDAY_RATE,
          payload: res.data.rates
        }))
        .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};