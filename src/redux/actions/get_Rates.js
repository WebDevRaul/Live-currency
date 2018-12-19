import axios from 'axios';
import { GET_TODAY, GET_DATE, GET_YESTERDAY, GET_LAST_YEAR, GET_ERRORS, GET_EXCHANGE_TODAY, GET_EXCHANGE_YESTERDAY, GET_EXCHANGE_LAST_YEAR } from './types';

//import Loading action
import { setRateLoading } from './commonAction';
import isEmpty from '../../components/common/isEmpty';

export const get_Rates = (base, date, symbols) => dispatch => {
  dispatch(setRateLoading());
  axios
    // .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .get(`https://api.exchangeratesapi.io/history?start_at=2018-12-16&end_at=2018-12-16&symbols=${symbols}&base=${base}`)
    .then(res => {
      if (isEmpty(res.data.rates)) {
        console.log('is Empty' )
        //Change Date
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=GBP&base=EUR`)
          .then(res => dispatch({
            type: GET_DATE,
            payload: res.data.start_at
          }))
          .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          }))
          //Today
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
          .then(res => {
            if (isEmpty(res.data.rates)) {
              console.log('test')
            } else {
              dispatch({
                type: GET_TODAY,
                payload: Object.values(res.data.rates)[0]
              })
            }
          })
          .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          }))
        //Yesterday for Today
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.oneDayBeforeYesterday}&end_at=${date.oneDayBeforeYesterday}&symbols=${symbols}&base=${base}`)
          .then(res => dispatch({
            type: GET_YESTERDAY,
            payload: Object.values(res.data.rates)[0]
          }))
          .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          }))
      } else {
        dispatch({
          type: GET_TODAY,
          // payload: res.data.rates
          payload: Object.values(res.data.rates)[0]
        })
        console.log('not Empty', res.data)
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
        .then(res => {
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
        }))
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))

  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${date.lastYear}&end_at=${date.lastYear}&symbols=${symbols}&base=${base}`)
    .then(res => {
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
    }))
};