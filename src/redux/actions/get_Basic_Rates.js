import axios from 'axios';
import {GET_TODAY_RATES, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Basic_Rates = (base) => dispatch => {
  // dispatch(setLoading());
  
  // axios
  //   .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=EUR,CAD`)
  //   .then(res => dispatch({
  //     type: GET_TODAY_RATES,
  //     payload: res.data
  //   }))
  //   .catch(err => dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   }))
}