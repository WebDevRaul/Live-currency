import axios from 'axios';
import { GET_BASIC_RATES, GET_ERRORS, GET_YESTERDAY_RATE, GET_LAST_YEAR } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getBasicRates = (base, symbols) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .then(res => dispatch({
      type: GET_BASIC_RATES,
      payload: res.data
    }))
    .then(res => {
      const date = res.payload.date;
      const today = new Date(date).toISOString().slice(0, 10);
      const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toISOString().slice(0, 10);
      axios
        .get(`https://api.exchangeratesapi.io/history?start_at=${yesterday}&end_at=${yesterday}&symbols=${symbols}&base=${base}`)
        .then(res => dispatch({
          type: GET_YESTERDAY_RATE,
          payload: res.data.rates
        }))
        .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
    })
    .then(
      axios
        .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
        .then(res => dispatch({
          type: GET_BASIC_RATES,
          payload: res.data
        }))
        .then(res => {
          const date = res.payload.date;
          const LastYear = new Date(date).getFullYear() - 1;
          const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(date)).toISOString().slice(0, 10);
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
        })
        .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
    )
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};