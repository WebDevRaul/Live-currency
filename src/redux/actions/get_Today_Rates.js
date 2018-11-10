import axios from 'axios';
import { GET_TODAY, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Today_Rates = (base, symbols) => dispatch => {
  dispatch(setLoading());
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
};