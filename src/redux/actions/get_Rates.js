import axios from 'axios';
import { GET_TODAY, GET_YESTERDAY, GET_LAST_YEAR, GET_ERRORS, GET_EXCHANGE_YESTERDAY, GET_EXCHANGE_LAST_YEAR, GET_FAKE_DATE } from './types';

//import Loading action
import { setRateLoading } from './commonAction';
import isEmpty from '../../components/common/isEmpty';

export const get_Rates = (base, date, symbols, fakeDate) => dispatch => {
  dispatch(setRateLoading());
  //GET_TODAY Rates
  axios
    // .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .get(`https://api.exchangeratesapi.io/history?start_at=2018-12-16&end_at=2018-12-16&symbols=${symbols}&base=${base}`)
    .then(res => {
      //If (1)
      if (isEmpty(res.data.rates)) {
      console.log('First Today Empty')
      
        //GET FAKE_DATE (1)
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=GBP&base=CAD`)
          .then(res =>
            dispatch({
              type: GET_FAKE_DATE,
              payload: res.data.start_at
            }))
          .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          }))
        //GET FAKE_TODAY Rates (1)
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
          .then(res => {

            //If (2)

            if (isEmpty(res.data.rates)) {
              console.log('Second Today Empty')
              
              //GET FAKE_DATE (2)
              axios
                .get(`https://api.exchangeratesapi.io/history?start_at=${date.dayBeforeYesterday}&end_at=${date.dayBeforeYesterday}&symbols=GBP&base=EUR`)
                .then(res => dispatch({
                  type: GET_FAKE_DATE,
                  payload: res.data.start_at
                }))
                .catch(err => dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
                }))
              //GET FAKE_TODAY Rates (2)
              axios
                .get(`https://api.exchangeratesapi.io/history?start_at=${date.dayBeforeYesterday}&end_at=${date.dayBeforeYesterday}&symbols=${symbols}&base=${base}`)
                .then(res => dispatch({
                  type: GET_TODAY,
                  payload: Object.values(res.data.rates)[0]
                }))
                .catch(err => dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
                }))
              //GET FAKE_YESTERDAY Rates (2)
              axios
                .get()
                .then()
                .catch()
              //GET FAKE_LAST_YEAR Rates (1)
              axios
                .get()
                .then()
                .catch()
          
            //Else (2)
              
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
        //GET FAKE_YESTERDAY Rates (1)
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.dayBeforeYesterday}&end_at=${date.dayBeforeYesterday}&symbols=${symbols}&base=${base}`)
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
          }))
        //GET FAKE_LAST_YEAR Rates (1)
        axios
          .get(`https://api.exchangeratesapi.io/history?start_at=${date.dayBeforeLastYear}&end_at=${date.dayBeforeLastYear}&symbols=${symbols}&base=${base}`)
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

      //Else (1)

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