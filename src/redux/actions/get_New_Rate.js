import axios from 'axios';
import { GET_NEW_RATE_TODAY, GET_ERRORS, GET_NEW_RATE_YESTERDAY, GET_NEW_RATE_LAST_YEAR, GET_EXCHANGE_NEW_TODAY, GET_EXCHANGE_NEW_YESTERDAY, GET_EXCHANGE_NEW_LAST_YEAR } from './types';

//import Loading action
import { setNewRateLoading } from './commonAction';

//import isEmpty from common
import isEmpty from '../../components/common/isEmpty';

export const get_New_Rate = (base, date, newSymbols) => dispatch => {
  dispatch(setNewRateLoading());
  console.log(date)
    //Get NewRateToday (1)
    axios
      // .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${newSymbols}`)
      .get(`https://api.exchangeratesapi.io/history?start_at=2018-12-15&end_at=2018-12-15&symbols=${newSymbols}&base=${base}`)
      .then(res => {
        
        //If (1)

        if (isEmpty(res.data.rates)) {
          //Get new NewRateToday (2)
          axios
            .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${newSymbols}&base=${base}`)
            .then(res => console.log(res.data))
            .catch(err => dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            }))
          //Get NewRateYesterday (2)
          axios
            .get(`https://api.exchangeratesapi.io/history?start_at=${date.dayBeforeYesterday}&end_at=${date.dayBeforeYesterday}&symbols=${newSymbols}&base=${base}`)
            .then(res => {
              if (isEmpty(res.data.rates)) {
                dispatch({
                  type: GET_EXCHANGE_NEW_YESTERDAY,
                  payload:'Exchange Rate Closed'
                })
              } else {
                dispatch({
                  type: GET_NEW_RATE_YESTERDAY,
                  payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
                })
              }
            })
            .catch(err => dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            }))

        //Else (1)

        } else {
          dispatch({
            type: GET_NEW_RATE_TODAY,
            payload: res.data.rates
          })
        }
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
    //Get NewRateYesterday (1)
    axios
      .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${newSymbols}&base=${base}`)
      .then(res => {
        if (isEmpty(res.data.rates)) {
          dispatch({
            type: GET_EXCHANGE_NEW_YESTERDAY,
            payload:'Exchange Rate Closed'
          })
        } else {
          dispatch({
            type: GET_NEW_RATE_YESTERDAY,
            payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
          })
        }
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
    //Get NewRateLastYear (1)
    axios
      .get(`https://api.exchangeratesapi.io/history?start_at=${date.lastYear}&end_at=${date.lastYear}&symbols=${newSymbols}&base=${base}`)
        .then(res => {
          if (isEmpty(res.data.rates)) {
            dispatch({
              type: GET_EXCHANGE_NEW_LAST_YEAR,
              payload: 'Exchange Rate Closed'
            })
          } else {
            dispatch({
              type: GET_NEW_RATE_LAST_YEAR,
              payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
            })
          }
        })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
};