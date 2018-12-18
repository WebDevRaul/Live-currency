import axios from 'axios';
import { GET_TODAY, GET_YESTERDAY, GET_LAST_YEAR, GET_ERRORS } from './types';

//import Loading action
import { setRateLoading } from './commonAction';
import isEmpty from '../../components/common/isEmpty';

export const get_Rates = (base, date, symbols) => dispatch => {
  dispatch(setRateLoading());
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
  // axios
  //   .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
  //   .then(res => dispatch({
  //     type: GET_YESTERDAY,
  //     payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
  //   }))
  //   .catch(err => dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   }))


    axios
      .get(`https://api.exchangeratesapi.io/history?start_at=${date.yesterday}&end_at=${date.yesterday}&symbols=${symbols}&base=${base}`)
    .then(res => {if (isEmpty(res.data.rates)) {
      dispatch({
        type: GET_YESTERDAY,
        payload: ''
      })
    } else {
      dispatch({
        type: GET_YESTERDAY,
        payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
      })
    }})



  // axios
  //   .get(`https://api.exchangeratesapi.io/history?start_at=${date.lastYear}&end_at=${date.lastYear}&symbols=${symbols}&base=${base}`)
  //   .then(res => dispatch({
  //     type: GET_LAST_YEAR,
  //     payload: Object.keys(res.data.rates).map(i => res.data.rates[i])[0]
  //   }))
  //   .catch(err => dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   }))
};